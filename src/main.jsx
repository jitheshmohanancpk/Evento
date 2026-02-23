import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom'; 
import './index.css';

// Component Imports
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EventDetails from "./pages/eventDetails";
import About from './pages/About';

// const About = () => <div className="p-20 text-center text-2xl font-bold text-slate-800">About Evento</div>;

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "event/:id", element: <EventDetails /> },
      { path: "about", element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);