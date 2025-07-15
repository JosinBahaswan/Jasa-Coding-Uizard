// Testimonials Page sesuai desain Testimonials Page.png
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="testimonials-container">
      <Navbar />
      <main className="testimonials-main">
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <div className="testimonial-img testimonial-img-1" />
            <blockquote>
              "Jasa Coding's services are exceptional! They helped streamline
              our processes effectively."
            </blockquote>
            <div className="testimonial-name">Anna Smith</div>
            <div className="testimonial-stars">★★★★★</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-img testimonial-img-2" />
            <blockquote>
              "Impressive coding support and guidance. Highly recommended for
              startups."
            </blockquote>
            <div className="testimonial-name">James Brown</div>
            <div className="testimonial-stars">★★★★★</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-img testimonial-img-3" />
            <blockquote>
              "Great team to work with. They understand our needs perfectly."
            </blockquote>
            <div className="testimonial-name">Michael Johnson</div>
            <div className="testimonial-stars">★★★★★</div>
          </div>
        </div>
      </main>
      <Footer variant="default" />
    </div>
  );
}
