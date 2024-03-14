import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home">
            <Carousel indicators={false} interval={null} data-bs-theme="dark">
                <Carousel.Item>
                    <img className="image" src="main-0.jpg" alt="slide1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image" src="main-1.jpeg" alt="slide2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image" src="main-2.jpeg" alt="slide3" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="image" src="main-3.jpg" alt="slide3" />
                </Carousel.Item>
            </Carousel>
            <Link to="/gallery" className="gallery-link">
                View Gallery
            </Link>
        </div>
    );
};

export default Home;
