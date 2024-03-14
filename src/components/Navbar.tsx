import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-bar d-flex flex-column">
            <NavLink to="/" end className="mb-4">
                <img src="/logo.svg" alt="logo" width="170" />
            </NavLink>

            <div className="d-flex flex-row">
                <NavLink to="/" end className="nav-link">
                    HOME
                </NavLink>
                <NavLink to="/about" end className="nav-link">
                    ABOUT
                </NavLink>
                <NavLink to="/gallery" end className="nav-link">
                    GALLERY
                </NavLink>
                <NavLink to="/contact" end className="nav-link">
                    CONTACT
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
