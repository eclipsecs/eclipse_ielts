import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

interface UserProfileProps {
  onGoHome: () => void;
  theme: 'light' | 'dark';
}

const UserProfile: React.FC<UserProfileProps> = ({ onGoHome, theme }) => {
  const { user, logout, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    displayName: user?.displayName || '',
    targetBandScore: user?.targetBandScore || 7.0,
    nativeLanguage: user?.nativeLanguage || 'English',
    studyLevel: user?.studyLevel || 'intermediate',
  });
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const isDarkMode = theme === 'dark';

  if (!user) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-[#121212]' : 'bg-[#F8FAFC]'}`}>
        <p className={isDarkMode ? 'text-white' : 'text-slate-900'}>Please log in to view your profile</p>
      </div>
    );
  }

  const handleSave = () => {
    updateUser(editData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    onGoHome();
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#121212]' : 'bg-[#F8FAFC]'}`}>
      {/* Header */}
      <header className={`border-b ${isDarkMode ? 'border-[#3a3a3a] bg-[#1e1e1e]' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button 
            onClick={onGoHome}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24] shadow-sm border border-[#333]' : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white shadow-sm border border-slate-200'}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back</span>
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Header */}
        <div className={`p-8 rounded-[48px] border mb-8 transition-all ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a]' : 'bg-white border-slate-100 shadow-xl'}`}>
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black ${isDarkMode ? 'bg-[#F15A24]' : 'bg-[#1D1D4B]'} text-white`}>
                {user.displayName.charAt(0).toUpperCase()}
              </div>
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.displayName}
                    onChange={(e) => setEditData(prev => ({ ...prev, displayName: e.target.value }))}
                    className={`text-2xl font-black bg-transparent outline-none border-b-2 pb-1 mb-2 ${
                      isDarkMode ? 'text-white border-[#F15A24]' : 'text-slate-900 border-[#1D1D4B]'
                    }`}
                  />
                ) : (
                  <h1 className={`text-2xl font-black mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {user.displayName}
                  </h1>
                )}
                <p className={isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}>{user.email}</p>
                <div className={`mt-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block ${
                  isDarkMode ? 'bg-[#F15A24]/20 text-[#F15A24]' : 'bg-[#1D1D4B]/10 text-[#1D1D4B]'
                }`}>
                  Member since {new Date(user.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              {isEditing ? (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    className={`px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all ${
                      isDarkMode 
                        ? 'bg-[#1a1a1a] text-white hover:bg-red-600' 
                        : 'bg-slate-100 text-slate-700 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className={`px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all ${
                      isDarkMode 
                        ? 'bg-[#F15A24] text-white hover:opacity-90' 
                        : 'bg-[#1D1D4B] text-white hover:bg-black'
                    }`}
                  >
                    Save Changes
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className={`px-5 py-2.5 rounded-2xl font-bold text-xs uppercase tracking-[0.15em] transition-all ${
                    isDarkMode 
                      ? 'bg-[#1a1a1a] text-white hover:bg-[#F15A24]' 
                      : 'bg-slate-100 text-slate-700 hover:bg-[#1D1D4B] hover:text-white'
                  }`}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className={`p-6 rounded-[32px] ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-50'}`}>
              <p className={`text-[11px] font-bold uppercase tracking-[0.25em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'} mb-2`}>
                Tests Completed
              </p>
              <p className={`text-4xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {user.totalTestsCompleted}
              </p>
            </div>
            <div className={`p-6 rounded-[32px] ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-50'}`}>
              <p className={`text-[11px] font-bold uppercase tracking-[0.25em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'} mb-2`}>
                Average Score
              </p>
              <p className={`text-4xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {user.averageScore.toFixed(1)}
              </p>
            </div>
            <div className={`p-6 rounded-[32px] ${isDarkMode ? 'bg-[#252525]' : 'bg-slate-50'}`}>
              <p className={`text-[11px] font-bold uppercase tracking-[0.25em] ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-40'} mb-2`}>
                Target Band
              </p>
              {isEditing ? (
                <select
                  value={editData.targetBandScore}
                  onChange={(e) => setEditData(prev => ({ ...prev, targetBandScore: parseFloat(e.target.value) }))}
                  className={`text-4xl font-black bg-transparent outline-none ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {[4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0].map(score => (
                    <option key={score} value={score}>{score.toFixed(1)}</option>
                  ))}
                </select>
              ) : (
                <p className={`text-4xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {user.targetBandScore.toFixed(1)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className={`p-8 rounded-[48px] border transition-all ${isDarkMode ? 'bg-[#1e1e1e] border-[#3a3a3a]' : 'bg-white border-slate-100 shadow-xl'}`}>
          <h2 className={`text-xl font-black mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Profile Settings
          </h2>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className={`block text-[11px] font-bold uppercase tracking-widest mb-3 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>
                  Native Language
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.nativeLanguage}
                    onChange={(e) => setEditData(prev => ({ ...prev, nativeLanguage: e.target.value }))}
                    className={`w-full px-5 py-4 rounded-2xl font-medium text-lg outline-none transition-all ${
                      isDarkMode 
                        ? 'bg-[#252525] border border-[#3a3a3a] text-white focus:border-[#F15A24]' 
                        : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-slate-900'
                    }`}
                  />
                ) : (
                  <p className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {user.nativeLanguage}
                  </p>
                )}
              </div>
              <div>
                <label className={`block text-[11px] font-bold uppercase tracking-widest mb-3 ${isDarkMode ? 'text-[#b0b0b0]' : 'opacity-50'}`}>
                  Study Level
                </label>
                {isEditing ? (
                  <select
                    value={editData.studyLevel}
                    onChange={(e) => setEditData(prev => ({ ...prev, studyLevel: e.target.value as 'beginner' | 'intermediate' | 'advanced' }))}
                    className={`w-full px-5 py-4 rounded-2xl font-medium text-lg outline-none transition-all ${
                      isDarkMode 
                        ? 'bg-[#252525] border border-[#3a3a3a] text-white focus:border-[#F15A24]' 
                        : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-slate-900'
                    }`}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                ) : (
                  <p className={`text-lg font-medium capitalize ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {user.studyLevel}
                  </p>
                )}
              </div>
            </div>

            <div className={`pt-6 border-t ${isDarkMode ? 'border-[#3a3a3a]' : 'border-slate-200'}`}>
              <button
                onClick={handleLogout}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-[0.15em] transition-all ${
                  isDarkMode 
                    ? 'bg-[#252525] text-red-400 hover:bg-red-900/20' 
                    : 'bg-slate-50 text-red-600 hover:bg-red-50'
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
