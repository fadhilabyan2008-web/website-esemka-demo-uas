import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { SCHOOL_PROFILE, SOCIAL_LINKS } from '../data/schoolData';

interface FooterProps {
  onOpenGuide: () => void;
  onOpenProfile: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide, onOpenProfile }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & About (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900 border border-amber-400/50 flex items-center justify-center text-amber-400 font-bold text-base shadow">
                SMK
              </div>
              <div>
                <h3 className="font-extrabold text-lg tracking-tight text-white">
                  SMK NEGERI 2 DEMAK
                </h3>
                <p className="text-xs text-slate-400">Pendidikan Vokasi Unggul & Berkarakter</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Mewujudkan lulusan vokasi yang kompeten, mandiri, berdaya saing global, dan siap menghadapi tantangan dunia industri era digital.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 text-amber-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>NPSN: {SCHOOL_PROFILE.npsn}</span>
              </span>
              <span>·</span>
              <span>{SCHOOL_PROFILE.accreditation}</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#beranda')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenProfile}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Profil Sekolah
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#jurusan')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Program Keahlian
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#berita')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Berita & Pengumuman
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#galeri')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Galeri Sekolah
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavClick('#kontak')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kontak & Lokasi
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenGuide}
                  className="text-amber-400/90 hover:text-amber-300 font-medium transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Panduan Data</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Informasi Kontak
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_PROFILE.address}, {SCHOOL_PROFILE.district}, Jawa Tengah {SCHOOL_PROFILE.postalCode}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{SCHOOL_PROFILE.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{SCHOOL_PROFILE.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{SCHOOL_PROFILE.operatingHours}</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Media Sosial
            </h4>
            <div className="space-y-2 text-xs">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800/80"
                >
                  <span>{link.name}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} SMK Negeri 2 Demak. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Kembali ke atas halaman"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
