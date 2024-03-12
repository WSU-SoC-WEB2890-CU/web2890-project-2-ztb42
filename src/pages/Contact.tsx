import React from 'react';
import { Container, TextField, Button } from '@mui/material';

const Contact = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Container maxWidth="sm" sx={{ my: 3, textAlign: 'center' }}>
            <h1 className="my-3">Get in Touch with Dubs Imagery!</h1>
            <p>
                We're thrilled to hear from you! Whether you have a question about our services, want to discuss a
                collaboration, or simply want to say hi, drop us a message below.
            </p>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Your Name"
                    name="name"
                    autoComplete="name"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Your Email Address"
                    name="email"
                    autoComplete="email"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    id="message"
                    label="Your Message"
                    name="message"
                />
                <Button type="submit" variant="contained" color="inherit" sx={{ px: 4, my: 2 }}>
                    Shoot us a Message!
                </Button>
            </form>
            <p>P.S. We promise to respond faster than your camera's shutter speed!</p>
        </Container>
    );
};

export default Contact;
