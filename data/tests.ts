
import { TestMeta } from '../types';

export const AVAILABLE_TESTS: TestMeta[] = [
  { id: 'r-p1-underground', title: 'Answers Underground', category: 'reading', passageNumber: 1, duration: 20, difficulty: 'Medium', isAvailable: true },
  { id: 'r-p1', title: 'Ambergris: What is it?', category: 'reading', passageNumber: 1, duration: 20, difficulty: 'Easy', isAvailable: true },
  { id: 'r-cultural-tourist', title: 'An early cultural tourist', category: 'reading', passageNumber: 1, duration: 20, difficulty: 'Medium', isAvailable: true },
  { id: 'r-ascension', title: 'The Ascension Island experiment', category: 'reading', passageNumber: 1, duration: 20, difficulty: 'Medium', isAvailable: true },
  { id: 'r-beatrix-potter', title: 'The life of Beatrix Potter', category: 'reading', passageNumber: 1, duration: 20, difficulty: 'Medium', isAvailable: true },
  { id: 'r-bondi', title: 'Bondi: Australia\'s most famous beach', category: 'reading', passageNumber: 1, duration: 20, difficulty: 'Medium', isAvailable: true },
  { id: 'r-prosopagnosia', title: 'Prosopagnosia: Face Blindness', category: 'reading', passageNumber: 1, duration: 20, difficulty: 'Medium', isAvailable: true },
  { id: 'r-triumph-city', title: 'Triumph of the City: Book Review', category: 'reading', passageNumber: 1, duration: 20, difficulty: 'Medium', isAvailable: true },
  // Passage 2
  { id: 'r-p2-computer-games', title: 'Computer Games: Impact on Learning', category: 'reading', passageNumber: 2, duration: 20, difficulty: 'Medium', isAvailable: true },
  { id: 'r-p2-chocolate', title: 'Chocolate for the Masses', category: 'reading', passageNumber: 2, duration: 20, difficulty: 'Easy', isAvailable: true },
  // Passage 3
  { id: 'r-p3', title: 'The Megafires of California', category: 'reading', passageNumber: 3, duration: 20, difficulty: 'Hard', isAvailable: true },
  { id: 'r-p3-feeding-world', title: 'Feeding the World: Food Security', category: 'reading', passageNumber: 3, duration: 20, difficulty: 'Medium', isAvailable: true },
  { id: 'r-p3-antarctica', title: 'Antarctic Exploration', category: 'reading', passageNumber: 3, duration: 20, difficulty: 'Medium', isAvailable: true },
  { 
    id: 'l-full-1', 
    title: 'Academic Listening Mock 01', 
    category: 'listening', 
    sectionNumber: 1, 
    duration: 30, 
    difficulty: 'Medium', 
    isAvailable: true, 
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' 
  },
  { 
    id: 'w-t1-3', 
    title: 'Process: Electricity from Coal', 
    category: 'writing', 
    taskNumber: 1, 
    duration: 20, 
    difficulty: 'Medium', 
    isAvailable: true 
  },
  { id: 'full-1', title: 'Academic Mock Test #01', category: 'full', duration: 160, difficulty: 'Medium', isAvailable: false },
];
