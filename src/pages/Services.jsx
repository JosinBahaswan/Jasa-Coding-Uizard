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
        <h1 className="services-title">Layanan Kami</h1>
        <div className="services-grid">
          <div className="service-box">
            <IconCode className="service-icon" />
            <h3>Review Kode</h3>
            <p>
              Review kode secara profesional untuk memastikan kualitas dan efisiensi proyek Anda.
            </p>
          </div>
          <div className="service-box">
            <IconDebug className="service-icon" />
            <h3>Bantuan Debugging</h3>
            <p>Membantu menemukan dan memperbaiki bug dengan dukungan debugging profesional.</p>
          </div>
          <div className="service-box">
            <IconIdea className="service-icon" />
            <h3>Ide Proyek</h3>
            <p>
              Ide-ide kreatif untuk menginspirasi proyek coding Anda berikutnya.
            </p>
          </div>
          <div className="service-box">
            <IconCoach className="service-icon" />
            <h3>Coaching Pribadi</h3>
            <p>Sesi coaching satu-satu untuk meningkatkan kemampuan coding Anda.</p>
          </div>
          <div className="service-box">
            <IconNetwork className="service-icon" />
            <h3>Solusi Networking</h3>
            <p>Strategi networking canggih untuk kolaborasi proyek.</p>
          </div>
          <div className="service-box">
            <IconLibrary className="service-icon" />
            <h3>Perpustakaan Resource</h3>
            <p>Akses ke perpustakaan resource dan tutorial coding yang lengkap.</p>
          </div>
        </div>
      </main>
      <Footer variant="default" />
    </div>
  );
}
