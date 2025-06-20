// Layout.jsx
import Navbar from './Navigation.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the current page */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;