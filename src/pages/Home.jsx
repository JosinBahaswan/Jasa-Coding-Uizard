// Homepage sesuai desain Joki Coding Homepage.png
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-main">
        <h1 className="home-title">Welcome to Joki Coding</h1>
        <p className="home-subtitle">
          Empowering your digital presence with cutting-edge technology and
          innovative solutions. Join us to unlock your potential.
        </p>
        <button className="home-btn">Get Started</button>
        <div className="home-hero-img" />
        <section className="home-services">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>
                Building responsive and dynamic websites tailored to your needs.
              </p>
            </div>
            <div className="service-card">
              <h3>App Development</h3>
              <p>
                Creating user-friendly mobile applications for all platforms.
              </p>
            </div>
            <div className="service-card">
              <h3>UI/UX Design</h3>
              <p>
                Designing intuitive interfaces that offer exceptional user
                experiences.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="default" />
    </div>
  );
}
