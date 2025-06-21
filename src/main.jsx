import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import Booking from './Pages/Booking.jsx';
import Gallery from './Pages/Gallery.jsx';
import Navigation from './Pages/Navigation.jsx';
import Footer from './Pages/Footer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'booking', element: <Booking /> },
      { path: 'gallery', element: <Gallery /> },
    ],
  },
  { path: '*', element: <div>404 - Page Not Found</div> }, // Optional 404 route
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);