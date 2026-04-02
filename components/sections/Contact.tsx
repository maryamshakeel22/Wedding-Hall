"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+92 300 1234567",
      href: "tel:+923001234567",
      description: "Call us for bookings",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@royalweddinghall.com",
      href: "mailto:info@royalweddinghall.com",
      description: "Email us anytime",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "123 Marriage Road, Wedding City",
      href: "#",
      description: "Visit our venue",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sun: 9AM - 10PM",
      href: "#",
      description: "We're always here",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-[var(--pink-soft)] via-white to-[var(--gold-light)] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white dark:bg-slate-800 shadow-md text-[var(--gold)] font-semibold text-sm mb-4 border border-[var(--gold)]/20">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Get In Touch</span>{" "}
            <span className="text-gray-800 dark:text-white">With Us</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Have questions or want to book your event? We'd love to hear from you. 
            Reach out and let's create something beautiful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="card rounded-3xl p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send us a Message
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-field w-full px-4 py-3 rounded-xl text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field w-full px-4 py-3 rounded-xl text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input-field w-full px-4 py-3 rounded-xl text-sm sm:text-base"
                  placeholder="+92 300 1234567"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="input-field w-full px-4 py-3 rounded-xl text-sm sm:text-base"
                  placeholder="Event Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="input-field w-full px-4 py-3 rounded-xl text-sm sm:text-base resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 rounded-xl text-base sm:text-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Map Placeholder */}
            <div className="card rounded-3xl overflow-hidden h-48 sm:h-64">
              <div className="w-full h-full bg-gradient-to-br from-[var(--pink-soft)] to-[var(--gold-light)] dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                <div className="text-center px-4">
                  <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--gold)] mx-auto mb-3" />
                  <p className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">Interactive Map</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">123 Marriage Road, Wedding City</p>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card rounded-2xl p-5 sm:p-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[var(--gold)] font-medium text-sm sm:text-base mb-1">
                    {item.value}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] border-none"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Ready to Book?
                  </h3>
                  <p className="text-white/90 mb-4 text-sm sm:text-base">
                    Schedule a visit to our venue and experience the elegance firsthand.
                  </p>
                  <a
                    href="/booking"
                    className="inline-block bg-white text-[var(--gold)] px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300"
                  >
                    Book a Tour
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
