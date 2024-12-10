import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <main className="contact-main">
      <section className="contact-hero">
        <h1 className="contact-hero-title">Contact Us</h1>
        <p className="contact-hero-description">We'd love to hear from you</p>
      </section>

      <section className="contact-content">
        <h2 className="contact-section-title">Get in Touch</h2>
        <p>Have questions, suggestions, or just want to say hello? We're here to listen.</p>
        
        <div className="contact-info">
          <h3>Email Us</h3>
          <a href="mailto:ethosmind.ai@gmail.com" className="contact-email">ethosmind.ai@gmail.com</a>
        </div>

        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="contact-submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;