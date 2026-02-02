
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Question, QuestionType, Theme } from '../../types';

interface Highlight {
  id: string;
  paraIndex: number;
  start: number;
  end: number;
  color: string;
}

interface ReadingInterfaceProps {
  passageTitle: string;
  passageSubtitle: string;
  passageContent: string[];
  questions: Question[];
  userAnswers: Record<number, string | string[]>;
  onAnswerChange: (id: number, val: string) => void;
  theme: Theme;
  passageNumber?: number;
}

const COLORS = [
  { name: 'Yellow', value: 'rgba(254, 240, 138, 0.5)', class: 'bg-yellow-200/50' },
  { name: 'Green', value: 'rgba(134, 239, 172, 0.5)', class: 'bg-green-300/50' },
  { name: 'Red', value: 'rgba(248, 6, 6, 0.5)', class: 'bg-red-300/50' },
  { name: 'Blue', value: 'rgba(147, 197, 253, 0.5)', class: 'bg-blue-300/50' },
  { name: 'Cyan', value: 'rgba(34, 211, 238, 0.5)', class: 'bg-cyan-300/50' },
  { name: 'Pink', value: 'rgba(249, 168, 212, 0.5)', class: 'bg-pink-300/50' },
];

const ReadingInterface: React.FC<ReadingInterfaceProps> = ({
  passageTitle,
  passageSubtitle,
  passageContent,
  questions,
  userAnswers,
  onAnswerChange,
  theme,
  passageNumber = 1,
}) => {
  const isDarkMode = theme === 'dark';
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [toolbarPos, setToolbarPos] = useState<{ x: number; y: number } | null>(null);
  const [currentSelection, setCurrentSelection] = useState<{ paraIndex: number; start: number; end: number } | null>(null);
  const passageRef = useRef<HTMLDivElement>(null);

  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !passageRef.current) {
      setToolbarPos(null);
      setCurrentSelection(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    
    let paraEl = container.nodeType === 3 ? container.parentElement : container as HTMLElement;
    while (paraEl && !paraEl.hasAttribute('data-para-index')) {
      paraEl = paraEl.parentElement;
    }

    if (paraEl && passageRef.current.contains(paraEl)) {
      const paraIndex = parseInt(paraEl.getAttribute('data-para-index') || '0', 10);
      const preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(paraEl);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      const start = preSelectionRange.toString().length;
      const end = start + range.toString().length;

      const rect = range.getBoundingClientRect();
      setToolbarPos({
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
      });
      setCurrentSelection({ paraIndex, start, end });
    } else {
      setToolbarPos(null);
      setCurrentSelection(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, [handleSelection]);

  const addHighlight = (color: string) => {
    if (!currentSelection) return;
    const newHighlight: Highlight = { id: Math.random().toString(36).substr(2, 9), ...currentSelection, color };
    setHighlights(prev => [...prev, newHighlight]);
    setToolbarPos(null);
    setCurrentSelection(null);
    window.getSelection()?.removeAllRanges();
  };

  const clearHighlightsAtSelection = () => {
    if (!currentSelection) return;
    setHighlights(prev => prev.filter(h => 
      !(h.paraIndex === currentSelection.paraIndex && 
        ((h.start >= currentSelection.start && h.start < currentSelection.end) || 
         (h.end > currentSelection.start && h.end <= currentSelection.end)))
    ));
    setToolbarPos(null);
    setCurrentSelection(null);
    window.getSelection()?.removeAllRanges();
  };

  const renderHighlightedText = (text: string, paraIndex: number) => {
    const paraHighlights = highlights
      .filter(h => h.paraIndex === paraIndex)
      .sort((a, b) => a.start - b.start);
    if (paraHighlights.length === 0) return text;
    const result: React.ReactNode[] = [];
    let lastIndex = 0;
    paraHighlights.forEach((h, i) => {
      if (h.start > lastIndex) result.push(text.substring(lastIndex, h.start));
      result.push(<mark key={h.id} style={{ backgroundColor: h.color }} className="rounded-sm transition-colors duration-200">{text.substring(h.start, h.end)}</mark>);
      lastIndex = h.end;
    });
    if (lastIndex < text.length) result.push(text.substring(lastIndex));
    return result;
  };

  const renderInput = (q: Question) => {
    // Check if this is note completion format (has noteText and blankText)
    if (q.noteText && q.blankText) {
      return (
        <div key={q.id} id={`q-${q.id}`} className="mb-3 pl-8 relative">
          <span className={`absolute left-0 font-bold text-sm ${isDarkMode ? 'text-[#F15A24]' : 'text-blue-800'}`}>({q.id})</span>
          <div className="flex flex-wrap items-baseline gap-2">
            <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{q.noteText}</span>
            <input
              type="text"
              value={(userAnswers[q.id] as string) || ''}
              onChange={(e) => onAnswerChange(q.id, e.target.value)}
              className={`min-w-[100px] h-7 border-b-2 text-center font-bold text-sm outline-none ${isDarkMode ? 'border-[#F15A24] text-[#F15A24] bg-[#F15A24]/5' : 'border-blue-800 text-blue-800 bg-blue-50'}`}
              placeholder="..."
            />
            <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{q.blankText}</span>
          </div>
        </div>
      );
    }

    // Default input format
    return (
      <div key={q.id} id={`q-${q.id}`} className={`mb-4 p-6 rounded-[24px] border transition-all ${isDarkMode ? 'bg-slate-800/40 border-white/5 hover:border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
        <div className="flex gap-4">
          <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${isDarkMode ? 'bg-white/5 text-[#F15A24]' : 'bg-slate-100 text-slate-500'}`}>{q.id}</span>
          <div className="flex-1">
            <p className={`text-[15px] mb-4 font-bold leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{q.text}</p>
            <input
              type="text"
              value={(userAnswers[q.id] as string) || ''}
              onChange={(e) => onAnswerChange(q.id, e.target.value)}
              placeholder="Type your answer..."
              className={`w-full p-3.5 rounded-xl border outline-none transition-all text-sm font-medium ${
                isDarkMode ? 'bg-[#020617]/50 border-white/5 text-white focus:border-[#F15A24] placeholder:text-slate-600' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-800'
              }`}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderClassification = (q: Question) => (
    <div key={q.id} id={`q-${q.id}`} className={`mb-4 p-6 rounded-[24px] border transition-all ${isDarkMode ? 'bg-slate-800/40 border-white/5 hover:border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="flex gap-4">
        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${isDarkMode ? 'bg-white/5 text-[#F15A24]' : 'bg-slate-100 text-slate-500'}`}>{q.id}</span>
        <div className="flex-1">
          <p className={`text-[15px] mb-4 font-bold leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{q.text}</p>
          <div className="flex flex-wrap gap-2">
            {['A', 'B', 'C', 'D'].map(val => (
              <button
                key={val}
                onClick={() => onAnswerChange(q.id, val)}
                className={`
                  w-10 h-10 rounded-xl border font-bold transition-all text-sm
                  ${userAnswers[q.id] === val 
                    ? isDarkMode ? 'bg-[#F15A24] text-white border-[#F15A24] shadow-lg shadow-[#F15A24]/20' : 'bg-blue-800 text-white border-blue-800' 
                    : isDarkMode
                      ? 'bg-[#020617]/50 text-slate-400 border-white/5 hover:border-white/20'
                      : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-400'}
                `}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRadioTFNG = (q: Question) => (
    <div key={q.id} id={`q-${q.id}`} className={`mb-4 p-6 rounded-[24px] border transition-all ${isDarkMode ? 'bg-slate-800/40 border-white/5 hover:border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="flex gap-4">
        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${isDarkMode ? 'bg-white/5 text-[#F15A24]' : 'bg-slate-100 text-slate-500'}`}>{q.id}</span>
        <div className="flex-1">
          <p className={`text-[15px] mb-4 font-bold leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{q.text}</p>
          <div className="flex flex-col sm:flex-row gap-2">
            {['TRUE', 'FALSE', 'NOT GIVEN'].map(val => (
              <button
                key={val}
                onClick={() => onAnswerChange(q.id, val)}
                className={`
                  flex-1 py-3 px-4 rounded-xl border font-bold text-[11px] transition-all text-center tracking-widest uppercase
                  ${userAnswers[q.id] === val 
                    ? isDarkMode ? 'bg-[#F15A24] text-white border-[#F15A24] shadow-lg shadow-[#F15A24]/20' : 'bg-blue-800 text-white border-blue-800' 
                    : isDarkMode
                      ? 'bg-[#020617]/50 text-slate-500 border-white/5 hover:border-white/20'
                      : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-slate-400'}
                `}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSelectEndings = (q: Question) => (
    <div key={q.id} id={`q-${q.id}`} className={`mb-4 p-6 rounded-[24px] border transition-all ${isDarkMode ? 'bg-slate-800/40 border-white/5 hover:border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="flex gap-4">
        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${isDarkMode ? 'bg-white/5 text-[#F15A24]' : 'bg-slate-100 text-slate-500'}`}>{q.id}</span>
        <div className="flex-1">
          <p className={`font-bold mb-4 text-[15px] leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{q.text}</p>
          <select
            value={(userAnswers[q.id] as string) || ''}
            onChange={(e) => onAnswerChange(q.id, e.target.value)}
            className={`w-full p-3 rounded-xl border outline-none transition-all text-sm appearance-none font-medium ${
              isDarkMode ? 'bg-[#020617]/50 border-white/5 text-white focus:border-[#F15A24]' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-800'
            }`}
          >
            <option value="" className={isDarkMode ? 'bg-slate-900' : ''}>Select an ending...</option>
            {q.options?.map(opt => (
              <option key={opt.value} value={opt.value} className={isDarkMode ? 'bg-slate-900' : ''}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const renderParagraphMatch = (q: Question) => (
    <div key={q.id} id={`q-${q.id}`} className={`mb-4 p-6 rounded-[24px] border transition-all ${isDarkMode ? 'bg-slate-800/40 border-white/5 hover:border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="flex gap-4">
        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${isDarkMode ? 'bg-white/5 text-[#F15A24]' : 'bg-slate-100 text-slate-500'}`}>{q.id}</span>
        <div className="flex-1">
          <p className={`text-[15px] mb-4 font-bold leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{q.text}</p>
          <select
            value={(userAnswers[q.id] as string) || ''}
            onChange={(e) => onAnswerChange(q.id, e.target.value)}
            className={`w-full p-3 rounded-xl border outline-none transition-all text-sm appearance-none font-medium ${
              isDarkMode ? 'bg-[#020617]/50 border-white/5 text-white focus:border-[#F15A24]' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-800'
            }`}
          >
            <option value="" className={isDarkMode ? 'bg-slate-900' : ''}>Select paragraph...</option>
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map(val => (
              <option key={val} value={val} className={isDarkMode ? 'bg-slate-900' : ''}>{val}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const sections: { id: string; title: string; instruction: string; qs: Question[]; type: string; options?: string[]; note?: string; tfngInstructions?: string[]; sectionHeading?: string; subHeading?: string }[] = [];
  const qRange = (start: number, end: number) => (questions || []).filter(q => q.id >= start && q.id <= end);

  if (passageTitle === "Ambergris") {
    sections.push({ id: 's1', title: 'Questions 1-6', instruction: 'Classify the following information as referring to:', options: ['A - ambergris only', 'B - amber only', 'C - both ambergris and amber', 'D - neither ambergris nor amber'], qs: qRange(1, 6), type: 'classification' });
    sections.push({ id: 's2', title: 'Questions 7-9', instruction: 'Complete the sentences below with NO MORE THAN ONE WORD from the passage.', qs: qRange(7, 9), type: 'input' });
    sections.push({ id: 's3', title: 'Questions 10-13', instruction: 'Do the following statements agree with the information given in Reading Passage 1?', qs: qRange(10, 13), type: 'tfng' });
  } else if (passageTitle === "Answers Underground") {
    sections.push({ id: 's1', title: 'Questions 1-6', instruction: 'Look at the following issues (Questions 1-6) and the list of people and organisations below. Match each issue with the correct person or organisation, A-F.', options: ['A - Scott Klara', 'B - Intergovernmental Panel on Climate Change', 'C - International Energy Agency', 'D - Klaus Lackner', 'E - David Hawkins', 'F - World Wide Fund for Nature Australia'], qs: qRange(1, 6), type: 'select', note: 'You may use any letter more than once.' });
    sections.push({ id: 's2', title: 'Questions 7-9', instruction: 'Reading Passage 1 has ten paragraphs, A-J. Which paragraph contains the following information?', qs: qRange(7, 9), type: 'paragraph' });
    sections.push({ id: 's3', title: 'Questions 10-13', instruction: 'Do the following statements agree with the information given in Reading Passage 1?', qs: qRange(10, 13), type: 'tfng' });
  } else if (passageTitle === "An early cultural tourist") {
    sections.push({ id: 's1', title: 'Questions 1-7', instruction: 'Do the following statements agree with the information given in Reading Passage 1?', qs: qRange(1, 7), type: 'tfng' });
    sections.push({ id: 's2', title: 'Questions 8-13', instruction: 'Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.', qs: qRange(8, 13), type: 'input' });
  } else if (passageTitle === "The life of Beatrix Potter") {
    sections.push({ id: 's1', title: 'Questions 1-8', instruction: 'Do the following statements agree with the information given in Reading Passage 1?', qs: qRange(1, 8), type: 'tfng' });
    sections.push({ id: 's2', title: 'Questions 9-14', instruction: 'Complete the sentences below with NO MORE THAN TWO WORDS from the passage.', qs: qRange(9, 14), type: 'input' });
  } else if (passageTitle === "Bondi") {
    sections.push({ id: 's1', title: 'Questions 1-8', instruction: 'Do the following statements agree with the information given in Reading Passage 1?', qs: qRange(1, 8), type: 'tfng' });
    sections.push({ id: 's2', title: 'Questions 9-14', instruction: 'Complete the sentences below with NO MORE THAN TWO WORDS from the passage.', qs: qRange(9, 14), type: 'input' });
  } else if (passageTitle === "Triumph of the City") {
    sections.push({ id: 's1', title: 'Questions 1-8', instruction: 'Do the following statements agree with the information given in Reading Passage 1?', qs: qRange(1, 8), type: 'tfng' });
    sections.push({ id: 's2', title: 'Questions 9-14', instruction: 'Complete the sentences below with NO MORE THAN TWO WORDS from the passage.', qs: qRange(9, 14), type: 'input' });
  } else if (passageTitle === "Prosopagnosia") {
    sections.push({ id: 's1', title: 'Questions 1-7', instruction: 'Do the following statements agree with the information given in Reading Passage 1?', qs: qRange(1, 7), type: 'tfng', tfngInstructions: ['<b>TRUE</b> if the statement agrees with the information', '<b>FALSE</b> if the statement contradicts the information', '<b>NOT GIVEN</b> if there is no information on this'] });
    sections.push({ id: 's2', title: 'Questions 8-13', instruction: 'Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.', qs: qRange(8, 13), type: 'input', sectionHeading: 'The challenges for prosopagnosia researchers', subHeading: 'Differences in prosopagnosics' });
  } else {
    const qMatches = (questions || []).filter(q => q.type === QuestionType.MATCHING_ENDINGS);
    if (qMatches.length) sections.push({ id: 'm1', title: `Questions ${qMatches[0].id}-${qMatches[qMatches.length-1].id}`, instruction: 'Complete each sentence with the correct ending, A-E, below.', qs: qMatches, type: 'select' });
    const qPeople = (questions || []).filter(q => q.type === QuestionType.MATCHING_PEOPLE);
    if (qPeople.length) sections.push({ id: 'p1', title: `Questions ${qPeople[0].id}-${qPeople[qPeople.length-1].id}`, instruction: 'Match each statement with the correct person, A-D.', options: ['A - Craig Brod', 'B - Daniel Dennett', 'C - Joseph Boyett and Henry Conn', 'D - Philip Nicholson'], qs: qPeople, type: 'classification' });
    const qTfng = (questions || []).filter(q => q.type === QuestionType.TFNG);
    if (qTfng.length) sections.push({ id: 't1', title: `Questions ${qTfng[0].id}-${qTfng[qTfng.length-1].id}`, instruction: 'Do the following statements agree with the information given in Reading Passage 3?', qs: qTfng, type: 'tfng' });
  }

  return (
    <div className={`flex h-full w-full divide-x transition-colors duration-500 relative ${isDarkMode ? 'divide-white/5' : 'divide-slate-200'}`}>
      {toolbarPos && (
        <div className="fixed z-[100] -translate-x-1/2 -translate-y-full mb-4 animate-in fade-in zoom-in duration-200" style={{ left: toolbarPos.x, top: toolbarPos.y }}>
          <div className={`flex items-center gap-1.5 p-2 rounded-2xl border shadow-2xl backdrop-blur-xl ${isDarkMode ? 'bg-slate-900/90 border-white/10' : 'bg-white/90 border-slate-200'}`}>
            {COLORS.map(color => (<button key={color.name} onClick={() => addHighlight(color.value)} className={`w-7 h-7 rounded-lg transition-transform hover:scale-110 active:scale-90 shadow-sm ${color.class}`} title={color.name} />))}
            <div className={`w-px h-5 mx-1 ${isDarkMode ? 'bg-white/10' : 'bg-slate-200'}`} />
            <button onClick={clearHighlightsAtSelection} className={`p-1.5 rounded-lg transition-colors hover:bg-red-500/10 text-red-500`} title="Clear Highlight"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
          </div>
        </div>
      )}

      <div ref={passageRef} className={`w-1/2 overflow-y-auto px-12 py-12 transition-colors duration-500 select-text ${isDarkMode ? 'bg-[#020617] text-slate-300' : 'bg-white text-slate-800'}`}>
        <div className="mb-6"><span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-[#F15A24]/60' : 'opacity-50'}`}>READING PASSAGE {passageNumber}</span></div>
        <h2 className={`text-3xl font-black mb-3 tracking-tight transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{passageTitle}</h2>
        <h3 className={`text-lg italic mb-10 pb-6 border-b transition-colors duration-500 ${isDarkMode ? 'text-slate-500 border-white/5' : 'text-slate-500 border-slate-100'}`}>{passageSubtitle}</h3>
        <div className="space-y-6">
          {(passageContent || []).map((para, i) => (<p key={i} data-para-index={i} className={`text-[17px] leading-[1.8] antialiased transition-opacity duration-500 ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{renderHighlightedText(para, i)}</p>))}
        </div>
        <div className="h-40"></div>
      </div>

      <div className={`w-1/2 overflow-y-auto px-10 py-12 transition-colors duration-500 ${isDarkMode ? 'bg-[#0F172A]' : 'bg-[#F1F5F9]'}`}>
        <div className="max-w-2xl mx-auto space-y-12 pb-60">
          {sections.map(section => (
            <div key={section.id}>
              <div className="mb-6">
                <h4 className={`text-[11px] font-black uppercase tracking-[0.2em] mb-3 transition-colors duration-500 ${isDarkMode ? 'text-[#F15A24]' : 'text-blue-700'}`}>{section.title}</h4>
                <div className={`p-6 rounded-[24px] border transition-all duration-500 ${isDarkMode ? 'bg-slate-800/60 border-white/5 shadow-xl' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <p className={`text-[15px] font-bold mb-4 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{section.instruction}</p>
                  {section.tfngInstructions && (
                    <ul className={`list-disc list-inside space-y-2 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {section.tfngInstructions.map((item, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  )}
                  {section.sectionHeading && (
                    <p className={`text-[16px] font-black mb-3 mt-6 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{section.sectionHeading}</p>
                  )}
                  {section.subHeading && (
                    <p className={`text-[14px] font-bold mb-4 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>{section.subHeading}</p>
                  )}
                  {section.note && (
                    <p className={`mb-4 text-xs font-semibold transition-colors duration-500 ${isDarkMode ? 'text-[#F15A24]' : 'text-blue-700'}`}>
                      <span className={`font-black ${isDarkMode ? 'text-[#F15A24]' : 'text-blue-700'}`}>NB</span> {section.note}
                    </p>
                  )}
                  {section.options && (<div className={`p-4 rounded-xl text-xs font-medium space-y-2 transition-colors duration-500 ${isDarkMode ? 'bg-[#020617]/60 text-slate-400' : 'bg-slate-50 text-slate-500'}`}>{section.options.map((opt, idx) => <p key={idx}>{opt}</p>)}</div>)}
                </div>
              </div>
              <div className="space-y-4">
                {section.qs.map(q => {
                  if (section.type === 'classification') return renderClassification(q);
                  if (section.type === 'tfng') return renderRadioTFNG(q);
                  if (section.type === 'input') return renderInput(q);
                  if (section.type === 'select') return renderSelectEndings(q);
                  if (section.type === 'paragraph') return renderParagraphMatch(q);
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingInterface;
