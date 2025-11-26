import jsPDF from "jspdf";

export default function generatePDF(d) {

  const doc = new jsPDF({
    orientation: "portrait", 
    unit: "mm",              
    format: [370, 800]       
  });

  doc.setFontSize(12);

  const allBapak = [d.jenis_pembimbing_1, d.jenis_penguji_1, d.jenis_penguji_2].every(j => j === 'bapak');
  const allIbu = [d.jenis_pembimbing_1, d.jenis_penguji_1, d.jenis_penguji_2].every(j => j === 'ibu');
  const panggilan = allBapak ? "Bapak" : allIbu ? "Ibu" : "Bapak & Ibu";
  const judulWrapped = doc.splitTextToSize(d.judul_proposal, 300);

  const lines = [
    "Teks Sempro",
    "",
    "[Teks Moderator by HMIF]",
    "Sebelum saya memulai seminar proposal pada hari ini, saya izin untuk merecord",
    "=============================",
    "Assalamu'alaikum Wr.Wb",
    "Salam sejahtera untuk kita semua",
    "=============================",
    `Yang terhormat ${d.jenis_pembimbing_1} ${d.nama_pembimbing_1} selaku dosen pembimbing utama,`,
    `Yang terhormat ${d.jenis_penguji_1} ${d.nama_penguji_1} selaku dosen pembahas pertama,`,
    `Dan yang terhormat ${d.jenis_penguji_2} ${d.nama_penguji_2} selaku dosen pembahas kedua.`,
    "=============================",
    `Saya ucapkan terima kasih kepada ${panggilan} dosen yang telah bersedia hadir di acara `,
    "seminar proposal pada hari ini.",
    "=============================",
    `Sebelumnya, ijinkan saya memperkenalkan diri terlebih dahulu, saya ${d.moderator},`,
    "selaku moderator pada seminar proposal pada hari ini.",
    "=============================",
    "Sebelum seminar proposal dimulai, alangkah baiknya kita berdoa terlebih dahulu",
    "sesuai agama dan kepercayaan masing-masing.",
    "BERDOA DIMULAI",
    "=============================",
    "BERDOA DAPAT DIAKHIRI",
    "=============================",
    `Seminar proposal kali ini akan disampaikan oleh ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}.`,
    `Dengan judul proposal:`,
    ...judulWrapped,
    `Kepada ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}, dipersilakan untuk memulai`,
    "presentasinya selama 15 menit",
    "=============================",
    `Terima kasih kepada ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}, yang telah memaparkan proposalnya.`,
    "=============================",
    "Selanjutnya dipersilahkan kepada dosen pembahas pertama untuk memberikan",
    `pertanyaan atau tanggapann ya selama 15 menit kepada ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}`,
    `untuk ${d.jenis_penguji_1} ${d.nama_penguji_1}, saya persilahkan`,
    "dipersilakan memberikan tanggapan.",
    "=============================",
    `Terima kasih atas tanggapan dari ${d.jenis_penguji_1} ${d.nama_penguji_1}.`,
    "=============================",
    `Selanjutnya saya persilahkan kepada dosen pembahas kedua ${d.jenis_penguji_2} ${d.nama_penguji_2},`, 
    "untuk memberikan pertanyaan atau tanggapann ya selama 15 menit", 
    `kepada ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}`,
    "=============================",
    `Baik terimakasih atas tanggapan dan masukan dari ${d.jenis_penguji_2} ${d.nama_penguji_2}.`,
    "selaku dosen pembahas II",
    "=============================",
    `Selanjutnya, saya persilahkan ${d.jenis_pembimbing_1} ${d.nama_pembimbing_1} selaku dosen pembimbing,`,
    "jika ada yang ingin ditambahkan.",
    "=============================",
    "Terima kasih atas masukan dari dosen pembimbing.",
    "=============================",
    "Selanjutnya, kepada audiens yang ingin memberikan tanggapan, kami persilakan.",
    "=============================",
    `(Jika tidak ada tanggapan: dipersilakan kepada ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro} untuk menutup presentasinya)`,
    `(Jika ada tanggapan: kami persilakan kepada audiens untuk memberikan tanggapan kepada ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro})`,
    "=============================",
    `Baik terimakasih dan SELAMAT saya ucapkan untuk ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}`, 
    "yang telah menyelesaikan seminar proposalnya pada hari ini.",
    "=============================",
    `Saya ucapkan terima kasih juga atas kehadiran ${panggilan} dosen,`,
    "serta para audiens pada kegiatan seminar proposal pagi hari ini.",
    "=============================",
    "(Jika dari kakaknya mau dan mengumpulkan)",
    `Untuk para audiens yang ingin mengakses draft proposal dari ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}`,
    "bisa melalui link yang sudah dibagikan di kolom chat",
    "=============================",
    "(Jika kakaknya tidak mau mengumpulkan)",
    `Untuk para audiens yang ingin mengakses draft proposal dari ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}`,
    "kami tidak akan membagikan dalam bentuk softfile,",
    "tetapi kami akan mengirimkan link record seminar proposal pada hari ini.",
    `dikarenakan ada beberapa hal yang akan merugikan pihak ${d.jenis_mahasiswa_sempro} ${d.nama_mahasiswa_sempro}`,
    "=============================",
    `Demikian seminar proposal hari ini. Saya, ${d.moderator}, selaku moderator, pamit undur diri.`,
    "jika ada kurang lebihnya perkataan saya, saya mohon maaf yang sebesar besarnya.",
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
