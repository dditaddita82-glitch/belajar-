import React from 'react';
import { motion } from 'framer-motion';

/**
 * Pondok Pesantren Daarul Atqiya - Registration Status & Dashboard
 * Built with: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion.
 * Features: Staggered load animations, responsive bento grid layout, and refined typography.
 */

const DashboardPage: React.FC = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 } as const,
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } as const },
    };

    const patternStyle = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23064e3b' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    };

    return (
        <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen flex flex-col font-['Plus_Jakarta_Sans']">


            {/* TopNavBar */}
            <header className="bg-white/95 dark:bg-emerald-950/95 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-100 dark:border-emerald-800/50 shadow-sm shadow-emerald-900/5">
                <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
                    <div className="text-xl font-bold tracking-tighter text-emerald-900 dark:text-emerald-50 uppercase">
                        Daarul Atqiya
                    </div>
                    <nav className="hidden md:flex gap-6 items-center">
                        {['Beranda', 'Program', 'Info'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-slate-600 dark:text-slate-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-all active:scale-95 px-3 py-2 rounded-md hover:bg-emerald-50/50"
                            >
                                {link}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-700 dark:border-emerald-400 pb-1 px-3 py-2"
                        >
                            Pendaftaran
                        </a>
                    </nav>
                    <button className="bg-[#003527] text-white px-5 py-2 rounded font-semibold text-sm hover:bg-[#064e3b] transition-colors shadow-sm active:scale-95">
                        Login/Status
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <motion.main
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex-grow w-full max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-12"
            >
                {/* Welcome Section */}
                <motion.section variants={itemVariants} className="flex flex-col gap-2">
                    <h1 className="text-[40px] leading-[1.2] font-bold text-[#003527]">
                        Ahlan wa Sahlan, Bapak Budi Santoso
                    </h1>
                    <p className="text-[18px] text-[#404944]">
                        Berikut adalah ringkasan status pendaftaran ananda tercinta.
                    </p>
                </motion.section>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Main Status Area */}
                    <div className="md:col-span-8 flex flex-col gap-8">
                        {/* Status Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-xl border border-[#bfc9c3] shadow-sm overflow-hidden relative min-h-[300px] flex items-center justify-center"
                        >
                            <div
                                className="absolute inset-0 opacity-50 pointer-events-none"
                                style={patternStyle}
                            />
                            <div className="p-12 relative z-10 flex flex-col items-center text-center gap-6">
                                <motion.span
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.5, type: 'spring' }}
                                    className="material-symbols-outlined text-[80px] text-[#e9c349]"
                                    style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                    pending_actions
                                </motion.span>
                                <div>
                                    <h2 className="text-[32px] font-semibold text-[#0b1c30] mb-2">
                                        Status Pendaftaran: Menunggu Verifikasi
                                    </h2>
                                    <p className="text-base text-[#404944] max-w-lg">
                                        Data pendaftaran telah kami terima dan sedang dalam proses pengecekan oleh panitia. Mohon kesediaannya menunggu.
                                    </p>
                                </div>
                                <div className="bg-[#ffe088] text-[#241a00] font-semibold text-sm px-5 py-2.5 rounded-full inline-flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">schedule</span>
                                    Menunggu Verifikasi
                                </div>
                            </div>
                        </motion.div>

                        {/* Application Details Bento */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-6">
                            <h3 className="text-[24px] font-semibold text-[#003527] border-b border-[#bfc9c3] pb-2">
                                Ringkasan Data Pendaftaran
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Nama Calon Santri', value: 'Ahmad Faris Santoso' },
                                    { label: 'Program Pilihan', value: 'Tahfidz Reguler (SMP)' },
                                    { label: 'Nomor Registrasi', value: 'REG-2024-00125', highlight: true },
                                    { label: 'Tanggal Daftar', value: '15 Mei 2024' },
                                ].map((detail, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#eff4ff] p-6 rounded-lg border border-[#bfc9c3] shadow-sm flex flex-col gap-1 transition-transform hover:scale-[1.02]"
                                    >
                                        <span className="text-sm font-semibold text-[#404944] uppercase tracking-wider">
                                            {detail.label}
                                        </span>
                                        <span
                                            className={`text-lg font-bold ${detail.highlight ? 'text-[#003527] tracking-widest' : 'text-[#0b1c30]'
                                                }`}
                                        >
                                            {detail.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar Actions */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        {/* Actions Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-xl border border-[#bfc9c3] shadow-sm p-6 flex flex-col gap-4"
                        >
                            <h3 className="text-[24px] font-semibold text-[#0b1c30] border-b border-[#bfc9c3] pb-2 mb-2">
                                Tindakan
                            </h3>
                            <button
                                className="w-full bg-[#c6c6c7] text-[#454747] opacity-60 cursor-not-allowed px-4 py-4 rounded font-semibold text-sm flex items-center justify-center gap-2"
                                disabled
                            >
                                <span className="material-symbols-outlined">print</span>
                                Cetak Kartu Pendaftaran (PDF)
                            </button>
                            <p className="text-[12px] text-[#404944] text-center italic">
                                Tombol cetak akan aktif setelah verifikasi selesai.
                            </p>
                            <div className="h-px bg-[#bfc9c3] my-2 w-full" />
                            <p className="text-sm text-[#404944] text-center">
                                Butuh bantuan atau ada pertanyaan?
                            </p>
                            <button className="w-full border-2 border-[#003527] text-[#003527] hover:bg-[#eff4ff] transition-all px-4 py-4 rounded font-bold text-sm flex items-center justify-center gap-2 shadow-sm bg-white active:scale-95">
                                <span className="material-symbols-outlined">support_agent</span>
                                Hubungi Admin (WhatsApp)
                            </button>
                        </motion.div>

                        {/* Info Snippet */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-[#d3e4fe] rounded-lg p-6 border border-[#bfc9c3] flex gap-4 items-start"
                        >
                            <span className="material-symbols-outlined text-[#003527]">info</span>
                            <div>
                                <h4 className="text-sm font-bold text-[#0b1c30] mb-1">Informasi</h4>
                                <p className="text-sm text-[#404944] leading-relaxed">
                                    Proses verifikasi biasanya memakan waktu 1-2 hari kerja. Harap pastikan nomor telepon yang terdaftar aktif.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Divider */}
                <motion.div
                    variants={itemVariants}
                    className="h-12 w-full opacity-20 rounded-md"
                    style={patternStyle}
                />
            </motion.main>

            {/* Footer */}
            <footer className="bg-emerald-900 dark:bg-black w-full pt-12 pb-8 border-t border-emerald-800 dark:border-zinc-800 mt-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto w-full">
                    <div className="col-span-1 md:col-span-4 mb-6">
                        <span className="text-xl font-extrabold text-white mb-2 block uppercase tracking-tighter">
                            Daarul Atqiya
                        </span>
                        <p className="text-emerald-50 text-sm opacity-80">
                            © 2024 Pondok Pesantren Daarul Atqiya. Mendidik dengan Adab dan Ilmu.
                        </p>
                    </div>
                    <nav className="col-span-1 md:col-span-4 flex flex-wrap gap-x-8 gap-y-4">
                        {[
                            'Beranda',
                            'Program',
                            'Info',
                            'Pendaftaran',
                            'Hubungi Kami',
                            'Kebijakan Privasi',
                        ].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className={`text-sm transition-all hover:text-white ${link === 'Pendaftaran'
                                        ? 'text-white underline decoration-emerald-500 font-bold'
                                        : 'text-emerald-200/70'
                                    }`}
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default DashboardPage;