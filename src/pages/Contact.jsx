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
        <div className="contact-content" style={{display:'flex',flexWrap:'wrap',gap:'32px',justifyContent:'center'}}>
          {/*
          <form className="contact-form" style={{flex:'1 1 320px',minWidth:'280px',maxWidth:'400px',background:'#fff',padding:'24px',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.07)'}}>
            <h2 style={{marginBottom:'16px'}}>Get in Touch</h2>
            <label style={{display:'block',marginBottom:'12px'}}>
              Name
              <input type="text" name="name" placeholder="Your name" style={{width:'100%',marginTop:'4px',padding:'8px',borderRadius:'4px',border:'1px solid #ccc'}} />
            </label>
            <label style={{display:'block',marginBottom:'12px'}}>
              Email
              <input type="email" name="email" placeholder="Your email" style={{width:'100%',marginTop:'4px',padding:'8px',borderRadius:'4px',border:'1px solid #ccc'}} />
            </label>
            <label style={{display:'block',marginBottom:'12px'}}>
              Message
              <textarea
                name="message"
                rows="4"
                placeholder="Type your message..."
                style={{width:'100%',marginTop:'4px',padding:'8px',borderRadius:'4px',border:'1px solid #ccc'}}
              />
            </label>
            <button type="submit" style={{background:'#007bff',color:'#fff',padding:'10px 20px',border:'none',borderRadius:'4px',cursor:'pointer'}}>Send Message</button>
          </form>
          */}
          <div className="contact-form" style={{flex:'1 1 320px',minWidth:'280px',maxWidth:'400px',background:'#fff',padding:'24px',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.07)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'18px'}}>
            <h2 style={{marginBottom:'16px'}}>Hubungi Kami via Media Sosial</h2>
            <div style={{display:'flex',gap:'16px',marginBottom:'12px'}}>
              <a href="#" aria-label="Facebook" style={{fontSize:'28px'}}><IconFacebook /></a>
              <a href="#" aria-label="Twitter" style={{fontSize:'28px'}}><IconTwitter /></a>
              <a href="#" aria-label="LinkedIn" style={{fontSize:'28px'}}><IconLinkedIn /></a>
            </div>
            <a href="https://wa.me/6289524513205" target="_blank" rel="noopener noreferrer" style={{display:'inline-block',padding:'10px 20px',background:'#25D366',color:'#fff',borderRadius:'4px',textDecoration:'none',fontWeight:'bold'}}>Hubungi via WhatsApp</a>
          </div>
          <div className="contact-info" style={{flex:'1 1 320px',minWidth:'280px',maxWidth:'400px',background:'#f9f9f9',padding:'24px',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.07)'}}>
            <h2 style={{marginBottom:'16px'}}>Informasi Kontak</h2>
            <div style={{marginBottom:'12px'}}><b>Email:</b> contact@jasacoding.com</div>
            <div style={{marginBottom:'12px'}}><b>Telepon:</b> +62 895-2451-3205</div>
            <div style={{marginBottom:'16px'}}>
              <a href="https://wa.me/6289524513205" target="_blank" rel="noopener noreferrer" style={{display:'inline-block',padding:'10px 20px',background:'#25D366',color:'#fff',borderRadius:'4px',textDecoration:'none',fontWeight:'bold'}}>Hubungi via WhatsApp</a>
            </div>
            <div className="contact-social" style={{display:'flex',gap:'12px',marginTop:'16px'}}>
              <a href="#" aria-label="Facebook"><IconFacebook /></a>
              <a href="#" aria-label="Twitter"><IconTwitter /></a>
              <a href="#" aria-label="LinkedIn"><IconLinkedIn /></a>
            </div>
          </div>
        </div>
      </main>
      <Footer variant="contact" />
    </div>
  );
}
