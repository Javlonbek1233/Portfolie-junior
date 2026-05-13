import { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="group cursor-pointer">
          <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-1">
            <span className="text-neon-cyan group-hover:rotate-12 transition-transform inline-block">N</span>
            <span>EXUS</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-widest font-mono text-gray-400 hover:text-neon-cyan transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan transition-all group-hover:w-full" />
            </a>
          ))}
          <button className="px-6 py-2 glass rounded-full text-xs uppercase tracking-widest font-bold hover:bg-neon-cyan hover:text-black transition-all">
            Resume
          </button>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-neon-cyan z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
        className="fixed inset-0 bg-black z-[90] flex flex-col items-center justify-center gap-8"
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-bold hover:text-neon-cyan transition-colors"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
}
