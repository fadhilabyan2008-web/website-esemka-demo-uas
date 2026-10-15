import React, { useEffect } from 'react';
import { X, CheckCircle2, Briefcase, Building, Clock, ChevronRight, Award } from 'lucide-react';
import type { VocationalProgram } from '../data/schoolData';

interface ProgramModalProps {
  program: VocationalProgram | null;
  onClose: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (program) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-label={`Detail Program ${program.title}`}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 z-10 animate-in fade-in zoom-in-95 duration-200">
          {/* Header with image */}
          <div className="relative h-48 sm:h-64 bg-slate-900 overflow-hidden">
            <img
              src={program.image}
              alt={program.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

            {/* Top Bar on Image */}
            <div className="absolute top-4 right-4 z-10">
              <button
                type="button"
                onClick={onClose}
                className="p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full backdrop-blur-sm transition-colors cursor-pointer"
                aria-label="Tutup Detail Jurusan"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="absolute bottom-5 left-6 right-6 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Program Keahlian · {program.code}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
                {program.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">{program.name}</p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[65vh] overflow-y-auto">
            {/* Description */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                Deskripsi Program
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {program.fullDesc}
              </p>
            </div>

            {/* Grid 2 Columns: Competencies & Career Prospects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Competencies */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-700" />
                  <span>Kompetensi yang Dipelajari</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {program.competencies.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Prospects */}
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/70">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-amber-700" />
                  <span>Peluang & Prospek Karir</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {program.careerProspects.map((career, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Industry Partners */}
            <div className="p-5 rounded-2xl bg-blue-950 text-white">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
                <Building className="w-4 h-4" />
                <span>Mitra Industri & Rekrutmen Kerja (DUDI)</span>
              </h4>
              <p className="text-xs text-slate-300 mb-3">
                Siswa dibekali program magang PKL terstandar dan kesempatan rekrutmen kerja langsung bersama mitra industri terkemuka:
              </p>
              <div className="flex flex-wrap gap-2">
                {program.industryPartners.map((partner, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-900/80 border border-blue-700/60 text-blue-100"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Masa Studi: {program.duration} · Siap Uji Sertifikasi Profesi (LSP/BNSP)
            </span>
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
