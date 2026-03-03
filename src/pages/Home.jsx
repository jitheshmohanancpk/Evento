import React, { useState } from 'react';
import { events } from '../data/events';
import EventCard from '../components/EventCard';
import { Search, Map as MapIcon, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Technology", "Music", "Workshop", "Meetup", "Cultural", "Sports"];

  // Logic: Filter by Search Text AND Selected Category
  // const filteredEvents = events.filter(e => {
  //   const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase()) || 
  //                        e.category.toLowerCase().includes(search.toLowerCase());
  //   const matchesCategory = activeCategory === "All" || e.category === activeCategory;
    
  //   return matchesSearch && matchesCategory;
  // });
  
const filteredEvents = events.filter(e => {
  const searchText = search.toLowerCase();

  const matchesSearch = 
    e.title.toLowerCase().includes(searchText) || 
    e.category.toLowerCase().includes(searchText) || 
    (e.location && e.location.toLowerCase().includes(searchText)) || // സ്ഥലത്തിന്റെ പേര്
    (e.organizer && e.organizer.toLowerCase().includes(searchText));  // സംഘാടകന്റെ പേര്

  const matchesCategory = activeCategory === "All" || e.category === activeCategory;
  
  return matchesSearch && matchesCategory;
});


  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* 1. Hero Section with AI Branding */}
      <div className="bg-slate-900 h-[450px] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div> */}
        
        <div className="relative z-10 animate-in fade-in zoom-in duration-700">
          <div className="flex justify-center mb-4">
            {/* <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-2">
              <Sparkles size={14} /> AI-Powered Discovery
            </span> */}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Find Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Great Experience
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Discover workshops, concerts, and tech meetups happening near you in Kochi.
          </p>
        </div>
      </div>

      {/* 2. Floating Search Bar */}
      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-3 flex flex-col md:flex-row items-center gap-3 border border-gray-100">
          <div className="flex items-center flex-1 w-full group">
            <Search className="ml-4 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search events, workshops, or 'AI'..." 
              className="w-full p-4 outline-none text-slate-800 font-semibold placeholder:text-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* <div className="flex items-center gap-3 w-full md:w-auto">
            <Link to="/map" className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-50 text-slate-700 px-8 py-4 rounded-2xl hover:bg-slate-100 transition font-bold border border-gray-100">
              <MapIcon size={20} /> Map
            </Link>
          </div> */}
        </div>
      </div>

      {/* 3. Category Filter Chips */}
      <div className="max-w-7xl mx-auto px-6 mt-16 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Browse Categories</h3>
          <SlidersHorizontal size={18} className="text-slate-400" />
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200 -translate-y-1' 
                : 'bg-white text-slate-500 border border-gray-100 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Event Results Grid */}
      <main className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900">Recommended for You</h2>
            <p className="text-slate-500 font-medium">Based on your interests in {activeCategory}</p>
          </div>
          <div className="text-right">
             <span className="text-2xl font-black text-indigo-600">{filteredEvents.length}</span>
             <p className="text-xs font-bold text-slate-400 uppercase">Events Found</p>
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[40px] py-32 text-center shadow-sm border-2 border-dashed border-gray-200">
            <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-slate-300" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-2">No events match your search</h3>
            <p className="text-slate-500 max-w-sm mx-auto">Try searching for "Tech", "Music", or reset the category filters.</p>
            <button 
                onClick={() => {setSearch(""); setActiveCategory("All");}}
                className="mt-8 text-indigo-600 font-bold hover:underline"
            >
                Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;