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
              "Layanan Jasa Coding sangat luar biasa! Mereka membantu mempercepat proses kami dengan efektif."
            </blockquote>
            <div className="testimonial-name">Anna Smith</div>
            <div className="testimonial-stars">★★★★★</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-img testimonial-img-2" />
            <blockquote>
              "Dukungan dan bimbingan coding yang sangat mengesankan. Sangat direkomendasikan untuk startup."
            </blockquote>
            <div className="testimonial-name">James Brown</div>
            <div className="testimonial-stars">★★★★★</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-img testimonial-img-3" />
            <blockquote>
              "Tim yang hebat untuk diajak bekerja sama. Mereka benar-benar memahami kebutuhan kami."
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
