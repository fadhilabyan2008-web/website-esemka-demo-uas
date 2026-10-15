import React from 'react';
import { ArrowDown, ChevronRight, Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { SCHOOL_PROFILE } from '../data/schoolData';

interface HeroProps {
  onOpenProfile: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProfile }) => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-slate-950"
    >
      {/* Background Image with Deep Navy Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_school_campus_1792075064166.jpg"
          alt="Gedung Kampus SMK Negeri 2 Demak"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Deep Navy Gradient Scrim Overlay for maximum text readability and elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/65" />
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />
      </div>

      {/* Decorative ambient subtle glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl space-y-6 text-left">
          {/* Label Kecil */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-blue-900/40 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>SELAMAT DATANG DI WEBSITE RESMI</span>
          </div>

          {/* Judul Utama */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
            SMK Negeri 2 Demak
          </h1>

          {/* Subjudul */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 font-medium leading-relaxed max-w-2xl text-balance">
            {SCHOOL_PROFILE.tagline}
          </p>

          {/* Jargon Sekolah */}
          <div className="flex items-center gap-3 py-2 text-amber-300 font-medium text-sm sm:text-base border-y border-white/10 max-w-2xl">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="italic tracking-wide">
              &ldquo;{SCHOOL_PROFILE.motto}&rdquo;
            </span>
          </div>

          {/* Dua Tombol CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              type="button"
              onClick={() => handleScrollTo('#jurusan')}
              className="px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg hover:shadow-amber-400/20 transition-all flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <span>Jelajahi Sekolah</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenProfile}
              className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white hover:text-amber-300 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-600/80 rounded-xl backdrop-blur-sm transition-all flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Lihat Profil</span>
            </button>
          </div>
        </div>
      </div>

      {/* Operational Utility Ribbon at Hero Bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-400 text-[11px] uppercase tracking-wider">Status Sekolah</p>
                <p className="font-semibold text-white">Negeri · NPSN {SCHOOL_PROFILE.npsn}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-400 text-[11px] uppercase tracking-wider">Akreditasi</p>
                <p className="font-semibold text-white">{SCHOOL_PROFILE.accreditation}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center text-amber-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-400 text-[11px] uppercase tracking-wider">Program Keahlian</p>
                <p className="font-semibold text-white">5 Pilihan Kompetensi</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center text-amber-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-400 text-[11px] uppercase tracking-wider">Lulusan Siap Kerja</p>
                <p className="font-semibold text-white">Kemitraan DUDI Nasional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
