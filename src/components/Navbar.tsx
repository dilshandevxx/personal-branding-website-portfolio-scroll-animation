"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6"
    >
      {/* Logo */}
      <Link href="/" className="group relative z-50">
        <span className="font-display text-xl font-bold tracking-tighter text-white">
          PORTFOLIO<span className="text-purple-500">.</span>
        </span>
        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {["Work", "About", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-white z-50 focus:outline-none"
      >
        <div className="space-y-1.5 w-6">
            <motion.span 
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} 
                className="block w-full h-0.5 bg-white origin-center"
            />
            <motion.span 
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="block w-4 ml-auto h-0.5 bg-white"
            />
            <motion.span 
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} 
                className="block w-full h-0.5 bg-white origin-center"
            />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-[#121212] z-40 flex flex-col items-center justify-center space-y-8"
            >
                {["Work", "About", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsOpen(false)}
                        className="font-display text-4xl font-bold text-white hover:text-purple-500 transition-colors"
                    >
                        {item}
                    </Link>
                ))}
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
