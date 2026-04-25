import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Moon, Sun, Download, Mail,
  GraduationCap, Briefcase, FolderCheck, MonitorPlay,
  Code2, Component, Flame, FileCode2, TerminalSquare, Database, LayoutTemplate
} from 'lucide-react';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#fafbfe] text-gray-800'}`}>
      
      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className={`flex items-center gap-8 px-6 py-3 rounded-full shadow-lg backdrop-blur-md ${darkMode ? 'bg-gray-800/80 shadow-black/20' : 'bg-white/80 shadow-gray-200/50'}`}>
          <div className="font-bold text-lg"><span className="text-gray-900 dark:text-white">Portfolio</span><span className="text-[#ff782d]">.</span></div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-300">
            <a href="#home" className="text-[#ff782d] border-b-2 border-[#ff782d] pb-1">Home</a>
            <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="bg-[#ff782d] hover:bg-[#e66a26] text-white px-5 py-2 rounded-full text-sm font-medium transition shadow-md shadow-[#ff782d]/30">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-[80vh] flex flex-col md:flex-row items-center gap-12 pt-10">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn}
            className="flex-1 space-y-6"
          >
            <div className="flex gap-4">
              <a href="#" className="p-2.5 rounded-xl bg-pink-100 text-pink-600 hover:bg-pink-200 transition"><div className="font-bold">IG</div></a>
              <a href="#" className="p-2.5 rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white transition"><div className="font-bold">TK</div></a>
              <a href="#" className="p-2.5 rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white transition"><div className="font-bold">GH</div></a>
              <a href="#" className="p-2.5 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition"><div className="font-bold">YT</div></a>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-gray-900 dark:text-white">QualiCode</span>
            </h1>
            
            <p className="text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error quasi est labore? Laborum hic commodi architecto ex eligendi quasi. Accusantium provident ipsa illum!
            </p>
            
            <div className="flex gap-4 pt-2">
              <button className="flex items-center gap-2 bg-[#ff782d] hover:bg-[#e66a26] text-white px-6 py-3 rounded-full font-medium transition shadow-xl shadow-[#ff782d]/20">
                <Download size={18} /> Download CV
              </button>
              <button className="flex items-center gap-2 bg-transparent hover:bg-gray-50 border-2 border-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-full font-medium transition">
                <Mail size={18} /> Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
            className="flex-1 relative hidden md:block"
          >
            {/* Visual Placeholder mimicking the 3D illustration */}
            <div className="relative w-[450px] h-[500px] mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-[80px] -z-10" />
              <div className="w-full h-full object-cover">
                {/* Simulated 3D Girl Placeholder using clean stylized generic visual */}
                <div className="w-full h-full bg-[#fcece1] dark:bg-gray-800 rounded-3xl overflow-hidden relative shadow-2xl">
                     <div className="absolute top-10 left-10 p-3 bg-white dark:bg-gray-700 rounded-2xl shadow-xl floating-slow"><span className="text-2xl font-bold text-pink-500">Hi</span></div>
                     <div className="absolute top-20 right-10 p-3 bg-white dark:bg-gray-700 rounded-2xl shadow-xl floating-fast"><span className="text-2xl font-bold text-orange-500">Ai</span></div>
                     <div className="absolute bottom-20 right-12 p-3 bg-white dark:bg-gray-700 rounded-2xl shadow-xl floating-slow"><span className="text-2xl font-bold text-purple-600">Pr</span></div>
                     <div className="absolute bottom-10 left-10 w-24 h-16 bg-white dark:bg-gray-700 rounded-lg shadow-xl floating-slow flex flex-col pt-1 px-1"><div className="h-2 w-full bg-blue-100 rounded-sm mb-1"/><div className="flex-1 bg-gray-100 rounded-sm"/></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 w-48 h-32 rounded-xl border-b-8 border-gray-900 flex justify-center items-center text-white"><Code2 size={40}/></div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- About Me Section --- */}
        <section id="about" className="py-24 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="flex-1 hidden md:block"
          >
             {/* About Illustration Placeholder */}
             <div className="relative w-full aspect-square max-w-[400px] mx-auto bg-gradient-to-br from-[#ffedc2] to-[#ffb17a] dark:from-gray-800 dark:to-gray-700 rounded-full shrink-0 flex items-center justify-center p-8 shadow-xl">
                 <div className="bg-white dark:bg-gray-600 w-full h-[60%] rounded-2xl shadow-2xl relative flex items-center justify-center">
                    <MonitorPlay size={60} className="text-orange-400" />
                    <div className="absolute -right-6 top-10 bg-yellow-400 font-bold p-3 rounded-xl shadow-lg rotate-12">JS</div>
                 </div>
             </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="flex-1 space-y-8"
          >
            <h2 className="text-4xl font-bold">About <span className="text-[#ff782d]">Me</span></h2>
            
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100/80'} text-gray-600 dark:text-gray-300 leading-relaxed shadow-sm`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut aperiam quia dignissimos corrupti, hic fugit, eveniet reprehenderit possimus voluptatum tenetur provident consequatur itaque id rerum? Quo quaerat ab deserunt.
            </div>

            <div className="grid grid-cols-3 gap-6 pt-2">
              <div className="text-center">
                <div className="flex items-center justify-center text-[#ff782d] font-bold text-2xl mb-2"><GraduationCap className="mr-2" size={24}/> 5+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Education</div>
              </div>
              <div className="text-center border-l border-r border-gray-200 dark:border-gray-700">
                 <div className="flex items-center justify-center text-[#ff782d] font-bold text-2xl mb-2"><Briefcase className="mr-2" size={20}/> 10+</div>
                 <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                 <div className="flex items-center justify-center text-[#ff782d] font-bold text-2xl mb-2"><FolderCheck className="mr-2" size={22}/> 100+</div>
                 <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Projects Completed</div>
              </div>
            </div>

            <button className="border-2 border-[#ff782d] text-[#ff782d] hover:bg-[#ff782d] hover:text-white px-8 py-2.5 rounded-full font-medium transition duration-300">
              Learn More
            </button>
          </motion.div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-24 text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
             <h2 className="text-3xl font-bold mb-3">My <span className="text-[#ff782d]">Skills</span></h2>
             <p className="text-gray-500 dark:text-gray-400 mb-12 text-sm max-w-lg mx-auto">Technologies and tools I work with to create amazing web experiences</p>
           </motion.div>

           <motion.div 
             variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
             className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
           >
              {[
                { name: 'Laravel', icon: <Flame className="text-red-500 pt-1" size={32}/>, val: 95, color: 'bg-red-500' },
                { name: 'Framer Motion', icon: <motion.div className="flex pt-1"><div className="w-4 h-4 bg-purple-500 rounded-full mr-1"/><div className="w-4 h-4 bg-pink-500 rounded-sm"/></motion.div>, val: 90, color: 'bg-indigo-500' },
                { name: 'Vue', icon: <div className="text-emerald-500 font-bold text-xl pt-1 tracking-tighter cursor-default">V</div>, val: 88, color: 'bg-emerald-500' },
                { name: 'React', icon: <Component className="text-blue-400 pt-1" size={32}/>, val: 85, color: 'bg-blue-400' },
                { name: 'Tailwind CSS', icon: <LayoutTemplate className="text-sky-400 pt-1" size={32}/>, val: 92, color: 'bg-sky-400' },
                { name: 'Firebase', icon: <Database className="text-yellow-500 pt-1" size={32}/>, val: 80, color: 'bg-yellow-500' },
                { name: 'Python', icon: <TerminalSquare className="text-blue-600 pt-1" size={32}/>, val: 75, color: 'bg-blue-600' },
                { name: 'Vite', icon: <FileCode2 className="text-purple-500 pt-1" size={32}/>, val: 86, color: 'bg-purple-500' },
              ].map((skill, i) => (
                <motion.div key={i} variants={fadeIn} className={`p-6 rounded-2xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} shadow-sm hover:shadow-md transition-shadow`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700 flex flex-col justify-center items-center shadow-inner">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-gray-800 dark:text-gray-100">{skill.name}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-gray-500">Proficiency</span>
                    <span className="font-bold text-[13px] text-[#ff782d]">{skill.val}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden flex">
                    <motion.div 
                      initial={{ width: 0 }} whileInView={{ width: `${skill.val}%` }} transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full ${skill.color} rounded-full`} 
                    />
                  </div>
                  {/* Small decorative accent below */}
                  <div className="mt-3 w-8 h-1 bg-yellow-400 rounded-full opacity-60"></div>
                </motion.div>
              ))}
           </motion.div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-24 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-3">My <span className="text-[#ff782d]">Projects</span></h2>
              <p className="text-gray-500 dark:text-gray-400 mb-12 text-sm max-w-lg mx-auto">A showcase of my recent work</p>
            </motion.div>

            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
               {[1,2,3].map((item) => (
                 <motion.div key={item} variants={fadeIn} className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative flex flex-col border-b border-gray-100 dark:border-gray-800">
                       {/* Abstract project mockup representation */}
                       <div className="w-full h-8 bg-gray-300 dark:bg-gray-800 flex items-center px-3 gap-1.5 border-b border-gray-400 dark:border-gray-600">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                       </div>
                       <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-600 p-4 relative overflow-hidden">
                          <div className="w-3/4 h-32 bg-white dark:bg-gray-900 rounded shadow-md mx-auto mt-4 p-2">
                             <div className="w-1/2 h-2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                             <div className="w-full h-16 bg-gray-100 dark:bg-gray-800 rounded"></div>
                          </div>
                       </div>
                    </div>
                    <div className={`p-5 text-left ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-[#ff782d] transition-colors">E-Commerce Dashboard {item}</h3>
                      <p className="text-gray-500 text-sm mb-4">A complete admin panel to manage products, users, and orders effortlessly.</p>
                      <div className="flex gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ff782d]/10 text-[#ff782d]">React</span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-600">Tailwind</span>
                      </div>
                    </div>
                 </motion.div>
               ))}
            </motion.div>
        </section>

      </main>
      
      {/* Footer minimal */}
      <footer className={`py-8 text-center text-sm border-t ${darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
         © 2024 QualiCode. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
