import React from 'react';
import { motion } from 'framer-motion';

/**
 * Pondok Pesantren Daarul Atqiya - Program Pendidikan Page
 * Converted to TypeScript/TSX using Vite & Tailwind CSS. [cite: 1, 2]
 */

// --- Shared Components ---

const Navbar: React.FC = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-emerald-100 bg-white/95 backdrop-blur-md transition-all dark:border-emerald-800/50 dark:bg-emerald-950/95 shadow-sm shadow-emerald-900/5">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2 text-xl font-bold uppercase tracking-tighter text-emerald-900 dark:text-emerald-50">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        local_library
                    </span>
                    Daarul Atqiya
                </div>
                <nav className="hidden items-center gap-8 md:flex">
                    <a className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-emerald-50/50 hover:text-emerald-800 active:scale-95 dark:text-slate-400 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-200" href="#">
                        Beranda
                    </a>
                    <a className="rounded-md border-b-2 border-emerald-700 px-3 py-2 text-sm font-bold text-emerald-700 transition-all hover:bg-emerald-50/50 active:scale-95 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/30" href="#">
                        Program
                    </a>
                    <a className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-emerald-50/50 hover:text-emerald-800 active:scale-95 dark:text-slate-400 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-200" href="#">
                        Info
                    </a>
                    <a className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-emerald-50/50 hover:text-emerald-800 active:scale-95 dark:text-slate-400 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-200" href="#">
                        Pendaftaran
                    </a>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="hidden items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-emerald-50/50 hover:text-emerald-800 active:scale-95 lg:flex dark:text-slate-400 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-200">
                        <span className="material-symbols-outlined">login</span>
                        Login/Status
                    </button>
                    <button className="text-emerald-900 md:hidden">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

// --- Page Content Components ---

const Hero: React.FC = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-3xl space-y-6"
            >
                <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                    Membentuk Generasi Beradab dan Berilmu
                </h1>
                <p className="text-lg leading-relaxed text-slate-600">
                    Kurikulum Daarul Atqiya dirancang untuk menyeimbangkan kedalaman spiritual melalui hafalan Al-Qur'an dan pemahaman komprehensif terhadap khazanah keilmuan Islam klasik. [cite: 2]
                </p>
            </motion.div>
        </section>
    );
};

const ProgramCard: React.FC<{ title: string; desc: string; img: string; points: string[] }> = ({ title, desc, img, points }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
        >
            <div className="h-64 overflow-hidden bg-slate-100">
                <img src={img} alt={title} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-grow flex-col p-8" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0, 53, 39, 0.03) 0%, transparent 70%)', backgroundSize: '100px 100px' }}>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>
                <p className="mb-6 flex-grow text-slate-600">{desc}</p>
                <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#003527]">Fokus Utama:</h4>
                    <ul className="space-y-2">
                        {points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                <span className="material-symbols-outlined text-[20px] text-[#cca72f]" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    verified
                                </span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

const TimelineItem: React.FC<{ time: string; title: string; desc: string }> = ({ time, title, desc }) => {
    return (
        <div className="group relative flex flex-col items-start justify-between md:flex-row md:items-center">
            <div className="hidden w-5/12 pr-12 text-right text-sm font-semibold text-[#003527] md:block">{time}</div>
            <div className="absolute left-[-33px] z-10 h-4 w-4 transform rounded-full border-2 border-[#003527] bg-white transition-colors group-hover:bg-[#003527] md:left-1/2 md:-translate-x-1/2"></div>
            <div className="mb-2 text-sm font-semibold text-[#003527] md:hidden">{time}</div>
            <div className="w-full md:w-5/12 md:pl-12">
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-900">{title}</h4>
                    <p className="mt-1 text-xs text-slate-500">{desc}</p>
                </div>
            </div>
        </div>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="mt-auto border-t border-emerald-800 bg-emerald-900 pb-8 pt-12 text-emerald-50 dark:bg-black dark:border-zinc-800">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-4">
                <div className="col-span-1 md:col-span-2">
                    <span className="mb-4 flex items-center gap-2 text-lg font-extrabold text-white">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                            local_library
                        </span>
                        Daarul Atqiya
                    </span>
                    <p className="mb-6 max-w-sm text-emerald-200/70">
                        Mendidik dengan Adab dan Ilmu. Lembaga pendidikan Islam yang berkomitmen mencetak generasi qur'ani yang faqih fiddin. [cite: 2]
                    </p>
                    <p className="text-xs text-emerald-50/50">
                        © 2024 Pondok Pesantren Daarul Atqiya.
                    </p>
                </div>
                <div>
                    <h4 className="mb-4 font-bold text-white">Navigasi</h4>
                    <ul className="space-y-3 text-sm text-emerald-200/70">
                        <li><a className="transition-colors hover:text-white" href="#">Beranda</a></li>
                        <li><a className="text-white underline decoration-emerald-500" href="#">Program</a></li>
                        <li><a className="transition-colors hover:text-white" href="#">Info</a></li>
                        <li><a className="transition-colors hover:text-white" href="#">Pendaftaran</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 font-bold text-white">Bantuan</h4>
                    <ul className="space-y-3 text-sm text-emerald-200/70">
                        <li><a className="transition-colors hover:text-white" href="#">Hubungi Kami</a></li>
                        <li><a className="transition-colors hover:text-white" href="#">Kebijakan Privasi</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

// --- Main Page Component ---

const ProgramPendidikan: React.FC = () => {
    return (
        <div className="flex min-h-screen flex-col bg-[#f8f9ff] font-['Plus_Jakarta_Sans'] antialiased">
            <Navbar />

            <main className="flex-grow pb-20 pt-24">
                <Hero />

                {/* Divider */}
                <div className="my-12 h-10 w-full opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(112, 121, 116, 0.05) 0px, rgba(112, 121, 116, 0.05) 2px, transparent 2px, transparent 8px)' }}></div>

                {/* Programs Section */}
                <section className="mx-auto max-w-7xl px-6 py-12">
                    <h2 className="mb-16 text-center text-3xl font-bold text-slate-900">Program Unggulan</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <ProgramCard
                            title="Program Tahfidz Al-Qur'an"
                            img="https://lh3.googleusercontent.com/aida-public/AB6AXuA9tyHqOv2fAUdAzgyxDDxmiwu5qTS2O__hk6J6Kuzasy_i3MvcmpAatWrORRsaYKpVdNUvli3sV1IT2cysN_h-TB9xM9tlo29wFtTOBYGaAjcJCLRhlfpHjjOT4t8cJJYAGuUOXJ2Fdh4QXfW1Nfunhso6Dmt33YMNbQTW4SjqRTSv7u9XSCzzRsV7632mtyNGYQXAlDbdNtpC1y0kzNaU1EwtBluvbLBgX0IexST1569KWzvaaN8qSTQVffnv7rfp_Zik44_2ooS3"
                            desc="Program intensif yang berfokus pada hafalan Al-Qur'an 30 Juz dengan tajwid yang bersanad, disertai pemahaman dasar makna ayat."
                            points={[
                                "Target hafalan terukur (Ziyadah & Muroja'ah)",
                                "Tahsin bersanad dengan metode komprehensif",
                                "Ujian tasmi' berkala untuk menjaga kualitas"
                            ]}
                        />
                        <ProgramCard
                            title="Program Kitab Kuning"
                            img="https://lh3.googleusercontent.com/aida-public/AB6AXuCP8DbuxarHgFxtJZ8QtoHWkl2mC8t1kkUxuLZnbkuraQ_jNwkT8W8y-74MavBmhAgGVTrb3NHdWhouDBJ3E2aebptli1J8oj0jfZEHt7PHcKNP5glc0ESmHn8To4436_k1p7NXtAD9EE9siMQJOJ1c1EUmn_IouiRbypLa6Re9Hh1scb7Sx5b4sSEQ7npPEXYwzBEcMQBBUBcMjkxDI9U0PB7dBCEd4wjpUteDZwuh_HbaVgaWy1e5oP-IXdbd80SD2ekCtHbEQ58G"
                            desc="Pengkajian mendalam terhadap literatur klasik Islam (Turots) mencakup Aqidah, Fiqih, Akhlaq, dan Bahasa Arab."
                            points={[
                                "Penguasaan Nahwu & Shorof (Gramatika Arab)",
                                "Kajian berjenjang dari kitab dasar hingga lanjutan",
                                "Diskusi aktif (Mudzakarah) untuk pendalaman"
                            ]}
                        />
                    </div>
                </section>

                {/* Divider */}
                <div className="my-12 h-10 w-full opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(112, 121, 116, 0.05) 0px, rgba(112, 121, 116, 0.05) 2px, transparent 2px, transparent 8px)' }}></div>

                {/* Daily Schedule Section */}
                <section className="mx-auto max-w-[800px] px-6 py-12">
                    <div className="mb-16 text-center">
                        <h2 className="mb-2 text-3xl font-bold text-slate-900">Jadwal Harian Santri</h2>
                        <p className="text-slate-500">Disiplin waktu adalah kunci keberkahan ilmu.</p>
                    </div>
                    <div className="relative ml-8 md:ml-0">
                        <div className="absolute bottom-0 left-0 top-0 w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2"></div>
                        <div className="space-y-10">
                            <TimelineItem time="04:00 - 05:00" title="Qiyamullail & Shalat Subuh" desc="Memulai hari dengan munajat dan jamaah." />
                            <TimelineItem time="05:30 - 07:00" title="Halaqah Tahfidz Pagi" desc="Ziyadah (tambah hafalan baru) dan setoran kepada Musyrif." />
                            <TimelineItem time="08:00 - 12:00" title="Sekolah & Dirasah Islamiyah" desc="Kajian kitab kuning dan pelajaran umum di kelas." />
                            <TimelineItem time="15:30 - 17:00" title="Shalat Ashar & Halaqah Sore" desc="Muroja'ah (pengulangan hafalan) bersama kelompok." />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mx-auto max-w-7xl px-6 py-20">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-16 text-center shadow-sm" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0, 53, 39, 0.03) 0%, transparent 70%)', backgroundSize: '100px 100px' }}>
                        <h2 className="mb-4 text-3xl font-bold text-slate-900">Siap Menjadi Bagian dari Daarul Atqiya?</h2>
                        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
                            Pendaftaran santri baru telah dibuka. Pelajari persyaratan dan tahapan pendaftaran untuk bergabung.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mx-auto flex items-center gap-2 rounded-full bg-[#003527] px-8 py-4 text-sm font-bold text-white shadow-md transition-all hover:opacity-90"
                        >
                            Informasi Pendaftaran
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </motion.button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProgramPendidikan;