// Services Page sesuai desain Services Page - Jasa Coding.png
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.css";
import {
  IconCode,
  IconDebug,
  IconIdea,
  IconCoach,
  IconNetwork,
  IconLibrary,
} from "../assets/services-icons.jsx";

export default function Services() {
  return (
    <div className="services-container">
      <Navbar />
      <main className="services-main">
        <h1 className="services-title">Our Services</h1>
        <div className="services-grid">
          <div className="service-box">
            <IconCode className="service-icon" />
            <h3>Code Review</h3>
            <p>
              Expert code reviews to ensure quality and efficiency in your
              projects.
            </p>
          </div>
          <div className="service-box">
            <IconDebug className="service-icon" />
            <h3>Debugging Assistance</h3>
            <p>Identify and fix bugs with professional debugging support.</p>
          </div>
          <div className="service-box">
            <IconIdea className="service-icon" />
            <h3>Project Ideas</h3>
            <p>
              Creative project ideas to inspire your next venture in coding.
            </p>
          </div>
          <div className="service-box">
            <IconCoach className="service-icon" />
            <h3>Personalized Coaching</h3>
            <p>One-on-one coaching sessions to enhance your coding skills.</p>
          </div>
          <div className="service-box">
            <IconNetwork className="service-icon" />
            <h3>Networking Solutions</h3>
            <p>Advanced networking strategies for project collaboration.</p>
          </div>
          <div className="service-box">
            <IconLibrary className="service-icon" />
            <h3>Resource Library</h3>
            <p>Access to a vast library of coding resources and tutorials.</p>
          </div>
        </div>
      </main>
      <Footer variant="default" />
    </div>
  );
}
