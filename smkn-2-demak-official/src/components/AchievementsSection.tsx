import React, { useState } from 'react';
import { Award, Trophy, Medal, Star, ChevronRight, X, Calendar, User, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS, type AchievementItem } from '../data/schoolData';

export const AchievementsSection: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  const getBadgeColor = (level: string) => {
    switch (level) {
      case 'Nasional':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Provinsi':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <section id="prestasi" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            Kebanggaan & Prestasi
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Prestasi & Penghargaan Siswa
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded mt-3 mb-4" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Dedikasi guru pembimbing dan kerja keras para peserta didik menghasilkan deretan prestasi membanggakan di tingkat kabupaten, provinsi, hingga nasional.
          </p>
        </div>

        {/* Editorial Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Level and Category Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${getBadgeColor(ach.level)}`}>
                    Tingkat {ach.level}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    Tahun {ach.year}
                  </span>
                </div>

                {/* Trophy & Rank */}
                <div className="flex items-center gap-2.5 text-amber-700 font-bold text-sm mb-2">
                  <Trophy className="w-4 h-4 shrink-0" />
                  <span>{ach.rank}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-700 transition-colors">
                  {ach.title}
                </h3>

                <p className="text-xs text-slate-500 font-medium mt-2">
                  Pemenang: <strong className="text-slate-800">{ach.studentName}</strong>
                </p>

                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setSelectedAchievement(ach)}
                  className="w-full text-xs font-bold text-blue-800 hover:text-blue-900 flex items-center justify-between cursor-pointer group-hover:underline"
                >
                  <span>Detail Prestasi</span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedAchievement.title}
        >
          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 cursor-pointer"
              aria-label="Tutup Detail Prestasi"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              <Trophy className="w-4 h-4" />
              <span>{selectedAchievement.rank} · Tingkat {selectedAchievement.level}</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              {selectedAchievement.title}
            </h3>

            <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Penerima Penghargaan:</span>
                <span className="font-bold text-slate-800">{selectedAchievement.studentName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Program / Jurusan:</span>
                <span className="font-semibold text-slate-800">{selectedAchievement.program}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Kategori Lomba:</span>
                <span className="font-semibold text-slate-800">{selectedAchievement.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Tahun Capaian:</span>
                <span className="font-mono font-bold text-slate-800">{selectedAchievement.year}</span>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {selectedAchievement.description}
            </p>

            <button
              type="button"
              onClick={() => setSelectedAchievement(null)}
              className="w-full py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
