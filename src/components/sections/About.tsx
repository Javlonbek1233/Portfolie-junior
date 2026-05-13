import { motion } from 'motion/react';
import { Cpu, Rocket, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="py-32 px-4 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] glass p-1">
             {/* Abstract avatar placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 via-black to-neon-cyan/20 flex items-center justify-center">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 border-2 border-dashed border-neon-cyan/30 rounded-full"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-32 h-32 border-2 border-dotted border-neon-purple/30 rounded-full"
                />
                <Globe className="w-20 h-20 text-white/80 absolute" />
            </div>
          </div>
          
          {/* Floating stats */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 glass p-6 rounded-2xl z-20"
          >
            <p className="text-3xl font-bold text-neon-cyan">5+</p>
            <p className="text-[10px] uppercase tracking-tighter text-gray-400">Years Experience</p>
          </motion.div>
          
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl z-20"
          >
            <p className="text-3xl font-bold text-neon-purple">40+</p>
            <p className="text-[10px] uppercase tracking-tighter text-gray-400">Projects Delivered</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-neon-cyan mb-6 block font-mono">
            / Engineering for the future
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            I craft digital products that merge <span className="text-neon-purple">art</span> with technology.
          </h3>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed font-light">
            My journey began at the intersection of design and code. I believe that every line of code is an opportunity to create something beautiful, intuitive, and high-performing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="p-3 glass rounded-xl h-fit">
                <Cpu className="text-neon-cyan" size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-2">Technical Rigor</h4>
                <p className="text-sm text-gray-500">Writing clean, scalable, and efficient code is my baseline.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 glass rounded-xl h-fit">
                <Rocket className="text-neon-purple" size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-2">High Performance</h4>
                <p className="text-sm text-gray-500">Buttery smooth 60fps animations and fast load times.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
