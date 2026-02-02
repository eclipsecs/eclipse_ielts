
import React, { useState } from 'react';
import { ArticleData, ArticlePracticeQuestion, Theme } from '../../types';
import Header from '../navbar/Header';
import { AVAILABLE_ARTICLES } from '../../data/articles';

interface ArticleInterfaceProps {
  theme: Theme;
  onToggleTheme: () => void;
  onGoHome: () => void;
}

type ArticleView = 'articles' | 'article-detail' | 'vocabulary' | 'practice' | 'results';

const ArticleInterface: React.FC<ArticleInterfaceProps> = ({
  theme,
  onToggleTheme,
  onGoHome,
}) => {
  const isDarkMode = theme === 'dark';
  const [currentView, setCurrentView] = useState<ArticleView>('articles');
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [vocabFilter, setVocabFilter] = useState('');
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const article = selectedArticle;
  const setArticle = (newArticle: ArticleData | null) => setSelectedArticle(newArticle);

  const handleSelectArticle = (articleData: ArticleData) => {
    setArticle(articleData);
    setCurrentView('article-detail');
    setUserAnswers({});
    setShowResults(false);
    setVocabFilter('');
  };

  const handleGoBack = () => {
    setArticle(null);
    setCurrentView('articles');
  };

  const handleAnswerChange = (id: number, val: string | string[]) => {
    setUserAnswers(prev => ({ ...prev, [id]: val }));
  };

  const handleSubmitPractice = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    if (!article) return { correct: 0, total: 0, questionResults: [] };
    let correct = 0;
    let total = 0;
    const questionResults: { question: ArticlePracticeQuestion; isCorrect: boolean; userAnswer: string | string[] }[] = [];

    article?.practice.forEach(q => {
      if (q.type !== 'summary') {
        total += q.points;
        const userAnswer = userAnswers[q.id];
        let isCorrect = false;

        if (Array.isArray(q.correctAnswer)) {
          isCorrect = Array.isArray(userAnswer) && 
            q.correctAnswer.every(a => userAnswer.includes(a)) && 
            userAnswer.length === q.correctAnswer.length;
        } else {
          isCorrect = userAnswer === q.correctAnswer;
        }

        if (isCorrect) correct += q.points;
        questionResults.push({ question: q, isCorrect, userAnswer: userAnswer || '' });
      }
    });

    return { correct, total, questionResults };
  };

  const filteredVocab = article?.vocabulary.filter(v => 
    v.word.toLowerCase().includes(vocabFilter.toLowerCase()) ||
    v.definition.toLowerCase().includes(vocabFilter.toLowerCase())
  );

  const flipCard = (id: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(id)) {
      newFlipped.delete(id);
    } else {
      newFlipped.add(id);
    }
    setFlippedCards(newFlipped);
  };

  const renderArticleView = () => (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8 text-center">
        <button
          onClick={handleGoBack}
          className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-6 ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B]'}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Articles
        </button>
        <div className="flex items-center justify-center gap-3 mb-4">
          <svg className="cartoon-logo w-8 h-8" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="6" width="32" height="40" rx="3" fill={isDarkMode ? '#F15A24' : '#1D1D4B'} transform="rotate(-2 8 6)"/>
            <rect x="12" y="10" width="24" height="32" rx="2" fill={isDarkMode ? '#1e1e1e' : 'white'} transform="rotate(-2 8 6)"/>
            <path d="M16 18h16M16 24h12M16 30h14" stroke={isDarkMode ? '#F15A24' : '#1D1D4B'} strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${isDarkMode ? 'bg-[#F15A24]/20 text-[#F15A24]' : 'bg-[#F15A24]/10 text-[#F15A24]'}`}>
            Article
          </span>
        </div>
        <h1 className={`text-3xl md:text-4xl font-['Fredoka_One'] tracking-wide mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Fredoka One, cursive' }}>
          {article?.title}
        </h1>
        <div className={`flex items-center justify-center gap-4 text-lg font-['Fredoka'] ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`} style={{ fontFamily: 'Fredoka, Balsamiq Sans, sans-serif' }}>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            {article?.author}
          </span>
          <span>•</span>
          <span>{article?.source}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            {article?.readingTime} min read
          </span>
        </div>
      </div>

      <div className={`rounded-[32px] p-8 mb-8 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a]' : 'bg-white border-slate-200'} border`}>
        <p className={`text-lg leading-relaxed whitespace-pre-line ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-700'}`}>
          {article?.content}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setCurrentView('vocabulary')}
          className={`flex-1 min-w-[200px] p-6 rounded-[24px] border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(241,90,36,0.15)] ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-[#1D1D4B]'} text-left group`}
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${isDarkMode ? 'bg-[#252525] group-hover:bg-[#F15A24]/20' : 'bg-slate-100 group-hover:bg-[#1D1D4B]/10'} transition-colors`}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? '#F15A24' : '#1D1D4B'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>
          <h3 className={`text-xl font-['Fredoka_One'] mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Fredoka One, cursive' }}>Vocabulary</h3>
          <p className={`text-sm font-['Fredoka'] ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`} style={{ fontFamily: 'Fredoka, Balsamiq Sans, sans-serif' }}>{article?.vocabulary.length} words to learn</p>
        </button>

        <button
          onClick={() => setCurrentView('practice')}
          className={`flex-1 min-w-[200px] p-6 rounded-[24px] border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(241,90,36,0.15)] ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-[#1D1D4B]'} text-left group`}
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${isDarkMode ? 'bg-[#252525] group-hover:bg-[#F15A24]/20' : 'bg-slate-100 group-hover:bg-[#1D1D4B]/10'} transition-colors`}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? '#F15A24' : '#1D1D4B'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <h3 className={`text-xl font-['Fredoka_One'] mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Fredoka One, cursive' }}>Practice</h3>
          <p className={`text-sm font-['Fredoka'] ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`} style={{ fontFamily: 'Fredoka, Balsamiq Sans, sans-serif' }}>{article?.practice.length} questions</p>
        </button>
      </div>
    </div>
  );

  const renderVocabularyView = () => (
    <div className="animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <button
            onClick={() => setCurrentView('article-detail')}
            className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B]'}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Article
          </button>
          <h2 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Vocabulary</h2>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search words..."
            value={vocabFilter}
            onChange={(e) => setVocabFilter(e.target.value)}
            className={`pl-10 pr-4 py-3 rounded-xl border outline-none w-64 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white placeholder-[#b0b0b0]' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'} focus:border-[#F15A24]`}
          />
          <svg className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-400'}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredVocab.map((vocab) => (
          <div
            key={vocab.id}
            onClick={() => flipCard(vocab.id)}
            className={`relative h-48 cursor-pointer perspective-1000`}
          >
            <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${flippedCards.has(vocab.id) ? 'rotate-y-180' : ''}`}>
              {/* Front */}
              <div className={`absolute inset-0 rounded-[24px] p-6 flex flex-col justify-center backface-hidden ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a]' : 'bg-white border-slate-200'} border`}>
                <span className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B]'}`}>{vocab.partOfSpeech}</span>
                <h3 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{vocab.word}</h3>
                <p className={`text-sm mt-auto ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>Click to flip</p>
              </div>
              {/* Back */}
              <div className={`absolute inset-0 rounded-[24px] p-6 flex flex-col justify-center backface-hidden rotate-y-180 ${isDarkMode ? 'bg-[#252525] border-[#F15A24]' : 'bg-slate-50 border-[#1D1D4B]'} border`}>
                <p className={`text-lg font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{vocab.definition}</p>
                <p className={`text-sm italic mb-3 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>"{vocab.example}"</p>
                {vocab.synonyms && (
                  <p className={`text-xs ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>
                    <span className="font-bold">Synonyms:</span> {vocab.synonyms.join(', ')}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVocab.length === 0 && (
        <div className={`text-center py-12 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>
          No vocabulary items found matching "{vocabFilter}"
        </div>
      )}
    </div>
  );

  const renderPracticeView = () => {
    const score = showResults ? calculateScore() : null;

    return (
      <div className="animate-in fade-in duration-500">
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={() => { setShowResults(false); setCurrentView('article-detail'); }}
              className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B]'}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Article
            </button>
            <h2 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Practice Questions</h2>
          </div>
          {!showResults && (
            <button
              onClick={handleSubmitPractice}
              className={`px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider transition-all ${isDarkMode ? 'bg-[#F15A24] text-white hover:opacity-90' : 'bg-[#1D1D4B] text-white hover:bg-black'}`}
            >
              Submit Answers
            </button>
          )}
        </div>

        {showResults && score && (
          <div className={`rounded-[24px] p-8 mb-8 text-center ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a]' : 'bg-white border-slate-200'} border`}>
            <div className={`text-6xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {score.correct}/{score.total}
            </div>
            <p className={`text-lg ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>
              Score: {Math.round((score.correct / score.total) * 100)}%
            </p>
          </div>
        )}

        <div className="space-y-6">
          {article?.practice.map((question, index) => {
            const userAnswer = userAnswers[question.id];
            const isCorrect = score?.questionResults.find(q => q.question.id === question.id)?.isCorrect;

            return (
              <div
                key={question.id}
                className={`rounded-[24px] p-6 transition-all ${
                  showResults
                    ? isCorrect
                      ? isDarkMode
                        ? 'bg-green-900/20 border-green-600'
                        : 'bg-green-50 border-green-200'
                      : isDarkMode
                        ? 'bg-red-900/20 border-red-600'
                        : 'bg-red-50 border-red-200'
                    : isDarkMode
                      ? 'bg-[#1e1e1e] border-[#3a3a3a]'
                      : 'bg-white border-slate-200'
                } border`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${isDarkMode ? 'bg-[#252525] text-white' : 'bg-slate-100 text-slate-900'}`}>
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {question.text}
                    </p>

                    {question.type === 'multiple_choice' && question.options && (
                      <div className="space-y-3">
                        {question.options.map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
                              userAnswer === option.value
                                ? isDarkMode
                                  ? 'bg-[#F15A24]/20 border-[#F15A24]'
                                  : 'bg-[#F15A24]/10 border-[#F15A24]'
                                : isDarkMode
                                  ? 'bg-[#252525] border-transparent hover:border-[#3a3a3a]'
                                  : 'bg-slate-50 border-transparent hover:border-slate-200'
                            } border`}
                          >
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={option.value}
                              checked={userAnswer === option.value}
                              onChange={() => handleAnswerChange(question.id, option.value)}
                              disabled={showResults}
                              className="sr-only"
                            />
                            <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              userAnswer === option.value
                                ? 'border-[#F15A24] bg-[#F15A24]'
                                : isDarkMode
                                  ? 'border-[#3a3a3a]'
                                  : 'border-slate-300'
                            }`}>
                              {userAnswer === option.value && (
                                <span className="w-2 h-2 rounded-full bg-white" />
                              )}
                            </span>
                            <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>
                              {option.label}. {option.value}
                            </span>
                          </label>
                        ))}
                      </div>
                    )}

                    {question.type === 'true_false' && (
                      <div className="flex gap-4">
                        {['true', 'false'].map((value) => (
                          <button
                            key={value}
                            onClick={() => !showResults && handleAnswerChange(question.id, value)}
                            className={`flex-1 p-4 rounded-xl font-medium transition-all ${
                              userAnswer === value
                                ? isDarkMode
                                  ? 'bg-[#F15A24]/20 border-[#F15A24]'
                                  : 'bg-[#F15A24]/10 border-[#F15A24]'
                                : isDarkMode
                                  ? 'bg-[#252525] border-transparent hover:border-[#3a3a3a]'
                                  : 'bg-slate-50 border-transparent hover:border-slate-200'
                            } border ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                          >
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                          </button>
                        ))}
                      </div>
                    )}

                    {question.type === 'fill_gap' && (
                      <input
                        type="text"
                        value={userAnswer || ''}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        placeholder="Type your answer..."
                        disabled={showResults}
                        className={`w-full p-4 rounded-xl border outline-none ${
                          isDarkMode
                            ? 'bg-[#252525] border-[#3a3a3a] text-white placeholder-[#b0b0b0]'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        } focus:border-[#F15A24]`}
                      />
                    )}

                    {question.type === 'summary' && (
                      <textarea
                        value={userAnswer || ''}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        placeholder="Write your summary here (2-3 sentences)..."
                        rows={4}
                        disabled={showResults}
                        className={`w-full p-4 rounded-xl border outline-none resize-none ${
                          isDarkMode
                            ? 'bg-[#252525] border-[#3a3a3a] text-white placeholder-[#b0b0b0]'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        } focus:border-[#F15A24]`}
                      />
                    )}

                    {showResults && question.type !== 'summary' && question.explanation && (
                      <div className={`mt-4 p-4 rounded-xl ${
                        isDarkMode ? 'bg-[#252525]' : 'bg-slate-50'
                      }`}>
                        <p className={`text-sm ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-600'}`}>
                          <span className="font-bold">Explanation:</span> {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pl-12">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'
                  }`}>
                    {question.points} point{question.points > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col h-screen overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#020617] text-white' : 'bg-[#F0F2F5] text-slate-900'}`}>
      <Header
        timeRemaining={0}
        onFinish={() => {}}
        theme={theme}
        onToggleTheme={onToggleTheme}
        onGoHome={onGoHome}
      />

      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-8 py-12">
          {currentView === 'articles' && (
            <div className="animate-in fade-in duration-500">
              <div className="mb-12 text-center">
                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${isDarkMode ? 'bg-[#F15A24]/20 text-[#F15A24]' : 'bg-[#F15A24]/10 text-[#F15A24]'}`}>
                  Articles
                </span>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <svg className="cartoon-logo w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="6" width="32" height="40" rx="3" fill={isDarkMode ? '#F15A24' : '#1D1D4B'} transform="rotate(-2 8 6)"/>
                    <rect x="12" y="10" width="24" height="32" rx="2" fill={isDarkMode ? '#1e1e1e' : 'white'} transform="rotate(-2 8 6)"/>
                    <path d="M16 18h16M16 24h12M16 30h14" stroke={isDarkMode ? '#F15A24' : '#1D1D4B'} strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="38" cy="42" r="4" fill="#F15A24"/>
                    <path d="M36 42h4M38 40v4" stroke="white" strokeWidth="1.5"/>
                  </svg>
                  <h1 className={`text-4xl md:text-5xl font-['Fredoka_One'] tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Fredoka One, cursive' }}>
                    Reading Articles
                  </h1>
                </div>
                <p className={`text-xl mt-4 font-['Fredoka'] ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`} style={{ fontFamily: 'Fredoka, Balsamiq Sans, sans-serif' }}>
                  Explore our collection of articles to improve your reading skills
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {AVAILABLE_ARTICLES.map((articleItem) => (
                  <article
                    key={articleItem.id}
                    onClick={() => handleSelectArticle(articleItem)}
                    className={`group relative rounded-[24px] p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400'} border`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'bg-[#F15A24]/20' : 'bg-[#F15A24]/10'} ${
                        articleItem.difficulty === 'Easy'
                          ? isDarkMode ? 'text-green-400' : 'text-green-600'
                          : articleItem.difficulty === 'Medium'
                            ? isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                            : isDarkMode ? 'text-red-400' : 'text-red-600'
                      }`}>
                        {articleItem.difficulty}
                      </span>
                      <div className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? '#b0b0b0' : '#64748b'} strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span className={`text-xs font-bold ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>
                          {articleItem.readingTime} min
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-xl ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? '#F15A24' : '#1D1D4B'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                          <polyline points="10 9 9 9 8 9"/>
                        </svg>
                      </div>
                      <h2 className={`text-xl font-['Fredoka_One'] leading-tight group-hover:text-[#F15A24] transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Fredoka One, cursive' }}>
                        {articleItem.title}
                      </h2>
                    </div>

                    <p className={`text-sm mb-4 line-clamp-3 font-['Fredoka'] ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`} style={{ fontFamily: 'Fredoka, Balsamiq Sans, sans-serif' }}>
                      {articleItem.content.split('\n').filter(p => p.trim()).slice(0, 2).join(' ')}...
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t ${isDarkMode ? 'border-[#3a3a3a]' : 'border-slate-200'}">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${isDarkMode ? 'bg-[#252525] text-white' : 'bg-slate-100 text-slate-900'}`}>
                          {articleItem.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className={`text-sm font-['Fredoka'] ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`} style={{ fontFamily: 'Fredoka, Balsamiq Sans, sans-serif' }}>
                          {articleItem.author}
                        </span>
                      </div>
                      <span className={`text-sm font-['Fredoka_One'] ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B]'}`} style={{ fontFamily: 'Fredoka One, cursive' }}>
                        Read more →
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
          {currentView === 'article-detail' && renderArticleView()}
          {currentView === 'vocabulary' && renderVocabularyView()}
          {currentView === 'practice' && renderPracticeView()}
        </div>
      </main>
    </div>
  );
};

export default ArticleInterface;
