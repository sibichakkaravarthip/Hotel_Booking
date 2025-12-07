import { useState } from 'react';
import '../Main.css';

export function Contact(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!formData.name.trim()) return setError("Please enter your name.");
        if (!formData.email.trim()) return setError("Please enter your email.");
        if (!formData.phone.trim()) return setError("Please enter your phone number.");
        if (!formData.subject.trim()) return setError("Please enter a subject.");
        if (!formData.message.trim()) return setError("Please enter your message.");

        setLoading(true);
        // Simulate form submission
        setTimeout(() => {
            localStorage.setItem("contact_" + Date.now(), JSON.stringify(formData));
            setLoading(false);
            setSuccess(true);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            setTimeout(() => setSuccess(false), 3000);
        }, 1000);
    }

    return(
        <div className="page-container">
            <div className="page-content">
                <section className="section-hero">
                    <h1>Contact Us</h1>
                    <p className="subtitle">We'd love to hear from you. Get in touch with our team!</p>
                </section>

                <div className="contact-grid">
                    {/* Contact Information */}
                    <section className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>Have questions or need assistance? Reach out to us through any of these channels.</p>

                        <div className="info-item">
                            <h3>📞 Phone</h3>
                            <p>+91 98765 43210</p>
                            <p className="text-muted">Available 24/7</p>
                        </div>

                        <div className="info-item">
                            <h3>✉️ Email</h3>
                            <p>support@staycomfort.com</p>
                            <p className="text-muted">We respond within 24 hours</p>
                        </div>

                        <div className="info-item">
                            <h3>📍 Address</h3>
                            <p>StayComfort Hotels Pvt Ltd</p>
                            <p>123 Hotel Street, Chennai</p>
                            <p>Tamil Nadu 600001, India</p>
                        </div>

                        <div className="info-item">
                            <h3>🕐 Business Hours</h3>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </section>

                    {/* Contact Form */}
                    <section className="contact-form-section">
                        <h2>Send us a Message</h2>
                        <p>Fill out the form below and we'll get back to you shortly.</p>

                        {success && <div className="success-message">✓ Message sent successfully! We'll contact you soon.</div>}

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="How can we help?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your inquiry..."
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            {error && <div className="form-error">{error}</div>}

                            <button type="submit" className="btn-submit" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </section>
                </div>

                <section className="section-faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>How can I book a room?</h3>
                            <p>Visit our rooms page, select your preferred room, choose your dates, and complete the booking process.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What is your cancellation policy?</h3>
                            <p>Free cancellation up to 24 hours before check-in. After that, you may be charged.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Do you offer discounts?</h3>
                            <p>Yes! Check our special offers page for seasonal discounts and group bookings.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Is payment secure?</h3>
                            <p>Absolutely! We use encrypted payment gateways for safe and secure transactions.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}