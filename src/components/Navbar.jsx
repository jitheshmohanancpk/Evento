import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X, PlusCircle, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-[100] backdrop-blur-md bg-white/90">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-indigo-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <Calendar className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black text-slate-800 tracking-tighter">EVENTO.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-bold text-sm">
          <Link to="/Events" className={isActive('/Events') ? 'text-indigo-600' : 'text-slate-500'}>EVENTS</Link>
          <Link to="/Venues" className={isActive('/Venues') ? 'text-indigo-600' : 'text-slate-500'}>VENUES</Link>
          
          <Link to="/Organizers" className={isActive('/Organizers') ? 'text-indigo-600' : 'text-slate-500'}>ORGANIZERS</Link>
          <Link to="/Organizers" className={isActive('/Organizers') ? 'text-indigo-600' : 'text-slate-500'}>GALLERY</Link>
          <Link to="/about" className={isActive('/about') ? 'text-indigo-600' : 'text-slate-500'}>ABOUT</Link>
          <Link to="/Contact" className={isActive('/Contact') ? 'text-indigo-600' : 'text-slate-500'}>CONTACT</Link>

          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 transition">BUY TICKET</button>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 transition">LOGIN</button>
          {/* <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 transition">CREATE EVENT</button> */}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;