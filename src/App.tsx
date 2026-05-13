/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/layout/Navbar.tsx';
import Hero from './components/sections/Hero.tsx';
import About from './components/sections/About.tsx';
import Skills from './components/sections/Skills.tsx';
import Projects from './components/sections/Projects.tsx';
import Experience from './components/sections/Experience.tsx';
import Contact from './components/sections/Contact.tsx';
import CustomCursor from './components/common/CustomCursor.tsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-black min-h-screen">
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-[999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <CustomCursor />
      <Navbar />

      <Hero />
      
      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="experience" className="bg-white/5">
        <Experience />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <footer className="py-12 border-t border-white/10 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500">
          © 2024 Nexus Portfolio — Designed for the Future
        </p>
      </footer>
    </main>
  );
}

