"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Sparkles, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const features = [
    { icon: Calendar, label: "Premium Dates Available" },
    { icon: Users, label: "Capacity up to 1000 Guests" },
    { icon: Sparkles, label: "Luxury Decor Included" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--pink-soft)] via-white to-[var(--gold-light)] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--gold)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,var(--pink-rose)_0%,transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-[var(--gold)]/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-[var(--pink-rose)]/20 rounded-full blur-xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-2 mb-6"
        >
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[var(--gold)] fill-[var(--gold)]" />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Rated 5.0 by 500+ couples
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-[var(--gold)] font-semibold text-sm mb-6 shadow-md border border-[var(--gold)]/20">
            ✨ Premium Wedding Venue
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Create Your</span>
          <br />
          <span className="text-gray-800 dark:text-white">Perfect Moment</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto px-4"
        >
          Experience the elegance and grandeur of Royal Wedding Hall. 
          Where your dreams meet our excellence.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 px-4"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-md border border-[var(--gold)]/10"
            >
              <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)]" />
              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap">{feature.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <Link
            href="/booking"
            className="group btn-primary w-full sm:w-auto px-8 py-4 rounded-full text-base sm:text-lg flex items-center justify-center space-x-2"
          >
            <span>Book Your Date</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#gallery"
            className="w-full sm:w-auto btn-secondary px-8 py-4 rounded-full text-base sm:text-lg"
          >
            View Gallery
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[var(--gold)] rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-3 bg-[var(--gold)] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
