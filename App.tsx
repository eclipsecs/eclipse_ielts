
import React, { useState, useEffect } from 'react';
import { TestState, Theme, AppView, TestMeta } from './types';
import { AVAILABLE_TESTS } from './data/tests';
import { READING_PASSAGES } from './components/reading/tests/ReadingContent';
import { READING_QUESTIONS } from './components/reading/answers/ReadingQuestions';
import { LISTENING_QUESTIONS } from './components/listening/tests/ListeningQuestions';
import Header from './components/navbar/Header';
import ReadingInterface from './components/reading/ReadingInterface';
import ListeningInterface from './components/listening/ListeningInterface';
import ArticleInterface from './components/article/ArticleInterface';
import ResultsView from './components/results/ResultsView';
import HomePage from './components/homepage/HomePage';
import RoadmapPage from './components/roadmap/RoadmapPage';
import Passage1 from './components/reading/Passage1';
import Passage2 from './components/reading/Passage2';
import Passage3 from './components/reading/Passage3';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [activeTest, setActiveTest] = useState<TestMeta | null>(null);
  const [state, setState] = useState<TestState>({
    isStarted: false,
    isFinished: false,
    timeRemaining: 20 * 60,
    initialTime: 20 * 60,
    userAnswers: {},
    theme: 'light',
  });
  const [timerInput, setTimerInput] = useState<number>(20);

  useEffect(() => {
    let timer: number;
    if (state.isStarted && !state.isFinished && state.timeRemaining > 0) {
      timer = window.setInterval(() => {
        setState((prev) => ({ ...prev, timeRemaining: Math.max(0, prev.timeRemaining - 1) }));
      }, 1000);
    } else if (state.isStarted && state.timeRemaining === 0 && !state.isFinished) {
      handleFinish();
    }
    return () => clearInterval(timer);
  }, [state.isStarted, state.isFinished, state.timeRemaining]);

  const handleSelectTest = (test: TestMeta) => {
    setActiveTest(test);
    setTimerInput(test.duration);
    setView('test');
  };

  const handleStart = () => {
    const seconds = (timerInput || 1) * 60;
    setState(prev => ({
      ...prev,
      isStarted: true,
      isFinished: false,
      timeRemaining: seconds,
      initialTime: seconds,
      userAnswers: {}
    }));
  };

  const handleAnswerChange = (id: number, val: string | string[]) => {
    setState((prev) => ({
      ...prev,
      userAnswers: { ...prev.userAnswers, [id]: val }
    }));
  };

  const handleFinish = () => setState((prev) => ({ ...prev, isFinished: true }));

  const handleRestart = () => {
    setState(prev => ({
      ...prev,
      isStarted: false,
      isFinished: false,
      timeRemaining: (activeTest?.duration || 20) * 60,
      userAnswers: {}
    }));
    setTimerInput(activeTest?.duration || 20);
  };

  const handleGoHome = () => {
    handleRestart();
    setView('home');
    setActiveTest(null);
  };

  const handleToggleTheme = () => {
    setState((prev) => ({ ...prev, theme: prev.theme === 'light' ? 'dark' : 'light' }));
  };

  if (view === 'home') {
    return (
      <HomePage 
        theme={state.theme} 
        onToggleTheme={handleToggleTheme} 
        onSelectTest={handleSelectTest} 
        onGoRoadmap={() => setView('roadmap')}
        onGoPassage1={() => setView('passage1')}
        onGoPassage2={() => setView('passage2')}
        onGoPassage3={() => setView('passage3')}
        onGoArticle={() => {
          setView('article');
        }}
      />
    );
  }

  if (view === 'article') {
    return (
      <ArticleInterface
        theme={state.theme}
        onToggleTheme={handleToggleTheme}
        onGoHome={() => {
          setView('home');
        }}
      />
    );
  }

  if (view === 'reading-library') {
    return (
      <HomePage 
        theme={state.theme} 
        onToggleTheme={handleToggleTheme} 
        onSelectTest={handleSelectTest} 
        onGoRoadmap={() => setView('roadmap')}
        onGoPassage1={() => setView('passage1')}
        onGoPassage2={() => setView('passage2')}
        onGoPassage3={() => setView('passage3')}
        initialView="reading-modalities"
      />
    );
  }

  if (view === 'passage1') {
    return (
      <Passage1
        theme={state.theme}
        onToggleTheme={handleToggleTheme}
        onSelectTest={handleSelectTest}
        onGoHome={() => setView('home')}
        onGoBack={() => setView('reading-library')}
      />
    );
  }

  if (view === 'passage2') {
    return (
      <Passage2
        theme={state.theme}
        onToggleTheme={handleToggleTheme}
        onSelectTest={handleSelectTest}
        onGoHome={() => setView('home')}
        onGoBack={() => setView('reading-library')}
      />
    );
  }

  if (view === 'passage3') {
    return (
      <Passage3
        theme={state.theme}
        onToggleTheme={handleToggleTheme}
        onSelectTest={handleSelectTest}
        onGoHome={() => setView('home')}
        onGoBack={() => setView('reading-library')}
      />
    );
  }

  if (view === 'roadmap') {
    return (
      <RoadmapPage 
        theme={state.theme} 
        onToggleTheme={handleToggleTheme} 
        onGoHome={() => setView('home')} 
      />
    );
  }

  if (!state.isStarted) {
    const isDarkMode = state.theme === 'dark';
    return (
      <div className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${isDarkMode ? 'bg-[#121212]' : 'bg-[#F8FAFC]'}`}>
        <div className={`max-w-md w-full p-12 rounded-[48px] border transition-all duration-500 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] shadow-2xl' : 'bg-white border-slate-100 shadow-xl'}`}>
          <div className="flex flex-col items-center text-center mb-12">
            <button 
              onClick={handleGoHome}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 mb-10 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24] shadow-sm border border-[#333]' : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white shadow-sm border border-slate-200'}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              <span>Back</span>
            </button>
            <h1 className={`text-2xl font-black mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{activeTest?.title}</h1>
            <p className={`text-[11px] font-bold uppercase tracking-[0.25em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>Test Configuration</p>
          </div>

          <div className={`p-8 rounded-[32px] border mb-8 transition-colors ${isDarkMode ? 'bg-[#252525] border-[#3a3a3a]' : 'bg-slate-50 border-slate-200'}`}>
            <label className={`block text-[11px] font-black uppercase tracking-widest text-center mb-6 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>Test Duration</label>
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => setTimerInput(Math.max(1, timerInput - 5))}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-xl transition-all ${
                  isDarkMode ? 'border-[#3a3a3a] text-white hover:border-[#F15A24] hover:bg-[#F15A24]/10' : 'border-slate-200 text-slate-900 hover:bg-slate-100'
                }`}
              >
                -
              </button>
              <div className="relative text-center">
                <input
                  type="number"
                  value={timerInput}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 1;
                    setTimerInput(Math.min(180, Math.max(1, value)));
                  }}
                  className={`w-24 text-center text-6xl font-black bg-transparent outline-none border-b-2 transition-colors ${isDarkMode ? 'text-white border-[#3a3a3a] focus:border-[#F15A24]' : 'text-slate-900 border-slate-200 focus:border-slate-900'}`}
                  min="1"
                  max="180"
                />
                <p className={`text-[10px] font-bold uppercase mt-2 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>Min</p>
              </div>
              <button 
                onClick={() => setTimerInput(Math.min(180, timerInput + 5))}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-xl transition-all ${
                  isDarkMode ? 'border-[#3a3a3a] text-white hover:border-[#F15A24] hover:bg-[#F15A24]/10' : 'border-slate-200 text-slate-900 hover:bg-slate-100'
                }`}
              >
                +
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {[10, 20, 30, 45, 60].map((mins) => (
                <button
                  key={mins}
                  onClick={() => setTimerInput(mins)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    timerInput === mins
                      ? isDarkMode ? 'bg-[#F15A24] text-white' : 'bg-[#1D1D4B] text-white'
                      : isDarkMode ? 'bg-[#1e1e1e] text-[#b0b0b0] hover:border-[#F15A24]' : 'bg-white text-slate-600 hover:bg-slate-100'
                  } border ${isDarkMode ? 'border-[#3a3a3a]' : 'border-slate-200'}`}
                >
                  {mins}m
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleStart}
            className={`w-full py-6 rounded-full font-black text-lg shadow-xl uppercase tracking-[0.15em] transition-all active:scale-[0.98] ${
              isDarkMode ? 'bg-[#F15A24] text-white hover:opacity-90 shadow-[#F15A24]/20' : 'bg-[#1D1D4B] text-white hover:bg-black'
            }`}
          >
            Start Practice
          </button>
        </div>
      </div>
    );
  }

  if (state.isFinished) {
    const questions = activeTest?.category === 'listening' 
      ? LISTENING_QUESTIONS[activeTest.id] 
      : (activeTest?.category === 'reading' ? READING_QUESTIONS[activeTest.id] : []);
    
    return (
      <ResultsView 
        state={state} 
        questions={questions || []} 
        onRestart={handleRestart} 
        testTitle={activeTest?.title || 'Results'}
        onGoHome={handleGoHome}
      />
    );
  }

  return (
    <div className={`flex flex-col h-screen overflow-hidden transition-colors duration-500 ${state.theme === 'dark' ? 'bg-[#020617] text-white' : 'bg-[#F0F2F5] text-slate-900'}`}>
      <Header 
        timeRemaining={state.timeRemaining} 
        onFinish={handleFinish} 
        theme={state.theme} 
        onToggleTheme={handleToggleTheme} 
        onGoHome={handleGoHome}
        useClock={false}
      />
      
      <main className="flex-1 overflow-hidden">
        {activeTest?.category === 'reading' && (
          <ReadingInterface 
            passageTitle={READING_PASSAGES[activeTest.id].title} 
            passageSubtitle={READING_PASSAGES[activeTest.id].subtitle} 
            passageContent={READING_PASSAGES[activeTest.id].content} 
            questions={READING_QUESTIONS[activeTest.id]} 
            userAnswers={state.userAnswers} 
            onAnswerChange={handleAnswerChange as any} 
            theme={state.theme} 
            passageNumber={activeTest.passageNumber} 
          />
        )}
        
        {activeTest?.category === 'listening' && (
          <ListeningInterface 
            questions={LISTENING_QUESTIONS[activeTest.id] || []} 
            userAnswers={state.userAnswers} 
            onAnswerChange={handleAnswerChange} 
            audioUrl={activeTest.audioUrl} 
            theme={state.theme} 
          />
        )}
      </main>
    </div>
  );
};

export default App;
