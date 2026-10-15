/**
 * Data Resmi & Konfigurasi SMK Negeri 2 Demak
 * Catatan: Seluruh data sekolah, berita, program keahlian, dan galeri tersentralisasi di file ini
 * sehingga pengelola sekolah dapat memperbarui konten dengan mudah.
 */

export interface SchoolProfile {
  name: string;
  npsn: string;
  status: string;
  accreditation: string;
  headmaster: string;
  address: string;
  subdistrict: string;
  district: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
  website: string;
  operatingHours: string;
  tagline: string;
  motto: string;
  vision: string;
  mission: string[];
  history: string;
  facilities: { name: string; description: string; count: string }[];
}

export interface VocationalProgram {
  id: string;
  code: string;
  name: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  competencies: string[];
  careerProspects: string[];
  industryPartners: string[];
  duration: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: 'Akademik' | 'Prestasi' | 'Kesiswaan' | 'Pengumuman' | 'Kerjasama';
  publishDate: string;
  author: string;
  thumbnail: string;
  excerpt: string;
  content: string[];
  readTime: string;
  isFeatured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Lingkungan Sekolah' | 'Kegiatan Belajar' | 'Prestasi Siswa' | 'Ekstrakurikuler' | 'Acara Sekolah';
  image: string;
  caption: string;
  date: string;
}

export interface SchoolStat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  level: 'Kabupaten' | 'Karesidenan' | 'Provinsi' | 'Nasional';
  year: string;
  rank: string;
  studentName: string;
  program: string;
  description: string;
  image?: string;
}

export const SCHOOL_PROFILE: SchoolProfile = {
  name: "SMK Negeri 2 Demak",
  npsn: "20319293",
  status: "Negeri",
  accreditation: "Terakreditasi A (Unggul)",
  headmaster: "Drs. H. Sukamto, M.Pd.",
  address: "Jl. Sultan Trenggono No. 87, Katonsari",
  subdistrict: "Kecamatan Demak",
  district: "Kabupaten Demak",
  province: "Jawa Tengah",
  postalCode: "59516",
  phone: "(0291) 685324",
  email: "info@smkn2demak.sch.id",
  website: "smkn2demak.sch.id",
  operatingHours: "Senin - Jumat: 07.00 - 16.00 WIB",
  tagline: "Sekolah Vokasi Unggul, Berkarakter, dan Siap Menghadapi Masa Depan.",
  motto: "Religius, Unggul, Kompeten, dan Berdaya Saing.",
  vision: "Menjadi Sekolah Menengah Kejuruan yang unggul, berakhlak mulia, berwawasan lingkungan, dan menghasilkan lulusan yang kompeten serta berdaya saing global.",
  mission: [
    "Menanamkan nilai-nilai keimanan, ketakwaan, dan budi pekerti luhur dalam seluruh ekosistem pendidikan.",
    "Melaksanakan pembelajaran vokasi berbasis Teaching Factory (TeFa) sesuai standar industri terkini.",
    "Mengembangkan sarana prasarana laboratorium dan bengkel modern berstandar industri 4.0.",
    "Memperluas jaringan kemitraan strategis dengan Dunia Usaha dan Dunia Industri (DUDI) bereputasi nasional dan internasional.",
    "Membekali peserta didik dengan kecakapan kewirausahaan, sertifikasi profesi BNSP, dan literasi teknologi modern.",
    "Mewujudkan lingkungan sekolah yang asri, hijau, bersih, dan ramah anak."
  ],
  history: "SMK Negeri 2 Demak didirikan untuk menjawab kebutuhan tenaga kerja terampil dan profesional di Kabupaten Demak dan Jawa Tengah. Seiring waktu, sekolah terus bertransformasi dengan menambah program-program keahlian strategis di bidang teknologi informasi, otomotif, keuangan, dan industri kreatif. Didukung oleh tenaga pendidik tersertifikasi serta sarana laboratorium modern, SMK Negeri 2 Demak kini menjadi salah satu rujukan pendidikan vokasi terkemuka di pesisir utara Jawa Tengah.",
  facilities: [
    { name: "Laboratorium Komputer & Rekayasa Perangkat Lunak", description: "Dilengkapi 4 laboratorium dengan workstation high-spec, koneksi fiber optic, dan cloud testbed.", count: "4 Lab" },
    { name: "Bengkel Teknik Kendaraan Ringan Otomotif", description: "Workshop standar industri dengan hydraulic car lift, engine stand EFI, scanner komputer, dan spooring-balancing.", count: "2 Workshop" },
    { name: "Laboratorium Komputer & Jaringan (Cisco/Mikrotik)", description: "Perangkat router, switch manageable, server rack, dan fiber fusion splicer untuk praktik jaringan riil.", count: "3 Lab" },
    { name: "Laboratorium Akuntansi & Mini Bank", description: "Simulasi transaksi keuangan nyata menggunakan software akuntansi modern (MYOB, Accurate, Spreadsheet Bisnis).", count: "2 Lab" },
    { name: "Workshop Desain & Produksi Busana", description: "Mesin jahit industri high-speed, mesin obras, bordir komputer, dan ruang display busana karya siswa.", count: "2 Studio" },
    { name: "Perpustakaan Digital & Ruang Baca", description: "Ribuan koleksi buku cetak, e-book perpustakaan nasional, dan area baca ber-AC nyaman.", count: "1 Gedung" },
    { name: "Masjid Baitul 'Ilmi", description: "Pusat pembinaan kerohanian, sholat dhuha berjamaah, dan kegiatan keagamaan siswa.", count: "1 Masjid" },
    { name: "Lapangan Olahraga Terpadu", description: "Lapangan multifungsi untuk futsal, basket, voli, dan upacara bendera mingguan.", count: "2 Area" }
  ]
};

export const VOCATIONAL_PROGRAMS: VocationalProgram[] = [
  {
    id: "rpl",
    code: "PPLG / RPL",
    name: "Pengembangan Perangkat Lunak & Gim",
    title: "Rekayasa Perangkat Lunak (RPL)",
    shortDesc: "Mempelajari rancang bangun aplikasi web, mobile (Android/iOS), basis data, kecerdasan buatan, dan pengembangan gim interaktif berstandar industri.",
    fullDesc: "Program Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG / RPL) menyiapkan talenta digital yang piawai dalam rekayasa software modern. Siswa dibimbing dari fondasi algoritma, pemrograman web modern, API development, cloud architecture, hingga pembuatan aplikasi mobile. Didukung laboratorium komputer modern dan kurikulum selaras industri digital terdepan.",
    image: "/src/assets/images/vocational_computer_lab_1792075064943.jpg",
    iconName: "Code2",
    duration: "3 Tahun",
    competencies: [
      "Pemrograman Berorientasi Objek & Algoritma",
      "Web Fullstack (HTML, CSS, JavaScript, React, Node.js)",
      "Pengembangan Aplikasi Mobile (Flutter & Android Studio)",
      "Database Management (SQL, PostgreSQL, Firebase)",
      "UI/UX Design & Prototyping (Figma)",
      "Metodologi Agile / Scrum & Version Control (Git/GitHub)"
    ],
    careerProspects: [
      "Web Developer / Frontend & Backend Engineer",
      "Mobile App Developer (Android/iOS)",
      "Software Quality Assurance (QA) Tester",
      "Database Administrator",
      "Game Developer & UI/UX Designer",
      "Wirausahawan Digital / Digital Agency Founder"
    ],
    industryPartners: [
      "PT Telkom Indonesia",
      "Agate Game Studio",
      "Gamelab Indonesia",
      "Software House Regional Jateng"
    ]
  },
  {
    id: "tkro",
    code: "TO / TKRO",
    name: "Teknik Kendaraan Ringan Otomotif",
    title: "Teknik Kendaraan Ringan Otomotif (TKRO)",
    shortDesc: "Fokus pada perawatan, pemeliharaan, serta diagnosis kelistrikan, chasis, dan sistem mesin injeksi (EFI) kendaraan roda empat modern.",
    fullDesc: "Program Keahlian Teknik Kendaraan Ringan Otomotif (TKRO) mencetak teknisi otomotif andal yang menguasai teknologi kendaraan modern, sistem Electronic Fuel Injection (EFI), teknologi hybrid/kendaraan listrik dasar, serta manajemen bengkel resmi.",
    image: "/src/assets/images/vocational_automotive_lab_1792075064381.jpg",
    iconName: "Wrench",
    duration: "3 Tahun",
    competencies: [
      "Pemeliharaan Mesin Kendaraan Ringan (Engine Overhaul)",
      "Sistem Injeksi Bahan Bakar Elektronik (EFI) & Scan OBD-II",
      "Pemeliharaan Sasis, Kemudi, Rem ABS, dan Suspensi",
      "Sistem Kelistrikan Bodi, AC, dan Sistem Keselamatan",
      "Teknik Spooring, Balancing, dan Service Berkala",
      "Manajemen Bengkel Otomotif & Pelayanan Konsumen"
    ],
    careerProspects: [
      "Teknisi Kendaraan Resmi (Dealer / Authorized Workshop)",
      "Service Advisor & Diagnostic Technician",
      "Mekanik Profesional Armada Industri & Transportasi",
      "Pengelola dan Pemilik Bengkel Mandiri",
      "Quality Control di Industri Manufaktur Otomotif"
    ],
    industryPartners: [
      "PT Astra Daihatsu Motor",
      "Toyota Nasmoco Jawa Tengah",
      "Mitsubishi Motors Krama Yudha",
      "Auto2000"
    ]
  },
  {
    id: "tkj",
    code: "TJKT / TKJ",
    name: "Teknik Komputer dan Jaringan",
    title: "Teknik Komputer & Jaringan (TKJ)",
    shortDesc: "Mendalami arsitektur infrastruktur jaringan, perakitan komputer, routing, switching, fiber optic, keamanan siber, dan cloud server.",
    fullDesc: "Program Keahlian Teknik Komputer dan Jaringan membekali peserta didik dengan keahlian komprehensif dalam instalasi jaringan lokal (LAN) maupun luas (WAN), konfigurasi perangkat jaringan Mikrotik & Cisco, fiber optic fusion, server Linux/Windows, serta keamanan data jaringan.",
    image: "/src/assets/images/vocational_computer_lab_1792075064943.jpg",
    iconName: "Network",
    duration: "3 Tahun",
    competencies: [
      "Instalasi dan Konfigurasi Jaringan Berbasis Kabel & Nirkabel",
      "Routing & Switching (MikroTik MTCNA, Cisco CCNA Dasar)",
      "Penyambungan & Pengukuran Kabel Fiber Optik (OTDR)",
      "Administrasi Server Berbasis Linux & Windows Server",
      "Konfigurasi Keamanan Jaringan & Firewall",
      "Virtualisasi, Cloud Server, dan IoT (Internet of Things)"
    ],
    careerProspects: [
      "Network Administrator & Support Specialist",
      "Teknisi Instalasi Fiber Optik ISP",
      "System Administrator / Cloud Infrastructure Operator",
      "Computer & Hardware Technician",
      "IT Support di Lembaga Pemerintah & Swasta"
    ],
    industryPartners: [
      "PT Indonesia Comnets Plus (PLN ICON+)",
      "Biznet Networks",
      "MikroTik Academy",
      "PT Telkom Akses"
    ]
  },
  {
    id: "akl",
    code: "AKL",
    name: "Akuntansi dan Keuangan Lembaga",
    title: "Akuntansi & Keuangan Lembaga (AKL)",
    shortDesc: "Mempersiapkan akuntan muda yang terampil mengelola pembukuan keuangan, perpajakan, perbankan, dan aplikasi akuntansi berbasis komputer.",
    fullDesc: "Program Keahlian Akuntansi dan Keuangan Lembaga mendidik calon akuntan dan staf finansial yang teliti, jujur, serta mahir dalam pencatatan transaksi dagang/jasa/manufaktur, pengelolaan kas kecil, pelaporan pajak berkala, dan pengoperasian spreadsheet serta software akuntansi terstandar.",
    image: "/src/assets/images/profile_school_facade_1792075063794.jpg",
    iconName: "Calculator",
    duration: "3 Tahun",
    competencies: [
      "Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur",
      "Pengoperasian Komputer Akuntansi (MYOB, Accurate)",
      "Pengelolaan Kas Kecil, Piutang, dan Utang",
      "Perhitungan Pajak Penghasilan (PPh) dan PPN",
      "Akuntansi Lembaga / Instansi Pemerintah",
      "Praktik Perbankan Dasar & Mini Bank Sekolah"
    ],
    careerProspects: [
      "Staf Administrasi Keuangan Perusahaan",
      "Teknisi Akuntansi Pratama",
      "Teller Bank & Customer Service Perbankan",
      "Staf Administrasi Perpajakan",
      "Kasir & Pengelola Finansial UMKM"
    ],
    industryPartners: [
      "Bank Jateng Kantor Cabang Demak",
      "BPR BKK Demak",
      "Kantor Akuntan Publik (KAP) Semarang",
      "Koperasi Simpan Pinjam Regional"
    ]
  },
  {
    id: "busana",
    code: "DPB / TB",
    name: "Desain dan Produksi Busana",
    title: "Desain & Produksi Busana (Tata Busana)",
    shortDesc: "Mengembangkan kreativitas fashion design, pembuatan pola busana digital/manual, teknik menjahit garmen industri, dan fashionpreneur.",
    fullDesc: "Program Keahlian Desain dan Produksi Busana mengasah kreativitas siswa dalam merancang sketsa mode, membuat pola busana, mengoperasikan mesin jahit industri, teknik draping, bordir, serta manajemen pameran fashion dan wirausaha butik modern.",
    image: "/src/assets/images/hero_school_campus_1792075064166.jpg",
    iconName: "Scissors",
    duration: "3 Tahun",
    competencies: [
      "Desain Mode & Ilustrasi Sketsa Fashion",
      "Pembuatan Pola Dasar, Grading, dan Pecah Pola",
      "Teknik Menjahit Busana Wanita, Pria, dan Anak",
      "Pembuatan Busana Adat, Gaun Pesta, dan Casual Wear",
      "Bordir Komputer & Hiasan Busana (Embroidery)",
      "Penyelenggaraan Fashion Show & Manajemen Butik"
    ],
    careerProspects: [
      "Fashion Designer & Fashion Illustrator",
      "Pattern Maker di Perusahaan Garmen",
      "Sample Maker & Quality Control Tekstil",
      "Costume Designer Teater / Media",
      "Pemilik Butik / Fashionpreneur Mandiri"
    ],
    industryPartners: [
      "PT Ungaran Sari Garments",
      "Desainer Mode APPMI Jawa Tengah",
      "Industri Tekstil & Garmen Nasional",
      "Rumah Mode & Butik Terkemuka"
    ]
  }
];

export const SCHOOL_STATS: SchoolStat[] = [
  { id: "students", label: "Peserta Didik Aktif", value: 1450, suffix: "+", description: "Siswa berprestasi dari berbagai daerah" },
  { id: "teachers", label: "Guru & Tenaga Kependidikan", value: 85, suffix: "+", description: "Pendidik tersertifikasi & praktisi industri" },
  { id: "majors", label: "Program Keahlian", value: 5, suffix: " Jurusan", description: "Pilihan kompetensi vokasi unggulan" },
  { id: "awards", label: "Prestasi & Penghargaan", value: 120, suffix: "+", description: "Juara tingkat kabupaten hingga nasional" }
];

export const NEWS_ARTICLES: NewsItem[] = [
  {
    id: "news-1",
    slug: "smkn-2-demak-juara-lks-jawa-tengah-2026",
    title: "Siswa SMK Negeri 2 Demak Raih Juara 1 Lomba Kompetensi Siswa (LKS) Tingkat Jawa Tengah",
    category: "Prestasi",
    publishDate: "2026-10-08",
    author: "Tim Jurnalistik Sekolah",
    thumbnail: "/src/assets/images/vocational_computer_lab_1792075064943.jpg",
    excerpt: "Prestasi membanggakan kembali ditorehkan oleh kontingen SMK Negeri 2 Demak dalam ajang LKS SMK Tingkat Provinsi Jawa Tengah pada bidang Web Technologies.",
    content: [
      "Prestasi gemilang kembali dipersembahkan oleh siswa SMK Negeri 2 Demak dalam ajang Lomba Kompetensi Siswa (LKS) SMK Tingkat Provinsi Jawa Tengah tahun 2026. Dalam kompetisi bergengsi yang diikuti perwakilan terbaik dari 35 kabupaten/kota, kontingen SMKN 2 Demak berhasil menyabet Juara 1 untuk cabang lomba Web Technologies dan Juara Harapan 1 untuk Automobile Technology.",
      "Kepala SMK Negeri 2 Demak menyampaikan apresiasi setinggi-tingginya kepada para siswa juara dan guru pembimbing yang telah mendedikasikan waktu berlatih secara intensif di laboratorium sekolah. Keberhasilan ini membuktikan bahwa kualitas pembelajaran vokasi di SMKN 2 Demak mampu bersaing di tingkat tertinggi.",
      "Dengan kemenangan ini, perwakilan SMKN 2 Demak berhak mewakili Provinsi Jawa Tengah pada perhelatan LKS Tingkat Nasional yang akan digelar pada akhir tahun.",
      "Sekolah terus berkomitmen mendukung fasilitas modern, lisensi software internasional, dan pendampingan mentor praktisi industri demi mengasah kompetensi siswa."
    ],
    readTime: "4 menit baca",
    isFeatured: true
  },
  {
    id: "news-2",
    slug: "job-fair-dan-rekrutmen-dudi-2026",
    title: "Bursa Kerja Khusus (BKK) SMK Negeri 2 Demak Gelar Rekrutmen Terbuka Bersama 15 Perusahaan Nasional",
    category: "Kerjasama",
    publishDate: "2026-09-28",
    author: "Humas & Hubin SMKN 2 Demak",
    thumbnail: "/src/assets/images/profile_school_facade_1792075063794.jpg",
    excerpt: "Bursa Kerja Khusus (BKK) SMK Negeri 2 Demak memfasilitasi ratusan calon lulusan dan alumni melalui rekrutmen kerja langsung bersama mitra industri manufaktur dan teknologi.",
    content: [
      "Sebagai bukti nyata kesiapan lulusan terserap di dunia kerja, Bursa Kerja Khusus (BKK) SMK Negeri 2 Demak menyelenggarakan Rekrutmen Terbuka dan Walk-In Interview bersama 15 perusahaan skala nasional dan multinasional.",
      "Perusahaan yang hadir mencakup sektor manufaktur otomotif, penyedia layanan jaringan internet, perbankan daerah, serta industri garmen modern. Lebih dari 400 peserta dari kalangan kelas XII dan alumni hadir untuk mengikuti tahapan seleksi psikotes dan wawancara kerja.",
      "Ketua BKK SMKN 2 Demak menegaskan bahwa program kemitraan 'Link and Match' yang dijalankan sekolah memastikan kurikulum yang diajarkan selalu relevan dengan kebutuhan dunia industri saat ini."
    ],
    readTime: "3 menit baca"
  },
  {
    id: "news-3",
    slug: "sosialisasi-teaching-factory-otomotif",
    title: "Penguatan Ekosistem Teaching Factory Bengkel Otomotif Berstandar Industri Resmi",
    category: "Akademik",
    publishDate: "2026-09-15",
    author: "Kaprogli TKRO",
    thumbnail: "/src/assets/images/vocational_automotive_lab_1792075064381.jpg",
    excerpt: "Bengkel praktik Teknik Kendaraan Ringan Otomotif SMK Negeri 2 Demak kini melayani servis berkala untuk masyarakat umum dengan standar operational resmi.",
    content: [
      "SMK Negeri 2 Demak meresmikan peningkatan fasilitas Teaching Factory (TeFa) bengkel otomotif dengan penerapan alur kerja bengkel resmi dealer modern. Fasilitas ini memungkinkan siswa melakukan servis berkala, tune up, ganti oli, dan perbaikan kelistrikan kendaraan roda empat milik masyarakat secara profesional di bawah supervisi mekanik ahli berlisensi.",
      "Langkah ini bertujuan membangun mentalitas kerja nyata dan etos pelayanan prima bagi para siswa sebelum terjun ke masa Praktik Kerja Lapangan (PKL) di industri."
    ],
    readTime: "3 menit baca"
  },
  {
    id: "news-4",
    slug: "pameran-karya-busana-fashion-show-siswa",
    title: "Karya Siswa Tata Busana Tampil Memukau di Ajang Fashion Show Kreatif Pelajar",
    category: "Kesiswaan",
    publishDate: "2026-08-30",
    author: "Pembina Kesiswaan",
    thumbnail: "/src/assets/images/hero_school_campus_1792075064166.jpg",
    excerpt: "Sebanyak 24 koleksi busana etnik kontemporer bernuansa batik pesisir Demak rancangan siswa kelas XII Tata Busana dipamerkan dalam pagelaran tahunan.",
    content: [
      "Kreativitas membanggakan diperlihatkan oleh siswa-siswi program keahlian Desain dan Produksi Busana SMK Negeri 2 Demak. Mengusung tema 'Pesona Batik Demak dalam Siluet Modern', para siswa memamerkan busana casual dan gaun malam yang memadukan motif khas daerah dengan tren busana global masa kini.",
      "Acara ini dihadiri oleh jajaran Dinas Pendidikan dan Kebudayaan, praktisi desainer asosiasi mode Jawa Tengah, serta orang tua murid. Sejumlah karya siswa bahkan langsung dipesan oleh pengunjung pameran."
    ],
    readTime: "3 menit baca"
  },
  {
    id: "news-5",
    slug: "pengumuman-persiapan-asesmen-sumatif-akhir-semester",
    title: "Pengumuman Jadwal Asesmen Sumatif & Pembagian Rapor Semester Gasal",
    category: "Pengumuman",
    publishDate: "2026-08-12",
    author: "Wakasek Kurikulum",
    thumbnail: "/src/assets/images/profile_school_facade_1792075063794.jpg",
    excerpt: "Informasi resmi jadwal pelaksanaan ujian asesmen sumatif semester gasal tahun ajaran 2026/2027 serta tata tertib bagi seluruh peserta didik.",
    content: [
      "Diberitahukan kepada seluruh peserta didik kelas X, XI, dan XII SMK Negeri 2 Demak bahwa Asesmen Sumatif Akhir Semester Gasal akan dilaksanakan secara Computer Based Test (CBT) melalui aplikasi ujian sekolah mandiri.",
      "Seluruh siswa diharapkan menjaga kesehatan, menyelesaikan seluruh tugas portofolio praktikum di masing-masing kompetensi keahlian, dan hadir tepat waktu sesuai jadwal sesi yang telah dibagikan wali kelas."
    ],
    readTime: "2 menit baca"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Gedung Utama & Halaman Upacara Kampus SMK Negeri 2 Demak",
    category: "Lingkungan Sekolah",
    image: "/src/assets/images/hero_school_campus_1792075064166.jpg",
    caption: "Suasana asri dan megah halaman utama SMK Negeri 2 Demak dengan tiang bendera dan pepohonan hijau.",
    date: "Oktober 2026"
  },
  {
    id: "gal-2",
    title: "Kawasan Akademik & Selasar Penghubung Antar Gedung",
    category: "Lingkungan Sekolah",
    image: "/src/assets/images/profile_school_facade_1792075063794.jpg",
    caption: "Gedung pembelajaran teori bertingkat dengan selasar modern yang nyaman dan bersih.",
    date: "September 2026"
  },
  {
    id: "gal-3",
    title: "Praktikum Pemrograman di Laboratorium Komputer Modern",
    category: "Kegiatan Belajar",
    image: "/src/assets/images/vocational_computer_lab_1792075064943.jpg",
    caption: "Siswa jurusan Pengembangan Perangkat Lunak menguji program aplikasi di workstation laboratorium.",
    date: "September 2026"
  },
  {
    id: "gal-4",
    title: "Praktek Diagnostik Mesin di Workshop Otomotif",
    category: "Kegiatan Belajar",
    image: "/src/assets/images/vocational_automotive_lab_1792075064381.jpg",
    caption: "Siswa TKRO mempraktikkan diagnosis sistem electronic injection dan overhaul mesin kendaraan.",
    date: "Agustus 2026"
  },
  {
    id: "gal-5",
    title: "Simulasi Ujian Kompetensi Keahlian (UKK) Terstandar BNSP",
    category: "Prestasi Siswa",
    image: "/src/assets/images/vocational_computer_lab_1792075064943.jpg",
    caption: "Uji sertifikasi kompetensi siswa bersama asesor dari Lembaga Sertifikasi Profesi (LSP).",
    date: "Agustus 2026"
  },
  {
    id: "gal-6",
    title: "Apel Disiplin & Penguatan Karakter Profil Pelajar Pancasila",
    category: "Acara Sekolah",
    image: "/src/assets/images/hero_school_campus_1792075064166.jpg",
    caption: "Pembiasaan upacara bendera dan penanaman integritas serta kedisiplinan vokasi setiap pagi.",
    date: "Juli 2026"
  },
  {
    id: "gal-7",
    title: "Kunjungan Industri & Kuliah Umum Guru Tamu Perusahaan",
    category: "Acara Sekolah",
    image: "/src/assets/images/profile_school_facade_1792075063794.jpg",
    caption: "Praktisi dari mitra industri membagikan wawasan teknologi terbaru dan budaya kerja di hadapan siswa.",
    date: "Juli 2026"
  },
  {
    id: "gal-8",
    title: "Latihan Rutin Ekstrakurikuler Paskibra & Pramuka Gugus Depan",
    category: "Ekstrakurikuler",
    image: "/src/assets/images/hero_school_campus_1792075064166.jpg",
    caption: "Regu Paskibra SMK Negeri 2 Demak giat berlatih dalam mempersiapkan upacara kemerdekaan.",
    date: "Juli 2026"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Juara 1 LKS Tingkat Provinsi Jawa Tengah 2026",
    category: "Lomba Kompetensi Siswa",
    level: "Provinsi",
    year: "2026",
    rank: "Juara 1 Emas",
    studentName: "Ahmad Rizky Pratama & Tim",
    program: "Pengembangan Perangkat Lunak & Gim",
    description: "Meraih medali emas pada mata lomba Web Technologies dengan proyek fullstack cloud e-governance.",
    image: "/src/assets/images/vocational_computer_lab_1792075064943.jpg"
  },
  {
    id: "ach-2",
    title: "Medali Perak Automobile Technology LKS Wilayah Karesidenan",
    category: "Lomba Kompetensi Siswa",
    level: "Karesidenan",
    year: "2026",
    rank: "Juara 2 Perak",
    studentName: "Bagus Setiawan",
    program: "Teknik Kendaraan Ringan Otomotif",
    description: "Unggul dalam diagnosis kelistrikan mobil injeksi dan kecepatan engine tune-up sistem EFI.",
    image: "/src/assets/images/vocational_automotive_lab_1792075064381.jpg"
  },
  {
    id: "ach-3",
    title: "Juara 1 Desain Kreasi Busana Batik Etnik Remaja",
    category: "Seni & Industri Kreatif",
    level: "Kabupaten",
    year: "2026",
    rank: "Juara 1",
    studentName: "Nurul Aini",
    program: "Desain & Produksi Busana",
    description: "Karya busana pesta perpaduan batik khas Demak dengan siluet kontemporer berhasil memikat dewan juri.",
    image: "/src/assets/images/hero_school_campus_1792075064166.jpg"
  },
  {
    id: "ach-4",
    title: "Penghargaan Sekolah Adiwiyata Berwawasan Lingkungan Hidup",
    category: "Kelembagaan Sekolah",
    level: "Provinsi",
    year: "2025",
    rank: "Sekolah Adiwiyata",
    studentName: "Keluarga Besar SMKN 2 Demak",
    program: "Semua Jurusan",
    description: "Komitmen menjaga kelestarian lingkungan sekolah, pemilahan sampah cerdas, dan ruang hijau asri.",
    image: "/src/assets/images/profile_school_facade_1792075063794.jpg"
  }
];

export const SOCIAL_LINKS = [
  { name: "Instagram", url: "https://instagram.com/smkn2demak", handle: "@smkn2demak_official" },
  { name: "YouTube", url: "https://youtube.com/@smkn2demak", handle: "SMK Negeri 2 Demak Official" },
  { name: "Facebook", url: "https://facebook.com/smkn2demak", handle: "SMK Negeri 2 Demak" },
  { name: "TikTok", url: "https://tiktok.com/@smkn2demak", handle: "@smkn2demak" }
];
