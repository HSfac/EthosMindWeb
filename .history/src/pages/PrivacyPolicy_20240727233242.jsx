import React from 'react';
import './PrivacyPolicy.css';

function Privacy() {
  return (
    <main className="privacy-main">
      <section className="privacy-ethosmind-content">
        <h2 className="privacy-ethosmind-section-title">EthosMind Privacy Policy</h2>
        <p className="privacy-ethosmind-last-updated">Last updated: [2024.07.27]</p>

        <h3 className="privacy-ethosmind-subtitle">1. Information We Collect</h3>
        <p className="privacy-ethosmind-text">We collect information you provide directly to us when using our mobile applications (Philochat, Buddhachat, and Biblechat), including:</p>
        <ul className="privacy-ethosmind-list">
          <li>Account information (e.g., name, email address)</li>
          <li>User-generated content (e.g., messages, conversation history)</li>
          <li>Device information and usage data</li>
        </ul>

        <h3 className="privacy-ethosmind-subtitle">2. How We Use Your Information</h3>
        <p className="privacy-ethosmind-text">We use the collected information to:</p>
        <ul className="privacy-ethosmind-list">
          <li>Provide and improve our services</li>
          <li>Personalize your experience</li>
          <li>Communicate with you about our services</li>
          <li>Analyze usage patterns and trends</li>
        </ul>

        <h3 className="privacy-ethosmind-subtitle">3. Data Security</h3>
        <p className="privacy-ethosmind-text">We implement appropriate technical and organizational measures to protect your personal information.</p>

        <h3 className="privacy-ethosmind-subtitle">4. Your Rights</h3>
        <p className="privacy-ethosmind-text">You have the right to access, correct, or delete your personal information. Please contact us for any privacy-related requests.</p>

        <h3 className="privacy-ethosmind-subtitle">5. Changes to This Policy</h3>
        <p className="privacy-ethosmind-text">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

        <h3 className="privacy-ethosmind-subtitle">6. Contact Us</h3>
        <p className="privacy-ethosmind-text">If you have any questions about this privacy policy, please contact us at:</p>
        <a href="mailto:ethosmind.ai@gmail.com" className="privacy-ethosmind-email">ethosmind.ai@gmail.com</a>
      </section>
    </main>
  );
}

export default Privacy;
