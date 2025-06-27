import jsPDF from "jspdf";

export default function generatePDF(d) {

  const doc = new jsPDF({
    orientation: "portrait", 
    unit: "mm",              
    format: [350, 600]       
  });

  doc.setFontSize(12);

  const allBapak = [d.jenis_pembimbing_1, d.jenis_penguji_1, d.jenis_penguji_2].every(j => j === 'bapak');
  const allIbu = [d.jenis_pembimbing_1, d.jenis_penguji_1, d.jenis_penguji_2].every(j => j === 'ibu');
  const panggilan = allBapak ? "Bapak" : allIbu ? "Ibu" : "Bapak & Ibu";

  const lines = [
    "Teks Sempro",
    "",
    "[Teks Moderator by HMIF]",
    "Assalamu'alaikum Wr.Wb",
    "Salam sejahtera untuk kita semua",
    "=============================",
    `Yang terhormat ${d.jenis_pembimbing_1} ${d.nama_pembimbing_1} selaku dosen pembimbing utama,`,
    `Yang terhormat ${d.jenis_penguji_1} ${d.nama_penguji_1} selaku dosen pembahas pertama,`,
    `Dan yang terhormat ${d.jenis_penguji_2} ${d.nama_penguji_2} selaku dosen pembahas kedua.`,
    "=============================",
    `Saya ucapkan terima kasih kepada ${panggilan} dosen yang telah bersedia hadir di acara `,
    "seminar proposal pagi hari ini.",
    "=============================",
    `Sebelumnya, ijinkan saya memperkenalkan diri, saya ${d.moderator},`,
    "selaku moderator pada seminar proposal kali ini.",
    "=============================",
    "Sebelum seminar proposal dimulai, mari kita berdoa sesuai kepercayaan masing-masing.",
    "BERDOA DIMULAI",
    "=============================",
    "BERDOA DAPAT DIAKHIRI",
    "=============================",
    `Seminar proposal kali ini akan disampaikan oleh ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}.`,
    `Dengan judul proposal: ${d.judul_proposal}`,
    `Kepada ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}, dipersilakan untuk memulai presentasi.`,
    "=============================",
    `Terima kasih kepada ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}, yang telah memaparkan proposalnya.`,
    "=============================",
    `Selanjutnya, kepada dosen pembahas pertama: ${d.jenis_penguji_1} ${d.nama_penguji_1},`,
    "dipersilakan memberikan tanggapan.",
    "=============================",
    `Terima kasih atas tanggapan dari ${d.jenis_penguji_1} ${d.nama_penguji_1}.`,
    "=============================",
    `Selanjutnya kepada dosen pembahas kedua: ${d.jenis_penguji_2} ${d.nama_penguji_2}, dipersilakan.`,
    "=============================",
    `Terima kasih atas tanggapan dari ${d.jenis_penguji_2} ${d.nama_penguji_2}.`,
    "=============================",
    `Selanjutnya, kepada ${d.jenis_pembimbing_1} ${d.nama_pembimbing_1} selaku dosen pembimbing,`,
    "dipersilakan jika ada yang ingin ditambahkan.",
    "=============================",
    "Terima kasih atas masukan dari dosen pembimbing.",
    "=============================",
    "Selanjutnya, kepada audiens yang ingin memberikan tanggapan, kami persilakan.",
    "=============================",
    `(Jika tidak ada tanggapan: dipersilakan kepada ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro} untuk menutup presentasinya)`,
    `(Jika ada tanggapan: kami persilakan kepada audiens untuk memberikan tanggapan kepada ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro})`,
    "=============================",
    `Baik, terima kasih dan SELAMAT kepada ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro} yang telah menyelesaikan seminar proposal pagi ini.`,
    "=============================",
    `Saya ucapkan terima kasih juga atas kehadiran ${panggilan} dosen,`,
    "serta para audiens pada kegiatan seminar proposal pagi hari ini.",
    "=============================",
    "(Jika dari kakaknya mau dan mengumpulkan)",
    "Untuk para audiens yang ingin mengakses draft proposal dari saudara/i (nama sempro)",
    "bisa melalui link yang sudah dibagikan di kolom chat",
    "=============================",
    "(Jika kakaknya tidak mau mengumpulkan)",
    "Untuk para audiens yang ingin mengakses draft proposal dari saudara/i (nama sempro)",
    "kami tidak akan membagikan dalam bentuk softfile,",
    "tetapi kami akan mengirimkan link record seminar proposal pada hari ini.",
    "dikarenakan ada beberapa hal yang akan merugikan pihak saudara/i (nama sempro).",
    "=============================",
    `Demikian seminar proposal hari ini. Saya, ${d.moderator}, selaku moderator, mohon maaf atas kekurangan.`,
    "Wassalamu'alaikum Wr. Wb."
  ];

  let y = 10;
  const lineHeight = 8;

  lines.forEach((line) => {
    doc.text(line, 10, y);
    y += lineHeight;
  });

  doc.save(`teks-sempro-${Date.now()}.pdf`);
}
