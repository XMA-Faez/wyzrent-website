"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "motion/react";
import Image from "next/image";

interface CardProps {
  image?: string;
  index?: number;
  setIndex?: (index: number) => void;
  drag?: string | boolean;
  frontCard: boolean;
  cardDimensions: { width: number; height: number };
}

function Card({ image, index, setIndex, drag, frontCard, cardDimensions }: CardProps) {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom: number) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };

  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 60, opacity: 0.5 },
  };

  function handleDragEnd(_: any, info: any) {
    if (info.offset.x < -100) {
      setExitX(-250);
      if (setIndex && index !== undefined) {
        setIndex(index + 1);
      }
    }
    if (info.offset.x > 100) {
      setExitX(250);
      if (setIndex && index !== undefined) {
        setIndex(index + 1);
      }
    }
  }

  return (
    <motion.div
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        position: "absolute",
        top: 0,
        x,
        rotate,
        cursor: drag ? "grab" : "auto",
      }}
      whileTap={{ cursor: drag ? "grabbing" : "auto" }}
      // Dragging
      drag={drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      // Animation
      variants={frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div
        style={{
          width: cardDimensions.width,
          height: cardDimensions.height,
          borderRadius: 16,
          scale,
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
        }}
        className="bg-white"
      >
        {image && (
          <>
            <Image
              src={image}
              alt="Property"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 420px, 512px"
              priority={frontCard}
              draggable={false}
            />
            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

interface TinderStackProps {
  images: string[];
  cardDimensions?: { width: number; height: number };
  onSwipe?: (direction: "left" | "right", index: number) => void;
}

export default function TinderStack({
  images,
  cardDimensions = { width: 350, height: 400 },
  onSwipe,
}: TinderStackProps) {
  const [index, setIndex] = useState(0);

  // Get the current image based on index (loops through the array)
  const imageIndex = index % images.length;
  const nextImageIndex = (index + 1) % images.length;

  return (
    <motion.div
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        position: "relative"
      }}
      className="mx-auto"
    >
      <AnimatePresence initial={false}>
        {/* Back card - key is always index + 1 */}
        <Card
          key={index + 1}
          image={images[nextImageIndex]}
          frontCard={false}
          cardDimensions={cardDimensions}
        />
        {/* Front card - key is always index */}
        <Card
          key={index}
          image={images[imageIndex]}
          index={index}
          setIndex={setIndex}
          drag="x"
          frontCard={true}
          cardDimensions={cardDimensions}
        />
      </AnimatePresence>

      {/* Swipe indicators */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <div className="text-xs text-gray-500 flex items-center gap-1">
          <motion.div
            animate={{ x: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ←
          </motion.div>
          <span>Swipe to explore</span>
          <motion.div
            animate={{ x: [2, -2, 2] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
