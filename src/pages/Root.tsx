import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            {isHomePage ? (
                <div className="home">
                    <Navbar />
                </div>
            ) : (
                <Navbar />
            )}
            <Outlet />
            {!isHomePage && <Footer />}
        </>
    );
};

export default Root;
