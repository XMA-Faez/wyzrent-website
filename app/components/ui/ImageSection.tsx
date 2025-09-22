"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ImageSectionProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function ImageSection({ src, alt, width = 1920, height = 1080 }: ImageSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to scale values
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className="container mx-auto px-4 md:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden"
    >
      <motion.div
        style={{
          scale,
          opacity,
          y
        }}
        className="relative"
      >
        <motion.div
          initial={{ clipPath: "inset(10% 10% 10% 10% round 20px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 16px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto object-cover rounded-2xl"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ImageSection;
