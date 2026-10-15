import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, School, BookOpen, GraduationCap, Image, Phone, Newspaper, HelpCircle } from 'lucide-react';
import { SCHOOL_PROFILE } from '../data/schoolData';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Beranda', href: '#beranda', icon: School, desc: 'Halaman utama dan pengenalan' },
    { label: 'Profil', href: '#profil', icon: BookOpen, desc: 'Visi, misi, dan identitas sekolah' },
    { label: 'Jurusan', href: '#jurusan', icon: GraduationCap, desc: '5 program keahlian vokasi unggulan' },
    { label: 'Berita', href: '#berita', icon: Newspaper, desc: 'Informasi dan agenda terbaru' },
    { label: 'Galeri', href: '#galeri', icon: Image, desc: 'Dokumentasi kegiatan dan kampus' },
    { label: 'Kontak', href: '#kontak', icon: Phone, desc: 'Lokasi, alamat, dan pesan langsung' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/10 py-3 border-b border-slate-800'
            : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Zone */}
            <a
              href="#beranda"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
            >
              {/* Official School Emblem SVG */}
              <div className="relative w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 via-blue-900 to-slate-900 shadow-md border border-amber-400/40 group-hover:border-amber-400 transition-colors">
                <svg
                  className="w-7 h-7 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center text-[9px] font-bold text-slate-950">
                  2
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight group-hover:text-amber-300 transition-colors">
                  SMK NEGERI 2 DEMAK
                </span>
                <span className="text-xs text-slate-300 font-normal">
                  Pendidikan Vokasi Berkualitas · Jawa Tengah
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200" aria-label="Navigasi Utama">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="hover:text-amber-400 transition-colors py-1 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Action & Hamburger Button */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenGuide}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                title="Panduan Pengelolaan Data Sekolah"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Petunjuk Data</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('#kontak')}
                className="hidden md:inline-flex items-center px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer whitespace-nowrap"
              >
                Hubungi Kami
              </button>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 text-white hover:text-amber-400 hover:bg-slate-800/80 rounded-lg border border-slate-700/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition-colors cursor-pointer"
                aria-label="Buka Menu Navigasi"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hamburger Navigation Drawer Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Panel Navigasi">
          {/* Backdrop blur overlay */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 text-white shadow-2xl flex flex-col justify-between">
              {/* Drawer Header */}
              <div className="px-6 py-6 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/60 border border-amber-400/50 flex items-center justify-center text-amber-400 font-bold">
                    SMK
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white tracking-tight">SMK NEGERI 2 DEMAK</h3>
                    <p className="text-xs text-slate-400">Panel Menu Navigasi</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  aria-label="Tutup Menu Navigasi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="px-6 py-6 overflow-y-auto space-y-2 flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Navigasi Halaman
                </p>
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full text-left p-3 rounded-xl hover:bg-slate-800/80 transition-all flex items-center justify-between group cursor-pointer border border-transparent hover:border-slate-700"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-slate-800 group-hover:bg-blue-900/60 text-slate-300 group-hover:text-amber-400 flex items-center justify-center transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                            {item.label}
                          </p>
                          <p className="text-xs text-slate-400 line-clamp-1">{item.desc}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })}

                {/* Additional Quick Action in Menu */}
                <div className="pt-4 border-t border-slate-800/80 mt-4 space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenGuide();
                    }}
                    className="w-full text-left p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 transition-all flex items-center gap-3 cursor-pointer"
                  >
                    <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-white">Panduan Pengelolaan Website</p>
                      <p className="text-[11px] text-slate-400">Instruksi edit data sekolah, berita, & foto</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="px-6 py-5 bg-slate-950/60 border-t border-slate-800/80 text-xs text-slate-400 space-y-2">
                <p className="font-medium text-slate-300">{SCHOOL_PROFILE.address}</p>
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span>Telp: {SCHOOL_PROFILE.phone}</span>
                  <span>·</span>
                  <span>NPSN: {SCHOOL_PROFILE.npsn}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
