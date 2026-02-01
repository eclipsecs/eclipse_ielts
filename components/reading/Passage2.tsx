
import React from 'react';
import { Theme, TestMeta } from '../../types';
import { AVAILABLE_TESTS } from '../../data/tests';

interface Passage2Props {
  theme: Theme;
  onToggleTheme: () => void;
  onSelectTest: (test: TestMeta) => void;
  onGoHome: () => void;
  onGoBack: () => void;
}

const Passage2: React.FC<Passage2Props> = ({ theme, onToggleTheme, onSelectTest, onGoHome, onGoBack }) => {
  const isDarkMode = theme === 'dark';

  // Filter tests for Passage 2
  const passage2Tests = AVAILABLE_TESTS.filter(t => t.category === 'reading' && t.passageNumber === 2);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#121212] text-white' : 'bg-[#F8FAFC] text-slate-900'}`}>
      <nav className={`h-20 flex items-center justify-between px-8 border-b sticky top-0 z-50 backdrop-blur-xl relative transition-all duration-500 ${isDarkMode ? 'bg-[#121212]/90 border-[#3a3a3a] shadow-xl' : 'bg-white/90 border-slate-200 shadow-sm'}`}>
        <div className="flex items-center gap-4 z-10">
          <button onClick={onGoBack} className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all border shadow-sm active:scale-95 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-white hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none">
          <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${isDarkMode ? 'from-[#F15A24]/20 to-[#F15A24]/10 border border-[#F15A24]/30' : 'from-[#1D1D4B]/10 to-[#1D1D4B]/5 border border-[#1D1D4B]/20'} shadow-lg`}>
            <span className={`font-black text-lg tracking-[0.2em] uppercase transition-colors duration-500 ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B]'}`}>
              Passage 2
            </span>
            <svg className={`w-5 h-5 animate-pulse ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>

        <button onClick={onToggleTheme} className={`p-3 rounded-2xl transition-all border ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] text-yellow-400 hover:border-[#F15A24]' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}>
          {isDarkMode ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-black uppercase tracking-tight">Reading <span className="text-[#F15A24]">Passage 2</span></h2>
          <p className={`text-sm mt-2 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-500'}`}>Select a passage to practice</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {passage2Tests.map(test => (
            <div key={test.id} onClick={() => test.isAvailable && onSelectTest(test)} className={`group relative p-8 rounded-[40px] border transition-all duration-500 overflow-hidden ${test.isAvailable ? (isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] hover:border-[#F15A24] hover:-translate-y-2 cursor-pointer shadow-xl hover:shadow-[#F15A24]/10' : 'bg-white border-slate-200 hover:border-slate-400 hover:-translate-y-2 cursor-pointer shadow-lg') : 'opacity-40 grayscale cursor-not-allowed'}`}>
              <div className="flex justify-between items-start mb-12">
                <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${test.difficulty === 'Easy' ? 'bg-green-500/10 text-green-500' : test.difficulty === 'Medium' ? 'bg-orange-500/10 text-orange-500' : 'bg-red-500/10 text-red-500'}`}>{test.difficulty}</div>
              </div>
              <div className="mb-8">
                <div className={`text-[11px] font-black uppercase tracking-[0.2em] mb-2 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>Passage 2</div>
                <h3 className={`text-2xl font-black leading-tight group-hover:text-[#F15A24] transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{test.title}</h3>
              </div>
              <div className="flex items-center gap-6 mt-auto">
                <div className={`flex items-center gap-2 transition-colors ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <span className="text-xs font-bold">{test.duration}m</span>
                </div>
                {test.isAvailable && (
                  <div className={`ml-auto w-10 h-10 rounded-full flex items-center justify-center transition-all ${isDarkMode ? 'bg-[#F15A24] text-white shadow-lg shadow-[#F15A24]/20' : 'bg-[#1D1D4B] text-white'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {passage2Tests.length === 0 && (
          <div className={`text-center py-20 ${isDarkMode ? 'text-[#b0b0b0]' : 'text-slate-400'}`}>
            <p className="text-lg">No Passage 2 tests available yet.</p>
            <p className="text-sm mt-2">Add tests with passageNumber: 2 to data/tests.ts</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Passage2;
