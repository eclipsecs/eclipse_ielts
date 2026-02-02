
export interface StudyMaterial {
  id: string;
  title: string;
  description: string;
  type: 'grammar' | 'vocabulary' | 'tips' | 'practice';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  content?: string;
  link?: string;
}

export interface Podcast {
  id: string;
  title: string;
  description: string;
  host: string;
  duration: string;
  url: string;
  category: 'listening' | 'speaking' | 'tips';
}

export interface Website {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'official' | 'practice' | 'tools';
}

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  cover?: string;
  amazonUrl?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
}

export interface ResourceArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'tips' | 'strategies' | 'general';
  readTime: number;
}

// Study Materials Data
export const STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'grammar-1',
    title: 'English Grammar Basics for IELTS',
    description: 'Essential grammar rules and structures needed for IELTS',
    type: 'grammar',
    difficulty: 'Beginner',
    content: `
## Essential Grammar for IELTS

### 1. Tenses
Understanding tenses is crucial for IELTS Writing and Speaking.

**Present Simple**
- Habits and routines
- General truths
- Permanent situations

**Present Perfect**
- Experiences and achievements
- Actions with present relevance
- Unfinished time periods

**Past Simple**
- Completed actions in the past
- Specific times in the past

### 2. Conditionals
- **Zero Conditional**: General truths (If water boils, it turns to steam)
- **First Conditional**: Future possibilities (If I study, I will pass)
- **Second Conditional**: Hypothetical present (If I were rich, I would travel)
- **Third Conditional**: Hypothetical past (If I had studied, I would have passed)

### 3. Passive Voice
Used frequently in Academic Writing Task 1.
- "The data was collected by researchers"
- "The results were analyzed using statistical methods"

### 4. Relative Clauses
For adding information and creating complex sentences.
- "The book, which was written by an expert, is very helpful"
- "Students who study regularly tend to score better"
    `
  },
  {
    id: 'vocab-1',
    title: 'Academic Vocabulary List',
    description: 'Essential academic words for IELTS Writing and Speaking',
    type: 'vocabulary',
    difficulty: 'Intermediate',
    content: `
## High-Frequency Academic Vocabulary

### Verbs
- **Analyze** - examine in detail
- **Evaluate** - assess the value
- **Demonstrate** - clearly show
- **Indicate** - point to
- **Suggest** - put forward for consideration

### Adjectives
- **Significant** - important
- **Substantial** - large in size or value
- **Subsequent** - coming after
- **Various** - different from each other
- **Adequate** - sufficient

### Nouns
- **Implementation** - putting into practice
- **Consequence** - result of an action
- **Approach** - way of doing something
- **Evidence** - information supporting a claim
- **Perspective** - point of view

### Linking Words
- **Furthermore** - in addition
- **Nevertheless** - despite this
- **Consequently** - as a result
- **Although** - despite the fact that
- **Therefore** - for this reason
    `
  },
  {
    id: 'tips-1',
    title: 'Time Management Strategies',
    description: 'How to effectively manage your time during IELTS',
    type: 'tips',
    difficulty: 'Beginner',
    content: `
## Time Management for IELTS

### Reading (60 minutes)
- 20 minutes per passage
- Don't spend more than 2 minutes per question
- Use skimming and scanning techniques
- Transfer answers in the last 2 minutes

### Writing (60 minutes)
- Task 1: 150 words, 20 minutes
- Task 2: 250 words, 40 minutes
- Spend 5 minutes planning

### Listening (30 minutes)
- 40 minutes audio + 10 minutes transfer
- Read questions while audio plays
- Watch for plural/singular answers

### Speaking (11-14 minutes)
- Part 1: 4-5 minutes (familiar topics)
- Part 2: 3-4 minutes (cue card)
- Part 3: 4-5 minutes (discussion)
    `
  },
  {
    id: 'practice-1',
    title: 'Common Essay Topics Practice',
    description: 'Practice questions for Writing Task 2',
    type: 'practice',
    difficulty: 'Intermediate',
    content: `
## Common IELTS Writing Topics

### Education
- Some people believe that university students should study whatever they like. Others think that they should only be allowed to study subjects that will be useful in the future. Discuss both views and give your opinion.

### Technology
- Some people think that computers have made life more complex. Others believe they have made life easier. Discuss both views and give your opinion.

### Environment
- Many people believe that global environmental problems should be solved by international cooperation. Others believe that countries should act independently. Discuss both views and give your opinion.

### Health
- Some people think that governments should spend more money on healthcare than on sports and recreation. Do you agree or disagree?

### Society
- Some people believe that parents should teach children how to be good members of society. Others believe that school is the place to learn this. Discuss both views and give your opinion.
    `
  }
];

// Podcasts Data
export const PODCASTS: Podcast[] = [
  {
    id: 'pod-1',
    title: 'IELTS Energy 4: The Secret to Band 7+',
    description: 'Learn the speaking secrets that helped thousands achieve Band 7+',
    host: 'Avery',
    duration: '15-20 min',
    url: 'https://www.ieltsenergy.com/',
    category: 'speaking'
  },
  {
    id: 'pod-2',
    title: 'The IELTS Podcast',
    description: 'Weekly episodes covering all IELTS skills',
    host: 'Ben Worthington',
    duration: '20-30 min',
    url: 'https://www.ieltspodcast.com/',
    category: 'listening'
  },
  {
    id: 'pod-3',
    title: 'Cambridge English Podcast',
    description: 'Official Cambridge English language learning podcasts',
    host: 'Cambridge English',
    duration: '10-25 min',
    url: 'https://www.cambridgeenglish.org/podcasts/',
    category: 'listening'
  },
  {
    id: 'pod-4',
    title: '6 Minute English',
    description: 'BBC Learning English topical discussions',
    host: 'BBC',
    duration: '6 min',
    url: 'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english',
    category: 'listening'
  },
  {
    id: 'pod-5',
    title: 'Get IELTS Tips',
    description: 'Official British Council IELTS tips and strategies',
    host: 'British Council',
    duration: '10-15 min',
    url: 'https://takeielts.britishcouncil.org/take-ielts/prepare/ielts-podcasts',
    category: 'tips'
  }
];

// Websites Data
export const WEBSITES: Website[] = [
  {
    id: 'web-1',
    name: 'IELTS.org (Official)',
    description: 'Official IELTS website with test information, sample tests, and preparation tips',
    url: 'https://www.ielts.org',
    category: 'official'
  },
  {
    id: 'web-2',
    name: 'British Council Take IELTS',
    description: 'Free practice tests, tips, and preparation materials',
    url: 'https://takeielts.britishcouncil.org/',
    category: 'official'
  },
  {
    id: 'web-3',
    name: 'IDP IELTS',
    description: 'Test registration and preparation resources from IDP',
    url: 'https://www.idpielts.me/',
    category: 'official'
  },
  {
    id: 'web-4',
    name: 'IELTS Liz',
    description: 'Comprehensive free IELTS preparation with tips, practice tests, and model answers',
    url: 'https://ieltsliz.com/',
    category: 'practice'
  },
  {
    id: 'web-5',
    name: 'Cambridge English',
    description: 'Official Cambridge English language tests and preparation materials',
    url: 'https://www.cambridgeenglish.org/',
    category: 'official'
  },
  {
    id: 'web-6',
    name: 'E2Language',
    description: 'Free IELTS practice tests, tips, and strategies',
    url: 'https://www.e2language.com/',
    category: 'practice'
  },
  {
    id: 'web-7',
    name: 'Vocabulary.com',
    description: 'Build vocabulary skills with interactive exercises',
    url: 'https://www.vocabulary.com/',
    category: 'tools'
  },
  {
    id: 'web-8',
    name: 'Grammarly',
    description: 'Writing assistant tool to check grammar and improve style',
    url: 'https://www.grammarly.com/',
    category: 'tools'
  }
];

// Books Data
export const BOOKS: Book[] = [
  {
    id: 'book-1',
    title: 'Cambridge IELTS 18 Academic',
    author: 'Cambridge University Press',
    description: 'The most authentic practice tests available. Contains four complete tests for Academic candidates.',
    level: 'All Levels',
    amazonUrl: 'https://www.amazon.com/Cambridge-18-Academic-Students-Book/dp/1108433715'
  },
  {
    id: 'book-2',
    title: 'Cambridge IELTS 18 General Training',
    author: 'Cambridge University Press',
    description: 'Four complete General Training tests for IELTS candidates.',
    level: 'All Levels',
    amazonUrl: 'https://www.amazon.com/Cambridge-18-General-Training-Students/dp/1108433723'
  },
  {
    id: 'book-3',
    title: 'Official IELTS Practice Materials 2',
    author: 'Cambridge University Press',
    description: 'Official practice materials with DVD containing audio and video material.',
    level: 'All Levels',
    amazonUrl: 'https://www.amazon.com/Official-IELTS-Practice-Materials-2/dp/1906438422'
  },
  {
    id: 'book-4',
    title: 'IELTS 15 Academic Student\'s Book',
    author: 'Cambridge University Press',
    description: 'Four authentic past paper tests with answer keys and sample answers.',
    level: 'All Levels',
    amazonUrl: 'https://www.amazon.com/IELTS-15-Academic-Students-Book/dp/1108403242'
  },
  {
    id: 'book-5',
    title: 'Target Band 7',
    author: 'Simone Braverman',
    description: 'IELTS essay writing tips and strategies from a high scorer.',
    level: 'Intermediate',
    amazonUrl: 'https://www.amazon.com/Target-Band-7-IELTS-Writing-Success/dp/9351117742'
  },
  {
    id: 'book-6',
    title: 'The IELTS Guide',
    author: 'IDP IELTS',
    description: 'Comprehensive guide covering all four skills with strategies and practice.',
    level: 'Beginner',
    amazonUrl: 'https://www.idpielts.me/preparation/ielts-preparation-materials'
  },
  {
    id: 'book-7',
    title: 'Improve Your IELTS Skills',
    author: 'Michael McCarthy',
    description: 'Four-book series focusing on Reading, Writing, Listening, and Speaking.',
    level: 'Intermediate',
    amazonUrl: 'https://www.amazon.com/Improve-Your-IELTS-Skills-Listening/dp/0230002085'
  },
  {
    id: 'book-8',
    title: 'Collins English for IELTS',
    author: 'Pearson',
    description: 'Comprehensive preparation with audio resources and online access.',
    level: 'Beginner',
    amazonUrl: 'https://www.pearson.com/english/ielts.html'
  }
];

// Resource Articles Data
export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'art-1',
    title: '10 Tips for Band 7+ in IELTS Speaking',
    description: 'Proven strategies to boost your speaking score',
    category: 'tips',
    readTime: 8,
    content: `
## 10 Tips for Band 7+ in IELTS Speaking

### 1. Speak Fluently and Coherently
- Don't pause too long between sentences
- Use linking words naturally (however, therefore, furthermore)
- Maintain a steady pace

### 2. Develop Your Answers
- Don't give one-word answers
- Extend your responses with reasons and examples
- Part 2: Use the full 2 minutes

### 3. Use a Range of Vocabulary
- Avoid repetition of common words
- Use idiomatic expressions naturally
- Paraphrase the question words

### 4. Use Complex Grammar Structures
- Include conditional sentences
- Use passive voice
- Mix simple and complex sentences

### 5. Pronunciation Matters
- Practice the sounds that are different in English
- Use intonation to show meaning
- Don't rush - clarity is more important than speed

### 6. Stay Calm and Confident
- Remember the examiner is there to help you
- Treat it like a conversation, not an interrogation
- If you don't understand, ask politely

### 7. Practice Regularly
- Record yourself and listen back
- Find a speaking partner
- Practice on common topics

### 8. Watch Your Timing
- Part 1: 4-5 minutes
- Part 2: 3-4 minutes (cue card)
- Part 3: 4-5 minutes

### 9. Use Examples from Your Experience
- Personal examples make answers more authentic
- Shows you can express ideas clearly
- Easier to speak about familiar topics

### 10. Review Common Mistakes
- Practice past papers
- Identify and fix weak areas
- Learn from your recordings
    `
  },
  {
    id: 'art-2',
    title: 'How to Score Band 7+ in IELTS Writing Task 2',
    description: 'Essential strategies for higher writing scores',
    category: 'strategies',
    readTime: 10,
    content: `
## How to Score Band 7+ in IELTS Writing Task 2

### Task Achievement (25%)
- Fully address all parts of the question
- Present a clear position
- Support with relevant examples
- Stay within 250-300 words

### Coherence and Cohesion (25%)
- Use paragraphs effectively
- Link ideas with cohesive devices
- Clear progression throughout

### Lexical Resource (25%)
- Use vocabulary accurately
- Show range of vocabulary
- Avoid repetition
- Use collocations correctly

### Grammatical Range and Accuracy (25%)
- Use complex sentences
- Variety of structures
- Few errors (no pattern of mistakes)

### Essay Structure
1. **Introduction** (2-3 sentences)
   - Paraphrase the question
   - State your position
   - Outline main points

2. **Body Paragraphs** (2-3 paragraphs)
   - Topic sentence
   - Supporting explanation
   - Example
   - Link to next paragraph

3. **Conclusion** (2-3 sentences)
   - Restate position
   - Summarize main points
   - Final thought

### Time Management
- Planning: 5 minutes
- Writing: 30-35 minutes
- Checking: 2-3 minutes
    `
  },
  {
    id: 'art-3',
    title: 'Understanding the IELTS Band Descriptors',
    description: 'What examiners look for at each band score',
    category: 'general',
    readTime: 6,
    content: `
## Understanding IELTS Band Descriptors

### Band 9 - Expert User
- Complete command of the language
- Accurate, fluent, with complete understanding

### Band 8 - Very Good User
- Complete command with occasional inaccuracies
- Handles complex language well
- Occasional inappropriate usage

### Band 7 - Good User
- Operational command with occasional errors
- Generally handles complex language
- Understands detailed reasoning

### Band 6 - Competent User
- Generally effective command
- Some inaccuracies and misunderstandings
- Can use complex language in familiar situations

### Band 5 - Modest User
- Partial command
- Copes with overall meaning
- Makes many errors

### Key Differences Between Bands
- **Fluency**: Band 7 speaks at normal speed with few hesitations
- **Vocabulary**: Band 7 uses vocabulary flexibly with some rare errors
- **Grammar**: Band 7 uses mix of simple and complex structures with good accuracy

### How to Improve Your Score
1. Understand exactly what each band requires
2. Practice with band descriptors nearby
3. Self-assess your practice answers
4. Focus on your weakest area
    `
  },
  {
    id: 'art-4',
    title: 'Quick Grammar Refresher for IELTS',
    description: 'Essential grammar points to review before the test',
    category: 'tips',
    readTime: 7,
    content: `
## Quick Grammar Refresher for IELTS

### Articles
- **A/An**: General singular nouns
- **The**: Specific nouns, things already mentioned
- **No article**: General plurals, uncountable nouns

### Prepositions
- **Time**: at (3pm), on (Monday), in (March)
- **Place**: in (city), at (address), on (street)
- **Common mistakes**: married TO, interested IN, good AT

### Conditionals
| Type | Structure | Example |
|------|-----------|---------|
| Zero | If + present, present | If water boils, it evaporates |
| First | If + present, will + verb | If it rains, I'll stay home |
| Second | If + past, would + verb | If I were rich, I'd travel |
| Third | If + past perfect, would have | If I'd studied, I'd passed |

### Reported Speech
- Tense moves back one step
- pronouns may change
- time expressions change (now → then)

### Passive Voice
- Use for formal writing
- Object becomes subject
- "The book was written by Shakespeare"

### Relative Clauses
- Defining: no commas (The man who called)
- Non-defining: commas (My brother, who is tall)
    `
  },
  {
    id: 'art-5',
    title: 'Common Mistakes to Avoid in IELTS',
    description: 'Learn from others\' mistakes to improve your score',
    category: 'tips',
    readTime: 5,
    content: `
## Common Mistakes to Avoid in IELTS

### Speaking Mistakes
1. **One-word answers**: Don't just say "Yes" or "No"
2. **Memorizing scripts**: Sounds unnatural, examiners notice
3. **Speaking too fast**: Prioritize clarity over speed
4. **Avoiding eye contact**: Shows nervousness
5. **Not using the full time**: Especially in Part 2

### Writing Mistakes
1. **Underwriting**: Less than 150/250 words
2. **Overwriting**: Too long loses coherence
3. **Not answering the question**: Read carefully!
4. **Repeated vocabulary**: Show range instead
5. **Poor paragraphing**: One paragraph = lower score

### Reading Mistakes
1. **Running out of time**: Don't spend too long on one question
2. **Reading every word**: Use skimming and scanning
3. **Changing answers**: Unless you're certain
4. **Misreading True/False/Not Given**: Know the difference

### Listening Mistakes
1. **Not checking spelling**: Especially names and places
2. **Missing plural endings**: singular vs plural
3. **Not transferring answers**: Do this in the last 10 minutes
4. **Not reading questions while listening**: Use gaps wisely

### General Mistakes
1. **Ignoring the clock**: Time management is crucial
2. **Not practicing under test conditions**: Timed practice matters
3. **Neglecting weak areas**: Focus on improvement
4. **Test day nerves**: Prepare, rest, stay calm
    `
  }
];
