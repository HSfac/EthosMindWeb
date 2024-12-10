import React from 'react';
import './PrivacyPolicy.css';

function Privacy() {
  return (
    <main className="privacy-main">
      <section className="privacy-hero">
        <h1 className="privacy-hero-title">Privacy Policy</h1>
        <p className="privacy-hero-description">Your privacy is important to us</p>
      </section>

      <section className="privacy-content">
        <h2 className="privacy-section-title">EthosMind Privacy Policy</h2>
        <p>Last updated: [Current Date]</p>

        <h3>1. Information We Collect</h3>
        <p>We collect information you provide directly to us when using our mobile applications (Philochat, Buddhachat, and Biblechat), including:</p>
        <ul>
          <li>Account information (e.g., name, email address)</li>
          <li>User-generated content (e.g., messages, conversation history)</li>
          <li>Device information and usage data</li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Personalize your experience</li>
          <li>Communicate with you about our services</li>
          <li>Analyze usage patterns and trends</li>
        </ul>

        <h3>3. Data Security</h3>
        <p>We implement appropriate technical and organizational measures to protect your personal information.</p>

        <h3>4. Your Rights</h3>
        <p>You have the right to access, correct, or delete your personal information. Please contact us for any privacy-related requests.</p>

        <h3>5. Changes to This Policy</h3>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

        <h3>6. Contact Us</h3>
        <p>If you have any questions about this privacy policy, please contact us at:</p>
        <a href="mailto:ethosmind.ai@gmail.com" className="privacy-email">ethosmind.ai@gmail.com</a>
      </section>
    </main>
  );
}

export default Privacy;