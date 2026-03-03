import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, LogOut, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 1. LocalStorage-ൽ നിന്ന് യൂസർ ഡാറ്റ എടുക്കുന്നു
 const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  
  // 2. യൂസർ ഉണ്ടെങ്കിൽ മാത്രം true അല്ലെങ്കിൽ false (ഇവിടെയാണ് എറർ ഉണ്ടായിരുന്നത്)
  const isLoggedIn = !!user; 

  const isActive = (path) => location.pathname === path;

  // പേരിന്റെ ആദ്യ രണ്ട് അക്ഷരങ്ങൾ എടുക്കാനുള്ള ഫങ്ക്ഷൻ
  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.trim().split(' ');
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload(); 
  };


useEffect(() => {
  const handleStorageChange = () => {
  
    setUser(JSON.parse(localStorage.getItem('user')));
  };
  window.addEventListener('storage', handleStorageChange);
  return () => window.removeEventListener('storage', handleStorageChange);
}, []);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-[100] backdrop-blur-md bg-white/90">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black text-slate-800 tracking-tighter italic">EVENTO.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-bold text-sm">
          <Link to="/Events" className={isActive('/Events') ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600 transition'}>EVENTS</Link>
          <Link to="/Venues" className={isActive('/Venues') ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600 transition'}>VENUES</Link>
          <Link to="/Organizers" className={isActive('/Organizers') ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600 transition'}>ORGANIZERS</Link>
          <Link to="/about" className={isActive('/about') ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600 transition'}>ABOUT</Link>
          <Link to="/Gallery" className={isActive('/Gallery') ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600 transition'}>GALLERY</Link>
          <Link to="/Contact" className={isActive('/Contact') ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600 transition'}>CONTACT</Link>
          {/* <Link to="/SavedEvents" className={isActive('/SavedEvents') ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600 transition'}>SavedEvents</Link> */}
          <Link to="/saved-events" className="flex items-center gap-2 text-slate-500">
  <Heart size={20} />
  <span>SAVED</span>
</Link>
          
          <div className="flex items-center gap-4 border-l pl-8 border-gray-100">
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <div 
                  onClick={() => navigate('/EditProfile')}
                  className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black cursor-pointer hover:bg-indigo-700 transition shadow-lg shadow-indigo-100"
                >
                  {getInitials(user.name)}
                </div>
                <button 
                  onClick={handleLogout} 
                  className="text-[10px] font-black text-slate-400 hover:text-red-500 tracking-widest transition"
                >
                  <LogOut size={14} className="inline mr-1" /> LOGOUT
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => navigate('/Login')} 
                  className="text-slate-600 px-4 py-2 font-bold hover:text-indigo-600 transition"
                >
                  LOGIN
                </button>
                <Link 
                  to="/signup" 
                  className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-indigo-600 transition shadow-xl shadow-slate-200"
                >
                  <LogIn size={18} />
                  <span>SIGN-UP</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-6 space-y-4">
          <Link to="/Events" className="block font-bold text-slate-600" onClick={() => setIsOpen(false)}>EVENTS</Link>
         
          <Link to="/Venues" className="block font-bold text-slate-600" onClick={() => setIsOpen(false)}>VENUES</Link>
          <Link to="/Organizers" className="block font-bold text-slate-600" onClick={() => setIsOpen(false)}>ORGANIZERS</Link>
           <Link to="/about" className="block font-bold text-slate-600" onClick={() => setIsOpen(false)}>ABOUT</Link>
           <Link to="/Gallery" className="block font-bold text-slate-600" onClick={() => setIsOpen(false)}>GALLERY</Link>
           <Link to="/Contact" className="block font-bold text-slate-600" onClick={() => setIsOpen(false)}>CONTACT</Link>
           <Link to="/saved-events" className="block font-bold text-slate-600" onClick={() => setIsOpen(false)}>SAVED</Link>
          <hr />
          {isLoggedIn ? (
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black">
                  {getInitials(user.name)}
                </div>
                <span className="font-bold">{user.name}</span>
              </div>
              <button onClick={handleLogout} className="text-red-500 font-bold">Logout</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => { navigate('/Login'); setIsOpen(false); }} className="py-3 text-slate-600 font-bold border rounded-xl">Login</button>
              <button onClick={() => { navigate('/signup'); setIsOpen(false); }} className="py-3 bg-slate-900 text-white font-bold rounded-xl text-center">Sign Up</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;