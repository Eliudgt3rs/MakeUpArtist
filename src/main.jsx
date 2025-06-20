import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  Services  from './Pages/Services.jsx'
import Booking from './Pages/Booking.jsx'
import  Gallery from './Pages/Gallery.jsx'
import Navigation from './Pages/Navigation.jsx'
import  Footer from './Pages/Footer.jsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/services', element: <Services /> },
  { path: '/booking', element: <Booking /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/navigation', element: <Navigation /> },
  { path: '/footer', element: <Footer /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
