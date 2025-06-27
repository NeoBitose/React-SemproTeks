import React, { useState } from "react";
import generatePDF from "../utils/generatePDF";
import "../assets/css/style.css";
import "../assets/js/main.js";
import Hero from "../assets/img/hero-img.png";

function FormSempro() {
  const [formData, setFormData] = useState({
    moderator: "",
    jenis_mahasiswa_sempro: "saudara",
    nama_mahasiswa_sempro: "",
    judul_proposal: "",
    jenis_pembimbing_1: "bapak",
    nama_pembimbing_1: "",
    jenis_penguji_1: "bapak",
    nama_penguji_1: "",
    jenis_penguji_2: "bapak",
    nama_penguji_2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF(formData);
  };

  return (
    <>
      {/* Header */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo"><a href="#">NeoSempro</a></h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#contact">Print</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center justify-content-center" data-aos="fade-up">
          <h1>Build Better Teks Sempro</h1>
          <h2>Aplikasi Untuk Membuat Digital Teks Sempro</h2>
          <a href="#about" className="btn-get-started scrollto">Selengkapnya</a>
          <img src={Hero} className="img-fluid hero-img" alt="Hero" data-aos="zoom-in" data-aos-delay="150" />
        </div>
      </section>

      {/* Form Section */}
      <main id="main">
        <section id="contact" className="contact section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Print Teks Sempro</h2>
              <p>""</p>
            </div>
            <div className="row">
              <div className="col-12 col-lg-8 mt-4 mt-md-0 mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mt-3">
                    <label className="mb-2">Nama Moderator</label>
                    <input type="text" className="form-control" name="moderator" onChange={handleChange} />
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6 form-group">
                      <label className="mb-2">Panggilan Mahasiswa Sempro</label>
                      <select name="jenis_mahasiswa_sempro" className="form-control" onChange={handleChange}>
                        <option value="saudara">Saudara</option>
                        <option value="saudari">Saudari</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label className="mb-2">Nama Mahasiswa Sempro</label>
                      <input type="text" name="nama_mahasiswa_sempro" className="form-control" onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <label className="mb-2">Judul Proposal</label>
                    <textarea className="form-control" name="judul_proposal" id="" onChange={handleChange}></textarea>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6 form-group">
                      <label className="mb-2">Panggilan Pembimbing 1</label>
                      <select name="jenis_pembimbing_1" className="form-control" onChange={handleChange}>
                        <option value="bapak">Bapak</option>
                        <option value="ibu">Ibu</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label className="mb-2">Nama Pembimbing 1</label>
                      <input type="text" name="nama_pembimbing_1" className="form-control" onChange={handleChange} />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6 form-group">
                      <label className="mb-2">Panggilan Penguji 1</label>
                      <select name="jenis_penguji_1" className="form-control" onChange={handleChange}>
                        <option value="bapak">Bapak</option>
                        <option value="ibu">Ibu</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label className="mb-2">Nama Penguji 1</label>
                      <input type="text" name="nama_penguji_1" className="form-control" onChange={handleChange} />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6 form-group">
                      <label className="mb-2">Panggilan Penguji 2</label>
                      <select name="jenis_penguji_2" className="form-control" onChange={handleChange}>
                        <option value="bapak">Bapak</option>
                        <option value="ibu">Ibu</option>
                      </select>
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label className="mb-2">Nama Penguji 2</label>
                      <input type="text" name="nama_penguji_2" className="form-control" onChange={handleChange} />
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">Generate PDF</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer">
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <strong><span>Alif Ramadhan</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://github.com/neobitose">Neobitose</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FormSempro;
