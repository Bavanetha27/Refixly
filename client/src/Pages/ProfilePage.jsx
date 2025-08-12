import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import NavBar from '../components/NavBar';
import toast from 'react-hot-toast';
import { Loader, History, Bookmark, Wrench, X, Trash2 } from 'lucide-react';
import defaultAvatar from '../assets/Avatar.avif';

const myRepairs = [
    { id: 1, item: 'iPhone 12', status: 'Completed', date: '2025-07-28' },
];

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('history');
  const [searchHistory, setSearchHistory] = useState([]);
  const [savedTutorials, setSavedTutorials] = useState([]);
  const [displayName, setDisplayName] = useState('');
  const [debouncedDisplayName, setDebouncedDisplayName] = useState('');

  useEffect(() => {
    const loadActivityData = () => {
      setSearchHistory(JSON.parse(localStorage.getItem('refixly_searchHistory')) || []);
      setSavedTutorials(JSON.parse(localStorage.getItem('refixly_savedTutorials')) || []);
    };
    loadActivityData();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || '');
        setDebouncedDisplayName(currentUser.displayName || '');
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    window.addEventListener('focus', loadActivityData);

    return () => {
      unsubscribe();
      window.removeEventListener('focus', loadActivityData);
    };
  }, []);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedDisplayName(displayName);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [displayName]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;

    const loadingToast = toast.loading('Updating profile...');
    try {
      await updateProfile(user, {
        displayName: displayName,
      });
      toast.success('Profile updated successfully!', { id: loadingToast });
      setIsEditing(false);
    } catch (error) {
      toast.error(`Error: ${error.message}`, { id: loadingToast });
    }
  };
  
  const handleRemoveTutorial = (videoId) => {
    const updatedSaved = savedTutorials.filter(t => t.videoId !== videoId);
    localStorage.setItem('refixly_savedTutorials', JSON.stringify(updatedSaved));
    setSavedTutorials(updatedSaved);
    toast.success('Tutorial removed.');
  };

  const handleClearHistory = () => {
    localStorage.removeItem('refixly_searchHistory');
    setSearchHistory([]);
    toast.success('Search history cleared.');
  };

  if (isLoading) {
    return <div className="min-h-screen bg-gray-900 flex justify-center items-center"><Loader className="animate-spin text-white h-10 w-10" /></div>;
  }
  if (!user) {
    return <div className="min-h-screen bg-gray-900 text-white"><NavBar /><div className="pt-24 text-center"><p>Please log in to view your profile.</p></div></div>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'history':
        return (
          <div>
            {searchHistory.length > 0 ? (
              <>
                <div className="flex justify-end mb-2">
                  <button onClick={handleClearHistory} className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 size={14} /> Clear History
                  </button>
                </div>
                <ul>{searchHistory.map(item => <li key={item.id} className="flex justify-between p-3 border-b border-gray-700"><span>{item.term}</span><span className="text-gray-400">{item.date}</span></li>)}</ul>
              </>
            ) : (<p className="text-gray-400">Your scan history will appear here.</p>)}
          </div>
        );
      case 'saved':
        return savedTutorials.length > 0 ? (
          <div className="space-y-4">
            {savedTutorials.map(item => (
              <div key={item.videoId} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <a href={`https://www.youtube.com/watch?v=${item.videoId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <img src={item.thumbnail} alt={item.title} className="w-24 h-16 object-cover rounded-md"/>
                  <span className="font-semibold group-hover:text-blue-400">{item.title}</span>
                </a>
                <button onClick={() => handleRemoveTutorial(item.videoId)} className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-600">
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        ) : (<p className="text-gray-400">Your saved tutorials will appear here.</p>);
      case 'repairs':
        return <ul>{myRepairs.map(item => <li key={item.id} className="flex justify-between p-3 border-b border-gray-700"><span>{item.item}</span><span className={`font-semibold ${item.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>{item.status}</span></li>)}</ul>;
      default:
        return null;
    }
  };
  
  const tabButtonStyle = (tabName) => `flex items-center gap-2 px-4 py-2 font-semibold rounded-t-lg border-b-2 transition-colors ${activeTab === tabName ? 'border-blue-400 text-blue-400' : 'border-transparent text-gray-400 hover:text-white'}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#150617] via-[#132299] to-[#7541dc] text-white pt-24">
      <NavBar />
      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <img 
                src={user.photoURL || defaultAvatar} 
                alt="Profile" 
                className="w-24 h-24 rounded-full border-4 border-blue-400 object-cover"
              />
              <div>
                <p className="text-2xl font-bold">{isEditing ? debouncedDisplayName : user.displayName || 'No Name'}</p>
                <p className="text-gray-400">{user.email}</p>
              </div>
            </div>
            {!isEditing && (
              <button onClick={() => setIsEditing(true)} className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg font-semibold">
                Edit Profile
              </button>
            )}
          </div>
          {isEditing && (
            <form onSubmit={handleProfileUpdate} className="mt-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="displayName" className="block text-sm font-medium text-gray-300">Display Name</label>
                  <input
                    type="text"
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md"
                  />
                </div>
                <div className="flex gap-4 pt-2">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-semibold">Save Changes</button>
                  <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg font-semibold">Cancel</button>
                </div>
              </div>
            </form>
          )}
        </div>
        
        <div className="border-b border-gray-700 mb-4">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            <button onClick={() => setActiveTab('history')} className={tabButtonStyle('history')}><History size={18}/> Search History</button>
            <button onClick={() => setActiveTab('saved')} className={tabButtonStyle('saved')}><Bookmark size={18}/> Saved Tutorials</button>
            <button onClick={() => setActiveTab('repairs')} className={tabButtonStyle('repairs')}><Wrench size={18}/> My Repairs</button>
          </nav>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg min-h-[200px]">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
