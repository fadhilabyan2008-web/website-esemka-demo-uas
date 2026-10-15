import React from 'react';
import { ArrowRight, CheckCircle2, Building, ShieldCheck, MapPin, School, GraduationCap, Award } from 'lucide-react';
import { SCHOOL_PROFILE } from '../data/schoolData';

interface ProfileSectionProps {
  onOpenDetail: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onOpenDetail }) => {
  return (
    <section id="profil" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            Profil Institusi Pendidikan
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Mengenal SMK Negeri 2 Demak
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded mt-3 mb-4" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Lembaga pendidikan kejuruan negeri terpercaya di Kabupaten Demak yang mencetak generasi vokasi unggul, kompeten, berakhlak mulia, dan siap kerja.
          </p>
        </div>

        {/* 2-Column Main Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: School Building Photo & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="/src/assets/images/profile_school_facade_1792075063794.jpg"
                alt="Gedung Pembelajaran SMK Negeri 2 Demak"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  Kampus Terpadu
                </span>
                <p className="font-semibold text-sm sm:text-base leading-snug">
                  Lingkungan belajar asri, modern, dan kondusif untuk tumbuh kembang kompetensi siswa.
                </p>
              </div>
            </div>

            {/* Quick Accreditation Box */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  A
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Terakreditasi A (Unggul)</h4>
                  <p className="text-xs text-slate-500">Badan Akreditasi Nasional Sekolah/Madrasah</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                Resmi
              </span>
            </div>
          </div>

          {/* Right Column: Narrative, Vision, Mission, and CTA */}
          <div className="lg:col-span-7 space-y-8">
            <div className="prose prose-slate max-w-none">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {SCHOOL_PROFILE.history}
              </p>
            </div>

            {/* Visi Sekolah */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 text-white shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <Award className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider">Visi Sekolah</h3>
              </div>
              <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed italic">
                &ldquo;{SCHOOL_PROFILE.vision}&rdquo;
              </p>
            </div>

            {/* Misi Sekolah */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-700" />
                <span>Misi Sekolah</span>
              </h3>
              <ul className="space-y-3">
                {SCHOOL_PROFILE.mission.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              {SCHOOL_PROFILE.mission.length > 4 && (
                <p className="text-xs text-slate-500 italic pl-8">
                  +{SCHOOL_PROFILE.mission.length - 4} butir misi strategis lainnya
                </p>
              )}
            </div>

            {/* Tombol Selengkapnya */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDetail}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-md transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span>Lihat Profil Lengkap & Fasilitas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* School Official Identity Table Strip */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="mb-6">
            <h3 className="text-base font-bold text-slate-900">
              Identitas Resmi SMK Negeri 2 Demak
            </h3>
            <p className="text-xs text-slate-500">
              Data pokok pendidikan yang terdaftar di Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs text-slate-500 uppercase font-semibold">Nama Sekolah</span>
              <p className="font-bold text-slate-900 mt-1">{SCHOOL_PROFILE.name}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs text-slate-500 uppercase font-semibold">Nomor Pokok Sekolah Nasional (NPSN)</span>
              <p className="font-bold text-slate-900 mt-1 font-mono">{SCHOOL_PROFILE.npsn}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs text-slate-500 uppercase font-semibold">Status & Akreditasi</span>
              <p className="font-bold text-slate-900 mt-1">{SCHOOL_PROFILE.status} · {SCHOOL_PROFILE.accreditation}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs text-slate-500 uppercase font-semibold">Alamat Lengkap</span>
              <p className="font-medium text-slate-900 mt-1">
                {SCHOOL_PROFILE.address}, {SCHOOL_PROFILE.subdistrict}, {SCHOOL_PROFILE.district}, {SCHOOL_PROFILE.province} {SCHOOL_PROFILE.postalCode}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs text-slate-500 uppercase font-semibold">Kepala Sekolah</span>
              <p className="font-bold text-slate-900 mt-1">{SCHOOL_PROFILE.headmaster}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs text-slate-500 uppercase font-semibold">Jam Pelayanan Sekolah</span>
              <p className="font-medium text-slate-900 mt-1">{SCHOOL_PROFILE.operatingHours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
