export enum QuestionType {
  MATCHING_ENDINGS = 'MATCHING_ENDINGS',
  MATCHING_PEOPLE = 'MATCHING_PEOPLE',
  MATCHING_BOX = 'MATCHING_BOX',
  TFNG = 'TFNG',
  FILL_GAPS = 'FILL_GAPS',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  MULTIPLE_CHOICE_MULTI = 'MULTIPLE_CHOICE_MULTI',
  MATCHING = 'MATCHING',
  CLASSIFICATION = 'CLASSIFICATION',
  PARAGRAPH_MATCH = 'PARAGRAPH_MATCH'
}

export type Theme = 'light' | 'dark';
export type AppView = 'home' | 'test' | 'roadmap' | 'passage1' | 'passage2' | 'passage3' | 'article' | 'resources' | 'study-materials' | 'podcasts' | 'websites' | 'books' | 'resource-articles' | 'login' | 'register' | 'profile';
export type TestCategory = 'reading' | 'listening' | 'writing' | 'full' | 'article';

// User types
export interface User {
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

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserRegistrationData {
  email: string;
  password: string;
  displayName: string;
  targetBandScore: number;
  nativeLanguage: string;
  studyLevel: 'beginner' | 'intermediate' | 'advanced';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options?: { label: string; value: string }[];
  correctAnswer: string | string[];
  explanation?: string;
  answerLocation?: string;
  synonyms?: string[];
  placeholder?: string;
  group?: string;
  section?: string;
  noteText?: string;
  blankText?: string;
  heading?: string;
}

export interface TestState {
  isStarted: boolean;
  isFinished: boolean;
  timeRemaining: number;
  initialTime: number;
  userAnswers: Record<number, string | string[]>;
  theme: Theme;
}

export interface TestMeta {
  id: string;
  title: string;
  category: TestCategory;
  passageNumber?: number;
  sectionNumber?: number;
  taskNumber?: number;
  duration: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isAvailable: boolean;
  imageUrl?: string;
  audioUrl?: string;
}

export interface ReadingPassageData {
  title: string;
  subtitle: string;
  content: string[];
  questions: Question[];
}

export interface VocabularyItem {
  id: number;
  word: string;
  definition: string;
  partOfSpeech: string;
  example: string;
  synonyms?: string[];
  antonyms?: string[];
}

export interface ArticlePracticeQuestion {
  id: number;
  type: 'multiple_choice' | 'true_false' | 'fill_gap' | 'short_answer' | 'summary';
  text: string;
  options?: { label: string; value: string }[];
  correctAnswer: string | string[];
  explanation?: string;
  points: number;
}

export interface ArticleData {
  id: string;
  title: string;
  author: string;
  source: string;
  date: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  content: string;
  vocabulary: VocabularyItem[];
  practice: ArticlePracticeQuestion[];
  readingTime: number;
}
