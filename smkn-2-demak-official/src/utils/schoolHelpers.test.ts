import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterNews,
  formatDateIndonesian,
  validateContactForm,
  calculateStatsSummary
} from './schoolHelpers.ts';
import type { NewsItem, SchoolStat } from '../data/schoolData.ts';

const mockNews: NewsItem[] = [
  {
    id: 'n1',
    slug: 'juara-lks',
    title: 'Siswa Juara LKS Tingkat Provinsi',
    category: 'Prestasi',
    publishDate: '2026-10-08',
    author: 'Tim Humas',
    thumbnail: '/img/1.jpg',
    excerpt: 'Prestasi membanggakan siswa di bidang RPL',
    content: ['Kontingen juara berlatih keras di lab.'],
    readTime: '3 min'
  },
  {
    id: 'n2',
    slug: 'rekrutmen-bkk',
    title: 'Rekrutmen Kerja Industri Otomotif',
    category: 'Kerjasama',
    publishDate: '2026-09-20',
    author: 'BKK',
    thumbnail: '/img/2.jpg',
    excerpt: 'Kerjasama rekrutmen mekanik bengkel resmi',
    content: ['Peluang kerja bagi lulusan vokasi.'],
    readTime: '4 min'
  }
];

test('filterNews filters correctly by category', () => {
  const allResults = filterNews(mockNews, '', 'Semua');
  assert.equal(allResults.length, 2);

  const prestasiResults = filterNews(mockNews, '', 'Prestasi');
  assert.equal(prestasiResults.length, 1);
  assert.equal(prestasiResults[0].id, 'n1');

  const emptyResults = filterNews(mockNews, '', 'Pengumuman');
  assert.equal(emptyResults.length, 0);
});

test('filterNews searches text in title and excerpt', () => {
  const searchRPL = filterNews(mockNews, 'RPL', 'Semua');
  assert.equal(searchRPL.length, 1);
  assert.equal(searchRPL[0].id, 'n1');

  const searchOtomotif = filterNews(mockNews, 'otomotif', 'Semua');
  assert.equal(searchOtomotif.length, 1);
  assert.equal(searchOtomotif[0].id, 'n2');

  const noMatch = filterNews(mockNews, 'xyzabc', 'Semua');
  assert.equal(noMatch.length, 0);
});

test('formatDateIndonesian formats ISO dates properly', () => {
  assert.equal(formatDateIndonesian('2026-10-08'), '8 Oktober 2026');
  assert.equal(formatDateIndonesian('2026-01-01'), '1 Januari 2026');
  assert.equal(formatDateIndonesian(''), '');
});

test('validateContactForm checks required fields and formats', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'invalid-email',
    subject: 'Hi',
    message: 'short'
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Ahmad Fauzi',
    email: 'fauzi@example.com',
    subject: 'Informasi Pendaftaran PKL',
    message: 'Selamat siang, saya ingin menanyakan jadwal PKL untuk siswa jurusan RPL.'
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('calculateStatsSummary aggregates values and labels', () => {
  const stats: SchoolStat[] = [
    { id: '1', label: 'Siswa', value: 1450, suffix: '+', description: 'desc' },
    { id: '2', label: 'Guru', value: 85, suffix: '+', description: 'desc' }
  ];
  const summary = calculateStatsSummary(stats);
  assert.equal(summary.totalCount, 1535);
  assert.deepEqual(summary.labels, ['Siswa', 'Guru']);
});
