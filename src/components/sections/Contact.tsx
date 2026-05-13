import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20">
        <div>
           <h2 className="text-sm uppercase tracking-[0.3em] text-neon-pink mb-4 block font-mono">/ Connect</h2>
           <h3 className="text-6xl font-bold mb-8">Let's build the <span className="text-neon-pink">future</span> together.</h3>
           <p className="text-lg text-gray-500 mb-12 leading-relaxed">
             Open for interesting projects, partnerships, or just to say hello. My inbox is always open.
           </p>

           <div className="space-y-6">
             <div className="flex items-center gap-6 group cursor-pointer">
               <div className="p-4 glass rounded-2xl group-hover:bg-neon-pink group-hover:text-black transition-all">
                 <Mail size={24} />
               </div>
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Email Me</p>
                  <p className="text-xl font-bold">hello@nexus.portfolio</p>
               </div>
             </div>
             <div className="flex items-center gap-6 group cursor-pointer">
               <div className="p-4 glass rounded-2xl group-hover:bg-neon-cyan group-hover:text-black transition-all">
                 <MapPin size={24} />
               </div>
               <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Location</p>
                  <p className="text-xl font-bold">New York, NY / Remote</p>
               </div>
             </div>
           </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl relative"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 px-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-pink transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 px-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-pink transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 px-1">Message</label>
              <textarea 
                rows={5} 
                placeholder="Tell me about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-neon-pink transition-all resize-none"
              />
            </div>

            <button className="w-full py-4 bg-neon-pink text-black font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
               Transmit Message <Send size={18} />
            </button>
          </form>

          {/* Glow effect */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-pink/20 rounded-full blur-[60px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
