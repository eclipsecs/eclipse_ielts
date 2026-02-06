import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { supabase } from '@/src/lib/supabaseClient';
import { 
  isSupabaseAvailable, 
  getUserFromSupabase, 
  upsertUserToSupabase,
  getUserFromLocalStorage,
  saveUserToLocalStorage,
  getAllUsersFromLocalStorage,
  updateUserInLocalStorage,
  AppUser 
} from '@/src/services/databaseService';
import { UserCredentials, UserRegistrationData, AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (credentials: UserCredentials) => Promise<void>;
  register: (data: UserRegistrationData) => Promise<void>;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  syncUserToSupabase: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Local storage keys
const USERS_STORAGE_KEY = 'eclipse_ielts_users';
const CURRENT_USER_KEY = 'eclipse_ielts_current_user';

// Pre-defined user accounts (for backward compatibility)
const PREDEFINED_USERS: User[] = [
  {
    id: 'user-1',
    email: 'javokhirsielts@ecielts.com',
    displayName: 'Javokhir',
    createdAt: new Date(),
    lastLoginAt: new Date(),
    targetBandScore: 8.0,
    nativeLanguage: 'Uzbek',
    studyLevel: 'advanced',
    totalTestsCompleted: 15,
    averageScore: 7.5,
  },
];

/**
 * Convert AppUser (from database service) to User (from types)
 */
const mapAppUserToUser = (appUser: AppUser): User => ({
  id: appUser.id,
  email: appUser.email,
  displayName: appUser.displayName,
  photoURL: appUser.photoURL,
  createdAt: appUser.createdAt,
  lastLoginAt: appUser.lastLoginAt,
  targetBandScore: appUser.targetBandScore,
  nativeLanguage: appUser.nativeLanguage,
  studyLevel: appUser.studyLevel,
  totalTestsCompleted: appUser.totalTestsCompleted,
  averageScore: appUser.averageScore,
});

/**
 * Convert User (from types) to AppUser (for database service)
 */
const mapUserToAppUser = (user: User): AppUser => ({
  id: user.id,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
  createdAt: user.createdAt,
  lastLoginAt: user.lastLoginAt,
  targetBandScore: user.targetBandScore,
  nativeLanguage: user.nativeLanguage,
  studyLevel: user.studyLevel,
  totalTestsCompleted: user.totalTestsCompleted,
  averageScore: user.averageScore,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  // Initialize auth state
  useEffect(() => {
    initializeAuth();
  }, []);

  /**
   * Initialize authentication - check Supabase first, then localStorage
   */
  const initializeAuth = async () => {
    try {
      // Check if Supabase is available
      if (isSupabaseAvailable()) {
        // Check for existing Supabase session
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          // Try to get user profile from Supabase
          const dbUser = await getUserFromSupabase(session.user.id);
          
          if (dbUser) {
            const user = mapAppUserToUser(dbUser);
            setAuthState({
              user,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
            return;
          }
        }
      }

      // Fall back to localStorage for backward compatibility
      const storedUser = localStorage.getItem(CURRENT_USER_KEY);
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch {
          localStorage.removeItem(CURRENT_USER_KEY);
          setAuthState(prev => ({ ...prev, isLoading: false }));
        }
      } else {
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  };

  /**
   * Listen for Supabase auth state changes
   */
  useEffect(() => {
    if (!isSupabaseAvailable()) {
      return;
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          const dbUser = await getUserFromSupabase(session.user.id);
          if (dbUser) {
            const user = mapAppUserToUser(dbUser);
            setAuthState({
              user,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          }
        } else if (event === 'SIGNED_OUT') {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (credentials: UserCredentials): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Check predefined users first (backward compatibility)
      const predefinedUser = PREDEFINED_USERS.find(u => u.email === credentials.email);
      if (predefinedUser) {
        if (credentials.password === '1971@@##Java') {
          const updatedUser = {
            ...predefinedUser,
            lastLoginAt: new Date(),
          };
          localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));
          setAuthState({
            user: updatedUser,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return;
        } else {
          throw new Error('Invalid password');
        }
      }

      // Try Supabase authentication if available
      if (isSupabaseAvailable()) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        });

        if (error) {
          // Fall back to localStorage authentication
          await localStorageLogin(credentials);
        } else if (data.user) {
          // Get user profile from Supabase
          const dbUser = await getUserFromSupabase(data.user.id);
          
          if (dbUser) {
            const user = mapAppUserToUser(dbUser);
            setAuthState({
              user,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
            return;
          } else {
            throw new Error('User profile not found');
          }
        }
      } else {
        // Use localStorage authentication
        await localStorageLogin(credentials);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      throw error;
    }
  };

  /**
   * Local storage login (backward compatibility)
   */
  const localStorageLogin = async (credentials: UserCredentials): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

    const user = users.find(u => u.email === credentials.email);

    if (!user) {
      throw new Error('No account found with this email');
    }

    const updatedUser = {
      ...user,
      lastLoginAt: new Date(),
    };

    const updatedUsers = users.map(u => u.id === user.id ? updatedUser : u);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));

    setAuthState({
      user: updatedUser,
      isAuthenticated: true,
      isLoading: false,
      error: null,
    });
  };

  const register = async (data: UserRegistrationData): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Try Supabase registration if available
      if (isSupabaseAvailable()) {
        const { data: signUpData, error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            data: {
              full_name: data.displayName,
            },
          },
        });

        if (error) {
          throw error;
        }

        if (signUpData.user) {
          // Create user profile in Supabase
          const newUser: AppUser = {
            id: signUpData.user.id,
            email: data.email,
            displayName: data.displayName,
            createdAt: new Date(),
            lastLoginAt: new Date(),
            targetBandScore: data.targetBandScore,
            nativeLanguage: data.nativeLanguage,
            studyLevel: data.studyLevel,
            totalTestsCompleted: 0,
            averageScore: 0,
          };

          const success = await upsertUserToSupabase(newUser);
          
          if (!success) {
            console.warn('Failed to create user profile in Supabase, using local storage');
          }

          const user = mapAppUserToUser(newUser);
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return;
        }
      }

      // Fall back to localStorage registration
      await localStorageRegister(data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      throw error;
    }
  };

  /**
   * Local storage registration (backward compatibility)
   */
  const localStorageRegister = async (data: UserRegistrationData): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

    if (users.some(u => u.email === data.email)) {
      throw new Error('An account with this email already exists');
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email: data.email,
      displayName: data.displayName,
      createdAt: new Date(),
      lastLoginAt: new Date(),
      targetBandScore: data.targetBandScore,
      nativeLanguage: data.nativeLanguage,
      studyLevel: data.studyLevel,
      totalTestsCompleted: 0,
      averageScore: 0,
    };

    users.push(newUser);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

    setAuthState({
      user: newUser,
      isAuthenticated: true,
      isLoading: false,
      error: null,
    });
  };

  const logout = async () => {
    // Sign out from Supabase if available
    if (isSupabaseAvailable()) {
      await supabase.auth.signOut();
    }

    localStorage.removeItem(CURRENT_USER_KEY);
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };

  const updateUser = (updates: Partial<User>) => {
    if (!authState.user) return;

    const updatedUser = { ...authState.user, ...updates };
    
    // Update in Supabase if available
    if (isSupabaseAvailable()) {
      upsertUserToSupabase(mapUserToAppUser(updatedUser)).catch(err => {
        console.warn('Failed to update user in Supabase:', err);
      });
    }

    // Update in local storage
    updateUserInLocalStorage(mapUserToAppUser(updatedUser));

    setAuthState(prev => ({
      ...prev,
      user: updatedUser,
    }));
  };

  /**
   * Sync current user to Supabase (for migrating existing users)
   */
  const syncUserToSupabase = useCallback(async () => {
    if (!authState.user || !isSupabaseAvailable()) return;

    const appUser = mapUserToAppUser(authState.user);
    await upsertUserToSupabase(appUser);
  }, [authState.user]);

  return (
    <AuthContext.Provider value={{ ...authState, login, register, logout, updateUser, syncUserToSupabase }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
