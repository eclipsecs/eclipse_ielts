-- Eclipse IELTS Database Schema
-- Supabase Free Tier Compatible
-- Run this SQL in your Supabase project's SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- USERS TABLE
-- Extended user profile data linked to Supabase Auth
-- =====================================================
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  target_band_score DECIMAL(2, 1) DEFAULT 7.0,
  native_language VARCHAR(10),
  study_goal VARCHAR(50) DEFAULT 'general',
  preferred_test_format VARCHAR(20) DEFAULT 'academic',
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create policies for users
CREATE POLICY "Users can view their own data" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own data" ON public.users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own data" ON public.users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- =====================================================
-- TEST RESULTS TABLE
-- Stores IELTS test results for users
-- =====================================================
CREATE TABLE IF NOT EXISTS public.test_results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  test_type VARCHAR(20) NOT NULL CHECK (test_type IN ('listening', 'reading', 'writing', 'speaking', 'overall')),
  test_date DATE DEFAULT CURRENT_DATE,
  listening_score DECIMAL(4, 1),
  reading_score DECIMAL(4, 1),
  writing_score DECIMAL(4, 1),
  speaking_score DECIMAL(4, 1),
  overall_score DECIMAL(4, 1),
  band_score DECIMAL(4, 1),
  correct_answers INTEGER,
  total_questions INTEGER,
  time_taken_minutes INTEGER,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.test_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own test results" ON public.test_results
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own test results" ON public.test_results
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own test results" ON public.test_results
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own test results" ON public.test_results
  FOR DELETE USING (auth.uid() = user_id);

-- =====================================================
-- STUDY PROGRESS TABLE
-- Tracks user progress across different skill areas
-- =====================================================
CREATE TABLE IF NOT EXISTS public.study_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  skill_area VARCHAR(30) NOT NULL CHECK (skill_area IN ('vocabulary', 'grammar', 'reading', 'listening', 'writing', 'speaking')),
  subcategory VARCHAR(50),
  lessons_completed INTEGER DEFAULT 0,
  total_lessons INTEGER DEFAULT 0,
  practice_tests_completed INTEGER DEFAULT 0,
  average_score DECIMAL(4, 1),
  time_spent_minutes INTEGER DEFAULT 0,
  last_activity_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, skill_area, subcategory)
);

ALTER TABLE public.study_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own study progress" ON public.study_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own study progress" ON public.study_progress
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own study progress" ON public.study_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- PRACTICE SESSIONS TABLE
-- Tracks individual practice sessions
-- =====================================================
CREATE TABLE IF NOT EXISTS public.practice_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  session_type VARCHAR(30) NOT NULL CHECK (session_type IN ('listening', 'reading', 'writing', 'speaking', 'vocabulary', 'grammar', 'full_test')),
  content_id VARCHAR(100),
  content_title VARCHAR(255),
  duration_minutes INTEGER,
  questions_attempted INTEGER DEFAULT 0,
  questions_correct INTEGER DEFAULT 0,
  score DECIMAL(4, 1),
  completed BOOLEAN DEFAULT FALSE,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.practice_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own practice sessions" ON public.practice_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own practice sessions" ON public.practice_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own practice sessions" ON public.practice_sessions
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own practice sessions" ON public.practice_sessions
  FOR DELETE USING (auth.uid() = user_id);

-- =====================================================
-- FAVORITES TABLE
-- User's saved/pinned content
-- =====================================================
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  content_type VARCHAR(30) NOT NULL CHECK (content_type IN ('article', 'practice', 'resource', 'roadmap', 'writing_prompt', 'speaking_topic')),
  content_id VARCHAR(100) NOT NULL,
  content_title VARCHAR(255),
  content_url TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, content_type, content_id)
);

ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own favorites" ON public.favorites
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own favorites" ON public.favorites
  FOR ALL USING (auth.uid() = user_id);

-- =====================================================
-- STUDY GOALS TABLE
-- User's learning goals and targets
-- =====================================================
CREATE TABLE IF NOT EXISTS public.study_goals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  goal_type VARCHAR(30) NOT NULL CHECK (goal_type IN ('daily', 'weekly', 'monthly', 'custom')),
  target_skill VARCHAR(30) CHECK (target_skill IN ('overall', 'listening', 'reading', 'writing', 'speaking', 'vocabulary', 'grammar')),
  target_value DECIMAL(4, 1),
  current_value DECIMAL(4, 1) DEFAULT 0,
  deadline_date DATE,
  is_completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.study_goals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own study goals" ON public.study_goals
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own study goals" ON public.study_goals
  FOR ALL USING (auth.uid() = user_id);

-- =====================================================
-- FUNCTIONS & TRIGGERS
-- =====================================================

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, avatar_url)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'avatar_url');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create user profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at triggers
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_test_results_updated_at
  BEFORE UPDATE ON public.test_results
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_study_progress_updated_at
  BEFORE UPDATE ON public.study_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_practice_sessions_updated_at
  BEFORE UPDATE ON public.practice_sessions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_study_goals_updated_at
  BEFORE UPDATE ON public.study_goals
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_test_results_user_id ON public.test_results(user_id);
CREATE INDEX IF NOT EXISTS idx_test_results_test_type ON public.test_results(test_type);
CREATE INDEX IF NOT EXISTS idx_test_results_created_at ON public.test_results(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_study_progress_user_id ON public.study_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_practice_sessions_user_id ON public.practice_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_practice_sessions_session_type ON public.practice_sessions(session_type);
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.favorites(user_id);

-- =====================================================
-- STORAGE BUCKETS (Optional)
-- =====================================================
-- Uncomment if you need file storage:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('avatars', 'avatars', true);
-- CREATE POLICY "Avatar uploads are authenticated" ON storage.objects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
-- CREATE POLICY "Avatar downloads are public" ON storage.objects FOR SELECT USING (bucket_id = 'avatars');
