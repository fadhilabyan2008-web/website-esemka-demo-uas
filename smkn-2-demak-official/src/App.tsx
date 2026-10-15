/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfileSection } from './components/ProfileSection';
import { ProfileModal } from './components/ProfileModal';
import { ProgramsSection } from './components/ProgramsSection';
import { StatsSection } from './components/StatsSection';
import { NewsSection } from './components/NewsSection';
import { GallerySection } from './components/GallerySection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminGuideModal } from './components/AdminGuideModal';

export default function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAdminGuideOpen, setIsAdminGuideOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Navigation Bar with Drawer */}
      <Navbar onOpenGuide={() => setIsAdminGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenProfile={() => setIsProfileModalOpen(true)} />

        {/* 2. Profil Sekolah */}
        <ProfileSection onOpenDetail={() => setIsProfileModalOpen(true)} />

        {/* 3. Program Keahlian / Jurusan */}
        <ProgramsSection />

        {/* 4. Statistik Sekolah */}
        <StatsSection />

        {/* 5. Berita dan Informasi Terbaru */}
        <NewsSection />

        {/* 6. Galeri Sekolah */}
        <GallerySection />

        {/* 7. Prestasi Siswa & Sekolah */}
        <AchievementsSection />

        {/* 8. Kontak dan Lokasi */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenGuide={() => setIsAdminGuideOpen(true)}
        onOpenProfile={() => setIsProfileModalOpen(true)}
      />

      {/* Modals */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />

      <AdminGuideModal
        isOpen={isAdminGuideOpen}
        onClose={() => setIsAdminGuideOpen(false)}
      />
    </div>
  );
}
