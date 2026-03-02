import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Info, ChevronLeft, Star, Calendar, Share2 } from 'lucide-react';

const VenueDetails = () => {
  const { id } = useParams();

  // നിങ്ങളുടെ ഡാറ്റാബേസ് അല്ലെങ്കിൽ അറേ ഇവിടെ നൽകുക (Venues.jsx-ലെ അതേ ഡാറ്റ)
  const venues = [
    {
      id: 1,
      name: "Grand Hyatt Kochi",
      location: "Bolgatty, Kochi",
      capacity: "2000+",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200",
      description: "A premium waterfront venue perfect for international conventions, weddings, and tech summits.",
      amenities: ["Free WiFi", "Valet Parking", "Catering", "AC Hall"],
      price: "₹1,50,000 / day"
    },
     {
      id: 2,
      name: "The Acoustic Cafe",
      city: "Bengaluru",
      capacity: "50-100",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800",
      description: "Intimate setting perfect for unplugged music and open mics.",
      amenities: ["Free WiFi", "Valet Parking", "Catering", "AC Hall"],
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
      amenities: ["Free WiFi", "Valet Parking", "Catering", "AC Hall"],
      tags: ["Workshops", "Startup", "Metro"]
    }
    // മറ്റു വെന്യൂകൾ...
  ];

  // ID വെച്ച് ശരിക്കുള്ള വെന്യൂ കണ്ടെത്തുക
  const venue = venues.find(v => v.id === parseInt(id));

  if (!venue) {
    return <div className="text-center py-20">Venue not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <Link to="/venues" className="absolute top-6 left-6 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition">
          <ChevronLeft size={24} />
        </Link>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-10 pb-20">
        <div className="bg-white rounded-[32px] p-8 shadow-2xl border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Premium Venue
              </span>
              <h1 className="text-4xl font-black text-slate-900 mt-3">{venue.name}</h1>
              <div className="flex items-center gap-2 text-slate-500 mt-2">
                <MapPin size={18} className="text-indigo-500" />
                <span className="font-medium">{venue.location}</span>
              </div>
            </div>
            <div className="bg-slate-900 text-white p-4 rounded-2xl text-center min-w-[140px]">
              <p className="text-xs text-slate-400 uppercase font-bold">Starting From</p>
              <p className="text-xl font-black">{venue.price}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
              <div className="bg-white p-3 rounded-xl shadow-sm text-indigo-600"><Users /></div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Capacity</p>
                <p className="font-bold text-slate-800">{venue.capacity} People</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
              <div className="bg-white p-3 rounded-xl shadow-sm text-yellow-500"><Star /></div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Rating</p>
                <p className="font-bold text-slate-800">{venue.rating} / 5.0</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
              <div className="bg-white p-3 rounded-xl shadow-sm text-green-600"><Share2 /></div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Availability</p>
                <p className="font-bold text-slate-800">Instant Booking</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Info size={20} className="text-indigo-500" /> About Venue
            </h3>
            <p className="text-slate-600 mt-4 leading-relaxed">{venue.description}</p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Amenities</h3>
            <div className="flex flex-wrap gap-3">
              {venue.amenities.map((item, index) => (
                <span key={index} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl font-medium text-sm">
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

          <button className="w-full mt-12 bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3">
            <Calendar size={22} /> Check Availability & Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;