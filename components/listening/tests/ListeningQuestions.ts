import { Question, QuestionType } from '../../../types';

// Form-based structure for Test 1
export const LISTENING_QUESTIONS: Record<string, Question[]> = {
  'test-1': [
    // Form Header Info (not questions, just for rendering)
    { id: 0, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'HEADER', correctAnswer: '', group: 'header' },
    
    // Personal Details Section
    { id: 1, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Surname', correctAnswer: '', placeholder: '', group: 'Personal Details' },
    { id: 2, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Date of birth', correctAnswer: '', placeholder: '', group: 'Personal Details' },
    
    // Temporary Work Requirements Section  
    { id: 3, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Period when work wanted from June to', correctAnswer: '', placeholder: '', group: 'Temporary Work Requirements' },
    { id: 4, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Where work wanted', correctAnswer: '', placeholder: '', group: 'Temporary Work Requirements' },
    { id: 5, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Or', correctAnswer: '', placeholder: '', group: 'Temporary Work Requirements' },
    { id: 6, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Type of work wanted: 1st priority', correctAnswer: '', placeholder: '', group: 'Temporary Work Requirements' },
    { id: 7, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Type of work wanted: 2nd priority', correctAnswer: '', placeholder: '', group: 'Temporary Work Requirements' },
    
    // Questions 8-10 (Select 3)
    { id: 8, section: 'SECTION 1', group: 'Questions 8-10', type: QuestionType.MULTIPLE_CHOICE_MULTI, text: 'Which of these has Lily got? (Select THREE)', options: [
      {label: 'A good knowledge of a foreign language', value: 'A'},
      {label: 'B a driving license', value: 'B'},
      {label: 'C the ability to deal with the public', value: 'C'},
      {label: 'D a sports coaching qualification', value: 'D'},
      {label: 'E good computer skills', value: 'E'},
      {label: 'F experience of working with young children', value: 'F'},
      {label: 'G the ability to play a musical instrument', value: 'G'}
    ], correctAnswer: '' },
    
    // SECTION 2 - Questions 11-15 (Matching)
    { id: 11, section: 'SECTION 2', group: 'Questions 11-15', type: QuestionType.MATCHING, text: 'Football pitches - Choose from A-G', options: [
      {label: 'A deposit is required', value: 'A'},
      {label: 'B only available at weekends', value: 'B'},
      {label: 'C can be reserved online', value: 'C'},
      {label: 'D currently under repair', value: 'D'},
      {label: 'E recently extended', value: 'E'},
      {label: 'F temporarily not available', value: 'F'},
      {label: 'G no booking is necessary', value: 'G'}
    ], correctAnswer: '' },
    { id: 12, section: 'SECTION 2', group: 'Questions 11-15', type: QuestionType.MATCHING, text: 'Library - Choose from A-G', options: [
      {label: 'A deposit is required', value: 'A'},
      {label: 'B only available at weekends', value: 'B'},
      {label: 'C can be reserved online', value: 'C'},
      {label: 'D currently under repair', value: 'D'},
      {label: 'E recently extended', value: 'E'},
      {label: 'F temporarily not available', value: 'F'},
      {label: 'G no booking is necessary', value: 'G'}
    ], correctAnswer: '' },
    { id: 13, section: 'SECTION 2', group: 'Questions 11-15', type: QuestionType.MATCHING, text: 'Tennis courts - Choose from A-G', options: [
      {label: 'A deposit is required', value: 'A'},
      {label: 'B only available at weekends', value: 'B'},
      {label: 'C can be reserved online', value: 'C'},
      {label: 'D currently under repair', value: 'D'},
      {label: 'E recently extended', value: 'E'},
      {label: 'F temporarily not available', value: 'F'},
      {label: 'G no booking is necessary', value: 'G'}
    ], correctAnswer: '' },
    { id: 14, section: 'SECTION 2', group: 'Questions 11-15', type: QuestionType.MATCHING, text: 'Large hall - Choose from A-G', options: [
      {label: 'A deposit is required', value: 'A'},
      {label: 'B only available at weekends', value: 'B'},
      {label: 'C can be reserved online', value: 'C'},
      {label: 'D currently under repair', value: 'D'},
      {label: 'E recently extended', value: 'E'},
      {label: 'F temporarily not available', value: 'F'},
      {label: 'G no booking is necessary', value: 'G'}
    ], correctAnswer: '' },
    { id: 15, section: 'SECTION 2', group: 'Questions 11-15', type: QuestionType.MATCHING, text: 'Computer lab - Choose from A-G', options: [
      {label: 'A deposit is required', value: 'A'},
      {label: 'B only available at weekends', value: 'B'},
      {label: 'C can be reserved online', value: 'C'},
      {label: 'D currently under repair', value: 'D'},
      {label: 'E recently extended', value: 'E'},
      {label: 'F temporarily not available', value: 'F'},
      {label: 'G no booking is necessary', value: 'G'}
    ], correctAnswer: '' }
  ]
};
