import React from 'react';
import { motion } from 'framer-motion';

/**
 * Pondok Pesantren Daarul Atqiya - Landing Page
 * Re-written with TypeScript, Tailwind CSS, Vite Rules, and Framer Motion.
 */

// --- Components ---

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-emerald-100 bg-white/95 backdrop-blur-md dark:border-emerald-800/50 dark:bg-emerald-950/95 shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="text-xl font-bold uppercase tracking-tighter text-emerald-900 dark:text-emerald-50">
                    Daarul Atqiya
                </div>
                <div className="hidden space-x-6 text-sm font-medium tracking-tight md:flex">
                    <a className="rounded-md border-b-2 border-emerald-700 pb-1 font-bold text-emerald-700 transition-all active:scale-95 dark:border-emerald-400 dark:text-emerald-400" href="#">Beranda</a>
                    <a className="rounded-md text-slate-600 transition-all hover:bg-emerald-50/50 hover:text-emerald-800 active:scale-95 dark:text-slate-400 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-200" href="#">Program</a>
                    <a className="rounded-md text-slate-600 transition-all hover:bg-emerald-50/50 hover:text-emerald-800 active:scale-95 dark:text-slate-400 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-200" href="#">Info</a>
                    <a className="rounded-md text-slate-600 transition-all hover:bg-emerald-50/50 hover:text-emerald-800 active:scale-95 dark:text-slate-400 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-200" href="#">Pendaftaran</a>
                </div>
                <button className="rounded-full bg-[#003527] px-6 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95">
                    Login/Status
                </button>
            </div>
        </nav>
    );
};

const Hero: React.FC = () => {
    return (
        <header className="relative overflow-hidden bg-[#d3e4fe] pb-24 pt-32 md:pb-32 md:pt-48">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Pesantren Environment"
                    className="h-full w-full object-cover opacity-20"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Bq_Ht01Oop0A83PI6sxx1tffmkJO-_Tg5FI4rfB-SujlOxr8NnAad0PVhe_CKcnI-DG_o-SKay-J3YhosT5aQkCsl97oobezMEyw5IgchODYu0sBH7p50dsammCppY5IqinUs6ZcNpsEwMPMrbDKAEmiiaTX0CDD5D7V5pFFZQupXCyo8PEYwLJU5p0lfltGg6g8rOiEtXuQXEGtxQCKlEu7Ua8Zw_BZywDnCfsRIShqY_1AfhXBm7urB788LvQ4ufr55VKuQHVo"
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mx-auto max-w-7xl px-6 text-center"
            >
                <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-[#003527] md:text-5xl">
                    Mendidik dengan Adab dan Ilmu
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#404944]">
                    Membangun generasi rabbani yang unggul dalam pemahaman agama, berakhlak mulia, dan siap menghadapi tantangan zaman dengan pondasi iman yang kokoh.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="rounded-full bg-[#003527] px-8 py-4 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg">
                        Daftar Sekarang
                    </button>
                    <button className="rounded-full border border-[#003527] px-8 py-4 text-sm font-semibold text-[#003527] transition-colors duration-300 hover:bg-[#eff4ff]">
                        Pelajari Program
                    </button>
                </div>
            </motion.div>
        </header>
    );
};

const VisionMission: React.FC = () => {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Vision */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -30 }}
                        viewport={{ once: true }}
                        className="rounded-xl border border-[#e2e2e2] bg-white p-8 shadow-sm"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#064e3b] text-white">
                            <span className="material-symbols-outlined">visibility</span>
                        </div>
                        <h2 className="mb-4 text-3xl font-bold text-[#003527]">Visi Kami</h2>
                        <p className="leading-relaxed text-[#404944]">
                            Menjadi lembaga pendidikan Islam terkemuka yang melahirkan generasi hafal Al-Qur'an, faqih dalam ilmu agama, dan memiliki karakter kepemimpinan berbasis akhlakul karimah untuk kemaslahatan umat.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 30 }}
                        viewport={{ once: true }}
                        className="rounded-xl border border-[#e2e2e2] bg-white p-8 shadow-sm"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#cca72f] text-white">
                            <span className="material-symbols-outlined">flag</span>
                        </div>
                        <h2 className="mb-4 text-3xl font-bold text-[#003527]">Misi Kami</h2>
                        <ul className="space-y-4 text-[#404944]">
                            {[
                                "Menyelenggarakan program tahfidz Al-Qur'an bersanad.",
                                "Mengkaji kitab turats (kitab kuning) dengan metode sistematis.",
                                "Membina karakter santri melalui pembiasaan adab harian."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="material-symbols-outlined mr-2 mt-1 text-[20px] text-[#003527]">check_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const History: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-[#d3e4fe] py-20">
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#003527 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-6 text-3xl font-bold text-[#003527]">Sejarah Singkat</h2>
                    <div className="rounded-xl bg-white p-8 text-left shadow-sm">
                        <p className="mb-4 leading-relaxed text-[#404944]">
                            Didirikan pada tahun 2010 oleh KH. Ahmad Fulan, Pondok Pesantren Daarul Atqiya bermula dari sebuah majelis taklim kecil di pinggiran kota. Berangkat dari keprihatinan atas krisis moral generasi muda, majelis ini perlahan berkembang menjadi sebuah institusi pendidikan formal dan non-formal.
                        </p>
                        <p className="leading-relaxed text-[#404944]">
                            Kini, dengan luas lahan mencapai 5 hektar, Daarul Atqiya telah meluluskan ribuan santri yang tersebar di berbagai universitas terkemuka, baik di dalam maupun luar negeri, membawa nilai-nilai adab dan ilmu ke tengah masyarakat luas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Facilities: React.FC = () => {
    const facilities = [
        { title: "Gedung Tahfidz", desc: "Ruang kelas khusus hafalan Al-Qur'an dengan akustik optimal.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzsVyECAebAvuMhkJN_3PK0wVTJRjwOOztDAKHTJ8yoATm4vnp1UXWRM4fKMHF-MgeeZIB8OQb160-BSsMxX_DEEGygfvw-kZTl7kv-OOuDRnr0wt4tCEma-HhJCq4QogI6p7kDG0fWZiTa4vsb-_l8G9aQdjqF-eaecFE8ZXiXewH3DTVDBA1f2dzxumc6Wn9Y7LsBzWFHuUcHpLo95nJFtOw53dVCR_MY-X7qBh_M1ByKWYC6HNj0EmltWxvKBYi-sClGpPmK8vu" },
        { title: "Perpustakaan", desc: "Koleksi kitab kuning dan buku literatur modern lengkap.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCazy6OdIiu9OZwo_LaH5ub-_DtFY0eolRvXX5lDFgTBQT9WzLAr72WF3uVD5l48ufxXwvIxJZ0TSZDPIS9dd56QNWkx9Lu41Rh08mbLoUse1AD12W-42q13Bph82fJ9qyaAgMm91Ytl1Eny2ja73HTqyd0WXtN_-QLQ3zL-tDWmngi57MV3dcYXBLn72CyBG6qZZSNfQcLoy6hfGr92GjWm50xCWOPbSvk77S0_f00EbOumSTm6B6tKaC3P7KQDt7sNDY9_-uU_092" },
        { title: "Masjid Jami'", desc: "Pusat kegiatan ibadah dengan kapasitas hingga 2000 jamaah.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6WZ1_8wf8ZlaMZqA-lTlGgwr7e2WeSrIOU3GSQhsSVM-qhJh7aNv6eoTcPekk6V_MMPkU52neO2bIwYywjXPWib4eqWFLCYtzsaJcPOQKZYU3y4bjEJsV8ZNtTISW7ZZVmU7ewQWhRZxnXXI-hDyU9a4fKjweFz5Y7SABxhiehFJAa4ZcfsLjp69Ci1_8t1OI25s9ZXwQkFfxbGaOBXGcAGajUkiV3BbE1NHAQc4pKwo4aOnRa2EscgQYxec2sTmyMm5OjbRMINaW" },
        { title: "Asrama", desc: "Tempat tinggal santri yang nyaman, bersih, dan diawasi 24 jam.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_3fCVb7k77i13WdfxhEF8DOxMuakxChDalgANuXH_ENwyksBqe683qeMr4k8g0Lug22n3fH7ai5w-D-OeLZUYkaeFfU1YVelaGGbpIrrakkF2NSMgpZD26_iHfoxjTx1SGLdLYwcWGoIKdGQdr0VS8VPQu0HGuu6LXHOGiqy_jwLC4gOSVQuy9ZZIHuLT6UX5C0dp6IfOQQt_-Ub1gPYl1qizateO8TtfcQWrSwX2GevFO0qBrZp2gdZ2iiBfw7sBIet8gxaQaLvF" }
    ];

    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-[#003527]">Fasilitas Pondok</h2>
                    <p className="mx-auto max-w-2xl text-[#404944]">
                        Mendukung proses belajar mengajar dengan infrastruktur modern dan nyaman.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {facilities.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="overflow-hidden rounded-xl border border-[#e2e2e2] bg-white shadow-sm transition-all"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="mb-2 text-xl font-bold text-[#003527]">{item.title}</h3>
                                <p className="text-sm text-[#404944]">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-emerald-800 bg-emerald-900 pb-8 pt-12 text-emerald-50 dark:bg-black dark:border-zinc-800">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-4">
                <div className="col-span-1 md:col-span-2">
                    <span className="mb-4 block text-lg font-extrabold text-white">Daarul Atqiya</span>
                    <p className="max-w-sm text-emerald-200/70">
                        Membangun generasi rabbani yang unggul dalam pemahaman agama, berakhlak mulia, dan siap menghadapi tantangan zaman.
                    </p>
                </div>
                <div>
                    <h4 className="mb-4 font-bold text-white">Navigasi</h4>
                    <ul className="space-y-2 text-sm text-emerald-200/70">
                        <li><a className="transition-colors hover:text-white" href="#">Beranda</a></li>
                        <li><a className="transition-colors hover:text-white" href="#">Program</a></li>
                        <li><a className="transition-colors hover:text-white" href="#">Info</a></li>
                        <li><a className="transition-colors hover:text-white" href="#">Pendaftaran</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 font-bold text-white">Informasi</h4>
                    <ul className="space-y-2 text-sm text-emerald-200/70">
                        <li><a className="transition-colors hover:text-white" href="#">Hubungi Kami</a></li>
                        <li><a className="transition-colors hover:text-white" href="#">Kebijakan Privasi</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 border-t border-emerald-800/50 px-6 pt-8 text-center text-xs text-emerald-200/50">
                © 2026 Pondok Pesantren Daarul Atqiya. Mendidik dengan Adab dan Ilmu.
            </div>
        </footer>
    );
};

// --- Main Page ---

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#f8f9ff] font-['Plus_Jakarta_Sans'] antialiased">
            <Navbar />
            <main>
                <Hero />
                <VisionMission />
                <History />
                <Facilities />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;