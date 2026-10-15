import React, { useState } from 'react';
import { Code2, Wrench, Network, Calculator, Scissors, ArrowRight, Sparkles } from 'lucide-react';
import { VOCATIONAL_PROGRAMS, type VocationalProgram } from '../data/schoolData';
import { ProgramModal } from './ProgramModal';

export const ProgramsSection: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<VocationalProgram | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'Wrench':
        return Wrench;
      case 'Network':
        return Network;
      case 'Calculator':
        return Calculator;
      case 'Scissors':
        return Scissors;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="jurusan" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            Pendidikan Vokasi Terapan
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Program Keahlian Unggulan
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded mt-3 mb-4" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Kurikulum berbasis industri (Teaching Factory) dengan fasilitas laboratorium dan bengkel standar industri terkini untuk mempersiapkan generasi terampil, mandiri, dan berkarakter.
          </p>
        </div>

        {/* Responsive Grid of Vocational Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VOCATIONAL_PROGRAMS.map((program) => {
            const Icon = getIcon(program.iconName);

            return (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Thumbnail Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Badge Floating */}
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-lg">
                      {program.code}
                    </div>

                    {/* Icon Floating */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1 mb-3">
                      {program.name}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {program.shortDesc}
                    </p>

                    {/* Competency preview tags */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {program.competencies.slice(0, 3).map((comp, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                        >
                          {comp.split('(')[0].trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedProgram(program)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-blue-900 hover:text-white bg-blue-50 hover:bg-blue-900 border border-blue-200 hover:border-blue-900 transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                  >
                    <span>Pelajari Lebih Lanjut</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Detail Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </section>
  );
};
