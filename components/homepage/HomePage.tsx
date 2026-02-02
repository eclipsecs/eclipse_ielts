
import React, { useState, useEffect } from 'react';
import { Theme, TestCategory, TestMeta } from '../../types';
import { AVAILABLE_TESTS } from '../../data/tests';

interface HomePageProps {
  theme: Theme;
  onToggleTheme: () => void;
  onSelectTest: (test: TestMeta) => void;
  onGoRoadmap: () => void;
  onGoPassage1: () => void;
  onGoPassage2: () => void;
  onGoPassage3: () => void;
  onGoArticle: () => void;
  initialView?: HomeView;
}

type HomeView = 'modalities' | 'reading-modalities' | 'reading' | 'listening' | 'full' | 'article';

const HomePage: React.FC<HomePageProps> = ({ 
  theme, 
  onToggleTheme, 
  onSelectTest, 
  onGoRoadmap,
  onGoPassage1,
  onGoPassage2,
  onGoPassage3,
  onGoArticle,
  initialView
}) => {
  const [currentView, setCurrentView] = useState<HomeView>(initialView || 'modalities');
  const [uzbekistanTime, setUzbekistanTime] = useState<string>('');
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const uzTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Samarkand' }));
      const hours = uzTime.getHours();
      const minutes = uzTime.getMinutes();
      setUzbekistanTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBack = () => {
    setCurrentView('modalities');
  };

  const handleHomeReset = () => {
    setCurrentView('modalities');
  };

  const renderModalityCards = () => (
    <div className="flex flex-wrap justify-center gap-8 mt-6 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-6xl mx-auto">
      <button onClick={() => setCurrentView('reading-modalities')} className={`group relative p-12 rounded-[52px] border text-left transition-all duration-500 hover:-translate-y-3 w-80 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24] hover:shadow-2xl hover:shadow-[#F15A24]/10' : 'bg-white border-slate-200 hover:border-slate-400 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]'}`}>
        <div className={`w-24 h-24 rounded-[28px] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${isDarkMode ? 'bg-[#252525]' : 'bg-[#F8FAFC]'}`}>
          {/* Modern Cartoon Reading Icon */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Book base */}
            <path d="M8 36C8 33.7909 9.79086 32 12 32H28V52C28 54.2091 26.2091 56 24 56H12C9.79086 56 8 54.2091 8 52V36Z" fill="#FF8A65"/>
            <path d="M56 36C56 33.7909 54.2091 32 52 32H36V52C36 54.2091 37.7909 56 40 56H52C54.2091 56 56 54.2091 56 52V36Z" fill="#4DB6AC"/>
            {/* Book pages */}
            <path d="M32 32V56" stroke="#fff" strokeWidth="2"/>
            {/* Character head */}
            <circle cx="32" cy="20" r="13" fill="#FFD54F"/>
            {/* Hair */}
            <path d="M20 18C20 12 25 8 32 8C39 8 44 12 44 18" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M32 8L30 4M32 8L34 4M32 8V5" stroke="#5D4037" strokeWidth="2" strokeLinecap="round"/>
            {/* Eyes */}
            <ellipse cx="27" cy="19" rx="3" ry="4" fill="#fff"/>
            <ellipse cx="37" cy="19" rx="3" ry="4" fill="#fff"/>
            <circle cx="27" cy="19" r="2" fill="#333"/>
            <circle cx="37" cy="19" r="2" fill="#333"/>
            <circle cx="28" cy="18" r="0.8" fill="#fff"/>
            <circle cx="38" cy="18" r="0.8" fill="#fff"/>
            {/* Smile */}
            <path d="M28 26C30 28 34 28 36 26" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* Blush */}
            <ellipse cx="22" cy="24" rx="3" ry="2" fill="#FFAB91" opacity="0.7"/>
            <ellipse cx="42" cy="24" rx="3" ry="2" fill="#FFAB91" opacity="0.7"/>
            {/* Glasses */}
            <circle cx="27" cy="19" r="5" stroke="#333" strokeWidth="1.5" fill="none"/>
            <circle cx="37" cy="19" r="5" stroke="#333" strokeWidth="1.5" fill="none"/>
            <line x1="32" y1="19" x2="32" y2="19" stroke="#333" strokeWidth="2"/>
            {/* Book text lines */}
            <line x1="12" y1="38" x2="22" y2="38" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="44" x2="24" y2="44" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="50" x2="20" y2="50" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="42" y1="38" x2="52" y2="38" stroke="#FFE0B2" strokeWidth="2" strokeLinecap="round"/>
            <line x1="42" y1="44" x2="50" y2="44" stroke="#FFE0B2" strokeWidth="2" strokeLinecap="round"/>
            <line x1="42" y1="50" x2="48" y2="50" stroke="#FFE0B2" strokeWidth="2" strokeLinecap="round"/>
            {/* Sparkle stars */}
            <path d="M14 24L15 26L17 26L15.5 27.5L16 29.5L14 28L12 29.5L12.5 27.5L11 26L13 26Z" fill="#FFD54F"/>
            <path d="M50 20L51 22L53 22L51.5 23.5L52 25.5L50 24L48 25.5L48.5 23.5L47 22L49 22Z" fill="#4DB6AC"/>
          </svg>
        </div>
        <h3 className={`text-3xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Reading</h3>
        <p className={`text-sm leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>Academic Reading slot</p>
        <div className={`inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>See Passages <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </button>

      <button onClick={() => setCurrentView('listening')} className={`group relative p-12 rounded-[52px] border text-left transition-all duration-500 hover:-translate-y-3 w-80 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24] hover:shadow-2xl hover:shadow-[#F15A24]/10' : 'bg-white border-slate-200 hover:border-slate-400 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]'}`}>
        <div className={`w-24 h-24 rounded-[28px] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-[#F8FAFC]'}`}>
          {/* Modern Cartoon Listening Icon */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Headphone band */}
            <path d="M10 28C10 14 20 6 32 6C44 6 54 14 54 28" stroke="#7E57C2" strokeWidth="5" strokeLinecap="round" fill="none"/>
            {/* Left ear cup */}
            <rect x="3" y="18" width="14" height="22" rx="7" fill="#7E57C2"/>
            <rect x="6" y="22" width="8" height="14" rx="4" fill="#EDE7F6"/>
            {/* Right ear cup */}
            <rect x="47" y="18" width="14" height="22" rx="7" fill="#7E57C2"/>
            <rect x="50" y="22" width="8" height="14" rx="4" fill="#EDE7F6"/>
            {/* Character head */}
            <circle cx="32" cy="32" r="14" fill="#FFCC80"/>
            {/* Hair - fun spikes */}
            <path d="M20 26C20 20 24 16 32 16C40 16 44 20 44 26" stroke="#4E342E" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M26 14L28 10M32 12L34 8M38 14L40 10" stroke="#4E342E" strokeWidth="2" strokeLinecap="round"/>
            {/* Closed happy eyes */}
            <path d="M24 30Q27 27 30 30" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M34 30Q37 27 40 30" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* Big smile */}
            <path d="M26 38C29 41 35 41 38 38" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none"/>
            {/* Blush */}
            <ellipse cx="22" cy="35" rx="3" ry="2" fill="#FFAB91" opacity="0.7"/>
            <ellipse cx="42" cy="35" rx="3" ry="2" fill="#FFAB91" opacity="0.7"/>
            {/* Musical notes */}
            <path d="M56 8C56 5 60 3 62 5C64 7 60 8 58 6" fill="#FF7043"/>
            <path d="M62 4V0" stroke="#FF7043" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 10C6 7 10 5 12 7C14 9 10 10 8 8" fill="#26A69A"/>
            <path d="M10 6V2" stroke="#26A69A" strokeWidth="2" strokeLinecap="round"/>
            {/* Sound waves */}
            <path d="M-2 22C-4 24 -5 27 -3 30" stroke="#FF7043" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
            <path d="M66 22C68 24 69 27 67 30" stroke="#FF7043" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
            {/* Floating dots */}
            <circle cx="56" cy="14" r="2" fill="#FFEE58"/>
            <circle cx="8" cy="16" r="2" fill="#4DB6AC"/>
          </svg>
        </div>
        <h3 className={`text-3xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Listening</h3>
        <p className={`text-sm leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>Academic Listening slot</p>
        <div className={`inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>See Sections <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </button>

      <button onClick={() => setCurrentView('full')} className={`group relative p-12 rounded-[52px] border text-left transition-all duration-500 hover:-translate-y-3 w-80 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24] hover:shadow-2xl hover:shadow-[#F15A24]/10' : 'bg-white border-slate-200 hover:border-slate-400 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]'}`}>
        <div className={`w-24 h-24 rounded-[28px] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${isDarkMode ? 'bg-[#252525]' : 'bg-[#F8FAFC]'}`}>
          {/* Modern Cartoon Full Mock Icon */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Exam paper */}
            <rect x="12" y="10" width="40" height="48" rx="3" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="2"/>
            {/* Paper header */}
            <rect x="12" y="10" width="40" height="10" rx="3" fill="#1E88E5"/>
            <text x="32" y="17" fontSize="6" textAnchor="middle" fill="white" fontWeight="bold">IELTS CDI</text>
            {/* Questions on paper */}
            <circle cx="20" cy="28" r="5" fill="#E3F2FD"/>
            <text x="20" y="31" fontSize="7" textAnchor="middle" fill="#1565C0" fontWeight="bold">?</text>
            <circle cx="38" cy="28" r="5" fill="#E3F2FD"/>
            <text x="38" y="31" fontSize="7" textAnchor="middle" fill="#1565C0" fontWeight="bold">?</text>
            <circle cx="28" cy="42" r="5" fill="#E3F2FD"/>
            <text x="28" y="45" fontSize="7" textAnchor="middle" fill="#1565C0" fontWeight="bold">!</text>
            <circle cx="44" cy="42" r="5" fill="#E3F2FD"/>
            <text x="44" y="45" fontSize="7" textAnchor="middle" fill="#1565C0" fontWeight="bold">!</text>
            {/* Answer lines */}
            <line x1="18" y1="52" x2="46" y2="52" stroke="#BDBDBD" strokeWidth="1" strokeLinecap="round"/>
            {/* Character peeking from behind */}
            <circle cx="32" cy="62" r="10" fill="#FFE0B2"/>
            {/* Character hair */}
            <path d="M23 58C23 54 26 52 32 52C38 52 41 54 41 58" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            {/* Character eyes - looking up */}
            <ellipse cx="28" cy="60" rx="2.5" ry="3" fill="#fff"/>
            <ellipse cx="36" cy="60" rx="2.5" ry="3" fill="#fff"/>
            <circle cx="28" cy="61" r="1.5" fill="#333"/>
            <circle cx="36" cy="61" r="1.5" fill="#333"/>
            {/* Worried eyebrows */}
            <path d="M25 56L28 57" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M39 56L36 57" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Small nervous mouth */}
            <path d="M30 65C32 66 34 66 36 65" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            {/* Pencil behind paper */}
            <rect x="4" y="38" width="4" height="28" rx="1" fill="#FFB300" transform="rotate(25 6 52)"/>
            <rect x="6" y="30" width="2" height="10" rx="1" fill="#D7CCC8" transform="rotate(25 7 35)"/>
            <path d="M5.5 23L8 20L10.5 23Z" fill="#FF7043" transform="rotate(25 7 35)"/>
            {/* Clock with time */}
            <circle cx="56" cy="12" r="8" fill="#fff" stroke="#EF5350" strokeWidth="2"/>
            <circle cx="56" cy="12" r="6" fill="none" stroke="#FFCDD2" strokeWidth="1"/>
            <line x1="56" y1="12" x2="56" y2="8" stroke="#EF5350" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="56" y1="12" x2="59" y2="13" stroke="#EF5350" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Timer dots */}
            <circle cx="56" cy="6" r="1" fill="#4CAF50"/>
            <circle cx="54" cy="4" r="0.8" fill="#8BC34A"/>
            <circle cx="58" cy="4" r="0.8" fill="#8BC34A"/>
          </svg>
        </div>
        <h3 className={`text-3xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Full Mock</h3>
        <p className={`text-sm leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>A simulation of Reading and Listening</p>
        <div className={`inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Take Exam <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </button>

      <button onClick={onGoArticle} className={`group relative p-12 rounded-[52px] border text-left transition-all duration-500 hover:-translate-y-3 w-80 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24] hover:shadow-2xl hover:shadow-[#F15A24]/10' : 'bg-white border-slate-200 hover:border-slate-400 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]'}`}>
        <div className={`w-24 h-24 rounded-[28px] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${isDarkMode ? 'bg-[#252525]' : 'bg-[#F8FAFC]'}`}>
          {/* Modern Cartoon Article Icon */}
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Document base */}
            <rect x="10" y="8" width="44" height="52" rx="4" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="2"/>
            {/* Document corner fold */}
            <path d="M44 8V16C44 18.2091 45.7909 20 48 20H54" stroke="#E0E0E0" strokeWidth="2" fill="none"/>
            {/* Lines of text */}
            <line x1="18" y1="22" x2="46" y2="22" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="30" x2="46" y2="30" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="38" x2="40" y2="38" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="46" x2="46" y2="46" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round"/>
            <line x1="18" y1="54" x2="34" y2="54" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round"/>
            {/* Character reading */}
            <circle cx="56" cy="48" r="12" fill="#FFE0B2"/>
            {/* Character hair */}
            <path d="M46 44C46 38 50 34 56 34C62 34 66 38 66 44" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" fill="none"/>
            {/* Character eyes - reading */}
            <ellipse cx="52" cy="46" rx="3" ry="4" fill="#fff"/>
            <ellipse cx="60" cy="46" rx="3" ry="4" fill="#fff"/>
            <circle cx="52" cy="47" r="2" fill="#333"/>
            <circle cx="60" cy="47" r="2" fill="#333"/>
            {/* Glasses */}
            <circle cx="52" cy="46" r="5" stroke="#333" strokeWidth="1.5" fill="none"/>
            <circle cx="60" cy="46" r="5" stroke="#333" strokeWidth="1.5" fill="none"/>
            <line x1="57" y1="46" x2="55" y2="46" stroke="#333" strokeWidth="2"/>
            {/* Sparkle around article */}
            <path d="M8 20L9 22L11 22L9.5 23.5L10 25.5L8 24L6 25.5L6.5 23.5L5 22L7 22Z" fill="#FFD54F"/>
            <path d="M56 8L57 10L59 10L57.5 11.5L58 13.5L56 12L54 13.5L54.5 11.5L53 10L55 10Z" fill="#4DB6AC"/>
          </svg>
        </div>
        <h3 className={`text-3xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Articles</h3>
        <p className={`text-sm leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>Explore articles</p>
        <div className={`inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Read Articles <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </button>
    </div>
  );

  const renderReadingPassageCards = () => {
    const p1Count = AVAILABLE_TESTS.filter(t => t.category === 'reading' && t.passageNumber === 1).length;
    const p2Count = AVAILABLE_TESTS.filter(t => t.category === 'reading' && t.passageNumber === 2).length;
    const p3Count = AVAILABLE_TESTS.filter(t => t.category === 'reading' && t.passageNumber === 3).length;

    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
            <h2 className="text-3xl font-bold uppercase tracking-tight" style={{ fontFamily: 'Fredoka One, cursive' }}>Reading <span className="text-[#F15A24]">Library</span></h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Passage 1 Card - Happy Book */}
          <button onClick={onGoPassage1} className={`group relative p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-3 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
              {/* Happy Cartoon Book */}
              <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Book cover - left */}
                <path d="M6 16C6 12.6863 8.68629 10 12 10H28V54C28 56.2091 26.2091 58 24 58H12C8.68629 58 6 55.3137 6 52V16Z" fill="#4DB6AC"/>
                {/* Book cover - right */}
                <path d="M58 16C58 12.6863 55.3137 10 52 10H36V54C36 56.2091 37.7909 58 40 58H52C55.3137 58 58 55.3137 58 52V16Z" fill="#FF8A65"/>
                {/* Book spine */}
                <rect x="31" y="10" width="2" height="48" fill="#5D4037"/>
                {/* Happy eyes on book */}
                <ellipse cx="24" cy="28" rx="3" ry="4" fill="white"/>
                <ellipse cx="40" cy="28" rx="3" ry="4" fill="white"/>
                <circle cx="24" cy="29" r="2" fill="#333"/>
                <circle cx="40" cy="29" r="2" fill="#333"/>
                {/* Sparkle in eyes */}
                <circle cx="25" cy="28" r="0.8" fill="white"/>
                <circle cx="41" cy="28" r="0.8" fill="white"/>
                {/* Happy smile */}
                <path d="M22 42C26 48 38 48 42 42" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none"/>
                {/* Blush on book */}
                <ellipse cx="14" cy="40" rx="3" ry="2" fill="#FFAB91" opacity="0.5"/>
                <ellipse cx="50" cy="40" rx="3" ry="2" fill="#FFAB91" opacity="0.5"/>
                {/* Page lines */}
                <line x1="10" y1="52" x2="20" y2="52" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                <line x1="44" y1="52" x2="54" y2="52" stroke="#FFE0B2" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>
            <div className="mb-2">
              <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>PASSAGE</span>
              <h3 className={`text-4xl font-black mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>1</h3>
            </div>
            <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{p1Count} passages available</p>
            <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>View passages <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </button>

          {/* Passage 2 Card - Starting to Sweat */}
          <button onClick={onGoPassage2} className={`group relative p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-3 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
              {/* Cartoon Book Starting to Sweat */}
              <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Book cover - left */}
                <path d="M6 16C6 12.6863 8.68629 10 12 10H28V54C28 56.2091 26.2091 58 24 58H12C8.68629 58 6 55.3137 6 52V16Z" fill="#7986CB"/>
                {/* Book cover - right */}
                <path d="M58 16C58 12.6863 55.3137 10 52 10H36V54C36 56.2091 37.7909 58 40 58H52C55.3137 58 58 55.3137 58 52V16Z" fill="#4DD0E1"/>
                {/* Book spine */}
                <rect x="31" y="10" width="2" height="48" fill="#5D4037"/>
                {/* Worried eyes on book */}
                <ellipse cx="24" cy="28" rx="3" ry="4" fill="white"/>
                <ellipse cx="40" cy="28" rx="3" ry="4" fill="white"/>
                <circle cx="24" cy="29" r="2" fill="#333"/>
                <circle cx="40" cy="29" r="2" fill="#333"/>
                {/* Worried eyebrows on book */}
                <path d="M20 23L24 24" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M44 23L40 24" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Uneasy mouth */}
                <path d="M26 44C28 42 36 42 38 44" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none"/>
                {/* Single sweat drop */}
                <path d="M52 16C52 13 54 11 56 13C58 15 56 17 54 17C52 17 52 16 52 16" fill="#4FC3F7"/>
                {/* Blush on book */}
                <ellipse cx="14" cy="40" rx="3" ry="2" fill="#FFAB91" opacity="0.5"/>
                <ellipse cx="50" cy="40" rx="3" ry="2" fill="#FFAB91" opacity="0.5"/>
                {/* Wavy stress lines */}
                <path d="M4 8C2 6 6 4 8 6" stroke="#7986CB" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
                <path d="M60 8C62 6 58 4 56 6" stroke="#4DD0E1" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
              </svg>
            </div>
            <div className="mb-2">
              <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>PASSAGE</span>
              <h3 className={`text-4xl font-black mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>2</h3>
            </div>
            <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{p2Count} passages available</p>
            <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>View passages <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </button>

          {/* Passage 3 Card - Sweating */}
          <button onClick={onGoPassage3} className={`group relative p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-3 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
              {/* Cartoon Book Sweating */}
              <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Book cover - left */}
                <path d="M6 16C6 12.6863 8.68629 10 12 10H28V54C28 56.2091 26.2091 58 24 58H12C8.68629 58 6 55.3137 6 52V16Z" fill="#AED581"/>
                {/* Book cover - right */}
                <path d="M58 16C58 12.6863 55.3137 10 52 10H36V54C36 56.2091 37.7909 58 40 58H52C55.3137 58 58 55.3137 58 52V16Z" fill="#FFB74D"/>
                {/* Book spine */}
                <rect x="31" y="10" width="2" height="48" fill="#5D4037"/>
                {/* Stressed eyes on book */}
                <ellipse cx="24" cy="28" rx="3" ry="4" fill="white"/>
                <ellipse cx="40" cy="28" rx="3" ry="4" fill="white"/>
                <circle cx="24" cy="29" r="2" fill="#333"/>
                <circle cx="40" cy="29" r="2" fill="#333"/>
                {/* Very worried eyebrows on book */}
                <path d="M20 23L24 24" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M44 23L40 24" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Worried mouth */}
                <path d="M28 44C30 42 34 42 36 44" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none"/>
                {/* Multiple sweat drops */}
                <path d="M54 14C54 11 56 9 58 11C60 13 58 15 56 15C54 15 54 14 54 14" fill="#4FC3F7"/>
                <path d="M8 20C8 17 10 15 12 17C14 19 12 21 10 21C8 21 8 20 8 20" fill="#4FC3F7"/>
                <path d="M32 2C32 0 33 -2 35 -1C37 0 36 2 34 2C32 2 32 0 32 2" fill="#4FC3F7"/>
                {/* Blush on book */}
                <ellipse cx="14" cy="40" rx="3" ry="2" fill="#FFAB91" opacity="0.6"/>
                <ellipse cx="50" cy="40" rx="3" ry="2" fill="#FFAB91" opacity="0.6"/>
                {/* Stress lines */}
                <path d="M2 6C0 4 4 2 6 4" stroke="#AED581" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
                <path d="M62 6C64 4 60 2 58 4" stroke="#FFB74D" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
                <path d="M2 12C0 10 4 8 6 10" stroke="#AED581" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
                <path d="M62 12C64 10 60 8 58 10" stroke="#FFB74D" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
              </svg>
            </div>
            <div className="mb-2">
              <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>PASSAGE</span>
              <h3 className={`text-4xl font-black mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>3</h3>
            </div>
            <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{p3Count} passages available</p>
            <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>View passages <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </button>
        </div>
      </div>
    );
  };

  const renderReadingTests = () => {
    const readingTests = AVAILABLE_TESTS.filter(t => t.category === 'reading');
    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
            <h2 className="text-3xl font-black uppercase tracking-tight">Reading <span className="text-[#F15A24]">Tests</span></h2>
          </div>
          <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>Select a test to begin your practice session</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {readingTests.map((test) => (
            <button key={test.id} onClick={() => onSelectTest(test)} className={`group relative p-6 rounded-[32px] border text-left transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "#F15A24" : "#1D1D4B"} strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${isDarkMode ? 'bg-[#252525] text-[#b0b0b0]' : 'bg-slate-100 text-slate-500'}`}>Passage {test.passageNumber}</span>
              </div>
              <h4 className={`text-lg font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{test.title}</h4>
              <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{test.duration} minutes</p>
              <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Start Test <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderListeningTests = () => {
    const listeningTests = AVAILABLE_TESTS.filter(t => t.category === 'listening');
    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
            <h2 className="text-3xl font-black uppercase tracking-tight">Listening <span className="text-[#F15A24]">Tests</span></h2>
          </div>
          <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>Select a listening test to begin</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {listeningTests.map((test) => (
            <button key={test.id} onClick={() => onSelectTest(test)} className={`group relative p-6 rounded-[32px] border text-left transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "#F15A24" : "#1D1D4B"} strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${isDarkMode ? 'bg-[#252525] text-[#b0b0b0]' : 'bg-slate-100 text-slate-500'}`}>Audio</span>
              </div>
              <h4 className={`text-lg font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{test.title}</h4>
              <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{test.duration} minutes</p>
              <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Play Audio <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderFullMockTests = () => {
    const fullMockTests = AVAILABLE_TESTS.filter(t => t.category === 'full');
    return (
      <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
            <h2 className="text-3xl font-black uppercase tracking-tight">Full <span className="text-[#F15A24]">Mock</span></h2>
          </div>
          <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>Complete IELTS simulation tests</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {fullMockTests.map((test) => (
            <button key={test.id} onClick={() => onSelectTest(test)} className={`group relative p-6 rounded-[32px] border text-left transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "#F15A24" : "#1D1D4B"} strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg ${isDarkMode ? 'bg-[#252525] text-[#b0b0b0]' : 'bg-slate-100 text-slate-500'}`}>3 Parts</span>
              </div>
              <h4 className={`text-lg font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{test.title}</h4>
              <p className={`text-xs mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>Reading, Listening & Writing</p>
              <div className={`inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Begin Exam <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-[#F8FAFC] text-slate-900'}`}>
      <nav className={`h-20 flex items-center justify-between px-8 border-b sticky top-0 z-50 backdrop-blur-xl relative transition-all duration-500 ${isDarkMode ? 'bg-[#121212]/90 border-[#3a3a3a] shadow-xl' : 'bg-white/90 border-slate-200 shadow-sm'}`}>
        <div className="flex items-center gap-4 z-10">
          <button 
            onClick={handleHomeReset}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24]' : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white'} shadow-sm border ${isDarkMode ? 'border-[#333]' : 'border-slate-200'}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Home</span>
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none">
          <span className={`
            font-black text-2xl tracking-[0.05em] uppercase
            transition-all duration-300
            ${isDarkMode ? 'text-white' : 'text-[#1D1D4B]'}
            hover:scale-110 hover:-translate-y-1
            ${isDarkMode ? 'hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'hover:drop-shadow-[0_0_10px_rgba(29,29,75,0.5)]'}
          `} style={{ fontFamily: 'Fredoka One, cursive' }}>
            JAVOKHIRS IELTS
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={onGoRoadmap} className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-[#b0b0b0] hover:bg-[#F15A24] hover:text-white' : 'bg-white text-slate-500 hover:bg-[#1D1D4B] hover:text-white'} shadow-sm border ${isDarkMode ? 'border-[#333]' : 'border-slate-200'}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <span>Roadmap</span>
          </button>
          <button onClick={onToggleTheme} className={`group relative p-3.5 rounded-2xl transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5' : 'bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-lg'}`}>
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDarkMode ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20' : 'bg-gradient-to-br from-blue-400/20 to-indigo-400/20'}`}></div>
            {isDarkMode ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10 text-yellow-400 transition-transform duration-300 group-hover:rotate-12">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10 text-indigo-500 transition-transform duration-300 group-hover:-rotate-12">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <div className={`relative flex items-center px-5 py-2.5 rounded-2xl transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg shadow-black/20' : 'bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 shadow-inner'}`}>
            <div className={`text-lg font-mono font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {uzbekistanTime}
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1">
              <div className={`w-1 h-1 rounded-full ${isDarkMode ? 'bg-white/30' : 'bg-slate-300'}`}></div>
              <div className={`w-1 h-1 rounded-full ${isDarkMode ? 'bg-white/20' : 'bg-slate-200'}`}></div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {currentView === 'modalities' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-col items-center text-center mb-12">
              <span className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] mb-4 px-5 py-2.5 rounded-full ${isDarkMode ? 'text-[#F15A24] bg-[#F15A24]/10' : 'text-[#1D1D4B] bg-[#1D1D4B]/10'} animate-pulse`} style={{ fontFamily: 'Fredoka, sans-serif' }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14 9L21 9L15 14L17 21L12 17L7 21L9 14L3 9L10 9L12 2Z" fill="#FFD700" stroke="#FFA000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Choose Your Path
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14 9L21 9L15 14L17 21L12 17L7 21L9 14L3 9L10 9L12 2Z" fill="#FFD700" stroke="#FFA000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <h1 className={`text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`} style={{ fontFamily: 'Fredoka One, cursive' }}>
                What would you like <br/>to <span className="text-[#F15A24] relative inline-block" style={{ fontFamily: 'Fredoka One, cursive', animation: 'cartoon-bounce 1s ease-in-out infinite' }}>practice<span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#F15A24]/20 rounded-full -z-10"></span></span> today?
              </h1>
              <p className={`text-lg max-w-2xl leading-relaxed ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-60'}`} style={{ fontFamily: 'Fredoka, sans-serif' }}>Select a test modality below to begin your IELTS test <svg className="inline-block w-8 h-8 align-middle animate-bounce" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="28" rx="18" ry="22" fill="#F15A24"/><ellipse cx="32" cy="28" rx="14" ry="18" fill="#FF8A65"/><circle cx="32" cy="24" r="8" fill="white" opacity="0.9"/><circle cx="29" cy="23" r="3" fill="#333"/><circle cx="35" cy="23" r="3" fill="#333"/><path d="M28 30Q32 34 36 30" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none"/><path d="M18 48L32 58L46 48" fill="#FFD700"/><path d="M22 44L32 52L42 44" fill="#FFB300"/><ellipse cx="26" cy="55" rx="8" ry="4" fill="#4DB6AC"/><ellipse cx="38" cy="55" rx="8" ry="4" fill="#4DB6AC"/></svg></p>
            </div>
            {renderModalityCards()}
          </div>
        )}
        
        {currentView === 'reading-modalities' && renderReadingPassageCards()}
        {currentView === 'reading' && renderReadingTests()}
        {currentView === 'listening' && renderListeningTests()}
        {currentView === 'full' && renderFullMockTests()}
      </main>
    </div>
  );
};

export default HomePage;
