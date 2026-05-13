import { motion } from 'motion/react';

const skills = [
  { name: "React", level: 95, color: "#00f2ff" },
  { name: "TypeScript", level: 90, color: "#bc13fe" },
  { name: "Next.js", level: 85, color: "#ff00de" },
  { name: "Tailwind", level: 95, color: "#00f2ff" },
  { name: "Three.js", level: 75, color: "#bc13fe" },
  { name: "Node.js", level: 80, color: "#ff00de" },
  { name: "Framer Motion", level: 90, color: "#00f2ff" },
  { name: "PostgreSQL", level: 70, color: "#bc13fe" },
];

export default function Skills() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold mb-4"
          >
            My Tech <span className="text-neon-cyan">Stack</span>
          </motion.h2>
          <p className="text-gray-500 uppercase tracking-widest font-mono text-xs">Constant Learning & Growth</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="glass p-8 rounded-3xl relative group overflow-hidden"
            >
              <div 
                className="absolute top-0 left-0 w-1 h-full opacity-50 transition-all duration-300 group-hover:opacity-100"
                style={{ backgroundColor: skill.color }}
              />
              <p className="text-2xl font-bold mb-4 group-hover:text-neon-cyan transition-colors">{skill.name}</p>
              
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: `${skill.level}%` }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                   className="h-full"
                   style={{ backgroundColor: skill.color }}
                />
              </div>
              <p className="mt-2 text-right text-[10px] font-mono text-gray-500 uppercase">{skill.level}% Mastery</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] opacity-10 pointer-events-none">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border border-neon-cyan rounded-full"
            />
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-20 border border-neon-purple rounded-full"
            />
        </div>
      </div>
    </section>
  );
}
