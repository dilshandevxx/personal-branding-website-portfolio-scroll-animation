"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Neon Nexus",
    category: "Fintech Dashboard",
    description: "Real-time data visualization for high-frequency trading platforms.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Aether Lens",
    category: "AI Photography",
    description: "Generative AI tool for creating hyper-realistic product photography.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Quantum Flow",
    category: "SaaS Platform",
    description: "Project management ecosystem for distributed engineering teams.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Velvet UI",
    category: "Component Library",
    description: "A premium React component system with advanced accessible behaviors.",
    color: "from-orange-500 to-red-500",
  },
];

export default function Projects() {
  return (
    <section className="relative z-10 w-full min-h-screen bg-[#121212] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-16 tracking-tighter">
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 h-[400px] flex flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10"
            >
              {/* Gradient Blob Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${project.color} blur-3xl`}
              />

              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-display text-sm font-medium tracking-widest uppercase text-gray-400 mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-display text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 max-w-sm group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
            <p className="text-gray-500">
                &copy; {new Date().getFullYear()} Scrollytelling Portfolio. All rights reserved.
            </p>
        </div>
      </div>
    </section>
  );
}
