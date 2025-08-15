"use client";

import {
  MessageSquare,
  Search,
  CheckCircle,
  Camera,
  TrendingUp,
} from "lucide-react";

export default function TestLayouts() {
  const steps = [
    {
      step: 1,
      title: "Reach Out to Our Team",
      description:
        "Contact us with details about your property, and we'll guide you from the very first conversation.",
      icon: MessageSquare,
    },
    {
      step: 2,
      title: "We Assess Your Property",
      description:
        "A thorough, professional evaluation to ensure everything meets our world-class standards.",
      icon: Search,
    },
    {
      step: 3,
      title: "Approve & Begin Onboarding",
      description:
        "Once you approve, we seamlessly handle all onboarding procedures.",
      icon: CheckCircle,
    },
    {
      step: 4,
      title: "Showcase & Market Your Property",
      description:
        "We create high-impact listings with premium photography and position your property across top platforms for maximum visibility.",
      icon: Camera,
    },
    {
      step: 5,
      title: "Sit Back & Enjoy the Returns",
      description:
        "Effortless property income, managed to perfection — with transparent monitoring and timely payouts.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          How It Works - Layout Options
        </h1>

        {/* Layout 1: Horizontal Timeline */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8">
            Layout 1: Horizontal Timeline
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gray-200"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="text-center relative">
                    {/* Step Circle */}
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Layout 2: Vertical Cards with Numbers */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8">
            Layout 2: Vertical Cards with Large Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-gray-50 p-6 rounded-xl relative overflow-hidden"
                >
                  {/* Large Number Background */}
                  <div className="absolute top-0 right-0 text-8xl font-bold text-blue-100 opacity-50">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Step {step.step}</h3>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Layout 3: Simple Vertical List */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8">
            Layout 3: Clean Vertical List
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Step {step.step} – {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Layout 4: Icon-Centered Cards */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8">
            Layout 4: Icon-Centered Cards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Layout 5: Minimalist with Arrows */}
        <section className="mb-20 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8">
            Layout 5: Minimalist with Arrows
          </h2>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <div key={step.step}>
                  <div className="flex items-start gap-8 pb-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="flex-1 pt-0">
                      <div className="flex items-center gap-4 mb-3">
                        <Icon className="w-6 h-6 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                          Step {step.step}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Arrow between steps */}
                  {!isLast && (
                    <div className="flex justify-start mb-8 ml-6">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8">Choose Your Layout</h2>
          <p className="text-gray-600">
            Select the layout that best fits your needs and style.
          </p>
          <HowItWorks
            title="How It Works"
            steps={steps}
            accentColor="text-blue-600"
          />
        </section>
      </div>
    </div>
  );
}

import React from "react";
import type { LucideIcon } from "lucide-react";
import { Handshake, BadgeCheck, Megaphone, PiggyBank } from "lucide-react";

export type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

interface Props {
  title?: string;
  steps?: Step[];
  /**
   * Tailwind text color utility applied to icon + accents.
   * Example: "text-emerald-700" | "text-teal-700" | "text-sky-700"
   */
  accentColor?: string;
}

const DEFAULT_STEPS: Step[] = [
  {
    title: "Get In Touch",
    description: "Contact us with details about your property.",
    icon: Handshake,
  },
  {
    title: "Unit Inspection",
    description: "Full assessment of the property.",
    icon: Search,
  },
  {
    title: "Owner Approval",
    description: "The onboarding process begins.",
    icon: BadgeCheck,
  },
  {
    title: "Rent & Listing",
    description: "Optimize the property on all platforms.",
    icon: Megaphone,
  },
  {
    title: "Sit Back & Monitor",
    description: "Get your payout hassle-free.",
    icon: PiggyBank,
  },
];

function StepCard({
  step,
  number,
  accentColor = "text-emerald-700",
}: {
  step: Step;
  number: number;
  accentColor?: string;
}) {
  const Icon = step.icon;
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800">
      {/* Number badge */}
      <div
        className={`absolute -top-3 -left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white font-semibold ${accentColor} border-slate-200 shadow-sm`}
      >
        {String(number).padStart(2, "0")}
      </div>

      {/* Icon */}
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-current/15 ${accentColor} bg-current/10`}
      >
        <Icon className="h-6 w-6" aria-hidden />
      </div>

      <h3 className="mb-1 text-lg font-semibold tracking-tight text-slate-900">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-600 ">
        {step.description}
      </p>
    </div>
  );
}

function HowItWorks({
  title = "How it Works",
  steps = DEFAULT_STEPS,
  accentColor = "text-emerald-700",
}: Props) {
  // Guard: we expect exactly 5 steps for the desktop zigzag layout
  const s = steps.slice(0, 5);

  return (
    <section
      aria-labelledby="how-it-works"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-10 text-center">
        <h2
          id="how-it-works"
          className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl "
        >
          {title}
        </h2>
      </div>

      {/* Mobile: vertical stepper */}
      <ol
        className="relative space-y-6 border-l border-slate-200 pl-6 lg:hidden "
        role="list"
      >
        {s.map((step, idx) => (
          <li key={idx} className="relative">
            {/* Timeline dot */}
            <span
              className={`absolute -left-3.5 top-3 block h-3.5 w-3.5 rounded-full ring-2 ring-white ${accentColor}`}
              aria-hidden
            />
            <StepCard step={step} number={idx + 1} accentColor={accentColor} />
          </li>
        ))}
      </ol>

      {/* Desktop: 2-row zigzag grid + SVG connectors */}
      <div className="relative hidden lg:block">
        <div className="relative grid grid-cols-3 grid-rows-2 gap-10">
          {/* Row 1 */}
          <div className="col-start-1 row-start-1">
            <StepCard step={s[0]} number={1} accentColor={accentColor} />
          </div>
          <div className="col-start-2 row-start-1">
            <StepCard step={s[1]} number={2} accentColor={accentColor} />
          </div>
          <div className="col-start-3 row-start-1">
            <StepCard step={s[2]} number={3} accentColor={accentColor} />
          </div>

          {/* Row 2 (right-to-left) */}
          <div className="col-start-3 row-start-2">
            <StepCard step={s[3]} number={4} accentColor={accentColor} />
          </div>
          <div className="col-start-2 row-start-2">
            <StepCard step={s[4]} number={5} accentColor={accentColor} />
          </div>
        </div>

        {/* Decorative SVG connectors overlay */}
        <svg
          className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full lg:block"
          viewBox="0 0 100 60"
          preserveAspectRatio="none"
          role="img"
          aria-label="Process flow arrows"
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-current" />
            </marker>
            <style>{`.stroke{ stroke: currentColor; opacity:.35 }`}</style>
          </defs>
          {/* Color inherits from accentColor via currentColor on a wrapper */}
          <g className={accentColor}>
            {/* 1 → 2 */}
            <path
              className="stroke"
              d="M 16 20 H 48"
              strokeWidth="1.5"
              fill="none"
              markerEnd="url(#arrow)"
            />
            {/* 2 → 3 */}
            <path
              className="stroke"
              d="M 52 20 H 84"
              strokeWidth="1.5"
              fill="none"
              markerEnd="url(#arrow)"
            />
            {/* drop from 3 to row 2 */}
            <path
              className="stroke"
              d="M 92 22 V 44"
              strokeWidth="1.5"
              fill="none"
            />
            {/* to 4 (rightmost bottom) */}
            <path
              className="stroke"
              d="M 86 44 H 72"
              strokeWidth="1.5"
              fill="none"
              markerEnd="url(#arrow)"
            />
            {/* 4 → 5 (left) */}
            <path
              className="stroke"
              d="M 60 44 H 44"
              strokeWidth="1.5"
              fill="none"
              markerEnd="url(#arrow)"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}

/* ------------------------------------------
USAGE EXAMPLE
-------------------------------------------

import HowItWorks from "./HowItWorks";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <HowItWorks accentColor="text-teal-700" />
    </main>
  );
}

// Notes:
// - Uses lucide-react; install with: npm i lucide-react
// - Tailwind required; supports dark mode via class strategy.
// - Pass your own steps via the `steps` prop to customize titles, descriptions, or icons.
*/

