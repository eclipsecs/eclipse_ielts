import React from 'react';
import { Theme } from '../../types';

interface LogoProps {
  className?: string;
  showText?: boolean;
  theme?: Theme;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, theme = 'light', onClick }) => {
  const isDarkMode = theme === 'dark';
  const brandColor = "#F15A24";
  const primaryColor = isDarkMode ? '#FFFFFF' : '#1D1D4B';
  const accentColor = brandColor;
  const Container = onClick ? 'button' : 'div';
  const fontStack = '"Fredoka", "Balsamiq Sans", "Inter", "Segoe UI", system-ui, -apple-system, sans-serif';

  return (
    <Container 
      onClick={onClick}
      className={`group flex items-center gap-4 outline-none transition-all duration-300 active:scale-95 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...(onClick ? { type: 'button', 'aria-label': 'Go to home' } : {})}
    >
      {/* Icon */}
      <div className="relative h-full aspect-square flex items-center justify-center">
        <svg viewBox="0 0 64 64" className="w-full h-full transition-transform duration-300 group-hover:scale-110">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={brandColor} />
              <stop offset="100%" stopColor="#E74C3C" />
            </linearGradient>
            <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
            </filter>
          </defs>
          
          {/* Background Circle */}
          <circle cx="32" cy="32" r="30" fill={isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(241, 90, 36, 0.08)'} />
          
          {/* Book Icon */}
          <g transform="translate(12, 12)" fill="none" stroke="url(#logoGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#logoShadow)">
            {/* Book Base */}
            <path d="M8 4C8 2 10 2 12 4L36 4C38 2 40 2 40 4L40 44C40 46 38 46 36 44L12 44C10 46 8 46 8 44L8 4Z" fill={isDarkMode ? 'rgba(241, 90, 36, 0.1)' : 'rgba(241, 90, 36, 0.08)'} />
            
            {/* Book Spine */}
            <line x1="24" y1="4" x2="24" y2="44" strokeWidth="2" />
            
            {/* Pages Lines - Left */}
            <line x1="12" y1="12" x2="20" y2="12" strokeWidth="1.5" />
            <line x1="12" y1="18" x2="20" y2="18" strokeWidth="1.5" />
            <line x1="12" y1="24" x2="20" y2="24" strokeWidth="1.5" />
            <line x1="12" y1="30" x2="18" y2="30" strokeWidth="1.5" />
            <line x1="12" y1="36" x2="18" y2="36" strokeWidth="1.5" />
            
            {/* Pages Lines - Right */}
            <line x1="28" y1="12" x2="36" y2="12" strokeWidth="1.5" />
            <line x1="28" y1="18" x2="36" y2="18" strokeWidth="1.5" />
            <line x1="28" y1="24" x2="36" y2="24" strokeWidth="1.5" />
            <line x1="28" y1="30" x2="34" y2="30" strokeWidth="1.5" />
            <line x1="28" y1="36" x2="34" y2="36" strokeWidth="1.5" />
            
            {/* Bookmark Ribbon */}
            <path d="M28 4L32 8L36 4" fill="none" strokeWidth="2" />
            <path d="M32 8L32 18" strokeWidth="1.5" />
          </g>
          
          {/* Decorative Dot */}
          <circle cx="52" cy="12" r="4" fill={brandColor} className="opacity-80" />
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col justify-center text-left select-none leading-none">
          <span 
            className="cartoon-logo transition-all duration-300 group-hover:scale-110"
            style={{ 
              color: primaryColor, 
              fontSize: '1.75rem', 
              fontFamily: fontStack, 
              fontWeight: '700',
              letterSpacing: '0.02em',
              textShadow: isDarkMode ? '2px 2px 0 rgba(0,0,0,0.3)' : '2px 2px 0 rgba(241, 90, 36, 0.15)',
              transform: 'rotate(-1deg)'
            }}
          >
            JAVOKHIRS <span style={{ color: brandColor }}>IELTS</span>
          </span>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="h-[3px] w-12 bg-gradient-to-r from-brandColor to-transparent rounded-full"></div>
            <span 
              className="text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300"
              style={{ 
                color: primaryColor, 
                opacity: 0.7, 
                fontFamily: fontStack,
                textShadow: isDarkMode ? 'none' : '0 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              Practice Excellence
            </span>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Logo;
