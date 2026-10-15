import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import type { GalleryItem } from '../data/schoolData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onSelect: (item: GalleryItem) => void;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onSelect,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && prevItem) onSelect(prevItem);
      if (e.key === 'ArrowRight' && nextItem) onSelect(nextItem);
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  });

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Top Bar with title & close */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-slate-950/80 to-transparent">
        <div className="text-white">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
            {item.category}
          </span>
          <h3 className="text-sm sm:text-base font-bold truncate max-w-xs sm:max-w-md md:max-w-xl">
            {item.title}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            aria-label="Tutup Galeri"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Frame */}
      <div className="relative max-w-5xl max-h-[80vh] w-full px-4 sm:px-12 flex flex-col items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[70vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
          referrerPolicy="no-referrer"
        />

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <p className="text-xs sm:text-sm text-slate-200 font-medium">
            {item.caption}
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            Waktu dokumentasi: {item.date}
          </p>
        </div>
      </div>

      {/* Prev Navigation Button */}
      {prevItem && (
        <button
          type="button"
          onClick={() => onSelect(prevItem)}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-white bg-slate-900/70 hover:bg-slate-900 hover:text-amber-400 rounded-full border border-white/10 transition-all cursor-pointer z-20"
          aria-label="Foto Sebelumnya"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Navigation Button */}
      {nextItem && (
        <button
          type="button"
          onClick={() => onSelect(nextItem)}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-white bg-slate-900/70 hover:bg-slate-900 hover:text-amber-400 rounded-full border border-white/10 transition-all cursor-pointer z-20"
          aria-label="Foto Selanjutnya"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
