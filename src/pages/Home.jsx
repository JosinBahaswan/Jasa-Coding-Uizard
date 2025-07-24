// Homepage sesuai desain Jasa Coding Homepage.png
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-main">
        <h1 className="home-title">Selamat Datang di Jasa Coding Uizard</h1>
        <p className="home-subtitle">
          Tingkatkan kehadiran digital Anda dengan teknologi terkini dan solusi inovatif. Bergabunglah bersama kami untuk membuka potensi Anda.
        </p>
        <button className="home-btn">Mulai Sekarang</button>
        <div className="home-hero-img" />
        <section className="home-services">
          <h2>Layanan Kami</h2>
          <div className="service-cards">
            <div className="service-card">
              <h3>Pembuatan Website</h3>
              <p>
                Membangun website responsif dan dinamis sesuai kebutuhan Anda.
              </p>
            </div>
            <div className="service-card">
              <h3>Pembuatan Aplikasi</h3>
              <p>
                Membuat aplikasi mobile yang mudah digunakan untuk semua platform.
              </p>
            </div>
            <div className="service-card">
              <h3>Desain UI/UX</h3>
              <p>
                Mendesain antarmuka yang intuitif dan memberikan pengalaman pengguna terbaik.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="default" />
    </div>
  );
}
