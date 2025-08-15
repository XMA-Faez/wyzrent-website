"use client";
import Image from "next/image";
import { motion } from "motion/react";
import AirbnbSuperhostBadge from "@/public/airbnb-superhost-badge.png";
import Feather from "@/public/feather.png";
import FeatherRight from "@/public/feather-right.png";
import QualityServiceBadge from "@/public/quality-service-bg-removed.png";

export default function TrustBadges() {
  return (
    <motion.section
      className="px-4 md:px-6 lg:px-10 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Airbnb Superhost Badge */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={AirbnbSuperhostBadge}
              alt="Airbnb Superhost"
              className="h-24 w-auto"
            />
          </motion.div>

          {/* Guest Favorite Badge */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2">
              {/* Left Laurel */}
              <Image src={Feather} alt="Laurel" className="opacity-70 w-8" />

              {/* Rating */}
              <div className="text-5xl font-bold text-black pb-4">4.92</div>

              {/* Right Laurel */}
              <Image
                src={FeatherRight}
                alt="Laurel"
                className="opacity-70 w-8"
              />
            </div>

            {/* Title */}
            <div className="text-center">
              <div className="text-base font-semibold text-black">
                Guest favorite
              </div>

              {/* Subtitle */}
              <div className="text-xs text-gray-600 leading-tight max-w-64">
                One of the most loved homes on Airbnb based on ratings, reviews,
                and reliability
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={QualityServiceBadge}
              alt="Quality Service Badge"
              className="h-32 w-auto"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

interface Props {
  size?: number;
  radius?: number;
  topText?: string;
  bottomText?: string;
  title?: string;
  textColor?: string;
  showCard?: boolean;
  className?: string;
}

function ServiceBadge({
  size = 360,
  radius = 130,
  topText = "BEST QUALITY",
  bottomText = "GUARANTEED",
  title = "SERVICE",
  textColor = "#1a1a1a",
  showCard = true,
  className = "",
}: Props) {
  // Fixed 400x400 viewBox for clean scaling
  const VB = 400;
  const cx = 200;
  const cy = 200;
  const r = Math.max(60, Math.min(180, radius));

  const topArc = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;
  const bottomArc = `M ${cx - r} ${cy} A ${r} ${r} 0 0 0 ${cx + r} ${cy}`;

  // Allow Tailwind color classes OR hex codes
  const textClass =
    textColor.startsWith("#") || textColor.startsWith("rgb")
      ? undefined
      : textColor; // e.g., "text-neutral-900"
  const textFill =
    textColor.startsWith("#") || textColor.startsWith("rgb")
      ? textColor
      : undefined;

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div style={{ width: size }}>{children}</div>
  );

  return (
    <Wrapper>
      <svg
        viewBox={`0 0 ${VB} ${VB}`}
        className={["block h-auto w-full ", textClass ?? ""].join(" ")}
        role="img"
        aria-label={`${topText} ${title} ${bottomText} badge`}
        style={{ color: textFill }}
      >
        <defs>
          <path id="topArc" d={topArc} />
          <path id="bottomArc" d={bottomArc} />
        </defs>

        {/* Top curved label */}
        <text
          className="font-sans uppercase"
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "0.15em",
            lineHeight: 1.5,
          }}
        >
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">
            {topText}
          </textPath>
        </text>

        {/* Center title */}
        <text
          x={cx}
          y={cy + 12}
          textAnchor="middle"
          className="font-sans uppercase"
          style={{ fontSize: 64, fontWeight: 700, letterSpacing: "0.15em" }}
        >
          {title}
        </text>

        {/* Bottom curved label */}
        <text
          className="font-sans uppercase"
          style={{
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "0.2em",
          }}
        >
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
            {bottomText}
          </textPath>
        </text>
      </svg>
    </Wrapper>
  );
}
