import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; 
import './index.css';

// Component Imports
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventDetails from "./pages/eventDetails";
import About from './pages/About';
import Gallery from './pages/Gallery';
import Organizers from './pages/Organizers';
import Contact from './pages/Contact';
import Events from './sections/Events';
import Venues from './pages/Venues';
import Footer from './components/Footer';
import VenueDetails from './pages/VenueDetails';
import Booking from './pages/Booking';
import SignUp from './pages/SignUp';
import EditProfile from './pages/EditProfile';
import OrganizerDashboard from './pages/Organizer/OrganizerDashboard';
import Login from './pages/Login';
import SavedEvents from './pages/SavedEvents';
import OrganizersDetails from "./pages/OrganizersDetails";
import Emailer from './pages/Emailer'
import BookingSuccess from './pages/BookingSuccess';


// const About = () => <div className="p-20 text-center text-2xl font-bold text-slate-800">About Evento</div>;

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
    
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "event/:id", element: <EventDetails /> },
      { path: "about", element: <About /> },
      { path: "Gallery", element: <Gallery /> },
      { path: "Organizers", element: <Organizers /> },
      { path: "Contact", element: <Contact /> },
      { path: "Events", element: <Events /> },
      { path: "Venues", element: <Venues /> },
      { path: "venue/:id", element: <VenueDetails /> },
      { path: "booking/:id", element: <Booking /> },
      // { path: "SignUp", element: <SignUp.jsx /> },
      { path: "EditProfile", element: <EditProfile />},
      { path: "signup",element: <SignUp />},
      { path: "OrganizerDashboard",element: <OrganizerDashboard/>},
      { path: "Login", element: <Login />},
      { path: "saved-events", element: <SavedEvents />},
      { path: "organizer/:id", element: <OrganizersDetails/> },
      { path: "Emailer", element: <Emailer />},
      { path: "booking-success", element: <BookingSuccess />}
      
    
    ],
  },

],
{
  basename: "/Evento"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);