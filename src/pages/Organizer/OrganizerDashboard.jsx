import React from 'react';
import { 
  Calendar as CalendarIcon, 
  Ticket, 
  Clock, 
  LayoutDashboard, 
  PlusCircle, 
  Users 
} from 'lucide-react';

const OrganizerDashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden lg:block">
        <h1 className="text-2xl font-black mb-10 text-indigo-400">MenuWise</h1>
        <nav className="space-y-6">
          <NavItem icon={<LayoutDashboard />} label="Dashboard" active />
          <NavItem icon={<CalendarIcon />} label="Event Calendar" />
          <NavItem icon={<Ticket />} label="Ticket Bookings" />
          <NavItem icon={<Users />} label="Attendees" />
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Welcome back, Organizer</h2>
            <p className="text-slate-500">Here’s what’s happening with your events today.</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition">
            <PlusCircle size={20} /> Create New Event
          </button>
        </header>

        {/* Stats Grid: Total Bookings & Timers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Total Tickets Sold" value="1,284" icon={<Ticket className="text-blue-500" />} />
          <StatCard title="Upcoming Event Timer" value="02d : 14h : 35m" icon={<Clock className="text-orange-500" />} subtitle="Mega Fest 2026" />
          <StatCard title="Revenue" value="$12,450" icon={<div className="text-green-500 font-bold">$</div>} />
        </div>

        {/* Lower Section: Calendar & Upcoming Events List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
            {/* List of Events */}
            <div className="space-y-4">
              <EventItem name="Tech Conference 2026" date="March 15" status="Sold Out" />
              <EventItem name="Music Night Kochi" date="April 02" status="80% Filled" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-4">Schedule Overview</h3>
            {/* Placeholder for Calendar Component */}
            <div className="h-64 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 italic">
              Interactive Calendar Component Loading...
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-components for better organization
const StatCard = ({ title, value, icon, subtitle }) => (
  <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-50 rounded-2xl">{icon}</div>
    </div>
    <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider">{title}</h4>
    <p className="text-2xl font-black text-slate-900">{value}</p>
    {subtitle && <p className="text-xs text-indigo-500 mt-1 font-bold">{subtitle}</p>}
  </div>
);

const NavItem = ({ icon, label, active }) => (
  <div className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition ${active ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
    {icon} <span className="font-bold">{label}</span>
  </div>
);

const EventItem = ({ name, date, status }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
    <div>
      <p className="font-bold text-slate-800">{name}</p>
      <p className="text-sm text-slate-500">{date}</p>
    </div>
    <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-indigo-600">{status}</span>
  </div>
);

export default OrganizerDashboard;