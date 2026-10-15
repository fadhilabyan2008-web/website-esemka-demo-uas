import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Calendar, User, Newspaper, AlertCircle } from 'lucide-react';
import { NEWS_ARTICLES, type NewsItem } from '../data/schoolData';
import { filterNews, formatDateIndonesian } from '../utils/schoolHelpers';
import { NewsDetailModal } from './NewsDetailModal';

export const NewsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const categories = ['Semua', 'Prestasi', 'Akademik', 'Kesiswaan', 'Kerjasama', 'Pengumuman'];

  const filteredNews = useMemo(() => {
    return filterNews(NEWS_ARTICLES, searchTerm, activeCategory);
  }, [searchTerm, activeCategory]);

  return (
    <section id="berita" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
              Kabar & Agenda Sekolah
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Berita dan Informasi Terbaru
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded mt-3 mb-4" />
            <p className="text-base text-slate-600">
              Ikuti kabar terkini seputar kegiatan akademik, prestasi siswa, rekrutmen kerja, dan pengumuman resmi SMK Negeri 2 Demak.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari berita atau pengumuman..."
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full cursor-pointer"
                aria-label="Bersihkan pencarian"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
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
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Demonstration Data Tag */}
        <div className="mb-8 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
          <span>
            <strong>Informasi Demonstrasi:</strong> Seluruh artikel di bawah ini merupakan data contoh untuk demonstrasi fungsionalitas portal sekolah.
          </span>
        </div>

        {/* News Cards Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={news.thumbnail}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                      {news.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    {/* Unboxed metadata line with typographic separator */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <span>{formatDateIndonesian(news.publishDate)}</span>
                      <span>·</span>
                      <span>{news.readTime}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {news.excerpt}
                    </p>
                  </div>
                </div>

                {/* Action */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedNews(news)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-blue-900 hover:text-white bg-blue-50 hover:bg-blue-900 border border-blue-200 hover:border-blue-900 transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-8">
            <Newspaper className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800">
              Tidak ada berita yang sesuai
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              Tidak ditemukan berita dengan kata kunci &ldquo;{searchTerm}&rdquo; pada kategori &ldquo;{activeCategory}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('Semua');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold text-blue-700 bg-white border border-blue-200 hover:bg-blue-50 rounded-lg cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <NewsDetailModal
        news={selectedNews}
        allNews={NEWS_ARTICLES}
        onSelectNews={(n) => setSelectedNews(n)}
        onClose={() => setSelectedNews(null)}
      />
    </section>
  );
};
