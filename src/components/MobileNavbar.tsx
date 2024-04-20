import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        setExpanded(false);
    }, [location]);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <BootstrapNavbar
            expanded={expanded}
            expand="false"
            variant="light"
            className={`${!isHomePage ? 'bg-light' : ''} px-4 mobile-nav`}
        >
            <BootstrapNavbar.Brand as={NavLink} to="/">
                <img src="/logo.svg" alt="logo" width="170" />
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle onClick={handleToggle} aria-controls="navbar-nav" />
            <BootstrapNavbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/" className="link">
                        HOME
                    </NavLink>
                    <NavLink to="/about" className="link">
                        ABOUT
                    </NavLink>
                    <NavLink to="/gallery" className="link">
                        GALLERY
                    </NavLink>
                    <NavLink to="/contact" className="link">
                        CONTACT
                    </NavLink>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
};

export default Navbar;
