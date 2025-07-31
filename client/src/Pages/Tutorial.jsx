import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import { Loader, Bookmark, FileQuestion, XCircle, Filter } from "lucide-react";
import toast from "react-hot-toast";

const Tutorial = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tutorials, setTutorials] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [bookmarkedTutorials, setBookmarkedTutorials] = useState([]);

  const categories = [
    { name: "Electrical", query: "electrical repair" },
    { name: "Mechanical", query: "mechanical repair" },
    { name: "Kitchen", query: "kitchen appliance repair" },
    { name: "Gadgets", query: "gadget repair" },
    { name: "Lighting", query: "lighting repair" },
    { name: "Appliances", query: "home appliance repair" },
  ];
  
  useEffect(() => {
    const storedSearchHistory = localStorage.getItem("searchHistory");
    const storedRecentlyViewed = localStorage.getItem("recentlyViewed");
    const storedBookmarkedTutorials = localStorage.getItem(
      "bookmarkedTutorials"
    );
    if (storedSearchHistory) setSearchHistory(JSON.parse(storedSearchHistory));
    if (storedRecentlyViewed)
      setRecentlyViewed(JSON.parse(storedRecentlyViewed));
    if (storedBookmarkedTutorials)
      setBookmarkedTutorials(JSON.parse(storedBookmarkedTutorials));
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  useEffect(() => {
    localStorage.setItem(
      "bookmarkedTutorials",
      JSON.stringify(bookmarkedTutorials)
    );
  }, [bookmarkedTutorials]);

  const fetchTutorials = async (objectName, pageToken = "", append = false) => {
    if (!objectName.trim()) {
      setError("Please enter a search term or select a category.");
      setTutorials([]);
      setNextPageToken(null);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://refixly.onrender.com/api/tutorials/${encodeURIComponent(
          objectName
        )}?pageToken=${pageToken}`
      );
      if (!res.ok)
        throw new Error((await res.json()).message || "Failed to fetch");
      const data = await res.json();
      setTutorials((prev) =>
        append ? [...prev, ...data.tutorials] : data.tutorials
      );
      setNextPageToken(data.nextPageToken);
      setSearchHistory((prev) =>
        [objectName, ...prev.filter((term) => term !== objectName)].slice(0, 5)
      );
    } catch (e) {
      setError(e.message);
      if (!append) setTutorials([]);
      setNextPageToken(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedCategory("");
    fetchTutorials(searchTerm);
  };

  const handleCategoryFilter = (query, name) => {
    setSearchTerm(query);
    setSelectedCategory(name);
    fetchTutorials(query);
  };

  const handleLoadMore = () => {
    if (nextPageToken) fetchTutorials(searchTerm, nextPageToken, true);
  };

  const handleSaveTutorial = (tutorialToSave) => {
    const saved =
      JSON.parse(localStorage.getItem("refixly_savedTutorials")) || [];
    if (saved.some((t) => t.videoId === tutorialToSave.videoId)) {
      toast.error("You have already saved this tutorial.");
      return;
    }
    const updatedSaved = [tutorialToSave, ...saved];
    localStorage.setItem(
      "refixly_savedTutorials",
      JSON.stringify(updatedSaved)
    );
    setBookmarkedTutorials(updatedSaved);
    toast.success("Tutorial saved!");
  };

  const isTutorialSaved = (id) => {
    return bookmarkedTutorials.some((t) => t.videoId === id);
  };

  // const addRecentlyViewed = (tutorial) => {
  //   setRecentlyViewed((prev) =>
  //     [tutorial, ...prev.filter((v) => v.videoId !== tutorial.videoId)].slice(
  //       0,
  //       10
  //     )
  //   );
  // };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155] text-white font-sans overflow-x-hidden flex justify-center flex-col">
      <NavBar />
      {/* Hero Section */}
      <header className="text-center py-12 text-white">
        <h1 className="text-5xl font-extrabold mb-4 text-[#38BDF8]">
          Repair Anything with DIY Tutorials
        </h1>
        <p className="text-lg mb-6 text-[#CBD5E1]">
          Your go-to source for fixing things around the house.
        </p>
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 relative"
        >
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search what you want to fix..."
              className="w-full p-3 rounded-full text-black pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setTutorials([]);
                  setError(null);
                }}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Clear search"
              >
                <XCircle size={20} />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#38BDF8] text-black p-3 px-6 rounded-full hover:bg-[#0EA5E9] font-semibold"
          >
            Search
          </button>
        </form>
      </header>

      {/* Filter Section */}
      <section className="max-w-5xl mx-auto px-4 py-4 mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Filter Icon */}
          <Filter className="text-[#38BDF8] w-5 h-5" />

          {/* Category Chips */}
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategoryFilter(cat.query, cat.name)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition duration-200
          ${
            selectedCategory === cat.name
              ? "bg-[#38BDF8] text-black"
              : "bg-gray-700 text-gray-200 hover:bg-[#38BDF8] hover:text-black"
          }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* DIY  Tutorials */}
      <section className="max-w-6xl mx-auto p-6 rounded-xl mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#38BDF8]">
          DIY Tutorials
        </h2>

        {error && <p className="text-red-400 text-center">{error}</p>}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-10 gap-3">
            <Loader className="animate-spin text-[#38BDF8]" />
            <p className="text-gray-300">Loading tutorials...</p>
          </div>
        )}

        {/* Empty Search State */}
        {!loading && !error && tutorials.length === 0 && !searchTerm && (
          <div className="text-center py-20 opacity-60">
            <FileQuestion className="mx-auto mb-4 w-12 h-12 text-[#38BDF8]" />
            <p className="text-lg text-gray-400">
              Start by searching for something you want to repair.
            </p>
          </div>
        )}

        {/* No Results State */}
        {!loading && !error && tutorials.length === 0 && searchTerm && (
          <p className="text-center text-gray-400 text-xl mt-16">
            No tutorials found for "
            <span className="text-white font-semibold">{searchTerm}</span>".
          </p>
        )}

        {/* Tutorial Cards */}
        {tutorials.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.videoId}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col transform hover:-translate-y-2 transition-all duration-300"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${tutorial.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg h-16 group-hover:text-blue-400 transition-colors text-white">
                      {tutorial.title.length > 50
                        ? `${tutorial.title.slice(0, 50)}...`
                        : tutorial.title}
                    </h3>
                  </div>
                </a>
                <div className="mt-auto p-4 border-t border-gray-700">
                  <button
                    onClick={() => handleSaveTutorial(tutorial)}
                    disabled={isTutorialSaved(tutorial.videoId)}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors${isTutorialSaved(tutorial.videoId) ? "bg-green-700 text-white cursor-not-allowed" : "bg-gray-700 hover:bg-gray-600 text-white"}`}>
                    <Bookmark size={16} />
                    {isTutorialSaved(tutorial.videoId)
                      ? "Saved"
                      : "Save Tutorial"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {nextPageToken && !loading && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-[#38BDF8] text-black font-semibold rounded-full hover:bg-[#0EA5E9] transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </section>

    </div>
  );
};

export default Tutorial;
