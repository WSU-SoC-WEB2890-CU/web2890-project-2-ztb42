import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        // Update form data
        setFormData({ ...formData, [name]: value });

        // Clear the error message when user starts typing
        if (formErrors[name as keyof typeof formErrors]) {
            setFormErrors({ ...formErrors, [name]: '' });
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Validation logic
        const errors = {
            name: formData.name.trim() === '' ? 'Enter your name here!' : '',
            email: formData.email.trim() === '' ? 'Enter your email address here!' : '',
            message: formData.message.trim() === '' ? 'Write your message here!' : '',
        };

        setFormErrors(errors);

        // Check if there are no errors before submitting
        if (Object.values(errors).every((error) => error === '')) {
            // Your form submission logic here
            console.log('Form submitted:', formData);
        }
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
                        fullWidth
                        id="name"
                        label="Your Name"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        color="secondary"
                        error={!!formErrors.name}
                        helperText={formErrors.name}
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Your Email Address"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        color="secondary"
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        fullWidth
                        multiline
                        rows={4}
                        id="message"
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        color="secondary"
                        error={!!formErrors.message}
                        helperText={formErrors.message}
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
