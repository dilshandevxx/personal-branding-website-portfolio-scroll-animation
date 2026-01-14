"use client";

import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 75;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  // Map scroll (0 to 1) to frame index (0 to FRAME_COUNT - 1)
  // We limit the range slightly to ensure we hit the last frame
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises: Promise<void>[] = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        const promise = new Promise<void>((resolve) => {
          const img = new Image();
          // Pad index with leading zero if needed, based on file names "frame_00..."
          const paddedIndex = i.toString().padStart(2, "0");
          // Assuming specific filename format from user: frame_00_delay-0.067s.webp
          // Wait, user files have varying delays. I need to be careful with filenames.
          // BUT, if the user said "frame_00... frame_01...", I can guess the pattern.
          // The filenames provided in list_dir were: frame_00_delay-0.067s.webp, frame_01_delay-0.066s.webp
          // The delay suffix changes! This makes simple iteration hard.
          // I need to fetch the file list or handle 404s, OR just use the list I saw.
          // Since I can't read the directory from client-side JS easily, I should ideally pass the filenames from server or hardcode/generate the array.
          // For now, I'll attempt to construct the path if the suffix was constant, but it's not.
          // WORKAROUND: I will assume I need to generate a list of filenames or rename them.
          // Renaming is safer. I'll define a separate tool call to RENAME the files to frame_00.webp, frame_01.webp etc. to make this logic simple.
          
          // FOR NOW in this file, I'll assume they are renamed to `frame_00.webp`.
          img.src = `/sequence/frame_${paddedIndex}.webp`;
          img.onload = () => {
            loadedImages[i] = img;
            resolve();
          };
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // Render logic
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const img = images[index];

    // Object-fit: cover logic
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!isLoaded) return;
    const index = Math.floor(latest);
    requestAnimationFrame(() => renderFrame(index));
  });

  // Initial render when loaded
  useEffect(() => {
    if(isLoaded) renderFrame(0);
  }, [isLoaded]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
      <canvas ref={canvasRef} className="block w-full h-full object-cover" />
      {!isLoaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#121212] text-white">
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "100%" }} 
                    transition={{ duration: 2, ease: "easeInOut" }} // Fake progress for visual feedback
                    className="h-full bg-purple-500" 
                />
            </div>
            <p className="font-display text-sm tracking-widest uppercase text-white/50 animate-pulse">
                Initializing Experience
            </p>
        </div>
      )}
    </div>
  );
}
