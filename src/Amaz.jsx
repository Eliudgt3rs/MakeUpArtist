
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import  Home  from './Pages/Home.jsx';
import ServicesPage  from './Pages/Services.jsx'
import  BookingPage  from './Pages/Booking.jsx'
import GalleryPage from './Pages/Gallery.jsx'
import Navigation from './Pages/Navigation.jsx'
import Footer  from './Pages/Footer.jsx'
import Layout from './Pages/Layout.jsx';


function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      </BrowserRouter>
     </>
  )
}

export default App