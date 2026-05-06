import React from 'react';
import { motion } from 'framer-motion'

/**
 * Pondok Pesantren Daarul Atqiya - Admission Info Page
 * Built with: Next.js (App Router compatible), TypeScript, Tailwind CSS, Framer Motion.
 * Refactored from HTML source while maintaining original structure and layout.
 */

const AdmissionPage: React.FC = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="antialiased min-h-screen flex flex-col bg-[#f8f9ff] text-[#0b1c30] font-['Plus_Jakarta_Sans']">


            {/* TopNavBar */}
            <nav className="bg-white/95 dark:bg-emerald-950/95 backdrop-blur-md sticky w-full top-0 z-50 border-b border-emerald-100 dark:border-emerald-800/50 shadow-sm shadow-emerald-900/5">
                <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
                    <div className="text-xl font-bold tracking-tighter text-emerald-900 dark:text-emerald-50 uppercase">
                        Daarul Atqiya
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        {['Beranda', 'Program', 'Info'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm font-medium tracking-tight px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors hover:bg-emerald-50/50 dark:hover:bg-emerald-900/30 rounded-md active:scale-95 duration-200 ease-in-out"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="text-sm tracking-tight px-4 py-2 text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-700 dark:border-emerald-400 pb-1 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/30 rounded-md transition-all active:scale-95 duration-200 ease-in-out"
                        >
                            Pendaftaran
                        </a>
                    </div>
                    <button className="text-sm font-medium tracking-tight text-emerald-900 dark:text-emerald-50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/30 rounded-md px-4 py-2 transition-all active:scale-95 duration-200 ease-in-out">
                        Login/Status
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-[#eff4ff] pt-20 pb-12 px-6 overflow-hidden border-b border-[#bfc9c3]/30">
                    {/* Pattern Background Overlay */}
                    <div
                        className="absolute inset-0 opacity-5 pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(#95d3ba 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[800px] mx-auto relative z-10 text-center"
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cca72f]/20 text-[#735c00] text-sm font-semibold mb-6">
                            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                            Tahun Ajaran 2024/2025
                        </span>
                        <h1 className="text-[40px] leading-[1.2] font-bold text-[#0b1c30] mb-3">
                            Informasi Pendaftaran Santri Baru
                        </h1>
                        <p className="text-[18px] leading-[1.6] text-[#404944]">
                            Panduan lengkap mengenai tata cara, persyaratan, dan rincian biaya pendaftaran di Pondok Pesantren Daarul Atqiya.
                        </p>
                    </motion.div>
                </section>

                <div className="max-w-[800px] mx-auto px-6 py-20 flex flex-col gap-20">

                    {/* Section: Timeline */}
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-[#003527] text-[28px]">timeline</span>
                            <h2 className="text-[32px] leading-[1.3] font-semibold text-[#0b1c30]">Jadwal Pendaftaran</h2>
                        </div>

                        <div className="bg-white border border-[#bfc9c3]/40 rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                            <div className="relative flex flex-col md:flex-row justify-between gap-6 md:gap-0">
                                {/* Connecting Line (Desktop) */}
                                <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[2px] bg-[#bfc9c3]/30 z-0" />
                                {/* Connecting Line (Mobile) */}
                                <div className="md:hidden absolute top-[10%] bottom-[10%] left-[24px] w-[2px] bg-[#bfc9c3]/30 z-0" />

                                {/* Step 1 */}
                                <div className="relative z-10 flex flex-row md:flex-col items-center gap-3 md:gap-1 text-center md:flex-1">
                                    <div className="w-12 h-12 rounded-full bg-[#003527] flex items-center justify-center text-white shadow-sm">
                                        <span className="material-symbols-outlined">check</span>
                                    </div>
                                    <div className="text-left md:text-center mt-0 md:mt-3">
                                        <h3 className="text-sm font-semibold text-[#0b1c30]">Gelombang 1</h3>
                                        <p className="text-sm text-[#404944]">1 Jan - 28 Feb</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative z-10 flex flex-row md:flex-col items-center gap-3 md:gap-1 text-center md:flex-1">
                                    <div className="w-12 h-12 rounded-full bg-[#cca72f] flex items-center justify-center text-[#241a00] shadow-sm ring-4 ring-[#cca72f]/20">
                                        <span className="text-sm font-semibold">2</span>
                                    </div>
                                    <div className="text-left md:text-center mt-0 md:mt-3">
                                        <h3 className="text-sm font-semibold text-[#0b1c30]">Gelombang 2</h3>
                                        <p className="text-sm text-[#404944]">1 Mar - 30 Apr</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative z-10 flex flex-row md:flex-col items-center gap-3 md:gap-1 text-center md:flex-1">
                                    <div className="w-12 h-12 rounded-full bg-[#d3e4fe] border-2 border-[#bfc9c3] flex items-center justify-center text-[#404944]">
                                        <span className="text-sm font-semibold">3</span>
                                    </div>
                                    <div className="text-left md:text-center mt-0 md:mt-3">
                                        <h3 className="text-sm font-semibold text-[#0b1c30]">Tes Penempatan</h3>
                                        <p className="text-sm text-[#404944]">Minggu Pertama Mei</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Islamic Pattern Divider */}
                    <div className="h-[40px] w-full rounded-lg opacity-20"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, #bfc9c3 25%, transparent 25%, transparent 75%, #bfc9c3 75%, #bfc9c3), repeating-linear-gradient(45deg, #bfc9c3 25%, #f8f9ff 25%, #f8f9ff 75%, #bfc9c3 75%, #bfc9c3)',
                            backgroundPosition: '0 0, 10px 10px',
                            backgroundSize: '20px 20px'
                        }}
                    />

                    {/* Section: Requirements */}
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-[#003527] text-[28px]">rule_folder</span>
                            <h2 className="text-[32px] leading-[1.3] font-semibold text-[#0b1c30]">Persyaratan Dokumen</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                { title: 'Scan Kartu Keluarga (KK)', desc: 'Dokumen asli yang di-scan dengan jelas dan dapat terbaca.', icon: 'description' },
                                { title: 'Akta Kelahiran', desc: 'Scan dokumen asli untuk verifikasi usia calon santri.', icon: 'badge' },
                                { title: 'Ijazah Terakhir', desc: 'Scan ijazah atau surat keterangan lulus sementara.', icon: 'school' },
                                { title: 'Pas Foto 3x4', desc: 'Foto terbaru berlatar merah jambu, pakaian rapi berkerah.', icon: 'photo_camera' },
                            ].map((req, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="bg-white border border-[#bfc9c3]/40 rounded-lg p-6 flex items-start gap-3 hover:border-[#003527]/50 transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.01)]"
                                >
                                    <span className="material-symbols-outlined text-[#cca72f] mt-1">{req.icon}</span>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[#0b1c30] mb-1">{req.title}</h3>
                                        <p className="text-sm text-[#404944]">{req.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Section: Costs */}
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-[#003527] text-[28px]">payments</span>
                            <h2 className="text-[32px] leading-[1.3] font-semibold text-[#0b1c30]">Rincian Biaya</h2>
                        </div>
                        <div className="bg-white border border-[#bfc9c3]/40 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                            <div className="divide-y divide-[#bfc9c3]/30">
                                {[
                                    { name: 'Biaya Pendaftaran', desc: 'Dibayarkan saat mengisi formulir awal.', price: 'Rp 350.000' },
                                    { name: 'Biaya Gedung & Fasilitas', desc: 'Dibayarkan sekali selama menjadi santri (bisa dicicil).', price: 'Rp 4.500.000' },
                                    { name: 'Biaya Seragam', desc: 'Termasuk 4 setel seragam resmi dan perlengkapan asrama.', price: 'Rp 1.200.000' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-[#eff4ff] transition-colors">
                                        <div className="mb-2 sm:mb-0">
                                            <h3 className="text-sm font-semibold text-[#0b1c30]">{item.name}</h3>
                                            <p className="text-sm text-[#404944]">{item.desc}</p>
                                        </div>
                                        <div className="text-[24px] leading-[1.4] font-semibold text-[#003527]">{item.price}</div>
                                    </div>
                                ))}
                                {/* Highlighted Monthly Fee */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-[#b0f0d6]/20 transition-colors">
                                    <div className="mb-2 sm:mb-0">
                                        <h3 className="text-sm font-semibold text-[#0b513d]">Biaya Bulanan (SPP)</h3>
                                        <p className="text-sm text-[#0b513d]/80">Sudah termasuk asrama, makan 3x sehari, dan pendidikan.</p>
                                    </div>
                                    <div className="text-[24px] leading-[1.4] font-semibold text-[#064e3b]">
                                        Rp 950.000<span className="text-sm font-normal">/bln</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* CTA */}
                    <motion.section
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-8 text-center"
                    >
                        <button className="bg-[#003527] text-white text-sm font-semibold px-20 py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95">
                            Mulai Pendaftaran Sekarang
                        </button>
                    </motion.section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-emerald-900 dark:bg-black w-full pt-12 pb-8 border-t border-emerald-800 dark:border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto w-full">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-lg font-extrabold text-white mb-4 block">Daarul Atqiya</span>
                        <p className="text-sm leading-relaxed text-emerald-50 max-w-md">
                            © 2024 Pondok Pesantren Daarul Atqiya. Mendidik dengan Adab dan Ilmu.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-sm font-bold text-white mb-4">Navigasi</h4>
                        <ul className="flex flex-col gap-2">
                            {['Beranda', 'Program', 'Info'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-sm leading-relaxed text-emerald-200/70 hover:text-white transition-colors hover:translate-x-1 duration-300 inline-block">
                                        {link}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="#" className="text-sm leading-relaxed text-white underline decoration-emerald-500 hover:translate-x-1 transition-transform duration-300 inline-block">
                                    Pendaftaran
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-sm font-bold text-white mb-4">Informasi</h4>
                        <ul className="flex flex-col gap-2">
                            <li><a href="#" className="text-sm leading-relaxed text-emerald-200/70 hover:text-white transition-colors hover:translate-x-1 duration-300 inline-block">Hubungi Kami</a></li>
                            <li><a href="#" className="text-sm leading-relaxed text-emerald-200/70 hover:text-white transition-colors hover:translate-x-1 duration-300 inline-block">Kebijakan Privasi</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AdmissionPage;