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
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--gold)] to-[var(--pink-rose)] rounded-3xl opacity-20 blur-2xl" />
              <div className="relative bg-gradient-to-br from-[var(--pink-soft)] to-[var(--gold-light)] dark:from-slate-800 dark:to-slate-700 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop"
                  alt="Elegant wedding hall interior"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 sm:p-6 border border-[var(--gold)]/20"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">15+</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Years of Excellence</div>
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
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--pink-soft)] dark:bg-slate-800 text-[var(--gold)] font-semibold text-sm mb-4 border border-[var(--gold)]/20">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Creating Memories</span>{" "}
              <span className="text-gray-800 dark:text-white">Since 2009</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              Royal Wedding Hall stands as a symbol of elegance and sophistication. 
              We specialize in creating unforgettable experiences for weddings, 
              mehndi ceremonies, birthday celebrations, and all special occasions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
              Our dedicated team ensures every detail is perfected, from the 
              grandest elements to the subtlest touches, making your special 
              day truly extraordinary.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--gold)]/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[var(--gold)]" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-3 sm:p-4 rounded-xl bg-[var(--pink-soft)]/50 dark:bg-slate-800/50 border border-[var(--gold)]/10"
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--gold)] mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
