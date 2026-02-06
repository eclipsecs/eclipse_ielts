import { createClient } from '@supabase/supabase-js';

// Environment variables for Supabase configuration
// These should be set in your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Validate that environment variables are set
if (!supabaseUrl) {
  console.warn('VITE_SUPABASE_URL is not set. Please configure your Supabase project.');
}

if (!supabaseAnonKey) {
  console.warn('VITE_SUPABASE_ANON_KEY is not set. Please configure your Supabase project.');
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
  },
});

// Export environment variable check helpers
export const isSupabaseConfigured = (): boolean => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};

export const getSupabaseUrl = (): string => supabaseUrl;
export const getSupabaseAnonKey = (): string => supabaseAnonKey;
