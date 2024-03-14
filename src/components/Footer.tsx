import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-media">
                <a href="https://facebook.com" target="_blank">
                    <Facebook sx={{ fontSize: 50 }} />
                </a>
                <span className="slash">/</span>
                <a href="https://instagram.com" target="_blank">
                    <Instagram sx={{ fontSize: 50 }} />
                </a>
                <span className="slash">/</span>
                <a href="https://linkedin.com" target="_blank">
                    <LinkedIn sx={{ fontSize: 50 }} />
                </a>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/">
                    <img src="logo.svg" alt="logo" />
                </Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </footer>
    );
};

export default Footer;
