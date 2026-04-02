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
    color: "from-pink-400 to-rose-400",
  },
  {
    icon: Sparkles,
    title: "Mehndi Events",
    description: "Vibrant and colorful mehndi celebrations with traditional decor and modern entertainment arrangements.",
    features: ["Traditional Decor", "Dance Floor", "Photo Booth", "Catering Services"],
    color: "from-amber-400 to-orange-400",
  },
  {
    icon: Music,
    title: "Birthday Parties",
    description: "Memorable birthday celebrations with customized themes, entertainment, and delicious catering options.",
    features: ["Theme Decoration", "DJ Services", "Cake Arrangement", "Party Favors"],
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: Utensils,
    title: "Reception & Dining",
    description: "Exquisite dining experiences with multi-cuisine catering and elegant table settings for your guests.",
    features: ["Multi-Cuisine Menu", "Live Counters", "Premium Service", "Custom Menu"],
    color: "from-emerald-400 to-teal-400",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Professional photography and videography services to capture every precious moment of your celebration.",
    features: ["Pre-Wedding Shoots", "Cinematic Videos", "Drone Coverage", "Photo Albums"],
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Wine,
    title: "Event Planning",
    description: "End-to-end event planning services ensuring seamless execution of your special occasion.",
    features: ["Full Planning", "Vendor Coordination", "Day-of Coordination", "Budget Management"],
    color: "from-rose-400 to-red-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-br from-[var(--cream)] via-white to-[var(--pink-soft)] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] font-semibold text-sm mb-4 border border-[var(--gold)]/20">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Everything You Need</span>{" "}
            <span className="text-gray-800 dark:text-white">For Perfect Events</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
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
              className="group card rounded-2xl overflow-hidden"
            >
              {/* Icon Header */}
              <div className={`h-32 sm:h-40 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10" />
                <div className="relative z-10 text-center px-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{service.title}</h3>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/10" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                <Link
                  href={`/booking?event=${service.title.toLowerCase().split(" ")[0]}`}
                  className="group/btn btn-primary w-full py-3 rounded-xl text-sm sm:text-base flex items-center justify-center space-x-2"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
