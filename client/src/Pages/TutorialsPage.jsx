import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loader, Search, Bookmark } from 'lucide-react';
import NavBar from '../components/NavBar';
import toast from 'react-hot-toast';

const TutorialsPage = () => {
  const { objectName } = useParams();
  const [tutorials, setTutorials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(objectName);
  const [nextPageToken, setNextPageToken] = useState('');

  const [savedTutorials, setSavedTutorials] = useState([]); 

  const fetchTutorials = async (loadMore = false) => {
    setIsLoading(true);
    setError(null);
    if (!loadMore) {
      setTutorials([]);
    }
    try {
      let apiUrl = `https://refixly.onrender.com/api/tutorials/${searchTerm}`;
      if (loadMore && nextPageToken) {
        apiUrl += `?pageToken=${nextPageToken}`;
      }
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch tutorials.');
      }
      const data = await response.json();
      setTutorials(prev => loadMore ? [...prev, ...data.tutorials] : data.tutorials);
      setNextPageToken(data.nextPageToken || '');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setSearchTerm(objectName);
    fetchTutorials();
  }, [objectName]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchTutorials();
  };

useEffect(() => {
  const stored = localStorage.getItem('refixly_savedTutorials');
  if (stored) {
    setSavedTutorials(JSON.parse(stored));
  }
}, []);

const handleSaveTutorial = (tutorialToSave) => {
  const saved = JSON.parse(localStorage.getItem('refixly_savedTutorials')) || [];

  if (saved.some(t => t.videoId === tutorialToSave.videoId)) {
    toast.error('You have already saved this tutorial.');
    return;
  }

const updatedSaved = [tutorialToSave, ...saved];
  localStorage.setItem('refixly_savedTutorials', JSON.stringify(updatedSaved));
  setSavedTutorials(updatedSaved);
  toast.success('Tutorial saved!');
};


  if (isLoading && tutorials.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
        <NavBar />
        <Loader className="animate-spin h-12 w-12 mb-4" />
        <p className="text-xl">Fetching Repair Tutorials...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <div className="max-w-7xl mx-auto p-4 sm:p-8 pt-24">
        <Link to="/scan" className="text-blue-400 hover:underline mb-6 inline-block">&larr; Back to Scanner</Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Repair Tutorials for: <span className="capitalize text-blue-400">{objectName}</span>
        </h1>
        <form onSubmit={handleSearch} className="flex gap-2 mb-8 max-w-lg">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Refine your search..."
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 flex items-center gap-2">
            <Search size={20} /> Search
          </button>
        </form>
        {error && <p className="text-red-400 text-center">{error}</p>}
        {tutorials.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.videoId} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col transform hover:-translate-y-2 transition-all duration-300">
                <a href={`https://www.youtube.com/watch?v=${tutorial.videoId}`} target="_blank" rel="noopener noreferrer" className="group block">
                  <img src={tutorial.thumbnail} alt={tutorial.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-lg h-16 group-hover:text-blue-400 transition-colors">
                      {tutorial.title}
                    </h3>
                  </div>
                </a>
                <div className="mt-auto p-4 border-t border-gray-700">
                  <button onClick={() => handleSaveTutorial(tutorial)} className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold ${savedTutorials.some(t => t.videoId === tutorial.videoId) ? "bg-green-700 text-white cursor-not-allowed": "bg-gray-700 hover:bg-gray-600 text-white"} rounded-lg transition-colors`}>
                    {savedTutorials.some(t => t.videoId === tutorial.videoId) ? 'Saved' : <><Bookmark size={16} /> Save Tutorial</>}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !isLoading && <p className="text-center text-gray-400 text-xl mt-16">No tutorials found for "{searchTerm}".</p>
        )}
        {nextPageToken && (
          <div className="text-center mt-12">
            <button
              onClick={() => fetchTutorials(true)}
              disabled={isLoading}
              className="px-8 py-3 bg-gray-700 rounded-full font-semibold hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialsPage;