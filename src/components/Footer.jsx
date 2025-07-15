import React from "react";
import "./Footer.css";
import {
  IconFacebook,
  IconTwitter,
  IconLinkedIn,
  IconInstagram,
} from "../assets/social-icons.jsx";

export default function Footer({ variant = "default" }) {
  // Konten kiri
  let left;
  if (variant === "pricing") {
    left = (
      <div className="footer-about">
        <b>About Us</b>
        <div>
          Jasa Coding is dedicated to providing top-notch coding services...
        </div>
      </div>
    );
  } else {
    left = <div>© 2023 Jasa Coding. All rights reserved.</div>;
  }

  // Konten kanan
  let right;
  if (variant === "pricing") {
    right = (
      <div className="footer-contact">
        <b>Contact</b>
        <div>Email: contact@Jasacoding.com</div>
        <div>Phone: +1 234 567 890</div>
        <a className="footer-wa-btn" href="https://wa.me/6289524513205" target="_blank" rel="noopener noreferrer" style={{display:'inline-block',marginTop:'8px',padding:'6px 12px',background:'#25D366',color:'#fff',borderRadius:'4px',textDecoration:'none'}}>Contact via WhatsApp</a>
      </div>
    );
  } else if (variant === "contact") {
    right = (
      <div className="footer-policy">
        <a href="#" className="footer-link">
          Privacy Policy
        </a>
        <a href="#" className="footer-link">
          Terms of Service
        </a>
        <a className="footer-wa-btn" href="https://wa.me/6289524513205" target="_blank" rel="noopener noreferrer" style={{display:'inline-block',marginTop:'8px',padding:'6px 12px',background:'#25D366',color:'#fff',borderRadius:'4px',textDecoration:'none'}}>Contact via WhatsApp</a>
      </div>
    );
  } else {
    right = (
      <div className="footer-social-wrap">
        <div className="footer-social">
          <a href="#" aria-label="Facebook">
            <IconFacebook />
          </a>
          <a href="#" aria-label="Twitter">
            <IconTwitter />
          </a>
          <a href="#" aria-label="LinkedIn">
            <IconLinkedIn />
          </a>
          <a href="#" aria-label="Instagram">
            <IconInstagram />
          </a>
        </div>
        <a className="footer-wa-btn" href="https://wa.me/6289524513205" target="_blank" rel="noopener noreferrer" style={{display:'inline-block',marginTop:'8px',padding:'6px 12px',background:'#25D366',color:'#fff',borderRadius:'4px',textDecoration:'none'}}>Contact via WhatsApp</a>
      </div>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-left">{left}</div>
      <div className="footer-right">{right}</div>
    </footer>
  );
}
