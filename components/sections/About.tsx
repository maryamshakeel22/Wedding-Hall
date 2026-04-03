"use client";

import { motion } from "framer-motion";
import { Heart, Award, Users, Clock, Check } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Heart, value: "500+", label: "Happy Couples" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "1000+", label: "Guest Capacity" },
    { icon: Clock, value: "24/7", label: "Support" },
  ];

  const features = [
    "Elegant architecture with modern amenities",
    "Professional event planning team",
    "Customizable decor packages",
    "State-of-the-art sound and lighting",
    "Premium catering services",
    "Ample parking space",
  ];

  return (
    <section id="about" className="section-padding bg-[var(--background-secondary)] dark:bg-[#12100f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[var(--gold)]/30 to-[var(--pink-rose)]/20 dark:from-[var(--gold)]/20 dark:to-[var(--pink-rose)]/10 rounded-3xl blur-3xl opacity-50" />

            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[var(--gold)] to-[var(--pink-rose)] rounded-3xl opacity-20" />
              <div className="relative bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop"
                  alt="Elegant wedding hall interior"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-2xl shadow-xl p-5 sm:p-7 border border-[var(--card-border)]"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold gradient-text">15+</div>
                <div className="text-[var(--text-tertiary)] dark:text-gray-400 text-sm font-medium mt-1">Years of Excellence</div>
              </div>
            </motion.div>

            {/* Secondary Badge */}
            <motion.div
              initial={{ scale: 0, rotate: 10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-[var(--card-bg)] dark:bg-[var(--card-bg)] rounded-2xl shadow-xl p-4 sm:p-5 border border-[var(--card-border)]"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[var(--text-primary)]">#1 Rated</div>
                  <div className="text-[var(--text-tertiary)] dark:text-gray-400 text-xs">Wedding Venue</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-5 py-2.5 rounded-full badge-soft mb-6 shadow-md">
              About Us
            </span>

            <h2 className="text-heading mb-6 text-balance">
              <span className="gradient-text">Creating Memories</span>{" "}
              <span className="text-[var(--text-primary)]">Since 2009</span>
            </h2>

            <p className="text-body mb-6 leading-relaxed">
              Royal Wedding Hall stands as a symbol of elegance and sophistication.
              We specialize in creating unforgettable experiences for weddings,
              mehndi ceremonies, birthday celebrations, and all special occasions.
            </p>

            <p className="text-body mb-10 leading-relaxed">
              Our dedicated team ensures every detail is perfected, from the
              grandest elements to the subtlest touches, making your special
              day truly extraordinary.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center mt-0.5 shadow-md">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[var(--text-secondary)] dark:text-gray-300 text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group text-center p-5 rounded-2xl bg-gradient-to-br from-pink-soft to-champagne dark:from-[var(--background-secondary)] dark:to-[var(--background)] border border-[var(--gold)]/20 hover:border-[var(--gold)]/40 hover:shadow-xl hover:shadow-[var(--gold)]/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-md">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-[var(--text-tertiary)] dark:text-gray-400 text-sm font-medium mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
