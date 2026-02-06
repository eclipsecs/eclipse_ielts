
import React, { useState, useEffect } from 'react';
import { Theme } from '../../types';
import { useAuth } from '../../context/AuthContext';

interface HeaderProps {
  timeRemaining: number;
  onFinish: () => void;
  theme: Theme;
  onToggleTheme: () => void;
  onGoHome?: () => void;
  onGoProfile?: () => void;
  showFinishButton?: boolean;
  useClock?: boolean;
}

const Header: React.FC<HeaderProps> = ({ timeRemaining, onFinish, theme, onToggleTheme, onGoHome, onGoProfile, showFinishButton = true, useClock = true }) => {
  const [uzbekistanTime, setUzbekistanTime] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();

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

  const isDarkMode = theme === 'dark';

  return (
    <header className={`w-full border-b flex flex-wrap items-center justify-between px-4 py-3 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-[#020617] border-white/10' : 'bg-white border-slate-200'}`}>
      
      {/* Left side - Home Button */}
      <button 
        onClick={onGoHome}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24] border border-white/10' : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white border border-slate-200'}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        Home
      </button>

      {/* Right side controls */}
      <div className="flex items-center gap-3">
        {/* User Profile / Login Button */}
        {isAuthenticated && user ? (
          <button
            onClick={onGoProfile}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${isDarkMode ? 'bg-[#F15A24] text-white hover:opacity-90' : 'bg-[#1D1D4B] text-white hover:opacity-90'}`}
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              {user.displayName.charAt(0).toUpperCase()}
            </div>
            <span className="hidden sm:inline">{user.displayName.split(' ')[0]}</span>
          </button>
        ) : (
          <button
            onClick={onGoProfile}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24] border border-white/10' : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white border border-slate-200'}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="hidden sm:inline">Login</span>
          </button>
        )}

        {/* Theme Toggle */}
        <button 
          onClick={onToggleTheme}
          className={`p-2.5 rounded-xl transition-all ${isDarkMode ? 'bg-[#1a1a1a] text-yellow-400 border border-white/10 hover:border-white/20' : 'bg-slate-100 text-indigo-500 border border-slate-200 hover:border-slate-300'}`}
        >
          {isDarkMode ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        {/* Time or Timer Display */}
        {useClock ? (
          <div className={`px-4 py-2 rounded-xl font-mono font-bold text-sm ${isDarkMode ? 'bg-[#1a1a1a] text-white border border-white/10' : 'bg-slate-100 text-slate-900 border border-slate-200'}`}>
            {uzbekistanTime}
          </div>
        ) : (
          <div className={`px-4 py-2 rounded-xl font-mono font-bold text-sm ${timeRemaining < 300 ? 'text-red-500' : isDarkMode ? 'bg-[#1a1a1a] text-white border border-white/10' : 'bg-slate-100 text-slate-900 border border-slate-200'}`}>
            {Math.floor(timeRemaining / 60).toString().padStart(2, '0')}:{(timeRemaining % 60).toString().padStart(2, '0')}
          </div>
        )}

        {/* Finish Button */}
        {showFinishButton && (
          <button
            onClick={onFinish}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24] border border-white/10' : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white border border-slate-200'}`}
          >
            Finish
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
