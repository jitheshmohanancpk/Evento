import React, { useState, useEffect } from 'react';
import { User, Calendar, MapPin, ExternalLink, ShieldCheck, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Organizers = () => {
  const allOrganizers = [
     {
      id: 1,
      name: "Tech-Kerala Community",
      type: "Tech Hub",
      location: "Kochi, Kerala",
      eventsHosted: 12,
      bio: "A community of developers and innovators focused on AI, Web3, and future technologies.",
      image: "data:image/png;base64,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",
      verified: true
    },
    {
      id: 2,
      name: "Artbeat Productions",
      type: "Music & Art",
      location: "Bengaluru, Karnataka",
      eventsHosted: 45,
      bio: "Bringing independent artists to the spotlight through soulful acoustic nights and galleries.",
      image: "data:image/png;base64,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",
      verified: true
    },
    {
      id: 3,
      name: "Linkin Park Productions",
      type: "Concerts",
      location: "Global / Mumbai",
      eventsHosted: 8,
      bio: "Specializing in large-scale international music tours and high-energy rock concerts.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Linkin_Park_logo_2024.svg/960px-Linkin_Park_logo_2024.svg.png",
      verified: false
    },
    {
    id: 4,
    name: "Velocity Sports Management",
    type: "Sports",
    location: "Mumbai, Maharashtra",
    eventsHosted: 85,
    bio: "Organizing city-wide marathons and professional turf tournaments.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400",
    verified: true
  },
  {
    id: 5,
    name: "Green Root Workshops",
    type: "Workshop",
    location: "Pune, Maharashtra",
    eventsHosted: 32,
    bio: "Sustainable living workshops ranging from organic gardening to upcycling.",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=400",
    verified: false
  },
  {
    id: 6,
    name: "Retro Rhythm Records",
    type: "Music",
    location: "Goa, India",
    eventsHosted: 60,
    bio: "The masters of electronic dance music festivals and beach-side jazz nights.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400",
    verified: true
  },
  {
    id: 7,
    name: "Gourmet Guild",
    type: "Food & Beverage",
    location: "Delhi, NCR",
    eventsHosted: 28,
    bio: "Exploring culinary boundaries with food tasting tours and chef masterclasses.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400",
    verified: true
  },
  {
    id: 8,
    name: "Zenith Business Circle",
    type: "Networking",
    location: "Chennai, Tamil Nadu",
    eventsHosted: 150,
    bio: "The premier hub for B2B networking and startup investment pitches.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=400",
    verified: true
  },
  {
    id: 9,
    name: "Starlight Theater Group",
    type: "Cultural",
    location: "Kolkata, West Bengal",
    eventsHosted: 110,
    bio: "Reviving classical drama and modern theater through seasonal plays.",
    image: "https://images.unsplash.com/photo-1503095396549-807a89010046?q=80&w=400",
    verified: true
  },
  {
    id: 10,
    name: "Pixel Perfect Expo",
    type: "Photography",
    location: "Kochi, Kerala",
    eventsHosted: 19,
    bio: "Exhibiting visual stories from photographers around the globe.",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=400",
    verified: false
  },
  {
    id: 11,
    name: "Blue Wave Sailing",
    type: "Adventure",
    location: "Lakshadweep, India",
    eventsHosted: 12,
    bio: "Water sports festivals and ocean cleanup drives for eco-enthusiasts.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=400",
    verified: true
  },
  {
    id: 12,
    name: "Code & Coffee",
    type: "Technology",
    location: "Thiruvananthapuram, Kerala",
    eventsHosted: 55,
    bio: "Informal developer meetups and weekend coding sprints.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400",
    verified: true
  },
  {
    id: 13,
    name: "Mindful Living Co.",
    type: "Wellness",
    location: "Rishikesh, Uttarakhand",
    eventsHosted: 40,
    bio: "Yoga retreats and meditation summits for mental well-being.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400",
    verified: true
  },
  {
    id: 14,
    name: "Urban Comic Con",
    type: "Cultural",
    location: "Ahmedabad, Gujarat",
    eventsHosted: 8,
    bio: "A haven for geeks, cosplayers, and comic book collectors.",
    image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=400",
    verified: false
  },
  {
    id: 15,
    name: "Canvas & Cocktail",
    type: "Art",
    location: "Gurugram, Haryana",
    eventsHosted: 22,
    bio: "Paint nights for beginners mixed with exquisite drink tasting.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4ce18a8024?q=80&w=400",
    verified: true
  },
  {
    id: 16,
    name: "Future Finance Forums",
    type: "Education",
    location: "Mumbai, Maharashtra",
    eventsHosted: 77,
    bio: "Expert-led seminars on crypto, stock markets, and personal finance.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400",
    verified: true
  },
  {
    id: 17,
    name: "Wild Trails Adventure",
    type: "Sports",
    location: "Manali, Himachal Pradesh",
    eventsHosted: 14,
    bio: "High-altitude trekking expeditions and camping festivals.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400",
    verified: true
  },
  {
    id: 18,
    name: "Evolve Fashion Week",
    type: "Fashion",
    location: "Jaipur, Rajasthan",
    eventsHosted: 10,
    bio: "Showcasing ethnic heritage with a modern twist on the ramp.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=400",
    verified: true
  },
  {
    id: 19,
    name: "The Laugh Club",
    type: "Entertainment",
    location: "Indore, Madhya Pradesh",
    eventsHosted: 95,
    bio: "Hosting the biggest names in Indian stand-up comedy.",
    image: "https://images.unsplash.com/photo-1514525253361-bee8718a74a2?q=80&w=400",
    verified: true
  },
  {
    id: 20,
    name: "Astro Night Watchers",
    type: "Education",
    location: "Ladakh, India",
    eventsHosted: 6,
    bio: "Star-gazing events and astrophotography workshops in clear skies.",
    image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=400",
    verified: false
  },
  {
    id: 21,
    name: "Pet Pals Fest",
    type: "Community",
    location: "Pune, Maharashtra",
    eventsHosted: 18,
    bio: "Fun-filled carnivals for pets and their humans.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=400",
    verified: true
  },
  {
    id: 22,
    name: "Vibe & Flow",
    type: "Music",
    location: "Pondicherry, India",
    eventsHosted: 33,
    bio: "Reggae and indie music festivals by the promenade.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=400",
    verified: true
  },
  {
    id: 23,
    name: "Classic Car Club",
    type: "Hobbies",
    location: "Chandigarh, India",
    eventsHosted: 12,
    bio: "Exhibiting vintage automobiles and restoration stories.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400",
    verified: true
  },
  {
    id: 24,
    name: "Heritage Walks India",
    type: "Cultural",
    location: "Lucknow, Uttar Pradesh",
    eventsHosted: 200,
    bio: "Guided architectural and history tours through ancient cities.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=400",
    verified: true
  },
  {
    id: 25,
    name: "Data Science Daily",
    type: "Technology",
    location: "Hyderabad, Telangana",
    eventsHosted: 42,
    bio: "Workshops on AI, Machine Learning, and Big Data trends.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=400",
    verified: true
  },
  {
    id: 26,
    name: "Rhythm & Raaga",
    type: "Cultural",
    location: "Varanasi, Uttar Pradesh",
    eventsHosted: 88,
    bio: "Promoting Indian classical music through spiritual concerts.",
    image: "https://images.unsplash.com/photo-1514525253361-bee8718a74a2?q=80&w=400",
    verified: true
  },
  {
    id: 27,
    name: "Fitness First Hub",
    type: "Sports",
    location: "Noida, Uttar Pradesh",
    eventsHosted: 30,
    bio: "Zumba marathons and HIIT bootcamps for all fitness levels.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400",
    verified: true
  },
  {
    id: 28,
    name: "The Writer's Block",
    type: "Education",
    location: "Mysuru, Karnataka",
    eventsHosted: 15,
    bio: "Poetry slams and creative writing retreats for aspiring authors.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400",
    verified: false
  },
  {
    id: 29,
    name: "Cinema Paradiso",
    type: "Entertainment",
    location: "Kozhikode, Kerala",
    eventsHosted: 26,
    bio: "Screenings of world cinema and independent short film festivals.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400",
    verified: true
  },
  {
    id: 30,
    name: "Bloom & Branch",
    type: "Workshop",
    location: "Nagpur, Maharashtra",
    eventsHosted: 11,
    bio: "Floral arrangement classes and botanical illustration workshops.",
    image: "https://images.unsplash.com/photo-1490750967868-882002143a7b?q=80&w=400",
    verified: true
  },
  {
    id: 31,
    name: "Skyline E-Sports",
    type: "Technology",
    location: "Surat, Gujarat",
    eventsHosted: 50,
    bio: "National level gaming tournaments and streaming summits.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400",
    verified: true
  },
  {
    id: 32,
    name: "Eco-Quest Explorers",
    type: "Adventure",
    location: "Shillong, Meghalaya",
    eventsHosted: 21,
    bio: "Nature trails and caving expeditions in the Northeast.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=400",
    verified: true
  }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrganizers = allOrganizers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allOrganizers.length / itemsPerPage);

  useEffect(() => {
    // scroll-ൽ 'top' ചെറിയ അക്ഷരത്തിലായിരിക്കണം
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 overflow-y-auto">
      <div className="bg-slate-900 py-16 px-6 text-center">
        <h1 className="text-4xl font-black text-white mb-4">
          The <span className="text-indigo-400">Organizers</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto font-medium">
          Meet the communities and production houses behind the most iconic events in your city.
        </p>
      </div>

      <main className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentOrganizers.map((org) => (
            <div key={org.id} className="bg-[#FCF8F8] rounded-[32px] overflow-hidden shadow-xl border border-gray-100 group hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-32 bg-white">
                <div className="absolute -bottom-10 left-8">
                  <div className="w-[125px] h-[125px] rounded-2xl border-4 border-white overflow-hidden shadow-lg bg-white">
                    <img src={org.image} className="w-full h-full object-cover" alt={org.name} />
                  </div>
                </div>
              </div>

              <div className="pt-14 p-8">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-slate-800">{org.name}</h3>
                  {org.verified && <ShieldCheck size={18} className="text-indigo-500" />}
                </div>
                <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-4">{org.type}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{org.bio}</p>

                <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-6 mb-6">
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin size={16} />
                    <span className="text-xs font-bold">{org.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={16} />
                    <span className="text-xs font-bold">{org.eventsHosted} Events</span>
                  </div>
                </div>

                <Link 
                  to={`/organizer/${org.id}`} 
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200"
                >
                  View Profile <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- Pagination Controls --- */}
        <div className="flex justify-center items-center mt-16 gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border bg-white hover:bg-gray-100 disabled:opacity-30 transition"
          >
            {/* C Capital letter ആയിരിക്കണം */}
            <ChevronLeft size={20} />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`w-10 h-10 rounded-lg font-bold transition ${
                currentPage === index + 1
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                  : 'bg-white border text-slate-600 hover:border-indigo-400'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border bg-white hover:bg-gray-100 disabled:opacity-30 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Organizers;