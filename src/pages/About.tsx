import { Container } from '@mui/material';

const About = () => {
    return (
        <div className="about">
            <div className="hero">
                <div className="hero-inner">
                    <div className="hero-text">
                        <h1 className="py-3">About Me</h1>
                        <p className="lead fs-4">
                            "Capturing life's fleeting moments one procrastinated shutter click at a time."
                            <br />- Isaac Rasmussen, Photographer Extraordinaire
                        </p>
                    </div>
                    <div className="hero-img">
                        <div className="img-border">
                            <img src="/isaac-1.jpg" alt="About Us" className="image" />
                        </div>
                    </div>
                </div>
            </div>

            <Container maxWidth={'md'} sx={{ my: 5 }}>
                <div className="text-center py-2">
                    <h2 className="pb-2">Behind the Lens</h2>
                    <div className="heading-line"></div>
                    <p className="lead fs-4">The Mysterious Marvels of Isaac Rasmussen</p>
                </div>

                <p>
                    Greetings, seeker of visual wonders! Behold the curious chronicles of Isaac Rasmussen, a
                    photographer by fate, a dreamer by design, and a magnet for the marvelously peculiar.
                </p>
                <p>
                    Imagine a young Isaac, barely taller than his tripod, armed with nothing but a disposable camera and
                    boundless curiosity. His debut into the world of photography? A school project gone gloriously awry,
                    resulting in an unintentionally avant-garde study of the local seagull population. Critics were...
                    less than impressed.
                </p>
                <p>
                    Undeterred, Isaac plunged headfirst into the realm of the lens. From the majesty of dancing Northern
                    Lights to the unexpected charm of a potato-chip-stealing raccoon, his camera bore witness to the
                    whimsy of life.
                </p>
                <p>
                    But here comes the twist! Fate, that whimsical trickster, seemed determined to add its own flavor to
                    Isaac's adventures. Mishaps ensued, from mistaking a cactus for a cozy seat (ouch) to the legendary
                    "Camera vs. Puddle" duel of '17 (spoiler alert: the puddle emerged victorious).
                </p>
                <p>
                    Yet, undaunted, Isaac persisted, armed with a quick wit, a sturdy tripod, and a knack for turning
                    blunders into memorable tales. His photographs, infused with humor and heart, found homes in
                    galleries, publications, and the digital realms of Instagram (follow count: 130... and rising!).
                </p>
                <p>
                    So, dear visitor, welcome to the digital realm of Isaac Rasmussen's photographic escapades. Here,
                    amidst pixels and panoramas, you'll discover snapshots of laughter, glimpses of wonder, and the
                    occasional cameo by a remarkably photogenic potato.
                </p>
                <p>
                    Join us on this whimsical journey through the lens of an accidental artist, where each click
                    captures life's quirks with charm and curiosity. Isaac Rasmussen: weaving tales of the peculiar, one
                    photograph at a time.
                </p>
            </Container>
        </div>
    );
};

export default About;
