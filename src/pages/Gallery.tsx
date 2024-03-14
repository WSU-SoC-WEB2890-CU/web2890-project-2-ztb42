import { Masonry } from '@mui/lab';
import { Container } from '@mui/material';

const Gallery = () => {
    const isMobile = window.innerWidth < 768;

    return (
        <Container className="gallery" sx={{ my: 5 }}>
            <Masonry columns={isMobile ? 1 : 2} spacing={2}>
                {itemData.map((item, index) => (
                    <div key={index}>
                        <img
                            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=162&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </div>
                ))}
            </Masonry>
        </Container>
    );
};

const itemData = [
    {
        img: '/main-1.jpeg',
        title: 'Girls standing on salt flats with mountains in background',
    },
    {
        img: '/main-3.jpg',
        title: 'Girls posing on salt flats with mountains in background',
    },
    {
        img: '/main-2.jpeg',
        title: 'Girls sitting on car on salt flats with mountains in background',
    },
    {
        img: '/main-0.jpg',
        title: 'Girls sitting on car watching sunset',
    },
    {
        img: '/gallery/img-1.jpg',
        title: 'Teenager smiling in front of a fence',
    },
    {
        img: '/gallery/img-2.jpg',
        title: 'Woman kissing man on cheek',
    },
    {
        img: '/gallery/img-3.jpg',
        title: 'Teenager posing with gun',
    },
    {
        img: '/gallery/img-4.jpg',
        title: 'Girl leaning against tree in forest',
    },
    {
        img: '/gallery/img-5.jpg',
        title: 'Girl in forest with leaf against face',
    },
    {
        img: '/gallery/img-6.jpg',
        title: 'Two girls in forest hiding faces with leaves',
    },
    {
        img: '/gallery/img-7.jpg',
        title: 'Girl posing in forest',
    },
    {
        img: '/gallery/img-8.jpg',
        title: 'Girl sitting in forest posing',
    },
    {
        img: '/gallery/img-9.jpeg',
        title: 'Soccer ball on salt flats in front of sunset',
    },
    {
        img: '/gallery/img-10.jpeg',
        title: 'Girl giving guy a piggyback ride on salt flats',
    },
    {
        img: '/gallery/img-11.jpeg',
        title: 'Guy proposing to girl in mountains',
    },
];

export default Gallery;
