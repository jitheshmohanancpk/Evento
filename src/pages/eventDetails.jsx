import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { events } from '../data/events';
import { Calendar, MapPin, User, ArrowLeft, Share2 } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) return <div className="p-20 text-center">Event not found!</div>;

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between">
        <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-bold"><ArrowLeft size={20} /> Back</Link>
        <button className="text-gray-600 hover:text-indigo-600"><Share2 size={20} /></button>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <img src={event.image} className="w-full h-[450px] object-cover rounded-3xl shadow-lg mb-8" alt="" />
          <h1 className="text-4xl font-black text-slate-900 mb-4">{event.title}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-xl">
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-6 tracking-widest">Event Info</h3>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white rounded-xl shadow-sm"><Calendar className="text-indigo-600" /></div>
                <p className="font-bold text-slate-800">{event.date}</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white rounded-xl shadow-sm"><MapPin className="text-indigo-600" /></div>
                <p className="font-bold text-slate-800">{event.location}</p>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-indigo-700 transition">Book - {event.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;