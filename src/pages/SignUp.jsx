import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Building2, Mail, Phone, MapPin, 
  Camera, Ticket, CheckCircle, ArrowLeft, LogIn, LockKeyhole,
} from 'lucide-react';

const SignUp = () => {
  const navigate = useNavigate();
  
  // States
  const [userType, setUserType] = useState('user'); // 'user' or 'organizer'
  const [showSuccess, setShowSuccess] = useState(false);
  const [logoPreview, setLogoPreview] = useState(null);

  // Handle Logo Upload
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // ഇവിടെ നിങ്ങൾക്ക് ഡാറ്റാബേസ് ലോജിക് ചേർക്കാം
    setShowSuccess(true);
  };

//Password
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 flex items-center justify-center relative">

        <div className="absolute top-8 center-8 flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 transition text-3xl">Explore Unlimited Events!!!</div>
      
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 transition "
      >
        <ArrowLeft size={20} /> Back to Home
      </button>

      <div className="max-w-2xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 pt-10 mt-10">
        
        {/* Toggle Header */}
        <div className="flex bg-slate-100 p-2 m-8 rounded-2xl">
          <button 
            onClick={() => setUserType('user')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${userType === 'user' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Attendee
          </button>
          <button 
            onClick={() => setUserType('organizer')}
            className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 ${userType === 'organizer' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Organizer
          </button>
        </div>

        <div className="px-10 pb-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-slate-900 mb-2">
              {userType === 'user' ? 'Join Us!' : 'Partner with Us'}
            </h2>
            <p className="text-slate-500 font-medium">Create your {userType} account to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Common Fields: Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input required type="email" placeholder="name@mail.com" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input required type="tel" placeholder="+91 0000 0000" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all" />
                </div>
              </div>
            </div>



{/* Password Fields */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  <div className="space-y-2">
    <label className="text-xs font-black text-slate-400 uppercase ml-1">Password</label>
    <div className="relative">
      <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
      <input 
        required 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••" 
        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all" 
      />
    </div>
  </div>
  <div className="space-y-2">
    <label className="text-xs font-black text-slate-400 uppercase ml-1">Confirm Password</label>
    <div className="relative">
      <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
      <input 
        required 
        type="password" 
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="••••••••" 
        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all" 
      />
    </div>
  </div>
</div>



            {/* User Specific Fields */}
            {userType === 'user' && (
              <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <label className="text-xs font-black text-slate-400 uppercase ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input required type="text" placeholder="Enter your full name" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all" />
                </div>
              </div>
            )}

            {/* Organizer Specific Fields */}
            {userType === 'organizer' && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase ml-1">Company Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input required type="text" placeholder="Event Management Co." className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-1">Current Event Name</label>
                    <div className="relative">
                      <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="text" placeholder="Mega Fest 2026" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase ml-1">Event Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input required type="text" placeholder="Kochi, Kerala" className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all" />
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-[24px] border-2 border-dashed border-slate-200">
                  <label className="text-xs font-black text-slate-400 uppercase block mb-3">Company Logo</label>
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-inner flex items-center justify-center overflow-hidden border border-slate-100">
                      {logoPreview ? (
                        <img src={logoPreview} alt="Logo" className="w-full h-full object-cover" />
                      ) : (
                        <Camera className="text-slate-300" size={28} />
                      )}
                    </div>
                    <div className="flex-1">
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleLogoChange}
                        className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-black file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100 cursor-pointer"
                      />
                      <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-wider">PNG, JPG up to 5MB</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-[24px] font-black text-lg shadow-xl shadow-slate-200 hover:bg-indigo-600 hover:shadow-indigo-100 transition-all duration-300 active:scale-[0.98] mt-4 flex items-center justify-center gap-3"
            >
              <LogIn size={20} /> Create Account
            </button>
          </form>
        </div>
      </div>


      {/* Success Pop-up Modal */}
{showSuccess && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
    {/* Overlay */}
    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"></div>
    
    {/* Modal Content */}
    <div className="relative bg-white rounded-[40px] p-10 max-w-sm w-full shadow-2xl text-center transform transition-all animate-in zoom-in duration-300">
      <div className="w-24 h-24 bg-green-50 rounded-[32px] flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-100">
        <CheckCircle size={48} className="text-green-500" />
      </div>
      
      <h3 className="text-3xl font-black text-slate-900 mb-2">All Set!</h3>
      <p className="text-slate-500 font-medium leading-relaxed mb-8">
        Your {userType} account has been created successfully. Ready to explore?
      </p>

      {/* ശരിയായ ബട്ടൺ ലോജിക് ഇവിടെയാണ് */}
      <button 
        onClick={() => {
          setShowSuccess(false);
          if (userType === 'organizer') {
            navigate('/OrganizerDashboard'); // നിങ്ങളുടെ Router-ൽ നൽകിയിരിക്കുന്ന അതേ പേര്
          } else {
            navigate('/'); // സാധാരണ യൂസർ ആണെങ്കിൽ ഹോം പേജിലേക്ക്
          }
        }}
        className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all active:scale-95"
      >
        Let's Go!
      </button>
    </div>
  </div>
)}


    </div>
  );
};

export default SignUp;