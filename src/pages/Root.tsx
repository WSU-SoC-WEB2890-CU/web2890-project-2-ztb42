import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar'; // import MobileNavbar
import Footer from '../components/Footer';

const Root = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isMobile = Number(window.innerWidth) <= 768; // check if screen size is mobile

    return (
        <>
            {
                isHomePage ? (
                    <div className="home">{isMobile ? <MobileNavbar /> : <Navbar />}</div>
                ) : isMobile ? (
                    <MobileNavbar />
                ) : (
                    <Navbar />
                ) // render MobileNavbar or Navbar based on screen size
            }
            <Outlet />
            {!isHomePage && <Footer />}
        </>
    );
};

export default Root;
