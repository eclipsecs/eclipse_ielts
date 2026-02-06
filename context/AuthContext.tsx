import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserCredentials, UserRegistrationData, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (credentials: UserCredentials) => Promise<void>;
  register: (data: UserRegistrationData) => Promise<void>;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users storage key
const USERS_STORAGE_KEY = 'eclipse_ielts_users';
const CURRENT_USER_KEY = 'eclipse_ielts_current_user';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check for existing session
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
  }, []);

  const login = async (credentials: UserCredentials): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Get stored users
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

      // Find user with matching credentials
      const user = users.find(u => u.email === credentials.email);

      if (!user) {
        throw new Error('No account found with this email');
      }

      // For demo purposes, accept any password for existing users
      // In production, you would hash and compare passwords
      const updatedUser = {
        ...user,
        lastLoginAt: new Date(),
      };

      // Update stored user
      const updatedUsers = users.map(u => u.id === user.id ? updatedUser : u);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));

      // Set current user session
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));

      setAuthState({
        user: updatedUser,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
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

  const register = async (data: UserRegistrationData): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Get stored users
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

      // Check if email already exists
      if (users.some(u => u.email === data.email)) {
        throw new Error('An account with this email already exists');
      }

      // Create new user
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

      // Save new user
      users.push(newUser);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

      // Set current user session
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
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

  const logout = () => {
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
    
    // Update in users list
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    if (storedUsers) {
      const users: User[] = JSON.parse(storedUsers);
      const updatedUsers = users.map(u => u.id === updatedUser.id ? updatedUser : u);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
    }

    // Update current session
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));

    setAuthState(prev => ({
      ...prev,
      user: updatedUser,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, register, logout, updateUser }}>
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
