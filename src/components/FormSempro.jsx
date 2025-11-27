import React, { useState } from "react";
import generatePDF from "../utils/generatePDF";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./FormSempro.css"; // optional custom CSS

export default function FormSempro() {
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
    pembagian: "ya",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF(formData);
  };

  return (
    <div className="form-sempro-root">
      {/* Header */}
      <header className="ns-header fixed-top shadow-sm bg-white">
        <div className="container d-flex align-items-center justify-content-between py-2">
          <div className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }} onClick={() => window.scrollTo(0,0)}>
            <div className="brand-circle">N</div>
            <span className="brand-text">NeoSempro</span>
          </div>
          <nav className="d-none d-md-flex align-items-center gap-3">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#form-section" className="btn btn-outline-success rounded-pill ms-2">Form Generator</a>
          </nav>
        </div>
      </header>

      <main className="pt-5 mt-4">
        {/* Hero */}
        <section id="hero" className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 text-center text-lg-start">
                <div className="badge-live mb-3">Versi 2.0 Sekarang Live</div>
                <h1 className="display-5 fw-bold">Otomatisasi Teks <span className="text-gradient">Seminar Proposal</span></h1>
                <p className="lead text-muted mt-3">Aplikasi cerdas untuk membuat draf teks Sempro digital dengan cepat dan terstandarisasi.</p>
                <div className="mt-4">
                  <a href="#form-section" className="btn btn-success btn-lg rounded-pill me-2">Mulai Sekarang</a>
                  <a href="#" className="btn btn-outline-secondary btn-lg rounded-pill">Lihat Info</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="form-section" className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-4">
              <h3 className="fw-bold">Form Generator Teks Sempro</h3>
              <p className="text-muted">Lengkapi data di bawah ini. Sistem akan menyusun naskah otomatis sesuai standar.</p>
            </div>

            <div className="card rounded-4 shadow-sm">
              <div className="accent-top" style={{ height: 6, background: 'linear-gradient(90deg,#16a34a,#22c55e)' }}></div>
              <form onSubmit={handleSubmit} className="p-4 p-md-5">

                {/* Informasi Sidang */}
                <h5 className="fw-bold mb-3">Informasi Sidang</h5>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label">Nama Moderator</label>
                    <input
                      type="text"
                      name="moderator"
                      className="form-control"
                      value={formData.moderator}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Santoso"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Izin Pembagian Teks Proposal</label>
                    <select name="pembagian" className="form-select" value={formData.pembagian} onChange={handleChange}>
                      <option value="ya">Dibagikan</option>
                      <option value="tidak">Tidak Dibagikan</option>
                    </select>
                  </div>
                </div>

                {/* Mahasiswa */}
                <h5 className="fw-bold mb-3">Data Mahasiswa</h5>
                <div className="row g-3 mb-4">
                  <div className="col-md-3">
                    <label className="form-label">Panggilan</label>
                    <select name="jenis_mahasiswa_sempro" className="form-select" value={formData.jenis_mahasiswa_sempro} onChange={handleChange}>
                      <option value="saudara">Saudara</option>
                      <option value="saudari">Saudari</option>
                    </select>
                  </div>
                  <div className="col-md-9">
                    <label className="form-label">Nama Mahasiswa</label>
                    <input type="text" name="nama_mahasiswa_sempro" className="form-control" value={formData.nama_mahasiswa_sempro} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Judul Proposal</label>
                    <textarea name="judul_proposal" className="form-control" rows={3} value={formData.judul_proposal} onChange={handleChange} required />
                  </div>
                </div>

                {/* Dosen */}
                <h5 className="fw-bold mb-3">Tim Penguji</h5>
                <div className="row g-3 mb-4">
                  <div className="col-md-3">
                    <label className="form-label">Pembimbing 1</label>
                    <select name="jenis_pembimbing_1" className="form-select" value={formData.jenis_pembimbing_1} onChange={handleChange}>
                      <option value="bapak">Bapak</option>
                      <option value="ibu">Ibu</option>
                    </select>
                  </div>
                  <div className="col-md-9">
                    <label className="form-label">Nama Pembimbing 1</label>
                    <input type="text" name="nama_pembimbing_1" className="form-control" value={formData.nama_pembimbing_1} onChange={handleChange} required />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Penguji 1</label>
                    <select name="jenis_penguji_1" className="form-select mb-2" value={formData.jenis_penguji_1} onChange={handleChange}>
                      <option value="bapak">Bapak</option>
                      <option value="ibu">Ibu</option>
                    </select>
                    <input type="text" name="nama_penguji_1" className="form-control" value={formData.nama_penguji_1} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Penguji 2</label>
                    <select name="jenis_penguji_2" className="form-select mb-2" value={formData.jenis_penguji_2} onChange={handleChange}>
                      <option value="bapak">Bapak</option>
                      <option value="ibu">Ibu</option>
                    </select>
                    <input type="text" name="nama_penguji_2" className="form-control" value={formData.nama_penguji_2} onChange={handleChange} required />
                  </div>
                </div>

                {/* Submit */}
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary btn-lg px-5 rounded-pill">Generate PDF</button>
                </div>

              </form>
            </div>
          </div>
        </section>

      </main>

      {/* Footer B - modern clean */}
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container text-center">
          <h5 className="fw-bold mb-2">NeoSempro</h5>
          <p className="mb-1">Aplikasi Generator Teks Seminar Proposal</p>
          <p className="small text-secondary mb-0">© 2025 NeoSempro — All Rights Reserved</p>
          <p className="small text-secondary">Developed by Neobitose</p>
        </div>
      </footer>

    </div>
  );
}
