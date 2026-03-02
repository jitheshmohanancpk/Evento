import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Heart, ArrowRight } from 'lucide-react';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  // പേജ് ലോഡ് ചെയ്യുമ്പോൾ ഈ ഇവന്റ് നേരത്തെ സേവ് ചെയ്തതാണോ എന്ന് നോക്കുന്നു
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('savedEvents')) || [];
    const exists = savedEvents.some(item => item.id === event.id);
    setIsSaved(exists);
  }, [event.id]);

  // ഇവന്റ് സേവ് ചെയ്യാനോ റിമൂവ് ചെയ്യാനോ ഉള്ള ഫങ്ക്ഷൻ
  const toggleSave = (e) => {
    e.stopPropagation(); // കാർഡ് ക്ലിക്ക് ഇവന്റ് തടയാൻ
    
    let savedEvents = JSON.parse(localStorage.getItem('savedEvents')) || [];
    
    if (isSaved) {
      // സേവ് ചെയ്തതിൽ നിന്ന് ഒഴിവാക്കുന്നു
      savedEvents = savedEvents.filter(item => item.id !== event.id);
      setIsSaved(false);
    } else {
      // പുതിയതായി സേവ് ചെയ്യുന്നു
      savedEvents.push(event);
      setIsSaved(true);
    }
    
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    
    // Navbar-ലോ മറ്റോ മാറ്റം വരണമെങ്കിൽ Custom Event ട്രിഗർ ചെയ്യാം
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div 
      onClick={() => navigate(`/event/${event.id}`)}
      className="group relative bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Save Button (Heart Icon) */}
        <button 
          onClick={toggleSave}
          className={`absolute top-5 right-5 p-3 rounded-full backdrop-blur-md transition-all duration-300 ${
            isSaved 
            ? 'bg-red-500 text-white scale-110' 
            : 'bg-white/80 text-slate-900 hover:bg-white'
          }`}
        >
          <Heart size={20} fill={isSaved ? "currentColor" : "none"} />
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-5 left-5 bg-indigo-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          {event.category}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-3">
          <Calendar size={14} className="text-indigo-600" />
          <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <span className="mx-1">•</span>
          <span>{event.time}</span>
        </div>

        <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
          {event.title}
        </h3>

        <div className="flex items-center gap-1 text-slate-500 text-sm mb-6">
          <MapPin size={16} className="text-slate-400" />
          <span className="font-medium">{event.location}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Ticket Price</p>
            <p className="text-lg font-black text-slate-900">{event.price}</p>
          </div>
          
          <div className="bg-slate-50 p-3 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;