import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const nameLetters = "ALEX NEXUS".split("");

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambient Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[150px]"
        />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-4"
      >
        <div className="flex justify-center mb-4 overflow-hidden">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.05,
                ease: [0.33, 1, 0.68, 1] 
              }}
              className="text-6xl md:text-9xl font-bold tracking-tighter text-white inline-block"
              style={{ minWidth: letter === " " ? "0.3em" : "auto" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-400 font-light tracking-widest uppercase mb-12"
        >
          I build digital experiences that feel <span className="text-neon-cyan italic">alive</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex gap-4 justify-center"
        >
          <button className="px-8 py-3 glass rounded-full hover:bg-neon-cyan hover:text-black transition-all duration-300 font-medium tracking-tight">
            View Projects
          </button>
          <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-tight">
            About Me
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest font-mono text-neon-cyan">Scroll to Explore</span>
        <ChevronDown size={20} className="text-neon-cyan" />
      </motion.div>
    </section>
  );
}
