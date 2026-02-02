import React, { useState, useEffect } from 'react';
import { Theme } from '../../types';

interface HeaderProps {
  timeRemaining: number;
  onFinish: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  onGoHome?: () => void;
  showFinishButton?: boolean;
  useClock?: boolean;
}

const Header: React.FC<HeaderProps> = ({ timeRemaining, onFinish, theme, onToggleTheme, onGoHome, showFinishButton = true, useClock = true }) => {
  const [uzbekistanTime, setUzbekistanTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Uzbekistan is UTC+5, no daylight saving time
      const uzTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Samarkand' }));
      const hours = uzTime.getHours();
      const minutes = uzTime.getMinutes();
      setUzbekistanTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const isDarkMode = theme === 'dark';

  return (
    <header className={`border-b h-20 flex items-center justify-between px-8 z-50 transition-colors duration-500 backdrop-blur-xl relative ${isDarkMode ? 'bg-[#020617]/90 border-white/5 shadow-2xl shadow-black/40' : 'bg-white/90 border-slate-200 shadow-sm'}`}>
      <div className="flex items-center gap-8 z-10">
        <button 
          onClick={onGoHome}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24]' : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white'} shadow-sm border ${isDarkMode ? 'border-[#333]' : 'border-slate-200'}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span>Home</span>
        </button>
      </div>

      {/* Centered Branding */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none">
        <span className={`font-black text-sm tracking-[0.4em] uppercase transition-colors duration-500 ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B]'}`}>
          Javokhirs IELTS
        </span>
      </div>

      <div className="flex items-center gap-5 z-10">
        {/* Modern Theme Toggle Button */}
        <button 
          onClick={onToggleTheme}
          className={`group relative p-3.5 rounded-2xl transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5' : 'bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-lg'}`}
        >
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

        {useClock ? (
          /* Uzbekistan Time Display */
          <div className={`relative flex items-center px-5 py-2.5 rounded-2xl transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg shadow-black/20' : 'bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 shadow-inner'}`}>
            <div className={`text-lg font-mono font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {uzbekistanTime}
            </div>
            {/* Decorative dots */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1">
              <div className={`w-1 h-1 rounded-full ${isDarkMode ? 'bg-white/30' : 'bg-slate-300'}`}></div>
              <div className={`w-1 h-1 rounded-full ${isDarkMode ? 'bg-white/20' : 'bg-slate-200'}`}></div>
            </div>
          </div>
        ) : (
          /* Timer Display */
          <div className={`relative flex items-center px-5 py-2.5 rounded-2xl transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg shadow-black/20' : 'bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 shadow-inner'}`}>
            <div className={`text-lg font-mono font-bold ${timeRemaining < 300 ? 'text-red-500 animate-pulse' : isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {Math.floor(timeRemaining / 60).toString().padStart(2, '0')}:{(timeRemaining % 60).toString().padStart(2, '0')}
            </div>
            {/* Decorative dots */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1">
              <div className={`w-1 h-1 rounded-full ${timeRemaining < 300 ? 'bg-red-500 animate-ping' : isDarkMode ? 'bg-white/30' : 'bg-slate-300'}`}></div>
              <div className={`w-1 h-1 rounded-full ${timeRemaining < 300 ? 'bg-red-500' : isDarkMode ? 'bg-white/20' : 'bg-slate-200'}`}></div>
            </div>
          </div>
        )}

        {showFinishButton && (
          <button
            onClick={onFinish}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24]' : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white'} shadow-sm border ${isDarkMode ? 'border-[#333]' : 'border-slate-200'}`}
          >
            <span>Finish</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
