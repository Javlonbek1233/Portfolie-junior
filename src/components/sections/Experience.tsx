import { motion } from 'motion/react';

const experiences = [
  {
    year: "2023 - Present",
    role: "Senior Creative Tech",
    company: "Future Logic",
    desc: "Leading architecture for high-performance web applications and immersive digital experiences."
  },
  {
    year: "2021 - 2023",
    role: "Full Stack Engineer",
    company: "Nexus Dynamics",
    desc: "Developed scalable B2B platforms using React and advanced microservices architecture."
  },
  {
    year: "2019 - 2021",
    role: "Frontend Developer",
    company: "Pixel Studio",
    desc: "Focused on creative frontend solutions, animations, and high-fidelity UI implementations."
  },
  {
    year: "2018 - 2019",
    role: "Junior Developer",
    company: "Launchpad AI",
    desc: "Contributed to building early-stage AI interfaces and data visualization dashboards."
  }
];

export default function Experience() {
  return (
    <section className="py-32 max-w-5xl mx-auto px-4 relative">
      <div className="text-center mb-24">
         <h2 className="text-sm uppercase tracking-[0.3em] text-neon-purple mb-4 block font-mono">/ Professional Journey</h2>
         <h3 className="text-5xl font-bold">Timeline</h3>
      </div>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neon-purple hidden md:block z-10 shadow-[0_0_15px_rgba(188,19,254,0.8)]" />
              
              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <p className="text-neon-cyan font-mono text-lg mb-2">{exp.year}</p>
                <h4 className="text-3xl font-bold mb-1">{exp.role}</h4>
                <p className="text-neon-purple font-medium mb-4">{exp.company}</p>
                <p className="text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0 inline-block">{exp.desc}</p>
              </div>

              <div className="w-full md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
