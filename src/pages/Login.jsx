import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, LockKeyhole, Phone, ShieldCheck, ArrowLeft, LogIn } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState('password'); // 'password' or 'otp'
  
  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  // Handle Form Submit
  const handleLogin = (e) => {
    e.preventDefault();

    // 1. ലോഗിൻ ഡാറ്റ സെറ്റ് ചെയ്യുന്നു (യഥാർത്ഥത്തിൽ ഇത് API-ൽ നിന്നാണ് വരേണ്ടത്)
    const userData = {
      name: email.split('@')[0] || "User", // ഈമെയിലിന്റെ ആദ്യ ഭാഗം പേരായി എടുക്കുന്നു
      email: email,
      isLoggedIn: true
    };

    // 2. LocalStorage-ൽ സേവ് ചെയ്യുന്നു
    localStorage.setItem('user', JSON.stringify(userData));

    // 3. ഹോം പേജിലേക്ക് നാവിഗേറ്റ് ചെയ്യുന്നു
    navigate('/');
    
    // 4. Navbar ഉടൻ അപ്ഡേറ്റ് ആകാൻ പേജ് ഒന്ന് റിഫ്രഷ് ചെയ്യുന്നു (അല്ലെങ്കിൽ Context API ഉപയോഗിക്കണം)
    window.location.reload();
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-sm"></div>
      </div>

      {/* Back to Home Button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 z-10 flex items-center gap-2 text-white/80 hover:text-white transition font-bold bg-white/10 px-4 py-2 rounded-full backdrop-blur-md"
      >
        <ArrowLeft size={20} /> Back to Home
      </button>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-6 mx-4">
        <div className="bg-white/95 backdrop-blur-2xl rounded-[40px] shadow-2xl p-8 md:p-10 border border-white/20">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Welcome Back!</h2>
            <p className="text-slate-500 font-medium italic">"Experience the best events around you"</p>
          </div>

          {/* Login Method Toggle */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
            <button 
              onClick={() => setLoginMethod('password')}
              className={`flex-1 py-2.5 rounded-xl font-bold transition-all duration-300 ${loginMethod === 'password' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Password
            </button>
            <button 
              onClick={() => setLoginMethod('otp')}
              className={`flex-1 py-2.5 rounded-xl font-bold transition-all duration-300 ${loginMethod === 'otp' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Mobile & OTP
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {loginMethod === 'password' ? (
              <>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase ml-1 tracking-wider">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@mail.com" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all font-medium" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Password</label>
                    <button type="button" className="text-[10px] font-bold text-indigo-600 hover:underline uppercase">Forgot?</button>
                  </div>
                  <div className="relative">
                    <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all font-medium" 
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase ml-1 tracking-wider">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="tel" 
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="+91 0000 0000" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all font-medium" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase ml-1 tracking-wider">OTP Code</label>
                  <div className="relative">
                    <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="text" 
                      maxLength="6"
                      placeholder="Enter 6-digit OTP" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent focus:border-indigo-500 focus:bg-white rounded-2xl outline-none transition-all font-medium text-center tracking-[0.5em] text-lg" 
                    />
                  </div>
                  <button type="button" className="text-[10px] font-black text-indigo-600 hover:text-indigo-800 ml-1 uppercase tracking-widest">Resend OTP in 30s</button>
                </div>
              </>
            )}

            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-[24px] font-black text-lg shadow-xl shadow-slate-200 hover:bg-indigo-600 hover:shadow-indigo-200/50 transition-all duration-300 active:scale-[0.98] mt-4 flex items-center justify-center gap-3"
            >
              <LogIn size={20} /> Sign In
            </button>
          </form>

          {/* Bottom Link */}
          <p className="text-center mt-8 text-slate-500 font-medium">
            New to Evento? <span onClick={() => navigate('/signup')} className="text-indigo-600 font-black cursor-pointer hover:underline underline-offset-4">Create Account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;