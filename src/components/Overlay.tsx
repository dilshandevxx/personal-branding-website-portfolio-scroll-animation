"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Animations for different sections
  // Section 1: Center (0-20%) -> Fade out by 30%
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Section 2: Left (20-50%) -> active around 35%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.6], [50, -50]);

  // Section 3: Right (50-80%) -> active around 65%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.9], [50, -50]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between h-[400vh]">
      {/* Note: The parent container is 500vh, but this overlay might need to span that or be fixed.
          Ideally, these are fixed elements that appear/disappear based on scroll, OR absolute positioned within the tall parent.
          If we use 'sticky' parent for canvas, we can put these text blocks in a similar fixed/sticky container or distributed absolute.
          Let's try fixed container first, or just absolute positioning relative to the 500vh wrapper?
          The user wanted: "As the user scrolls, these text elements should fade in/out... text sections sit *on top* of the canvas."
          Best approach: Fixed overlay container, with children mapped to scroll.
      */}
      
      <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        {/* Section 1 */}
        <motion.div style={{ opacity: opacity1, y: y1 }} className="text-center absolute">
             <h1 className="font-display text-6xl md:text-9xl font-bold tracking-tighter text-white mix-blend-difference">
               My Name.
             </h1>
             <p className="font-sans text-xl md:text-2xl text-gray-300 mt-4 font-light tracking-[0.2em] uppercase">
               Creative Developer
             </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 max-w-lg">
             <h2 className="font-display text-5xl md:text-8xl font-bold text-white leading-none">
               I build digital <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                 experiences.
               </span>
             </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 max-w-lg text-right">
             <h2 className="font-display text-5xl md:text-8xl font-bold text-white leading-none">
               Bridging design <br />
               <span className="text-gray-400 italic">
                 & engineering.
               </span>
             </h2>
        </motion.div>
      </div>
    </div>
  );
}
