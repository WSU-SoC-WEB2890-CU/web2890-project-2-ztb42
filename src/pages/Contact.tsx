import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <div className="contact">
            <div className="hero">
                <div className="hero-text">
                    <h1 className="py-3">Get in Touch</h1>
                    <p className="lead fs-4">
                        We're thrilled to hear from you! Whether you have a question about our services, want to discuss
                        a collaboration, or simply want to say hi, drop us a message below.
                    </p>
                </div>
            </div>
            <Container maxWidth="sm" sx={{ my: 5, textAlign: 'center' }}>
                <h2 className="py-2">Connect with Us</h2>
                <div className="heading-line"></div>
                <form name="contact" onSubmit={handleSubmit} data-netlify="true">
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Your Name"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Your Email Address"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        rows={4}
                        id="message"
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="contained" color="inherit" sx={{ px: 4, my: 2 }}>
                        Shoot us a Message!
                    </Button>
                </form>
                <p>P.S. We promise to respond faster than your camera's shutter speed!</p>
            </Container>
        </div>
    );
};

export default Contact;
