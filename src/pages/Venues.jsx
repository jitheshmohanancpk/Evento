import React from 'react';
import { MapPin, Navigation, Star, Users, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Venues = () => {
  const venues = [
    {
      id: 1,
      name: "Grand Convention Center",
      city: "Kochi",
      capacity: "2000+",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800",
      description: "Premier space for tech summits and international conferences.",
      tags: ["Tech", "Corporate", "Vallet Parking"]
    },
    {
      id: 2,
      name: "The Acoustic Cafe",
      city: "Bengaluru",
      capacity: "50-100",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800",
      description: "Intimate setting perfect for unplugged music and open mics.",
      tags: ["Music", "Food", "Wifi", "Vallet Parking"]
    },
    {
      id: 3,
      name: "Nexus Hub",
      city: "Mumbai",
      capacity: "300",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
      description: "Modern co-working space hosting weekend workshops and meetups.",
      tags: ["Workshops", "Startup", "Metro", "Vallet Parking"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black text-white mb-4">Explore <span className="text-indigo-400">Venues</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl font-medium">
            Find the perfect spot for your next event, from massive stadiums to cozy creative corners.
          </p>
        </div>
      </div>

      {/* Venues Grid */}
      <main className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <div key={venue.id} className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-gray-100 flex flex-col group">
              
              {/* Image Section */}
              <div className="relative h-64">
                <img 
                  src={venue.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={venue.name} 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold shadow-sm">
                  <Star className="text-amber-400 fill-amber-400" size={14} />
                  {venue.rating}
                </div>
              </div>

              {/* Details Section */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-black text-slate-800 mb-1">{venue.name}</h2>
                    <div className="flex items-center gap-1 text-slate-400 text-sm font-semibold">
                      <MapPin size={14} /> {venue.city}
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {venue.description}
                </p>


{/* <div className="mt-6">
          <Link 
            to={`/venue/${venue.id}`} 
            className="w-full flex items-center justify-center bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100"
          >
            View Details
          </Link>
        </div> */}


                {/* Info Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <div className="bg-slate-50 px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-600 border border-slate-100">
                    <Users size={14} /> {venue.capacity}
                  </div>
                  {venue.tags.map(tag => (
                    <span key={tag} className="bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                {/* <div className="mt-auto pt-6 border-t border-gray-50 flex gap-3">
                  <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition shadow-lg shadow-slate-200">
                    <Navigation size={18} /> Directions
                  </button>
                  <button className="p-4 bg-slate-100 text-slate-600 rounded-2xl hover:bg-indigo-600 hover:text-white transition">
                    <Info size={20} />
                  </button>
                </div> */}

<div className="mt-6">
          <Link 
            to={`/venue/${venue.id}`} 
            className="w-full flex items-center justify-center bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100"
          >
            View Details
          </Link>
        </div>

              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Venues;