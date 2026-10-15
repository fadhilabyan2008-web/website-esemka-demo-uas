import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { SCHOOL_PROFILE, SOCIAL_LINKS } from '../data/schoolData';
import { validateContactForm, type ContactFormData } from '../utils/schoolHelpers';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitStatus('success');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setSubmitStatus('idle');
  };

  const handleOpenGoogleMaps = () => {
    const query = encodeURIComponent("SMK Negeri 2 Demak, Katonsari, Demak");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            Layanan Komunikasi
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Kontak dan Lokasi Sekolah
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded mt-3 mb-4" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Silakan hubungi kami untuk informasi penerimaan peserta didik baru (PPDB), kemitraan industri (PKL/BKK), atau kunjungan kampus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Map Preview (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Contact Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Alamat Sekolah</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-1 leading-snug">
                    {SCHOOL_PROFILE.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {SCHOOL_PROFILE.district}, {SCHOOL_PROFILE.province} {SCHOOL_PROFILE.postalCode}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Telepon Resmi</h4>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {SCHOOL_PROFILE.phone}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {SCHOOL_PROFILE.operatingHours}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Surat Elektronik</h4>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {SCHOOL_PROFILE.email}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Respon cepat pada hari kerja
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Jam Operasional</h4>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    Senin - Jumat
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    07.00 - 16.00 WIB (Sabtu-Minggu Libur)
                  </p>
                </div>
              </div>
            </div>

            {/* Map Preview & Directions Action */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Peta Lokasi Kampus</h4>
                  <p className="text-xs text-slate-500">Katonsari, Demak, Jawa Tengah</p>
                </div>
                <button
                  type="button"
                  onClick={handleOpenGoogleMaps}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer border border-blue-200"
                >
                  <span>Petunjuk Arah Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-100">
                <iframe
                  title="Peta Lokasi SMK Negeri 2 Demak"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.852445037956!2d110.64023707579133!3d-6.908235267605923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70c39999999999%3A0x123456789abcdef!2sSMK%20Negeri%202%20Demak!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-90 contrast-95"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Kirim Pesan / Pertanyaan
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Sampaikan pesan, masukan, atau permohonan informasi kepada pengelola sekolah.
              </p>

              {submitStatus === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-950">
                    Pesan Berhasil Terkirim (Demo)
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Terima kasih, <strong>{formData.name}</strong>. Pesan dengan subjek &ldquo;{formData.subject}&rdquo; telah divalidasi.
                  </p>
                  <div className="p-3 bg-white/70 rounded-xl text-[11px] text-emerald-700 text-left border border-emerald-200">
                    <strong>Catatan Transparansi:</strong> Formulir ini saat ini berfungsi dalam mode demonstrasi antarmuka. Untuk keperluan komunikasi resmi, silakan hubungi langsung via telepon resmi {SCHOOL_PROFILE.phone} atau email {SCHOOL_PROFILE.email}.
                  </div>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-2 px-4 py-2 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap Anda"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-slate-300 focus:ring-blue-600 focus:border-transparent'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contoh@email.com"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-slate-300 focus:ring-blue-600 focus:border-transparent'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      Nomor WhatsApp / HP (Opsional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1">
                      Subjek Pesan <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Contoh: Informasi PPDB / Kerjasama PKL"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white transition-all focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-slate-300 focus:ring-blue-600 focus:border-transparent'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                      Isi Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan pertanyaan atau informasi yang ingin Anda sampaikan..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white transition-all focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-slate-300 focus:ring-blue-600 focus:border-transparent'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Sekarang</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Data Anda dilindungi dan hanya digunakan untuk keperluan konfirmasi informasi sekolah.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
