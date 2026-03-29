import React, { useState, useEffect } from 'react';
import { Sun, Moon, Languages, Mail, Terminal, Layout, Server, Monitor } from 'lucide-react';
// Konten Multibahasa
const content = {
  id: {
    role: "Fullstack Developer • Pengalaman 8+ Tahun",
    heroDesc: "Spesialis pengembangan aplikasi berbasis data, dashboard monitoring, dan sistem reporting yang scalable.",
    aboutTitle: "Tentang Saya",
    aboutDesc: "Halo, saya Bambang Wisnu — Fullstack Programmer dengan pengalaman lebih dari 8 tahun sejak 2018. Saya berfokus pada pengembangan aplikasi pengolahan data, monitoring KPI, dan visualisasi laporan berbasis web. Saya terbiasa membangun sistem yang scalable, cepat, dan siap digunakan dalam jangka panjang.",
    expTitle: "Pengalaman Kerja",
    techTitle: "Keahlian Teknologi",
    contactTitle: "Mari Bekerja Sama",
    contactSub: "Siap untuk project Anda berikutnya 🚀",
    contactBtn: "Hubungi Saya",
  },
  en: {
    role: "Fullstack Developer • 8+ Years Experience",
    heroDesc: "Specializing in data-driven applications, monitoring dashboards, and scalable reporting systems.",
    aboutTitle: "About Me",
    aboutDesc: "Hi, I'm Bambang Wisnu — a Fullstack Programmer with over 8 years of experience since 2018. I focus on developing data processing applications, KPI monitoring, and web-based report visualization. I am accustomed to building systems that are scalable, fast, and ready for long-term use.",
    expTitle: "Work Experience",
    techTitle: "Tech Stack",
    contactTitle: "Let's Work Together",
    contactSub: "Ready for your next big project 🚀",
    contactBtn: "Contact Me",
  }
};

const experiences = [
  { company: "CSUL Finance", year: "2026 - Sekarang", desc: "Develop aplikasi CONFINS & SISCA untuk monitoring performa dan reporting real-time." },
  { company: "Bank Syariah Indonesia", year: "2024 - 2025", desc: "Membangun aplikasi Dataku Leads Management Team Business dan dashboard internal." },
  { company: "Kemenhub", year: "2023", desc: "Sistem ESMK untuk monitoring indikator keselamatan." },
  { company: "Badan Wakaf Al-Quran", year: "2021 - 2023", desc: "Sistem distribusi nasional dengan tracking & dashboard monitoring." },
  { company: "PT Fusi Solusi", year: "2020", desc: "Pengembangan modul e-procurement PT Indonesia Power." },
  { company: "PT Redbit Teknologi Indonesia", year: "2019 - 2020", desc: "Pengembangan Aplikasi PTSP Dinas Teknis Kota Jakarta." },
  { company: "Hermina Hospitaly", year: "2018 - 2019", desc: "Pengembangan Aplikasi SIPA (Sistem Informasi Proses Administrasi)." },
];

const techStack = [
  { name: "CodeIgniter", icon: "codeigniter" },
  { name: "Laravel", icon: "laravel" },
  { name: "React.js", icon: "react" },
  { name: "PHP", icon: "php" },
  { name: "Vue.js", icon: "vuedotjs" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Redis", icon: "redis" },
  { name: "Docker", icon: "docker" },
  { name: "NestJS", icon: "nestjs" },
];

// Komponen Skeleton (Muncul saat loading)
const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-20 space-y-10">
    <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded-lg w-1/2 mx-auto"></div>
    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mx-auto"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {[1, 2, 3, 4].map(i => <div key={i} className="h-40 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>)}
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('id');
  const [yearIdx, setYearIdx] = useState(0);

  // Efek simulasi loading saat refresh
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Efek rotasi tahun di background hero
  useEffect(() => {
    const interval = setInterval(() => {
      setYearIdx((prev) => (prev + 1) % experiences.length);
    }, 5000); // Berganti setiap 5 detik sesuai durasi animasi CSS
    return () => clearInterval(interval);
  }, [experiences.length]);

  // Update class di HTML tag untuk Tailwind Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (loading) return (
    <div className={darkMode ? 'bg-gray-900 min-h-screen' : 'bg-white min-h-screen'}>
      <SkeletonLoader />
    </div>
  );

  const t = content[lang];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Floating Navbar */}
      <nav className="fixed top-6 right-6 flex gap-3 z-50">
        <button 
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
          className="p-3 bg-blue-600 text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition"
        >
          <Languages size={20} />
        </button>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full shadow-xl hover:scale-110 active:scale-95 transition ${darkMode ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Background Year Journey */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 p-10">
          <div 
            key={yearIdx}
            className={`flex flex-col items-center animate-year-journey transition-colors duration-1000 ${darkMode ? 'text-blue-500' : 'text-emerald-500'}`}
          >
            <span className="text-[4vw] font-mono font-bold tracking-[0.3em] opacity-50 uppercase">{experiences[yearIdx].year}</span>
            <span className="text-[10vw] font-black uppercase tracking-tighter leading-none my-2">{experiences[yearIdx].company}</span>
            <span className="text-[2vw] font-medium max-w-4xl text-center italic opacity-100">{experiences[yearIdx].desc}</span>
          </div>
        </div>

          {/* // KODE BARU (SOLUSI FIX HURUF G TERPOTONG) */}
        <h1 className="relative z-10 text-5xl md:text-7xl font-black mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 animate-gradient leading-[1.3] -mb-[0.3em] inline-block">
          Bambang Wisnu
        </h1>
        <p className="relative z-10 text-xl md:text-2xl font-medium opacity-80 mb-6">{t.role}</p>
        <p className="relative z-10 max-w-2xl text-lg opacity-60 leading-relaxed">{t.heroDesc}</p>
      </header>

      {/* About Section */}
      <section className={`py-24 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-white shadow-sm'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Terminal className="text-blue-500" /> {t.aboutTitle}
          </h2>
          <p className="text-lg leading-relaxed opacity-75">{t.aboutDesc}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Layout className="text-emerald-500" /> {t.expTitle}
        </h2>
        <div className="space-y-10 border-l-2 border-blue-500/30 pl-8 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-125 transition"></div>
              <h3 className="text-xl font-bold group-hover:text-blue-500 transition">{exp.company}</h3>
              <span className="text-sm font-mono opacity-50 uppercase tracking-widest">{exp.year}</span>
              <p className="mt-2 opacity-70 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={`py-24 px-6 ${darkMode ? 'bg-gray-800/30' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.techTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, i) => (
              <div key={i} className="flex flex-col items-center group cursor-default">
                <div className={`p-4 rounded-2xl mb-3 transition-all ${darkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                  <img 
                    src={
                      tech.icon === "oracle" 
                        ? `https://cdn.simpleicons.org/oracle` // Gunakan warna asli merah untuk Oracle
                        : `https://cdn.simpleicons.org/${tech.icon}/${darkMode ? 'fff' : '333'}`
                    }
                    alt={tech.name} 
                    className="w-10 h-10 group-hover:rotate-12 transition-transform"
                  />
                </div>
                <span className="font-semibold text-sm opacity-60">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-emerald-600 p-12 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">{t.contactTitle}</h2>
            <p className="mb-8 text-blue-100 text-lg">{t.contactSub}</p>
            <a href="mailto:wisnubambang@gmail.com" className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
              <Mail size={22} /> {t.contactBtn}
            </a>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      <footer className="py-10 text-center opacity-40 text-sm font-medium">
        © {new Date().getFullYear()} Bambang Wisnu • Built with React & Tailwind
      </footer>
    </div>
  );
}

export default App;