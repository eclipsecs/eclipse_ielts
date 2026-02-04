import React, { useState, useRef } from 'react';
import { Question, QuestionType, Theme } from '../../types';

interface FormRowProps {
  label: string;
  value?: string;
  placeholder?: string;
  isInput?: boolean;
  inputValue?: string;
  onChange?: (value: string) => void;
  isDarkMode: boolean;
}

const FormRow = ({ label, value, placeholder, isInput, inputValue, onChange, isDarkMode }: FormRowProps) => (
  <div className="flex items-center gap-3 py-2">
    <span className={`font-bold min-w-[140px] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{label}</span>
    {isInput ? (
      <div className="flex-1 flex items-center gap-2">
        {value && <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>{value}</span>}
        <input
          type="text"
          value={inputValue || ''}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 max-w-[200px] p-2 rounded-md border-2 font-bold outline-none transition-all text-sm ${
            isDarkMode ? 'bg-slate-900/50 border-slate-800 text-white focus:border-blue-500' : 'bg-white border-slate-200 text-black focus:border-blue-500 placeholder:text-slate-400'
          }`}
        />
      </div>
    ) : (
      <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>{value}</span>
    )}
  </div>
);

interface SectionBlockProps {
  section?: string;
  range: string;
  instruction: string;
  children?: React.ReactNode;
  isDarkMode: boolean;
}

const SectionBlock = ({ section, range, instruction, children, isDarkMode }: SectionBlockProps) => (
  <div className={`mb-6 sm:mb-8 md:mb-10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-[24px] md:rounded-[32px] border transition-all ${
    isDarkMode ? 'bg-[#1A1A1A] border-white/5 shadow-xl' : 'bg-white border-slate-200 shadow-md'
  }`}>
    {section && (
      <h3 className={`text-xs sm:text-xs font-black uppercase tracking-[0.2em] mb-2 ${isDarkMode ? 'text-orange-500' : 'text-orange-600'}`}>
        {section}
      </h3>
    )}
    <div className="mb-4 sm:mb-6">
      <h4 className={`text-[10px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-1 ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>
        {range}
      </h4>
      <p className={`text-sm sm:text-base font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        {instruction}
      </p>
    </div>
    {children}
  </div>
);

interface ListeningInterfaceProps {
  questions: Question[];
  userAnswers: Record<number, string | string[]>;
  onAnswerChange: (id: number, val: string | string[]) => void;
  audioUrl?: string;
  theme: Theme;
}

const ListeningInterface: React.FC<ListeningInterfaceProps> = ({
  questions,
  userAnswers,
  onAnswerChange,
  audioUrl: defaultAudioUrl,
  theme,
}) => {
  const isDarkMode = theme === 'dark';
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (audioRef.current && defaultAudioUrl) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const p = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(p || 0);
    }
  };

  const renderInput = (q: Question | undefined, customClass?: string) => {
    if (!q) return null;
    return (
      <div className={`inline-flex items-center gap-1.5 group ${customClass || ''}`}>
        <span className={`text-[10px] font-black opacity-30 group-focus-within:opacity-100 transition-opacity`}>{q.id}.</span>
        <input
          type="text"
          value={(userAnswers[q.id] as string) || ''}
          onChange={(e) => onAnswerChange(q.id, e.target.value)}
          placeholder={q.placeholder}
          className={`w-32 p-1.5 rounded-md border-2 font-bold outline-none transition-all text-sm shadow-inner ${
            isDarkMode ? 'bg-slate-900/50 border-slate-800 text-white focus:border-blue-500' : 'bg-white border-slate-200 text-black focus:border-blue-500 placeholder:text-slate-400'
          }`}
        />
      </div>
    );
  };

  const renderPartMCQ = (q: Question) => (
    <div key={q.id} id={`q-${q.id}`} className="mb-8 last:mb-0">
      <div className="flex gap-3 mb-3">
        <span className={`text-base font-black ${isDarkMode ? 'text-gray-500' : 'text-slate-400'}`}>{q.id}</span>
        <p className={`text-base font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{q.text}</p>
      </div>
      <div className="pl-8 space-y-2">
        {q.options?.map(opt => (
          <button
            key={opt.value}
            onClick={() => {
              const current = (userAnswers[q.id] as string[]) || [];
              const updated = current.includes(opt.value)
                ? current.filter(v => v !== opt.value)
                : [...current, opt.value];
              onAnswerChange(q.id, updated);
            }}
            className={`flex items-center gap-4 w-fit p-2 pr-6 rounded-lg border-2 transition-all ${
              (userAnswers[q.id] as string[])?.includes(opt.value) ? 'border-blue-500 bg-blue-500/5' : 'border-transparent hover:bg-slate-500/5'
            }`}
          >
            <span className={`text-sm font-black w-6 h-6 rounded flex items-center justify-center border-2 ${
              (userAnswers[q.id] as string[])?.includes(opt.value) ? 'bg-blue-500 border-blue-500 text-white' : isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-600'
            }`}>{opt.value}</span>
            <span className={`text-sm font-bold ${(userAnswers[q.id] as string[])?.includes(opt.value) ? 'text-blue-500' : isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  // Check if this is Test 1 (special form layout)
  const isTest1 = questions[0]?.section === 'SECTION 1' && questions[0]?.group === 'header';

  // Render form layout for Test 1
  if (isTest1) {
    const personalDetails = questions.filter(q => q.group === 'Personal Details');
    const workRequirements = questions.filter(q => q.group === 'Temporary Work Requirements');
    const questions8to10 = questions.filter(q => q.group === 'Questions 8-10');
    const section2 = questions.filter(q => q.section === 'SECTION 2');

    return (
      <div className={`flex h-full w-full transition-colors ${isDarkMode ? 'bg-[#121212]' : 'bg-[#F8FAFC]'}`}>
        {/* Floating Back Button */}
        <button 
          onClick={() => window.history.back()}
          className={`fixed bottom-8 left-8 z-50 flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24] shadow-sm border border-[#333]' : 'bg-white text-slate-700 hover:bg-[#1D1D4B] hover:text-white shadow-sm border border-slate-200'}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back</span>
        </button>
        
        <div className="w-full overflow-y-auto px-10 py-8">
          <div className="max-w-4xl mx-auto space-y-16 pb-64">
            <div className={`sticky top-0 z-30 p-5 rounded-[32px] border mb-12 backdrop-blur-2xl ${isDarkMode ? 'bg-[#1A1A1A]/90 border-white/10 shadow-xl' : 'bg-white/90 border-slate-200 shadow-md'}`}>
              <div className="flex items-center gap-6">
                  <button onClick={togglePlay} className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-all ${isDarkMode ? 'bg-white text-black' : 'bg-[#1D1D4B] text-white hover:bg-black'}`}>
                    {isPlaying ? <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> : <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>}
                  </button>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500">IELTS AUDIO STREAM</span>
                      <span className="text-[9px] font-black tracking-widest opacity-60">PROGRESS: {Math.round(progress)}%</span>
                    </div>
                    <div className={`h-1 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-white/5' : 'bg-slate-100'}`}>
                       <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
              </div>
              <audio ref={audioRef} src={defaultAudioUrl} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)} className="hidden" />
            </div>

            {/* SECTION 1 - Form Layout */}
            <SectionBlock
              section="SECTION 1"
              range="Questions 1-10"
              instruction="Complete the notes below."
              isDarkMode={isDarkMode}
            >
              {/* Form Header */}
              <div className="mb-8 text-center">
                <h2 className={`text-2xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Harper Holiday Job Agency</h2>
                <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Application for Temporary Work</p>
              </div>

              {/* Personal Details Section */}
              <div className="mb-6">
                <h3 className={`text-sm font-black uppercase tracking-[0.15em] mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Personal Details
                </h3>
                <FormRow label="First Name:" value="Lily" isDarkMode={isDarkMode} />
                <FormRow 
                  label="Surname:" 
                  isInput 
                  placeholder="1."
                  inputValue={(userAnswers[1] as string) || ''}
                  onChange={(val) => onAnswerChange(1, val)}
                  isDarkMode={isDarkMode}
                />
                <FormRow 
                  label="Date of birth:" 
                  isInput 
                  placeholder="2."
                  inputValue={(userAnswers[2] as string) || ''}
                  onChange={(val) => onAnswerChange(2, val)}
                  isDarkMode={isDarkMode}
                />
              </div>

              {/* Temporary Work Requirements Section */}
              <div className="mb-6">
                <h3 className={`text-sm font-black uppercase tracking-[0.15em] mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Temporary Work Requirements
                </h3>
                <FormRow 
                  label="Period when work wanted from June to" 
                  isInput 
                  placeholder="3."
                  inputValue={(userAnswers[3] as string) || ''}
                  onChange={(val) => onAnswerChange(3, val)}
                  isDarkMode={isDarkMode}
                />
                <FormRow 
                  label="Where work wanted:" 
                  isInput 
                  placeholder="4."
                  inputValue={(userAnswers[4] as string) || ''}
                  onChange={(val) => onAnswerChange(4, val)}
                  isDarkMode={isDarkMode}
                />
                <FormRow 
                  label="" 
                  isInput 
                  placeholder="5."
                  inputValue={(userAnswers[5] as string) || ''}
                  onChange={(val) => onAnswerChange(5, val)}
                  isDarkMode={isDarkMode}
                />
                
                <div className="mt-4">
                  <p className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Type of work wanted:</p>
                  <FormRow 
                    label="1st priority:" 
                    isInput 
                    placeholder="6."
                    inputValue={(userAnswers[6] as string) || ''}
                    onChange={(val) => onAnswerChange(6, val)}
                    isDarkMode={isDarkMode}
                  />
                  <FormRow 
                    label="2nd priority:" 
                    isInput 
                    placeholder="7."
                    inputValue={(userAnswers[7] as string) || ''}
                    onChange={(val) => onAnswerChange(7, val)}
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
              {/* Questions 8-10 */}
              <div className="mt-8">
                <p className={`text-sm font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Questions 8-10</p>
                {questions8to10.map(q => renderPartMCQ(q))}
              </div>
            </SectionBlock>

            {/* SECTION 2 */}
            {section2.map(q => renderPartMCQ(q))}
          </div>
        </div>
      </div>
    );
  }

  // Original layout for other tests
  // Group questions by section
  const groupedQuestions = questions.reduce((acc, q) => {
    const key = q.section || 'default';
    if (!acc[key]) acc[key] = [];
    acc[key].push(q);
    return acc;
  }, {} as Record<string, Question[]>);

  return (
    <div className={`flex h-full w-full transition-colors ${isDarkMode ? 'bg-[#121212]' : 'bg-[#F8FAFC]'}`}>
      {/* Floating Back Button */}
      <button 
        onClick={() => window.history.back()}
        className={`fixed bottom-8 left-8 z-50 flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24] shadow-sm border border-[#333]' : 'bg-white text-slate-700 hover:bg-[#1D1D4B] hover:text-white shadow-sm border border-slate-200'}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back</span>
      </button>
      
      <div className="w-full overflow-y-auto px-10 py-8">
        <div className="max-w-4xl mx-auto space-y-16 pb-64">
          <div className={`sticky top-0 z-30 p-5 rounded-[32px] border mb-12 backdrop-blur-2xl ${isDarkMode ? 'bg-[#1A1A1A]/90 border-white/10 shadow-xl' : 'bg-white/90 border-slate-200 shadow-md'}`}>
            <div className="flex items-center gap-6">
                <button onClick={togglePlay} className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-all ${isDarkMode ? 'bg-white text-black' : 'bg-[#1D1D4B] text-white hover:bg-black'}`}>
                  {isPlaying ? <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> : <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>}
                </button>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500">IELTS AUDIO STREAM</span>
                    <span className="text-[9px] font-black tracking-widest opacity-60">PROGRESS: {Math.round(progress)}%</span>
                  </div>
                  <div className={`h-1 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-white/5' : 'bg-slate-100'}`}>
                     <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
            </div>
            <audio ref={audioRef} src={defaultAudioUrl} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)} className="hidden" />
          </div>

          {Object.entries(groupedQuestions).map(([section, sectionQuestions]) => {
            const sectionQ = sectionQuestions as Question[];
            const innerGroups = sectionQ.reduce((acc, q) => {
              const key = q.group || 'default';
              if (!acc[key]) acc[key] = [];
              acc[key].push(q);
              return acc;
            }, {} as Record<string, Question[]>);

            return (
              <div key={section}>
                {Object.entries(innerGroups).map(([group, groupQuestions]) => {
                  const groupQ = groupQuestions as Question[];
                  const firstQ = groupQ[0];
                  return (
                    <React.Fragment key={`${section}-${group}`}>
                      <SectionBlock
                        section={firstQ.section}
                        range={firstQ.group || ''}
                        instruction={firstQ.group ? `Complete the notes below.` : 'Answer the questions below.'}
                        isDarkMode={isDarkMode}
                      >
                        {groupQ.map(q => {
                          if (q.type === QuestionType.MULTIPLE_CHOICE || q.type === QuestionType.MATCHING) {
                            return renderPartMCQ(q);
                          }
                          return (
                            <div key={q.id} className="mb-6 p-4 rounded-xl border border-transparent hover:border-blue-500/20 transition-all">
                               <p className="text-sm font-bold mb-3">{q.text}</p>
                               {renderInput(q)}
                            </div>
                          );
                        })}
                      </SectionBlock>
                    </React.Fragment>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListeningInterface;
