// Pricing Page sesuai desain Pricing Page.png
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="pricing-container">
      <Navbar />
      <main className="pricing-main">
        <h1 className="pricing-title">Our Service Packages</h1>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic Package</h3>
            <ul>
              <li>✓ Feature 1</li>
              <li>✓ Feature 2</li>
              <li>✓ Feature 3</li>
            </ul>
            <div className="price">-</div>
            <a className="buy-btn" href="https://wa.me/6289524513205" target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
          <div className="pricing-card">
            <h3>Standard Package</h3>
            <ul>
              <li>✓ Feature 1</li>
              <li>✓ Feature 2</li>
              <li>✓ Feature 3</li>
              <li>✓ Feature 4</li>
            </ul>
            <div className="price">-</div>
            <a className="buy-btn" href="https://wa.me/6289524513205" target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
          <div className="pricing-card">
            <h3>Premium Package</h3>
            <ul>
              <li>✓ Feature 1</li>
              <li>✓ Feature 2</li>
              <li>✓ Feature 3</li>
              <li>✓ Feature 4</li>
              <li>✓ Feature 5</li>
            </ul>
            <div className="price">-</div>
            <a className="buy-btn" href="https://wa.me/6289524513205" target="_blank" rel="noopener noreferrer">Contact</a>
          </div>
        </div>
      </main>
      <Footer variant="pricing" />
    </div>
  );
}
