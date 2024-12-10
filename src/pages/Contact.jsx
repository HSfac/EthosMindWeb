import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Email sent successfully!');
    }, (error) => {
      console.log('FAILED...', error);
      setStatus('Failed to send email.');
    });
  };

  return (
    <main className="contact-main">
      <section className="contact-content">
        <h2 className="contact-section-title">Get in Touch</h2>
        <p>Have questions, suggestions, or just want to say hello? We're here to listen.</p>
        
        <div className="contact-info">
          <h3>Email Us</h3>
          <a href="mailto:ethosmind.ai@gmail.com" className="contact-email">ethosmind.ai@gmail.com</a>
        </div>

        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="contact-submit-button">Send Message</button>
          </form>
          {status && <p>{status}</p>}
        </div>
      </section>
    </main>
  );
}

export default Contact;
