import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Mail, Phone, User, Ticket, CheckCircle, ArrowLeft, Loader2, ShieldCheck } from 'lucide-react';

const Emailer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // EventDetails-ൽ നിന്ന് വരുന്ന ഡാറ്റ സ്വീകരിക്കുന്നു
  const { eventTitle, ticketNumber, totalRate } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  // ഡാറ്റ ഇല്ലാതെ നേരിട്ട് ഈ പേജിൽ വന്നാൽ ഹോം പേജിലേക്ക് തിരിച്ചുവിടുന്നു
  if (!eventTitle) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-xl font-bold mb-4">No booking data found!</h2>
        <Link to="/" className="bg-indigo-600 text-white px-6 py-2 rounded-xl">Go to Home</Link>
      </div>
    );
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS ടെംപ്ലേറ്റിലേക്ക് അയക്കേണ്ട വിവരങ്ങൾ
    const templateParams = {
      user_name: userData.fullName,
      user_email: userData.email,
      user_phone: userData.phone,
      event_name: eventTitle,
      total_tickets: ticketNumber,
      total_price: totalRate,
    };

    emailjs.send(
      'service_eqteg6e',      // Your Service ID
      'template_6ay6j2n',     // പകരമായി നിങ്ങളുടെ Template ID ഇവിടെ നൽകുക
      templateParams,
      'zxa-RvNNX1CmjQCsi'     // Your Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      
      // ഇമെയിൽ അയച്ചു കഴിഞ്ഞാൽ ടിക്കറ്റ് പേജിലേക്ക് (BookingSuccess) പോകുന്നു
      navigate('/booking-success', { 
        state: { 
          eventTitle, 
          ticketNumber, 
          totalRate, 
          fullName: userData.fullName, 
          phone: userData.phone,
          email: userData.email
        } 
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert("Booking failed. Please check your internet or EmailJS settings.");
    })
    .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-10">
      <div className="bg-white w-full max-w-5xl rounded-[40px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side: Booking Summary Visual */}
        <div className="bg-indigo-600 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Ticket size={200} rotate={45} />
          </div>

          <div className="relative z-10">
            <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-indigo-200 hover:text-white transition-colors">
              <ArrowLeft size={20} /> Back to Details
            </button>
            <h1 className="text-3xl md:text-4xl font-black mb-6 leading-tight">{eventTitle}</h1>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <Ticket className="text-indigo-300" />
                <div>
                  <p className="text-xs font-bold uppercase opacity-60">Reserved Seats</p>
                  <p className="text-xl font-black">{ticketNumber} Person(s)</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <CheckCircle className="text-emerald-400" />
                <div>
                  <p className="text-xs font-bold uppercase opacity-60">Total Payable</p>
                  <p className="text-3xl font-black">₹{totalRate}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 flex items-center gap-2 text-indigo-200 text-sm font-medium">
            <ShieldCheck size={18} /> Secure Checkout powered by EmailJS
          </div>
        </div>

        {/* Right Side: User Details Form */}
        <div className="p-8 md:p-12 bg-white">
          <div className="mb-10">
            <h3 className="text-2xl font-black text-slate-900">Guest Information</h3>
            <p className="text-slate-500 font-medium">Please enter your details to receive the digital ticket.</p>
          </div>

          <form className="space-y-6" onSubmit={sendEmail}>
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20}/>
                <input 
                  required 
                  type="text" 
                  placeholder="Ex: Rahul Sharma" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-indigo-600 font-bold transition-all"
                  onChange={(e) => setUserData({...userData, fullName: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20}/>
                <input 
                  required 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-indigo-600 font-bold transition-all"
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase ml-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20}/>
                <input 
                  required 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-indigo-600 font-bold transition-all"
                  onChange={(e) => setUserData({...userData, phone: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-600 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all shadow-xl shadow-slate-200 mt-4 flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Processing...
                </>
              ) : (
                <>Confirm & Book Now <CheckCircle size={20}/></>
              )}
            </button>
          </form>

          <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-8">
            Instant Confirmation • Digital Ticket • 24/7 Support
          </p>
        </div>

      </div>
    </div>
  );
};

export default Emailer;