import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

// Local storage keys for backward compatibility
const USERS_STORAGE_KEY = 'eclipse_ielts_users';
const CURRENT_USER_KEY = 'eclipse_ielts_current_user';

// User type from the application (for backward compatibility)
export interface AppUser {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: Date;
  lastLoginAt: Date;
  targetBandScore: number;
  nativeLanguage: string;
  studyLevel: 'beginner' | 'intermediate' | 'advanced';
  totalTestsCompleted: number;
  averageScore: number;
}

// Type definitions for Supabase tables
export interface DatabaseUser {
  id: string;
  email: string;
  full_name: string | null;
  target_band_score: number | null;
  native_language: string | null;
  study_goal: string | null;
  preferred_test_format: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface TestResult {
  id: string;
  user_id: string;
  test_type: string;
  test_date: string;
  listening_score: number | null;
  reading_score: number | null;
  writing_score: number | null;
  speaking_score: number | null;
  overall_score: number | null;
  band_score: number | null;
  correct_answers: number | null;
  total_questions: number | null;
  time_taken_minutes: number | null;
  notes: string | null;
  created_at: string;
}

export interface StudyProgress {
  id: string;
  user_id: string;
  skill_area: string;
  subcategory: string | null;
  lessons_completed: number;
  total_lessons: number;
  practice_tests_completed: number;
  average_score: number | null;
  time_spent_minutes: number;
  last_activity_date: string | null;
  created_at: string;
}

// =====================================================
// USER SERVICE
// =====================================================

/**
 * Check if Supabase is configured and available
 */
export const isSupabaseAvailable = (): boolean => {
  return isSupabaseConfigured();
};

/**
 * Convert Supabase user to local AppUser format
 */
export const mapSupabaseUserToUser = (dbUser: DatabaseUser): AppUser => {
  return {
    id: dbUser.id,
    email: dbUser.email,
    displayName: dbUser.full_name || '',
    photoURL: dbUser.avatar_url || undefined,
    createdAt: new Date(dbUser.created_at),
    lastLoginAt: new Date(dbUser.updated_at),
    targetBandScore: dbUser.target_band_score || 7.0,
    nativeLanguage: dbUser.native_language || '',
    studyLevel: (dbUser.study_goal as 'beginner' | 'intermediate' | 'advanced') || 'intermediate',
    totalTestsCompleted: 0,
    averageScore: 0,
  };
};

/**
 * Get user from Supabase database
 */
export const getUserFromSupabase = async (userId: string): Promise<AppUser | null> => {
  if (!isSupabaseAvailable()) {
    return null;
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error || !data) {
    console.warn('Failed to fetch user from Supabase:', error?.message);
    return null;
  }

  return mapSupabaseUserToUser(data as DatabaseUser);
};

/**
 * Create or update user in Supabase
 */
export const upsertUserToSupabase = async (user: AppUser): Promise<boolean> => {
  if (!isSupabaseAvailable()) {
    return false;
  }

  const { error } = await supabase.from('users').upsert({
    id: user.id,
    email: user.email,
    full_name: user.displayName,
    target_band_score: user.targetBandScore,
    native_language: user.nativeLanguage,
    avatar_url: user.photoURL,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    console.error('Failed to upsert user to Supabase:', error.message);
    return false;
  }

  return true;
};

/**
 * Get user from local storage (backward compatibility)
 */
export const getUserFromLocalStorage = (): AppUser | null => {
  const storedUser = localStorage.getItem(CURRENT_USER_KEY);
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);
      return {
        ...user,
        createdAt: new Date(user.createdAt),
        lastLoginAt: new Date(user.lastLoginAt),
      };
    } catch {
      localStorage.removeItem(CURRENT_USER_KEY);
      return null;
    }
  }
  return null;
};

/**
 * Get all users from local storage
 */
export const getAllUsersFromLocalStorage = (): AppUser[] => {
  const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
  if (storedUsers) {
    try {
      return JSON.parse(storedUsers);
    } catch {
      return [];
    }
  }
  return [];
};

/**
 * Save user to local storage
 */
export const saveUserToLocalStorage = (user: AppUser): void => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

/**
 * Update user in local storage
 */
export const updateUserInLocalStorage = (updatedUser: AppUser): void => {
  const users = getAllUsersFromLocalStorage();
  const updatedUsers = users.map(u => u.id === updatedUser.id ? updatedUser : u);
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updatedUsers));
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));
};

// =====================================================
// TEST RESULTS SERVICE
// =====================================================

/**
 * Get user's test results from Supabase
 */
export const getTestResultsFromSupabase = async (userId: string): Promise<TestResult[]> => {
  if (!isSupabaseAvailable()) {
    return [];
  }

  const { data, error } = await supabase
    .from('test_results')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.warn('Failed to fetch test results from Supabase:', error.message);
    return [];
  }

  return data || [];
};

/**
 * Save test result to Supabase
 */
export const saveTestResultToSupabase = async (
  userId: string,
  result: Partial<TestResult>
): Promise<TestResult | null> => {
  if (!isSupabaseAvailable()) {
    return null;
  }

  const { data, error } = await supabase
    .from('test_results')
    .insert({
      user_id: userId,
      ...result,
      test_date: new Date().toISOString().split('T')[0],
    })
    .select()
    .single();

  if (error) {
    console.error('Failed to save test result to Supabase:', error.message);
    return null;
  }

  return data;
};

// =====================================================
// STUDY PROGRESS SERVICE
// =====================================================

/**
 * Get user's study progress from Supabase
 */
export const getStudyProgressFromSupabase = async (userId: string): Promise<StudyProgress[]> => {
  if (!isSupabaseAvailable()) {
    return [];
  }

  const { data, error } = await supabase
    .from('study_progress')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    console.warn('Failed to fetch study progress from Supabase:', error.message);
    return [];
  }

  return data || [];
};

/**
 * Update study progress in Supabase
 */
export const updateStudyProgressInSupabase = async (
  userId: string,
  skillArea: string,
  updates: Partial<StudyProgress>
): Promise<boolean> => {
  if (!isSupabaseAvailable()) {
    return false;
  }

  const { error } = await supabase
    .from('study_progress')
    .upsert({
      user_id: userId,
      skill_area: skillArea,
      ...updates,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    console.error('Failed to update study progress in Supabase:', error.message);
    return false;
  }

  return true;
};

// =====================================================
// SYNC SERVICE
// =====================================================

/**
 * Sync local user data to Supabase
 * Used for migrating existing users to Supabase
 */
export const syncUserToSupabase = async (user: AppUser): Promise<boolean> => {
  if (!isSupabaseAvailable()) {
    return false;
  }

  // First check if user exists in Supabase
  const existingUser = await getUserFromSupabase(user.id);
  
  if (existingUser) {
    // Update existing user
    return upsertUserToSupabase(user);
  } else {
    // Create new user
    return upsertUserToSupabase(user);
  }
};

/**
 * Sync all local users to Supabase
 * Call this during app initialization to migrate existing users
 */
export const syncAllUsersToSupabase = async (): Promise<{ success: number; failed: number }> => {
  const users = getAllUsersFromLocalStorage();
  let success = 0;
  let failed = 0;

  for (const user of users) {
    const result = await syncUserToSupabase(user);
    if (result) {
      success++;
    } else {
      failed++;
    }
  }

  return { success, failed };
};
