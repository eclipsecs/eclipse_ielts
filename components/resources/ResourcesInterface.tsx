
import React from 'react';
import { Theme } from '../../types';
import { STUDY_MATERIALS, PODCASTS, WEBSITES, BOOKS, RESOURCE_ARTICLES } from '../../data/resources';

interface ResourcesInterfaceProps {
  theme: Theme;
  onToggleTheme: () => void;
  onGoHome: () => void;
  onGoStudyMaterials: () => void;
  onGoPodcasts: () => void;
  onGoWebsites: () => void;
  onGoBooks: () => void;
  onGoResourceArticles: () => void;
  initialResourceView?: ResourceView;
}

type ResourceView = 'main' | 'study-materials' | 'podcasts' | 'websites' | 'books' | 'resource-articles';

const ResourcesInterface: React.FC<ResourcesInterfaceProps> = ({
  theme,
  onToggleTheme,
  onGoHome,
  onGoStudyMaterials,
  onGoPodcasts,
  onGoWebsites,
  onGoBooks,
  onGoResourceArticles,
  initialResourceView = 'main'
}) => {
  const [currentView, setCurrentView] = React.useState<ResourceView>(initialResourceView);
  const isDarkMode = theme === 'dark';

  const handleBack = () => {
    setCurrentView('main');
  };

  const renderMainView = () => (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <button onClick={onGoHome} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </button>
          <h2 className="text-3xl font-black uppercase tracking-tight">Learning <span className="text-[#F15A24]">Resources</span></h2>
        </div>
        <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>Explore books, videos, and study materials</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Study Materials */}
        <button onClick={() => setCurrentView('study-materials')} className={`group relative p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-3 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="10" width="48" height="44" rx="4" fill="#26A69A"/>
              <rect x="12" y="14" width="40" height="36" rx="2" fill="#E0F2F1"/>
              <rect x="28" y="10" width="8" height="44" fill="#1A5D5A"/>
              <line x1="16" y1="22" x2="26" y2="22" stroke="#B2DFDB" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16" y1="28" x2="26" y2="28" stroke="#B2DFDB" strokeWidth="2" strokeLinecap="round"/>
              <line x1="16" y1="34" x2="24" y2="34" stroke="#B2DFDB" strokeWidth="2" strokeLinecap="round"/>
              <line x1="38" y1="22" x2="48" y2="22" stroke="#B2DFDB" strokeWidth="2" strokeLinecap="round"/>
              <line x1="38" y1="28" x2="48" y2="28" stroke="#B2DFDB" strokeWidth="2" strokeLinecap="round"/>
              <line x1="38" y1="34" x2="46" y2="34" stroke="#B2DFDB" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>STUDY MATERIALS</span>
          <h3 className={`text-2xl font-black mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Study Materials</h3>
          <p className={`text-sm mt-3 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>Notes, exercises, and practice sheets</p>
          <div className={`inline-flex items-center gap-2 mt-4 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Browse Materials <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        </button>

        {/* Podcasts */}
        <button onClick={() => setCurrentView('podcasts')} className={`group relative p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-3 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="20" width="40" height="28" rx="4" fill="#7E57C2"/>
              <rect x="16" y="24" width="32" height="20" rx="2" fill="#EDE7F6"/>
              <circle cx="32" cy="34" r="8" fill="#7E57C2"/>
              <path d="M30 30V38L36 34L30 30Z" fill="#EDE7F6"/>
              <circle cx="20" cy="16" r="4" fill="#FF7043"/>
              <circle cx="44" cy="16" r="4" fill="#FF7043"/>
            </svg>
          </div>
          <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>AUDIO CONTENT</span>
          <h3 className={`text-2xl font-black mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Podcasts</h3>
          <p className={`text-sm mt-3 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>Listen to IELTS podcasts and audio lessons</p>
          <div className={`inline-flex items-center gap-2 mt-4 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Listen Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        </button>

        {/* Websites */}
        <button onClick={() => setCurrentView('websites')} className={`group relative p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-3 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="12" width="48" height="40" rx="4" fill="#1E88E5"/>
              <rect x="10" y="14" width="44" height="36" rx="2" fill="#E3F2FD"/>
              <rect x="10" y="14" width="44" height="8" fill="#1E88E5"/>
              <circle cx="18" cy="18" r="2" fill="#fff"/>
              <circle cx="24" cy="18" r="2" fill="#fff"/>
              <circle cx="30" cy="18" r="2" fill="#fff"/>
              <line x1="14" y1="30" x2="50" y2="30" stroke="#BBDEFB" strokeWidth="2" strokeLinecap="round"/>
              <line x1="14" y1="36" x2="40" y2="36" stroke="#BBDEFB" strokeWidth="2" strokeLinecap="round"/>
              <line x1="14" y1="42" x2="46" y2="42" stroke="#BBDEFB" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>EXTERNAL LINKS</span>
          <h3 className={`text-2xl font-black mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Websites</h3>
          <p className={`text-sm mt-3 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>Useful websites for IELTS preparation</p>
          <div className={`inline-flex items-center gap-2 mt-4 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Explore Links <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        </button>

        {/* Books to Read */}
        <button onClick={() => setCurrentView('books')} className={`group relative p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-3 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="16" width="24" height="36" rx="2" fill="#FF7043"/>
              <rect x="34" y="16" width="24" height="36" rx="2" fill="#4DB6AC"/>
              <rect x="10" y="20" width="16" height="28" rx="1" fill="#FFE0B2"/>
              <rect x="38" y="20" width="16" height="28" rx="1" fill="#B2DFDB"/>
              <rect x="29" y="16" width="6" height="36" fill="#5D4037"/>
              <line x1="14" y1="28" x2="22" y2="28" stroke="#FFAB91" strokeWidth="2" strokeLinecap="round"/>
              <line x1="14" y1="34" x2="22" y2="34" stroke="#FFAB91" strokeWidth="2" strokeLinecap="round"/>
              <line x1="14" y1="40" x2="20" y2="40" stroke="#FFAB91" strokeWidth="2" strokeLinecap="round"/>
              <line x1="42" y1="28" x2="50" y2="28" stroke="#80CBC4" strokeWidth="2" strokeLinecap="round"/>
              <line x1="42" y1="34" x2="50" y2="34" stroke="#80CBC4" strokeWidth="2" strokeLinecap="round"/>
              <line x1="42" y1="40" x2="48" y2="40" stroke="#80CBC4" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>READING LIST</span>
          <h3 className={`text-2xl font-black mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Books to Read</h3>
          <p className={`text-sm mt-3 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>Recommended books for IELTS success</p>
          <div className={`inline-flex items-center gap-2 mt-4 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>View Books <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        </button>

        {/* Articles */}
        <button onClick={() => setCurrentView('resource-articles')} className={`group relative p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-3 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="8" width="44" height="48" rx="4" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="2"/>
              <path d="M44 8V16C44 18.2091 45.7909 20 48 20H54" stroke="#E0E0E0" strokeWidth="2" fill="none"/>
              <line x1="18" y1="24" x2="46" y2="24" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="32" x2="46" y2="32" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="40" x2="40" y2="40" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round"/>
              <line x1="18" y1="48" x2="34" y2="48" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>ARTICLES</span>
          <h3 className={`text-2xl font-black mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Articles</h3>
          <p className={`text-sm mt-3 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>Informative articles and guides</p>
          <div className={`inline-flex items-center gap-2 mt-4 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Read Articles <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        </button>
      </div>
    </div>
  );

  const renderStudyMaterialsView = () => (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <h2 className="text-3xl font-black uppercase tracking-tight">Study <span className="text-[#F15A24]">Materials</span></h2>
        </div>
        <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>Grammar, vocabulary, tips, and practice exercises</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {STUDY_MATERIALS.map((material) => (
          <div key={material.id} className={`group p-8 rounded-[40px] border transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${material.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' : material.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                {material.difficulty}
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${material.type === 'grammar' ? 'bg-blue-100 text-blue-700' : material.type === 'vocabulary' ? 'bg-purple-100 text-purple-700' : material.type === 'tips' ? 'bg-orange-100 text-orange-700' : 'bg-teal-100 text-teal-700'}`}>
                {material.type.charAt(0).toUpperCase() + material.type.slice(1)}
              </span>
            </div>
            <h3 className={`text-xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{material.title}</h3>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{material.description}</p>
            <button className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${isDarkMode ? 'bg-[#F15A24] text-white hover:opacity-90' : 'bg-[#1D1D4B] text-white hover:opacity-90'}`}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPodcastsView = () => (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <h2 className="text-3xl font-black uppercase tracking-tight">IELTS <span className="text-[#F15A24]">Podcasts</span></h2>
        </div>
        <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>Listen and improve your English skills</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {PODCASTS.map((podcast) => (
          <a key={podcast.id} href={podcast.url} target="_blank" rel="noopener noreferrer" className={`group p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
            <div className="flex items-start justify-between mb-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "#F15A24" : "#1D1D4B"} strokeWidth="2">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="23"/>
                  <line x1="8" y1="23" x2="16" y2="23"/>
                </svg>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isDarkMode ? 'bg-[#252525] text-[#b0b0b0]' : 'bg-slate-100 text-slate-500'}`}>{podcast.duration}</span>
            </div>
            <h3 className={`text-lg font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{podcast.title}</h3>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{podcast.description}</p>
            <p className={`text-xs ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B]'}`}>Host: {podcast.host}</p>
            <div className={`inline-flex items-center gap-2 mt-4 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Listen Now <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </a>
        ))}
      </div>
    </div>
  );

  const renderWebsitesView = () => (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <h2 className="text-3xl font-black uppercase tracking-tight">Useful <span className="text-[#F15A24]">Websites</span></h2>
        </div>
        <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>External resources for IELTS preparation</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {WEBSITES.map((website) => (
          <a key={website.id} href={website.url} target="_blank" rel="noopener noreferrer" className={`group p-8 rounded-[40px] border text-left transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
            <div className="flex items-start justify-between mb-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-100'}`}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? "#F15A24" : "#1D1D4B"} strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${website.category === 'official' ? 'bg-blue-100 text-blue-700' : website.category === 'practice' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
                {website.category.charAt(0).toUpperCase() + website.category.slice(1)}
              </span>
            </div>
            <h3 className={`text-lg font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{website.name}</h3>
            <p className={`text-sm ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{website.description}</p>
            <div className={`inline-flex items-center gap-2 mt-4 font-black text-xs uppercase tracking-widest transition-colors ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B] group-hover:text-[#F15A24]'}`}>Visit Website <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
          </a>
        ))}
      </div>
    </div>
  );

  const renderBooksView = () => (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <h2 className="text-3xl font-black uppercase tracking-tight">Books to <span className="text-[#F15A24]">Read</span></h2>
        </div>
        <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>Recommended books for IELTS preparation</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {BOOKS.map((book) => (
          <div key={book.id} className={`group p-8 rounded-[40px] border transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isDarkMode ? 'bg-[#252525] text-[#b0b0b0]' : 'bg-slate-100 text-slate-500'}`}>
                {book.level}
              </span>
            </div>
            <h3 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{book.title}</h3>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B]'}`}>{book.author}</p>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{book.description}</p>
            {book.amazonUrl && (
              <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${isDarkMode ? 'bg-[#F15A24] text-white hover:opacity-90' : 'bg-[#1D1D4B] text-white hover:opacity-90'}`}>
                View on Amazon
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderResourceArticlesView = () => (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <button onClick={handleBack} className={`p-3 rounded-2xl transition-all border shadow-sm ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <h2 className="text-3xl font-black uppercase tracking-tight">Resource <span className="text-[#F15A24]">Articles</span></h2>
        </div>
        <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>Tips, strategies, and guides for IELTS success</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {RESOURCE_ARTICLES.map((article) => (
          <div key={article.id} className={`group p-8 rounded-[40px] border transition-all duration-500 hover:-translate-y-2 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24]' : 'bg-white border-slate-200 hover:border-slate-400 shadow-lg hover:shadow-xl'}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${article.category === 'tips' ? 'bg-orange-100 text-orange-700' : article.category === 'strategies' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isDarkMode ? 'bg-[#252525] text-[#b0b0b0]' : 'bg-slate-100 text-slate-500'}`}>
                {article.readTime} min read
              </span>
            </div>
            <h3 className={`text-xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{article.title}</h3>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>{article.description}</p>
            <button className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${isDarkMode ? 'bg-[#F15A24] text-white hover:opacity-90' : 'bg-[#1D1D4B] text-white hover:opacity-90'}`}>
              Read Article
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-[#F8FAFC] text-slate-900'}`}>
      <nav className={`h-20 flex items-center justify-between px-8 border-b sticky top-0 z-50 backdrop-blur-xl relative transition-all duration-500 ${isDarkMode ? 'bg-[#121212]/90 border-[#3a3a3a] shadow-xl' : 'bg-white/90 border-slate-200 shadow-sm'}`}>
        <div className="flex items-center gap-4 z-10">
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
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {currentView === 'main' && renderMainView()}
        {currentView === 'study-materials' && renderStudyMaterialsView()}
        {currentView === 'podcasts' && renderPodcastsView()}
        {currentView === 'websites' && renderWebsitesView()}
        {currentView === 'books' && renderBooksView()}
        {currentView === 'resource-articles' && renderResourceArticlesView()}
      </main>
    </div>
  );
};

export default ResourcesInterface;
