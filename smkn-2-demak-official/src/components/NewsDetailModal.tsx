import React, { useEffect } from 'react';
import { X, Calendar, User, Clock, Share2, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import type { NewsItem } from '../data/schoolData';
import { formatDateIndonesian } from '../utils/schoolHelpers';

interface NewsDetailModalProps {
  news: NewsItem | null;
  allNews: NewsItem[];
  onSelectNews: (news: NewsItem) => void;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  news,
  allNews,
  onSelectNews,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (news) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [news, onClose]);

  if (!news) return null;

  const currentIndex = allNews.findIndex((item) => item.id === news.id);
  const prevNews = currentIndex > 0 ? allNews[currentIndex - 1] : null;
  const nextNews = currentIndex < allNews.length - 1 ? allNews[currentIndex + 1] : null;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: news.excerpt,
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(`${news.title} - SMK Negeri 2 Demak: ${window.location.href}`);
      alert('Tautan berita berhasil disalin ke papan klip!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-label={news.title}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <article className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 z-10 animate-in fade-in zoom-in-95 duration-200">
          {/* Top Bar */}
          <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="text-amber-400 font-bold uppercase">{news.category}</span>
              <span>·</span>
              <span>{formatDateIndonesian(news.publishDate)}</span>
              <span>·</span>
              <span>{news.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                title="Bagikan Berita"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Tutup Berita"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Article Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {news.title}
            </h1>

            {/* Author & Date metadata bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Oleh: <strong className="text-slate-700">{news.author}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{formatDateIndonesian(news.publishDate)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{news.readTime}</span>
              </div>
            </div>

            {/* Thumbnail Image */}
            <div className="rounded-2xl overflow-hidden shadow-md max-h-[380px] bg-slate-900">
              <img
                src={news.thumbnail}
                alt={news.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Demonstration Content Notice */}
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Catatan Demonstrasi:</strong> Berita ini merupakan data percontohan untuk kebutuhan publikasi awal website resmi. Admin sekolah dapat mengganti atau menambah artikel riil melalui file data.
              </div>
            </div>

            {/* Full Prose Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              {news.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Previous & Next News Navigation */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevNews ? (
                <button
                  type="button"
                  onClick={() => onSelectNews(prevNews)}
                  className="p-3 rounded-xl border border-slate-200 hover:border-blue-300 text-left hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Berita Sebelumnya
                    </span>
                    <p className="text-xs font-bold text-slate-800 truncate group-hover:text-blue-700">
                      {prevNews.title}
                    </p>
                  </div>
                </button>
              ) : (
                <div />
              )}

              {nextNews && (
                <button
                  type="button"
                  onClick={() => onSelectNews(nextNews)}
                  className="p-3 rounded-xl border border-slate-200 hover:border-blue-300 text-right hover:bg-slate-50 transition-all flex items-center justify-end gap-2 cursor-pointer group sm:ml-auto w-full"
                >
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Berita Selanjutnya
                    </span>
                    <p className="text-xs font-bold text-slate-800 truncate group-hover:text-blue-700">
                      {nextNews.title}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                </button>
              )}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              SMK Negeri 2 Demak · Portal Berita Resmi
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors cursor-pointer"
            >
              Tutup Berita
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
