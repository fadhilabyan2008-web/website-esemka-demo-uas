import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, Building2, BookOpen, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';
import { SCHOOL_PROFILE } from '../data/schoolData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-label="Profil Lengkap SMK Negeri 2 Demak">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 z-10 animate-in fade-in zoom-in-95 duration-200">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 px-6 sm:px-8 py-6 text-white flex items-center justify-between border-b border-blue-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Dokumen Resmi Profil Sekolah
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-1">
                SMK Negeri 2 Demak
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              aria-label="Tutup Profil Lengkap"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[78vh] overflow-y-auto">
            {/* Sejarah Singkat */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-blue-700" />
                <span>Sejarah & Perjalanan Sekolah</span>
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {SCHOOL_PROFILE.history}
              </p>
            </div>

            {/* Visi & Misi Utuh */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
                <h5 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                  Visi Sekolah
                </h5>
                <p className="text-sm sm:text-base font-semibold text-blue-950 italic">
                  &ldquo;{SCHOOL_PROFILE.vision}&rdquo;
                </p>
              </div>

              <div>
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  6 Butir Misi Utama
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SCHOOL_PROFILE.mission.map((item, idx) => (
                    <li key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sarana & Prasarana Unggulan */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-blue-700" />
                <span>Fasilitas & Sarana Prasarana Praktik</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SCHOOL_PROFILE.facilities.map((fac, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <h5 className="text-sm font-bold text-slate-900">{fac.name}</h5>
                      <span className="text-[11px] font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {fac.count}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Identitas Kontak Lengkap */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                Pusat Pelayanan & Informasi Sekolah
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{SCHOOL_PROFILE.address}, Demak, Jawa Tengah</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Telepon: {SCHOOL_PROFILE.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Email: {SCHOOL_PROFILE.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>NPSN: {SCHOOL_PROFILE.npsn} (Akreditasi A)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
