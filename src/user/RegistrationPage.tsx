import React from 'react';
import { motion } from 'framer-motion';

/**
 * Pondok Pesantren Daarul Atqiya - Student Registration Page
 * Built with: Next.js (App Router compatible), TypeScript, Tailwind CSS, Framer Motion.
 * Features: Multi-step form progress, responsive sidebar, and production-ready structure.
 */

const RegistrationPage: React.FC = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 }
        }
    };



    return (
        <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen flex flex-col font-['Plus_Jakarta_Sans']">


            {/* TopNavBar */}
            <header className="bg-white/95 dark:bg-emerald-950/95 backdrop-blur-md sticky top-0 z-50 border-b border-emerald-100 dark:border-emerald-800/50 shadow-sm shadow-emerald-900/5">
                <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-900 dark:text-emerald-50 text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            mosque
                        </span>
                        <span className="text-xl font-bold tracking-tighter text-emerald-900 dark:text-emerald-50 uppercase">
                            Daarul Atqiya
                        </span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        {['Beranda', 'Program', 'Info'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-sm font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors py-2 px-3 rounded-md hover:bg-emerald-50/50 active:scale-95 duration-200"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#"
                            className="text-sm font-bold tracking-tight text-emerald-700 dark:text-emerald-400 border-b-2 border-emerald-700 dark:border-emerald-400 pb-1 py-2 px-3 active:scale-95 duration-200"
                        >
                            Pendaftaran
                        </a>
                    </nav>
                    <button className="text-sm font-medium tracking-tight text-emerald-900 dark:text-emerald-50 border border-emerald-200 dark:border-emerald-800 px-4 py-2 rounded-md hover:bg-emerald-50/50 transition-all active:scale-95 duration-200 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">login</span>
                        Login/Status
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 relative z-10">
                {/* Decorative Header Background */}
                <div aria-hidden="true" className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#d3e4fe]/30 to-[#f8f9ff] -z-10" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="mb-12"
                >
                    <h1 className="text-[40px] leading-[1.2] font-bold text-[#0b1c30] mb-3">Pendaftaran Santri Baru</h1>
                    <p className="text-[18px] leading-[1.6] text-[#404944] max-w-2xl">
                        Lengkapi data di bawah ini dengan seksama. Informasi yang akurat akan memperlancar proses seleksi dan administrasi di Pondok Pesantren Daarul Atqiya.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
                    {/* Sidebar: Progress & Info */}
                    <aside className="hidden lg:flex flex-col gap-6 sticky top-32">
                        <div className="bg-white rounded-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] border border-[#bfc9c3]/30 p-6 relative overflow-hidden">
                            {/* Heritage Pattern */}
                            <div
                                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{
                                    backgroundImage: 'radial-gradient(#064e3b 0.5px, transparent 0.5px), radial-gradient(#064e3b 0.5px, #ffffff 0.5px)',
                                    backgroundSize: '20px 20px',
                                    backgroundPosition: '0 0, 10px 10px'
                                }}
                            />
                            <h3 className="text-[24px] font-semibold text-[#0b1c30] mb-6 relative z-10">Proses Pendaftaran</h3>

                            <div className="flex flex-col gap-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#cca72f] text-white flex items-center justify-center text-sm font-semibold shrink-0">1</div>
                                    <span className="text-sm font-semibold text-[#0b1c30]">Data Santri</span>
                                </div>
                                <div className="w-0.5 h-6 bg-[#bfc9c3]/50 ml-4" />
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#d3e4fe] text-[#404944] border border-[#bfc9c3]/50 flex items-center justify-center text-sm font-semibold shrink-0">2</div>
                                    <span className="text-base text-[#404944]">Data Orang Tua</span>
                                </div>
                                <div className="w-0.5 h-6 bg-[#bfc9c3]/50 ml-4" />
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#d3e4fe] text-[#404944] border border-[#bfc9c3]/50 flex items-center justify-center text-sm font-semibold shrink-0">3</div>
                                    <span className="text-base text-[#404944]">Upload Dokumen</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#bfc9c3]/30 relative z-10">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-semibold text-[#404944]">Penyelesaian</span>
                                    <span className="text-sm font-semibold text-[#003527]">33%</span>
                                </div>
                                <div className="w-full bg-[#d3e4fe] rounded-full h-1.5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '33%' }}
                                        className="bg-[#003527] h-1.5 rounded-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#eff4ff] rounded-xl p-6 border border-[#bfc9c3]/20">
                            <div className="flex items-start gap-3 text-[#404944]">
                                <span className="material-symbols-outlined text-[#003527]">info</span>
                                <div>
                                    <span className="text-sm font-semibold block text-[#0b1c30] mb-1">Butuh Bantuan?</span>
                                    <span className="text-sm leading-relaxed">Jika Anda mengalami kendala saat mengisi formulir, silakan hubungi tim administrasi kami.</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Form Container */}
                    <div className="bg-white rounded-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] border border-[#bfc9c3]/30 overflow-hidden w-full max-w-[800px] mx-auto">
                        {/* Horizontal Stepper (Mobile & Main view) */}
                        <div className="bg-[#eff4ff] border-b border-[#bfc9c3]/30 p-6 md:px-12 flex justify-between items-center relative">
                            <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-[#bfc9c3]/40 -translate-y-1/2 z-0 hidden sm:block" />

                            {/* Step 1: Active */}
                            <div className="flex flex-col items-center gap-2 relative z-10 bg-[#eff4ff] px-2">
                                <div className="w-10 h-10 rounded-full bg-[#cca72f] text-white flex items-center justify-center text-sm font-semibold shadow-sm ring-4 ring-[#eff4ff]">1</div>
                                <span className="text-sm font-semibold text-[#0b1c30] whitespace-nowrap">Data Santri</span>
                            </div>
                            {/* Step 2: Pending */}
                            <div className="flex flex-col items-center gap-2 relative z-10 bg-[#eff4ff] px-2 opacity-60">
                                <div className="w-10 h-10 rounded-full bg-white text-[#404944] border-2 border-[#bfc9c3] flex items-center justify-center text-sm font-semibold ring-4 ring-[#eff4ff]">2</div>
                                <span className="text-sm font-semibold text-[#0b1c30] whitespace-nowrap hidden sm:block">Data Orang Tua</span>
                            </div>
                            {/* Step 3: Pending */}
                            <div className="flex flex-col items-center gap-2 relative z-10 bg-[#eff4ff] px-2 opacity-60">
                                <div className="w-10 h-10 rounded-full bg-white text-[#404944] border-2 border-[#bfc9c3] flex items-center justify-center text-sm font-semibold ring-4 ring-[#eff4ff]">3</div>
                                <span className="text-sm font-semibold text-[#0b1c30] whitespace-nowrap hidden sm:block">Upload Dokumen</span>
                            </div>
                        </div>

                        {/* Form Canvas */}
                        <form className="p-6 md:p-12">
                            <div className="mb-8 border-b border-[#bfc9c3]/30 pb-4">
                                <h2 className="text-[32px] font-semibold text-[#0b1c30] mb-2">Informasi Pribadi Santri</h2>
                                <p className="text-base text-[#404944]">Pastikan data yang dimasukkan sesuai dengan dokumen resmi (Kartu Keluarga/Akte Kelahiran).</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8">
                                {/* NIK Field */}
                                <div className="md:col-span-2">
                                    <label className="text-sm font-semibold text-[#0b1c30] block mb-2" htmlFor="nik">Nomor Induk Kependudukan (NIK)</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#404944] pointer-events-none">badge</span>
                                        <input
                                            className="w-full bg-white border border-[#bfc9c3] text-[#0b1c30] rounded-md px-4 py-3 pl-12 focus:border-[#003527] focus:ring-1 focus:ring-[#003527] outline-none transition-colors text-base shadow-sm"
                                            id="nik"
                                            placeholder="Masukkan 16 digit NIK"
                                            type="text"
                                        />
                                    </div>
                                    <span className="text-sm text-[#404944] block mt-1">NIK dapat dilihat pada Kartu Keluarga.</span>
                                </div>

                                {/* Full Name Field */}
                                <div className="md:col-span-2">
                                    <label className="text-sm font-semibold text-[#0b1c30] block mb-2" htmlFor="fullName">Nama Lengkap</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#404944] pointer-events-none">person</span>
                                        <input
                                            className="w-full bg-white border border-[#bfc9c3] text-[#0b1c30] rounded-md px-4 py-3 pl-12 focus:border-[#003527] focus:ring-1 focus:ring-[#003527] outline-none transition-colors text-base shadow-sm"
                                            id="fullName"
                                            placeholder="Sesuai Akte Kelahiran"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                {/* Birth Details */}
                                <div>
                                    <label className="text-sm font-semibold text-[#0b1c30] block mb-2" htmlFor="birthPlace">Tempat Lahir</label>
                                    <input
                                        className="w-full bg-white border border-[#bfc9c3] text-[#0b1c30] rounded-md px-4 py-3 focus:border-[#003527] focus:ring-1 focus:ring-[#003527] outline-none transition-colors text-base shadow-sm"
                                        id="birthPlace"
                                        placeholder="Kota/Kabupaten"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-semibold text-[#0b1c30] block mb-2" htmlFor="birthDate">Tanggal Lahir</label>
                                    <input
                                        className="w-full bg-white border border-[#bfc9c3] text-[#0b1c30] rounded-md px-4 py-3 focus:border-[#003527] focus:ring-1 focus:ring-[#003527] outline-none transition-colors text-base shadow-sm appearance-none"
                                        id="birthDate"
                                        type="date"
                                    />
                                </div>

                                {/* Previous School */}
                                <div className="md:col-span-2">
                                    <label className="text-sm font-semibold text-[#0b1c30] block mb-2" htmlFor="prevSchool">Asal Sekolah (SD/MI)</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#404944] pointer-events-none">school</span>
                                        <input
                                            className="w-full bg-white border border-[#bfc9c3] text-[#0b1c30] rounded-md px-4 py-3 pl-12 focus:border-[#003527] focus:ring-1 focus:ring-[#003527] outline-none transition-colors text-base shadow-sm"
                                            id="prevSchool"
                                            placeholder="Nama Sekolah Asal"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Divider */}
                            <div className="my-10 h-10 w-full flex items-center justify-center opacity-40">
                                <div className="w-full border-t border-dashed border-[#bfc9c3]" />
                                <span className="material-symbols-outlined text-[#707974] mx-4">diamond</span>
                                <div className="w-full border-t border-dashed border-[#bfc9c3]" />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-end gap-4 pt-4">
                                <button
                                    type="button"
                                    className="text-sm font-semibold text-[#003527] bg-transparent border border-[#003527] px-6 py-3 rounded-md hover:bg-[#d3e4fe] transition-colors focus:ring-2 focus:ring-[#003527] outline-none active:scale-95"
                                >
                                    Simpan Draft
                                </button>
                                <button
                                    type="button"
                                    className="text-sm font-semibold text-white bg-[#003527] px-8 py-3 rounded-md hover:shadow-md hover:bg-[#064e3b] transition-all flex items-center gap-2 focus:ring-2 focus:ring-[#003527] focus:ring-offset-2 outline-none active:scale-95"
                                >
                                    Selanjutnya
                                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-emerald-900 dark:bg-black w-full pt-12 pb-8 border-t border-emerald-800 dark:border-zinc-800 mt-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto w-full">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-lg font-extrabold text-white mb-4 block">Daarul Atqiya</span>
                        <p className="text-sm leading-relaxed text-emerald-50 mb-6 max-w-md">
                            © 2024 Pondok Pesantren Daarul Atqiya. Mendidik dengan Adab dan Ilmu.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-bold text-white mb-4">Navigasi</h4>
                        <ul className="space-y-2">
                            {['Beranda', 'Program', 'Info'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-sm leading-relaxed text-emerald-200/70 hover:text-white transition-all hover:translate-x-1 inline-block">
                                        {link}
                                    </a>
                                </li>
                            ))}
                            <li><a href="#" className="text-sm leading-relaxed text-white underline decoration-emerald-500 hover:translate-x-1 transition-all inline-block">Pendaftaran</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-bold text-white mb-4">Bantuan</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm leading-relaxed text-emerald-200/70 hover:text-white transition-all hover:translate-x-1 inline-block">Hubungi Kami</a></li>
                            <li><a href="#" className="text-sm leading-relaxed text-emerald-200/70 hover:text-white transition-all hover:translate-x-1 inline-block">Kebijakan Privasi</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default RegistrationPage;