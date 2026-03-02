import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { events } from '../data/events';
import { Calendar, MapPin, ArrowLeft, Share2, Plus, Minus, Send } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ticketCount, setTicketCount] = useState(1);

  // ഡാറ്റ കണ്ടെത്തുന്നു
  const event = events.find((e) => String(e.id) === String(id));

  // എറർ ഉണ്ടെങ്കിൽ ബ്ലാങ്ക് പേജിന് പകരം ഇത് കാണിക്കും
  if (!event) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold">Event not found! ID: {id}</h2>
        <Link to="/" className="text-indigo-600 underline mt-4">Go back to home</Link>
      </div>
    );
  }

  // Price സെറ്റപ്പ്
  const unitPrice = event.price ? parseInt(event.price.toString().replace(/[^0-9]/g, '')) : 0;
  const totalPrice = unitPrice * ticketCount;

  const handleBookNow = () => {
    navigate('/emailer', { 
      state: { 
        eventTitle: event.title,
        ticketNumber: ticketCount,
        totalRate: totalPrice 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between">
        <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-bold">
          <ArrowLeft size={20} /> Back
        </Link>
        <button className="text-gray-600 hover:text-indigo-600"><Share2 size={20} /></button>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <img src={event.image} className="w-full h-[450px] object-cover rounded-[40px] shadow-lg mb-8" alt={event.title} />
          <h1 className="text-4xl font-black text-slate-900 mb-4">{event.title}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 p-8 bg-slate-50 rounded-[35px] border border-slate-100 shadow-xl">
            <h3 className="text-xs font-black text-slate-400 uppercase mb-6 tracking-widest text-center">Ticket Selection</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100">
                <span className="font-bold text-slate-700">Quantity</span>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => ticketCount > 1 && setTicketCount(t => t - 1)} 
                    className="p-2 bg-slate-100 rounded-lg hover:bg-rose-100 transition-colors"
                  >
                    <Minus size={16}/>
                  </button>
                  <span className="text-xl font-black">{ticketCount}</span>
                  <button 
                    onClick={() => setTicketCount(t => t + 1)} 
                    className="p-2 bg-slate-100 rounded-lg hover:bg-emerald-100 transition-colors"
                  >
                    <Plus size={16}/>
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-dashed border-slate-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-black text-slate-900">Total Price</span>
                  <span className="text-3xl font-black text-indigo-600">₹{totalPrice}</span>
                </div>

                <button 
                  onClick={handleBookNow}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-600 transition-all flex justify-center items-center gap-2 shadow-xl"
                >
                  Book Now <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;