import React, { useEffect } from 'react';
import { X, FileCode, Image, Newspaper, Award, Database, CheckCircle2 } from 'lucide-react';

interface AdminGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminGuideModal: React.FC<AdminGuideModalProps> = ({ isOpen, onClose }) => {
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
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Panduan Pengelolaan Data Website"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 z-10 animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-slate-900 text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <Database className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="text-base sm:text-lg font-bold">
                  Panduan Pengelolaan Data & Kustomisasi Website
                </h3>
                <p className="text-xs text-slate-400">
                  Instruksi pembaruan profil, logo, berita, program keahlian, dan foto
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
              aria-label="Tutup Panduan"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
            {/* Overview */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 leading-relaxed">
              Seluruh data website SMK Negeri 2 Demak dirancang secara <strong>modular dan tersentralisasi</strong> di satu berkas utama: <code className="bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded font-mono font-bold">src/data/schoolData.ts</code>. Anda tidak perlu mencari teks yang tersebar di komponen JSX.
            </div>

            {/* Guide Step 1: Profil Sekolah */}
            <div className="space-y-2 border-b border-slate-200 pb-5">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <FileCode className="w-4 h-4 text-blue-700" />
                <span>1. Mengubah Profil, NPSN, Visi, Misi, & Kontak</span>
              </h4>
              <p className="text-slate-600">
                Buka file <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">src/data/schoolData.ts</code> lalu edit objek konstanta <code className="font-mono text-blue-700">SCHOOL_PROFILE</code>. Anda dapat memperbarui:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><code className="font-mono">name</code>, <code className="font-mono">npsn</code>, <code className="font-mono">accreditation</code>, <code className="font-mono">headmaster</code></li>
                <li><code className="font-mono">address</code>, <code className="font-mono">phone</code>, <code className="font-mono">email</code>, <code className="font-mono">operatingHours</code></li>
                <li><code className="font-mono">vision</code> (Visi sekolah) dan array <code className="font-mono">mission</code> (Poin misi sekolah)</li>
              </ul>
            </div>

            {/* Guide Step 2: Program Keahlian */}
            <div className="space-y-2 border-b border-slate-200 pb-5">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-700" />
                <span>2. Menambah / Mengubah Program Keahlian (Jurusan)</span>
              </h4>
              <p className="text-slate-600">
                Pada array <code className="font-mono text-blue-700">VOCATIONAL_PROGRAMS</code> di file <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">src/data/schoolData.ts</code>:
              </p>
              <p className="text-slate-600">
                Setiap jurusan memiliki properti nama, judul, deskripsi, kompetensi, prospek karir, dan mitra industri. Anda dapat menambah jurusan baru atau mengubah kompetensi kurikulum yang diajarkan.
              </p>
            </div>

            {/* Guide Step 3: Berita & Pengumuman */}
            <div className="space-y-2 border-b border-slate-200 pb-5">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-blue-700" />
                <span>3. Mengunggah Berita & Pengumuman Baru</span>
              </h4>
              <p className="text-slate-600">
                Pada array <code className="font-mono text-blue-700">NEWS_ARTICLES</code> di file <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">src/data/schoolData.ts</code>:
              </p>
              <p className="text-slate-600">
                Tambahkan objek berita baru di posisi paling atas dengan tanggal terbaru, kategori (<code className="font-mono">Prestasi</code>, <code className="font-mono">Akademik</code>, <code className="font-mono">Kesiswaan</code>, <code className="font-mono">Pengumuman</code>, atau <code className="font-mono">Kerjasama</code>), ringkasan, dan paragraf isi berita.
              </p>
            </div>

            {/* Guide Step 4: Foto & Galeri */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Image className="w-4 h-4 text-blue-700" />
                <span>4. Mengganti Foto Gedung & Galeri Kegiatan</span>
              </h4>
              <p className="text-slate-600">
                Simpan file foto asli sekolah di folder <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">src/assets/images/</code> atau <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">public/</code>. Kemudian perbarui URL path gambar pada array <code className="font-mono text-blue-700">GALLERY_ITEMS</code> atau properti <code className="font-mono">image</code> pada masing-masing bagian.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer"
            >
              Tutup Panduan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
