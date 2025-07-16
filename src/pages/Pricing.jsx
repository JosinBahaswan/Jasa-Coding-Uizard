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
        <h1 className="pricing-title">Pilih Paket Layanan Coding</h1>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic Package</h3>
            <ul>
              <li>1 File Coding (HTML/CSS/JS/Python, dll)</li>
              <li>Revisi 1x minor</li>
              <li>Estimasi selesai: &lt; 24 jam</li>
              <li>Support via chat</li>
            </ul>
            <div className="price">Rp. -</div>
            <a
              className="buy-btn"
              href="https://wa.me/6289524513205?text=Halo%20saya%20ingin%20order%20Paket%20Basic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order via WhatsApp
            </a>
          </div>
          <div className="pricing-card">
            <h3>Standard Package</h3>
            <ul>
              <li>Multi File Coding / 1 Project kecil</li>
              <li>Revisi hingga 3x</li>
              <li>Estimasi selesai: 1-2 hari</li>
              <li>Penjelasan kode (jika diminta)</li>
              <li>Support via chat</li>
            </ul>
            <div className="price">Rp. -</div>
            <a
              className="buy-btn"
              href="https://wa.me/6289524513205?text=Halo%20saya%20ingin%20order%20Paket%20Standard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order via WhatsApp
            </a>
          </div>
          <div className="pricing-card">
            <h3>Premium Package</h3>
            <ul>
              <li>Project besar/kompleks (banyak file/fungsi)</li>
              <li>Revisi bebas</li>
              <li>Estimasi selesai: sesuai kesepakatan</li>
              <li>Konsultasi &amp; diskusi kebutuhan</li>
              <li>Prioritas pengerjaan</li>
              <li>Support via chat &amp; call</li>
            </ul>
            <div className="price">Rp. -</div>
            <a
              className="buy-btn"
              href="https://wa.me/6289524513205?text=Halo%20saya%20ingin%20order%20Paket%20Premium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer variant="pricing" />
    </div>
  );
}
