"use client";
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ExternalLink, Code2, Brain, Database, Layers, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  
  // --- DATA: YOUR PROJECTS ---
  const projects = [
    {
      title: "AgriDoctor Pro",
      category: "Multi-Model AI Platform",
      desc: "A precision agriculture dashboard combining Computer Vision (Dr. Plant), Tabular ML (Smart Lab), and Generative AI (Llama 3 Consultant) to empower Moroccan farmers.",
      stack: ["Next.js", "FastAPI", "TensorFlow", "Groq API"],
      link: "https://agridoctorpro.vercel.app/",
      color: "bg-emerald-100 text-emerald-800",
      border: "border-emerald-200"
    },
    {
      title: "PixelRevive AI",
      category: "Computer Vision",
      desc: "Deep Learning application that restores and colorizes historical black & white photos using a CNN trained on 1M+ images (Zhang et al. architecture).",
      stack: ["Python", "OpenCV", "Deep Learning", "Next.js"],
      link: "https://pixelreviveai.vercel.app/",
      color: "bg-indigo-100 text-indigo-800",
      border: "border-indigo-200"
    },
    {
      title: "CoinMind",
      category: "FinTech & ML",
      desc: "Real-time cryptocurrency analysis tool featuring a 'Time Machine' predictor that uses Linear Regression to forecast Bitcoin trends.",
      stack: ["Scikit-Learn", "Coingecko API", "Chart.js", "React"],
      link: "https://coinmindai.vercel.app/",
      color: "bg-amber-100 text-amber-800",
      border: "border-amber-200"
    }
  ];

  const minorProjects = [
    { title: "Currency Converter", link: "https://currency-converter-ten-indol.vercel.app/" },
    { title: "AI GitHub Search", link: "https://github.com/Zakaria-ElAlami/AIProjectTest" }
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200">
      <Head>
        <title>Zakaria El Alami | AI Engineer</title>
        <meta name="description" content="Portfolio of Zakaria El Alami - Full Stack AI Developer" />
      </Head>

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-3xl"
        >
          <div className="mb-8 relative inline-block">
             {/* PHOTO FIX: Now points to /me.jpeg (matches your file) */}
             <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto relative z-10">
                <img 
                  src="/me.jpeg" 
                  alt="Zakaria El Alami" 
                  className="w-full h-full object-cover object-center" 
                />
             </div>
             <div className="absolute inset-0 bg-stone-200 rounded-full blur-md -z-10 scale-110"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-stone-900">
            Zakaria <span className="text-stone-400">El Alami</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-500 mb-8 font-light">
            Computer Science Undergraduate & AI Enthusiast
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="bg-stone-900 text-white px-8 py-3 rounded-full font-bold hover:bg-stone-800 transition shadow-lg hover:shadow-xl flex items-center gap-2">
              <Code2 size={20}/> View My Work
            </a>
            <a href="/resume.pdf" target="_blank" className="bg-white text-stone-900 border border-stone-200 px-8 py-3 rounded-full font-bold hover:bg-stone-50 transition shadow-sm hover:shadow-md flex items-center gap-2">
              <FileText size={20}/> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }} 
           animate={{ opacity: 1 }} 
           transition={{ delay: 1, duration: 1 }}
           className="absolute bottom-10 animate-bounce text-stone-400"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px bg-stone-200 flex-1"></span>
            <span className="uppercase text-xs font-bold tracking-widest text-stone-400">About Me</span>
            <span className="h-px bg-stone-200 flex-1"></span>
          </div>
          
          <p className="text-xl md:text-2xl leading-relaxed text-stone-700 text-center font-light">
            I am a passionate developer from <span className="font-semibold text-stone-900">Kenitra, Morocco</span>, dedicated to building intelligent web applications. 
            Currently a Computer Science undergraduate at <span className="font-semibold text-stone-900">Ibn Tofail University</span>, 
            I specialize in merging <span className="bg-emerald-100 px-2 py-0.5 rounded">AI Algorithms</span> with <span className="bg-indigo-100 px-2 py-0.5 rounded">Modern Web Design</span>.
            My goal is to solve real-world problems—from precision agriculture to financial forecasting—using code.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
             <SkillItem icon={<Brain size={32} className="text-purple-500"/>} title="AI & ML" desc="TensorFlow, Scikit-Learn" />
             <SkillItem icon={<Code2 size={32} className="text-blue-500"/>} title="Frontend" desc="React, Next.js, Tailwind" />
             <SkillItem icon={<Database size={32} className="text-emerald-500"/>} title="Backend" desc="Python, FastAPI, SQL" />
             <SkillItem icon={<Layers size={32} className="text-amber-500"/>} title="Languages" desc="Arabic, English, French, German" />
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 border ${project.border} flex flex-col h-full`}
              >
                <div className={`w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${project.color}`}>
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-stone-500 leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-medium text-stone-400 bg-stone-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} target="_blank" className="w-full block text-center py-3 rounded-xl border border-stone-200 font-bold hover:bg-stone-900 hover:text-white hover:border-stone-900 transition flex items-center justify-center gap-2">
                  Live Demo <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Minor Projects */}
          <div className="mt-16 text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-6">Other Experiments</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {minorProjects.map((p, i) => (
                <a key={i} href={p.link} target="_blank" className="bg-white border border-stone-200 px-6 py-2 rounded-full text-sm font-medium hover:border-stone-400 transition flex items-center gap-2">
                  {p.title} <ExternalLink size={12}/>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Build Something Amazing.</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            I am currently open to freelance projects and internships. Feel free to reach out if you want to collaborate on AI or Web Development.
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <SocialLink href="mailto:zakariaeacontact@gmail.com" icon={<Mail size={24}/>} label="Email" />
            <SocialLink href="https://www.linkedin.com/in/zakaria-el-alami-112042237" icon={<Linkedin size={24}/>} label="LinkedIn" />
            <SocialLink href="https://github.com/Zakaria-ElAlami" icon={<Github size={24}/>} label="GitHub" />
          </div>
          
          <div className="border-t border-stone-800 pt-8 text-stone-600 text-sm">
            <p>© 2025 Zakaria El Alami. All Rights Reserved.</p>
            <p className="mt-2">Kenitra, Morocco • +212 708 179 847</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Helper Components
function SkillItem({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 p-4 bg-stone-50 rounded-2xl">{icon}</div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-sm text-stone-500">{desc}</p>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a href={href} target="_blank" className="flex flex-col items-center gap-2 group">
      <div className="p-3 bg-stone-800 rounded-full group-hover:bg-white group-hover:text-stone-900 transition duration-300">
        {icon}
      </div>
      <span className="text-xs text-stone-500 opacity-0 group-hover:opacity-100 transition">{label}</span>
    </a>
  );
}