/**
 * Helper & Pure Logic Functions for School Portal
 */
import type { NewsItem, SchoolStat } from '../data/schoolData';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Filter news articles by category and search term
 */
export function filterNews(
  articles: NewsItem[],
  searchTerm: string,
  category: string
): NewsItem[] {
  const normalizedQuery = (searchTerm || '').trim().toLowerCase();

  return articles.filter((item) => {
    const matchesCategory =
      category === 'Semua' || item.category.toLowerCase() === category.toLowerCase();

    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const inTitle = item.title.toLowerCase().includes(normalizedQuery);
    const inExcerpt = item.excerpt.toLowerCase().includes(normalizedQuery);
    const inAuthor = item.author.toLowerCase().includes(normalizedQuery);
    const inContent = item.content.some((para) =>
      para.toLowerCase().includes(normalizedQuery)
    );

    return inTitle || inExcerpt || inAuthor || inContent;
  });
}

/**
 * Format ISO date string into Indonesian readable format
 * e.g. "2026-10-08" -> "8 Oktober 2026"
 */
export function formatDateIndonesian(dateString: string): string {
  if (!dateString) return '';
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const parts = dateString.split('-');
  if (parts.length === 3) {
    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    if (monthIndex >= 0 && monthIndex < 12 && !isNaN(day)) {
      return `${day} ${months[monthIndex]} ${year}`;
    }
  }

  return dateString;
}

/**
 * Validate Contact Form fields
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 3) {
    errors.name = 'Nama lengkap wajib diisi minimal 3 karakter.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Alamat email tidak valid.';
  }

  if (!data.subject || data.subject.trim().length < 4) {
    errors.subject = 'Subjek pesan wajib diisi minimal 4 karakter.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Pesan wajib diisi minimal 10 karakter.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Calculate total stats summary metrics
 */
export function calculateStatsSummary(stats: SchoolStat[]): { totalCount: number; labels: string[] } {
  const totalCount = stats.reduce((sum, item) => sum + item.value, 0);
  const labels = stats.map((s) => s.label);
  return {
    totalCount,
    labels
  };
}
