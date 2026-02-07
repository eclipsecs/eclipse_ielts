import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { UserRegistrationData } from '../../types';

interface RegisterProps {
  onSwitchToLogin: () => void;
  onGoHome: () => void;
  theme: 'light' | 'dark';
}

const Register: React.FC<RegisterProps> = ({ onSwitchToLogin, onGoHome, theme }) => {
  const { register, isLoading, error } = useAuth();
  const [formData, setFormData] = useState<UserRegistrationData>({
    email: '',
    password: '',
    displayName: '',
    targetBandScore: 7.0,
    nativeLanguage: 'English',
    studyLevel: 'intermediate',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState('');

  const isDarkMode = theme === 'dark';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'targetBandScore' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');

    if (!formData.email || !formData.password || !formData.displayName) {
      setLocalError('Please fill in all required fields');
      return;
    }

    if (formData.password.length < 6) {
      setLocalError('Password must be at least 6 characters');
      return;
    }

    if (formData.password !== confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }

    try {
      await register(formData);
    } catch {
      // Error is handled by auth context
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${isDarkMode ? 'bg-[#121212]' : 'bg-[#F8FAFC]'}`}>
      <div className={`max-w-md w-full p-12 rounded-[48px] border transition-all duration-500 ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a] shadow-2xl' : 'bg-white border-slate-100 shadow-xl'}`}>
        <div className="flex flex-col items-center text-center mb-8">
          <button 
            onClick={onGoHome}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 mb-8 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24] shadow-sm border border-[#333]' : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white shadow-sm border border-slate-200'}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back</span>
          </button>
          <h1 className={`text-2xl font-black mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Create Account</h1>
          <p className={`text-[11px] font-bold uppercase tracking-[0.25em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'}`}>Start your IELTS journey</p>
        </div>

        {(error || localError) && (
          <div className={`p-4 mb-6 rounded-2xl text-sm font-medium ${isDarkMode ? 'bg-red-900/20 text-red-400 border border-red-900' : 'bg-red-50 text-red-600 border border-red-200'}`}>
            {error || localError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-[11px] font-black uppercase tracking-widest mb-2 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>
              Full Name
            </label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className={`w-full px-5 py-4 rounded-2xl font-medium text-lg outline-none transition-all ${
                isDarkMode 
                  ? 'bg-[#252525] border border-[#3a3a3a] text-white focus:border-[#F15A24]' 
                  : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-slate-900'
              }`}
              placeholder="Name"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className={`block text-[11px] font-black uppercase tracking-widest mb-2 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-5 py-4 rounded-2xl font-medium text-lg outline-none transition-all ${
                isDarkMode 
                  ? 'bg-[#252525] border border-[#3a3a3a] text-white focus:border-[#F15A24]' 
                  : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-slate-900'
              }`}
              placeholder="Email"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className={`block text-[11px] font-black uppercase tracking-widest mb-2 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-5 py-4 rounded-2xl font-medium text-lg outline-none transition-all ${
                isDarkMode 
                  ? 'bg-[#252525] border border-[#3a3a3a] text-white focus:border-[#F15A24]' 
                  : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-slate-900'
              }`}
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className={`block text-[11px] font-black uppercase tracking-widest mb-2 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full px-5 py-4 rounded-2xl font-medium text-lg outline-none transition-all ${
                isDarkMode 
                  ? 'bg-[#252525] border border-[#3a3a3a] text-white focus:border-[#F15A24]' 
                  : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-slate-900'
              }`}
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={`block text-[11px] font-black uppercase tracking-widest mb-2 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>
                Target Band
              </label>
              <select
                name="targetBandScore"
                value={formData.targetBandScore}
                onChange={handleChange}
                className={`w-full px-4 py-4 rounded-2xl font-medium text-lg outline-none transition-all ${
                  isDarkMode 
                    ? 'bg-[#252525] border border-[#3a3a3a] text-white focus:border-[#F15A24]' 
                    : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-slate-900'
                }`}
                disabled={isLoading}
              >
                {[4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0].map(score => (
                  <option key={score} value={score}>{score.toFixed(1)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={`block text-[11px] font-black uppercase tracking-widest mb-2 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>
                Study Level
              </label>
              <select
                name="studyLevel"
                value={formData.studyLevel}
                onChange={handleChange}
                className={`w-full px-4 py-4 rounded-2xl font-medium text-lg outline-none transition-all ${
                  isDarkMode 
                    ? 'bg-[#252525] border border-[#3a3a3a] text-white focus:border-[#F15A24]' 
                    : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-slate-900'
                }`}
                disabled={isLoading}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div>
            <label className={`block text-[11px] font-black uppercase tracking-widest mb-2 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>
              Native Language
            </label>
            <input
              type="text"
              name="nativeLanguage"
              value={formData.nativeLanguage}
              onChange={handleChange}
              className={`w-full px-5 py-4 rounded-2xl font-medium text-lg outline-none transition-all ${
                isDarkMode 
                  ? 'bg-[#252525] border border-[#3a3a3a] text-white focus:border-[#F15A24]' 
                  : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-slate-900'
              }`}
              placeholder="English"
              disabled={isLoading}
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className={`w-full py-6 rounded-full font-black text-lg shadow-xl uppercase tracking-[0.15em] transition-all active:scale-[0.98] ${
              isDarkMode 
                ? 'bg-[#F15A24] text-white hover:opacity-90 shadow-[#F15A24]/20' 
                : 'bg-[#1D1D4B] text-white hover:bg-black'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Creating account...
              </span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className={`text-sm ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className={`font-bold hover:underline ${isDarkMode ? 'text-[#F15A24]' : 'text-[#1D1D4B]'}`}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
