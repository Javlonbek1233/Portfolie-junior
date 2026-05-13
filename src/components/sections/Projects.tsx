import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "NeuroSphere",
    desc: "AI-powered data visualization platform with real-time neural network mapping.",
    tags: ["React", "Three.js", "WebAssembly"],
    color: "#00f2ff",
    img: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Vortex Pay",
    desc: "Next-gen crypto wallet with seamless multi-chain swapping and biometric security.",
    tags: ["TypeScript", "Solidity", "Node.js"],
    color: "#bc13fe",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "EcoPulse",
    desc: "B2B sustainability dashboard tracking carbon emissions across global supply chains.",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    color: "#ff00de",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Titan UI",
    desc: "Extremely fast, low-level component library based on geometric design principles.",
    tags: ["Rust", "Wasm", "Tailwind"],
    color: "#00f2ff",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollXProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-20">
          <div className="flex-shrink-0 w-[500px] flex flex-col justify-center">
            <h2 className="text-sm border-l-2 border-neon-cyan pl-4 mb-4 uppercase tracking-[0.2em] font-mono text-neon-cyan">Portfolio</h2>
            <h3 className="text-6xl font-bold leading-tight mb-8">Selected <br/> Works</h3>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              A collection of digital artifacts that represent my passion for pushing technical boundaries.
            </p>
          </div>

          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[600px] glass h-[450px] relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 border border-white/20 rounded-full bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-4xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h4>
                    <p className="text-gray-400 text-sm max-w-md line-clamp-2">{project.desc}</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="p-3 rounded-full glass hover:bg-neon-cyan hover:text-black transition-all">
                      <Github size={20} />
                    </button>
                    <button className="p-3 rounded-full glass hover:bg-neon-cyan hover:text-black transition-all">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
