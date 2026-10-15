import React, { useState, useMemo } from 'react';
import { Eye, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/schoolData';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    'Semua',
    'Lingkungan Sekolah',
    'Kegiatan Belajar',
    'Prestasi Siswa',
    'Ekstrakurikuler',
    'Acara Sekolah'
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Semua') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            Dokumentasi Visual
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Galeri SMK Negeri 2 Demak
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded mt-3 mb-4" />
          <p className="text-base text-slate-600">
            Rekam jejak aktivitas pembelajaran, sarana prasarana modern, upacara kedisiplinan, serta karya inovatif para siswa.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar" role="tablist">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-xl border border-slate-200 cursor-pointer h-64 flex flex-col justify-end transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              aria-label={`Buka foto: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Category tag */}
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded border border-white/10">
                {item.category}
              </div>

              {/* Zoom Hover Indicator */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Caption Content */}
              <div className="relative p-4 z-10 text-white">
                <h3 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300 mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={filteredItems}
        onSelect={(item) => setSelectedItem(item)}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
