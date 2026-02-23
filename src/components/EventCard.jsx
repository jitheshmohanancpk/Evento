import { MapPin, Calendar, Clock, Share2, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition group">
      <div className="relative h-48">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        {event.isAI && (
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
            ✨ AI RECOMMENDED
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold text-indigo-600 uppercase">{event.category}</span>
          <div className="flex gap-2 text-gray-400">
            <Share2 size={16} className="cursor-pointer hover:text-indigo-600" />
            <Bookmark size={16} className="cursor-pointer hover:text-indigo-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 truncate">{event.title}</h3>
        <div className="space-y-1 text-sm text-gray-500 mb-4">
          <p className="flex items-center gap-2"><Calendar size={14}/> {event.date}</p>
          <p className="flex items-center gap-2"><MapPin size={14}/> {event.location}</p>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
          <span className="text-lg font-bold text-slate-900">{event.price}</span>
          <Link to={`/event/${event.id}`} className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EventCard;