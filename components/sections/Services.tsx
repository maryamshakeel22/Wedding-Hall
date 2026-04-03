"use client";

import { motion } from "framer-motion";
import { Heart, Music, Utensils, Camera, Sparkles, Wine, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Heart,
    title: "Wedding Ceremonies",
    description: "Complete wedding packages with elegant decor, professional coordination, and premium amenities for your perfect day.",
    features: ["Bridal Stage Decor", "Lighting & Sound", "Seating Arrangement", "Valet Parking"],
    gradient: "from-rose-400 via-pink-400 to-rose-500",
  },
  {
    icon: Sparkles,
    title: "Mehndi Events",
    description: "Vibrant and colorful mehndi celebrations with traditional decor and modern entertainment arrangements.",
    features: ["Traditional Decor", "Dance Floor", "Photo Booth", "Catering Services"],
    gradient: "from-amber-400 via-orange-400 to-amber-500",
  },
  {
    icon: Music,
    title: "Birthday Parties",
    description: "Memorable birthday celebrations with customized themes, entertainment, and delicious catering options.",
    features: ["Theme Decoration", "DJ Services", "Cake Arrangement", "Party Favors"],
    gradient: "from-purple-400 via-pink-400 to-purple-500",
  },
  {
    icon: Utensils,
    title: "Reception & Dining",
    description: "Exquisite dining experiences with multi-cuisine catering and elegant table settings for your guests.",
    features: ["Multi-Cuisine Menu", "Live Counters", "Premium Service", "Custom Menu"],
    gradient: "from-emerald-400 via-teal-400 to-emerald-500",
  },
  {
    icon: Camera,
    title: "Photography & Video",
    description: "Professional photography and videography services to capture every precious moment of your celebration.",
    features: ["Pre-Wedding Shoots", "Cinematic Videos", "Drone Coverage", "Photo Albums"],
    gradient: "from-blue-400 via-cyan-400 to-blue-500",
  },
  {
    icon: Wine,
    title: "Event Planning",
    description: "End-to-end event planning services ensuring seamless execution of your special occasion.",
    features: ["Full Planning", "Vendor Coordination", "Day-of Coordination", "Budget Management"],
    gradient: "from-red-400 via-rose-400 to-red-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-br from-champagne via-background to-pink-soft dark:from-[#0f0d0c] dark:via-[#1a1816] dark:to-[#0f0d0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2.5 rounded-full badge-gold mb-6 shadow-md shadow-[var(--gold)]/20">
            Our Services
          </span>
          <h2 className="text-heading mb-6 text-balance">
            <span className="gradient-text">Everything You Need</span>{" "}
            <span className="text-[var(--text-primary)]">For Perfect Events</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-balance">
            From intimate gatherings to grand celebrations, we offer comprehensive
            services to make your event unforgettable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group card-elevated overflow-hidden hover:shadow-2xl hover:shadow-[var(--gold)]/15"
            >
              {/* Icon Header with Gradient */}
              <div className={`h-36 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-white/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/5 blur-xl" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center drop-shadow-md">{service.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-[var(--text-secondary)] dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2.5 h-2.5 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] rounded-full flex-shrink-0 shadow-sm" />
                      <span className="text-sm font-medium text-[var(--text-tertiary)] dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/booking?event=${service.title.toLowerCase().split(" ")[0]}`}
                  className="group/btn btn-primary w-full py-4 shadow-lg shadow-[var(--gold)]/20 hover:shadow-xl hover:shadow-[var(--gold)]/30"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[var(--text-secondary)] dark:text-gray-300 mb-6">
            Need a custom package for your special event?
          </p>
          <Link
            href="#contact"
            className="btn-secondary px-10 py-4 text-lg shadow-md hover:shadow-xl hover:shadow-[var(--gold)]/20"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
