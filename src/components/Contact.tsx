"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 w-full bg-[#0a0a0a] py-32 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="font-display text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter">
                Let's Build <br /> Something <span className="text-purple-500">Epic.</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
                Have a project in mind? Looking for a partner to bring your vision to life? 
                Let's start a conversation.
            </p>
            
            <Link 
                href="mailto:hello@example.com"
                className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition-colors mb-20"
            >
                Get in Touch
            </Link>

            <div className="flex justify-center gap-10">
                {["Twitter", "GitHub", "LinkedIn", "Instagram"].map((social) => (
                    <Link 
                        key={social} 
                        href="#" 
                        className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest"
                    >
                        {social}
                    </Link>
                ))}
            </div>
            
            <div className="mt-20 pt-10 border-t border-white/5 text-gray-600 text-sm">
                &copy; 2024 Scrollytelling Portfolio. Crafted with Next.js & Framer Motion.
            </div>
        </motion.div>
      </div>
    </section>
  );
}
