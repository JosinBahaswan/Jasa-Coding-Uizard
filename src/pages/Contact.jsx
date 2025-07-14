// Contact Page sesuai desain Contact Page.png
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";
import {
  IconFacebook,
  IconTwitter,
  IconLinkedIn,
} from "../assets/social-icons.jsx";

export default function Contact() {
  return (
    <div className="contact-container">
      <Navbar />
      <main className="contact-main">
        <div className="contact-content">
          <form className="contact-form">
            <h2>Get in Touch</h2>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="Your email" />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                placeholder="Type your message..."
              />
            </label>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-map-wrap">
            <div className="contact-map-social">
              <div className="contact-map" />
              <div className="contact-social">
                <a href="#" aria-label="Facebook">
                  <IconFacebook />
                </a>
                <a href="#" aria-label="Twitter">
                  <IconTwitter />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <IconLinkedIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer variant="contact" />
    </div>
  );
}
