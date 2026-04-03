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
      className="py-6 relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-soft via-background to-gold-pale dark:from-[#0f0d0c] dark:via-[#1a1816] dark:to-[#0f0d0c]" />

      {/* Decorative Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--gold)]/20 dark:bg-[var(--gold)]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--pink-rose)]/20 dark:bg-[var(--pink-rose)]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--champagne)]/30 dark:bg-[var(--gold)]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4a747' fill-rule='nonzero'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24">
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[var(--card-bg)] dark:bg-[var(--card-bg)] border border-[var(--gold)]/20 shadow-lg shadow-[var(--gold)]/10 mb-8"
        >
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[var(--gold)] fill-[var(--gold)]" />
            ))}
          </div>
          <span className="text-sm font-semibold text-[var(--text-secondary)] dark:text-gray-300">
            Rated 5.0 by 500+ couples
          </span>
        </motion.div>

        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-3 rounded-full badge-gold shadow-md shadow-[var(--gold)]/20">
            <Sparkles className="w-4 h-4" />
            Premium Wedding Venue
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display mb-6"
        >
          <span className="gradient-text">Create Your</span>
          <br />
          <span className="text-[var(--text-primary)]">Perfect Moment</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-subheading text-[var(--text-secondary)] dark:text-gray-300 mb-10 max-w-2xl mx-auto text-balance px-4"
        >
          Experience the elegance and grandeur of Royal Wedding Hall.
          Where your dreams meet our excellence.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2.5 px-5 py-3 rounded-full bg-[var(--card-bg)] dark:bg-[var(--card-bg)] border border-[var(--gold)]/20 shadow-md shadow-[var(--gold)]/5 hover:shadow-xl hover:shadow-[var(--gold)]/15 hover:border-[var(--gold)]/30 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center shadow-md">
                <feature.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 whitespace-nowrap">
                {feature.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 w-full sm:w-auto"
        >
          <Link
            href="/booking"
            className="group btn-primary w-full sm:w-auto px-10 py-4 text-lg shadow-xl shadow-[var(--gold)]/30 hover:shadow-2xl hover:shadow-[var(--gold)]/40"
          >
            <span>Book Your Date</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#gallery"
            className="w-full sm:w-auto btn-secondary px-10 py-4 text-lg shadow-md hover:shadow-xl hover:shadow-[var(--gold)]/20"
          >
            View Gallery
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-7 h-12 border-2 border-gold/50 rounded-full flex justify-center pt-2"
          >
            <motion.div 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-3 bg-gold rounded-full" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
