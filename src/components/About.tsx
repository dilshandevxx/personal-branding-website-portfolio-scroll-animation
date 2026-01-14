"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "TailwindCSS", 
  "Node.js", "WebGL", "Three.js", "Framer Motion",
  "PostgreSQL", "AWS", "UI/UX Design", "GLSL"
];

export default function About() {
  return (
    <section id="about" className="relative z-10 w-full min-h-[80vh] bg-[#121212] py-20 px-4 md:px-10 border-t border-white/5 overflow-hidden">
      {/* Background Animated Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Bio Text */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                Who I Am
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I am a creative technologist with a passion for building immersive digital experiences. 
                Merging clean code with stunning visuals is what I do best.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
                With a background in both design and engineering, I bridge the gap between aesthetics and functionality.
                Whether it's a high-performance web app or an interactive 3D journey, I obsess over every pixel and frame.
            </p>
        </motion.div>

        {/* Skills Cloud */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
             <h3 className="font-display text-2xl font-bold text-white mb-6">stack & skills</h3>
             <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                    >
                        {skill}
                    </motion.span>
                ))}
             </div>
        </motion.div>

      </div>
    </section>
  );
}
