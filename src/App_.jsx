import React, { useState, useEffect } from 'react';
import { Sun, Moon, Languages, Mail, Terminal, Layout, Monitor, Code2, Cpu } from 'lucide-react';
import { DotLottiePlayer } from '@dotlottie/react-player';

// Data Konten
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
  { company: "Bank Syariah Indonesia", year: "2024 - 2025", desc: "Membangun aplikasi Dataku untuk KPI dan dashboard internal." },
  { company: "Stafinc Group", year: "2023", desc: "Sistem ESMK untuk monitoring indikator keselamatan." },
  { company: "Badan Wakaf Al-Quran", year: "2021 - 2023", desc: "Sistem distribusi nasional dengan tracking & dashboard monitoring." },
  { company: "PT Fusi Solusi", year: "2020", desc: "Pengembangan modul e-procurement PT Indonesia Power." },
];

const techStack = [
  { name: "Vue.js", icon: "vue-dot-js" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Redis", icon: "redis" },
  { name: "Docker", icon: "docker" },
  { name: "NestJS", icon: "nestjs" },
];

// Komponen Loading Skeleton
const SkeletonLoader = () => (
  <div className="animate-pulse container mx-auto px-6 py-20 space-y-10">
    <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded-2xl w-3/4 mx-auto"></div>
    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
      {[1, 2, 3].map(i => <div key={i} className="h-64 bg-gray-200 dark:bg-gray-800 rounded-3xl"></div>)}
    </div>
  </div>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('id');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (loading) return (
    <div className={darkMode ? 'bg-gray-900 min-h-screen' : 'bg-gray-50 min-h-screen'}>
      <SkeletonLoader />
    </div>
  );

  const t = content[lang];

  return (
    <div className={`min-h-screen transition-all duration-500 font-sans selection:bg-blue-500 selection:text-white ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Navigasi Melayang */}
      <nav className="fixed top-6 right-6 flex gap-3 z-50">
        <button 
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
          className="p-3 bg-blue-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
        >
          <Languages size={20} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-sm font-bold uppercase">
            {lang === 'id' ? 'EN' : 'ID'}
          </span>
        </button>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all ${darkMode ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Background Blur Decor */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-emerald-600/20 rounded-full blur-[120px]"></div>

        <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 leading-[1.2] pb-2 inline-block">
          Bambang Wisnu
        </h1>
        <p className="text-xl md:text-2xl font-semibold opacity-80 mb-8 tracking-wide">
          {t.role}
        </p>
        <p className="max-w-2xl text-lg opacity-60 leading-relaxed font-medium">
          {t.heroDesc}
        </p>
        
        <div className="mt-12 animate-bounce opacity-40">
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full mx-auto"></div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className={`py-24 px-6 ${darkMode ? 'bg-gray-800/20' : 'bg-white border-y border-gray-200'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-500/10 rounded-2xl">
              <Terminal className="text-blue-500" size={32} />
            </div>
            <h2 className="text-4xl font-bold">{t.aboutTitle}</h2>
          </div>
          <p className="text-xl leading-relaxed opacity-70 font-medium italic border-l-4 border-blue-500 pl-6">
            "{t.aboutDesc}"
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION (DENGAN ANIMASI ORANG BERJALAN) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-emerald-500/10 rounded-2xl">
            <Cpu className="text-emerald-500" size={32} />
          </div>
          <h2 className="text-4xl font-bold">{t.expTitle}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Kolom Kiri: Animasi Lottie (SOLUSI FIX 100%) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className={`p-8 rounded-[2.5rem] shadow-2xl transition-colors duration-500 w-full max-w-sm ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100'}`}>
              
              {/* Menggunakan Web Component Langsung */}
              <dotlottie-player
                src="https://lottie.host/dfb715a3-df5e-420a-8488-842f4c330e7a/vUa9m3A0Pz.json"
                background="transparent"
                speed="1"
                style={{ width: '100%', height: 'auto' }}
                direction="1"
                playMode="normal"
                loop
                autoplay
              ></dotlottie-player>
              
              <div className="mt-6 text-center opacity-40 font-mono text-sm tracking-widest uppercase">
                Career Journey Evolution
              </div>
            </div>
          </div>

          {/* Kolom Rerata: Timeline Pengalaman (TIDAK BERUBAH) */}
          <div className="lg:col-span-7 space-y-12 relative border-l-2 border-dashed border-blue-500/30 pl-10 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[51px] top-2 w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-900 group-hover:scale-150 group-hover:bg-emerald-500 transition-all duration-300"></div>
                <div className={`p-8 rounded-3xl transition-all duration-300 transform group-hover:-translate-y-2 ${darkMode ? 'bg-gray-800/40 hover:bg-gray-800/80' : 'bg-white shadow-lg hover:shadow-2xl'}`}>
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold mb-4 tracking-tighter uppercase">
                    {exp.year}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="opacity-60 leading-relaxed text-lg">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* TECH STACK SECTION */}
      <section className={`py-24 px-6 ${darkMode ? 'bg-gray-800/20' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">{t.techTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, i) => (
              <div key={i} className={`flex flex-col items-center p-8 rounded-3xl transition-all duration-300 group hover:-translate-y-3 ${darkMode ? 'hover:bg-gray-800 border border-transparent hover:border-gray-700' : 'bg-gray-50 hover:bg-white hover:shadow-xl'}`}>
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <img 
                    src={`https://cdn.simpleicons.org/${tech.icon}/${darkMode ? 'fff' : '333'}`} 
                    alt={tech.name} 
                    className="w-12 h-12 relative z-10 group-hover:grayscale-0 grayscale transition-all duration-500"
                  />
                </div>
                <span className="font-bold text-sm opacity-50 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 p-16 rounded-[3rem] text-white shadow-2xl overflow-hidden">
            <h2 className="text-5xl font-black mb-6 tracking-tight">{t.contactTitle}</h2>
            <p className="mb-10 text-blue-100 text-xl font-medium">{t.contactSub}</p>
            <a 
              href="mailto:wisnubambang@gmail.com" 
              className="inline-flex items-center gap-4 bg-white text-blue-700 px-12 py-5 rounded-full font-black text-xl hover:shadow-inner hover:scale-105 transition-all active:scale-95 group"
            >
              <Mail size={24} className="group-hover:rotate-12 transition-transform" /> 
              {t.contactBtn}
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center opacity-30 text-sm font-bold tracking-[0.2em] uppercase">
        © {new Date().getFullYear()} Bambang Wisnu • Fullstack Artisan
      </footer>
    </div>
  );
}