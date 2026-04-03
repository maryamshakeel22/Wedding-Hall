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
    <section id="contact" className="section-padding bg-gradient-to-br from-pink-soft via-background to-champagne dark:from-[#0f0d0c] dark:via-[#1a1816] dark:to-[#0f0d0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block px-5 py-2.5 rounded-full badge-gold mb-6 shadow-md shadow-[var(--gold)]/20">
            Contact Us
          </span>
          <h2 className="text-heading mb-6 text-balance">
            <span className="gradient-text">Get In Touch</span>{" "}
            <span className="text-[var(--text-primary)]">With Us</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto text-balance">
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
            className="card-elevated p-8 sm:p-10 lg:p-12 shadow-xl shadow-[var(--gold)]/5 hover:shadow-2xl hover:shadow-[var(--gold)]/10"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
              Send us a Message
            </h3>
            <p className="text-[var(--text-tertiary)] dark:text-gray-400 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-field w-full"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field w-full"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input-field w-full"
                  placeholder="+92 300 1234567"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="input-field w-full"
                  placeholder="Event Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="input-field w-full resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg shadow-xl shadow-[var(--gold)]/30 hover:shadow-2xl hover:shadow-[var(--gold)]/40"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </span>
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
            <div className="card-elevated rounded-3xl overflow-hidden shadow-xl shadow-[var(--gold)]/5 h-48 sm:h-64">
              <div className="w-full h-full bg-gradient-to-br from-pink-soft to-gold-pale dark:from-[var(--background-secondary)] dark:to-[var(--background)] flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <p className="text-[var(--text-primary)] font-semibold text-sm sm:text-base">Interactive Map</p>
                  <p className="text-[var(--text-tertiary)] dark:text-gray-400 text-xs sm:text-sm mt-1">123 Marriage Road, Wedding City</p>
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
                  whileHover={{ y: -6 }}
                  className="card-elevated rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-[var(--gold)]/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] flex items-center justify-center mb-4 shadow-md">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[var(--gold-dark)] dark:text-[var(--gold-light)] font-medium text-sm mb-1">
                    {item.value}
                  </p>
                  <p className="text-[var(--text-tertiary)] dark:text-gray-400 text-sm">
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
              className="card-elevated rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] border-none shadow-xl shadow-[var(--gold)]/20 hover:shadow-2xl hover:shadow-[var(--gold)]/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shadow-md">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    Ready to Book?
                  </h3>
                  <p className="mb-6 text-sm sm:text-base">
                    Schedule a visit to our venue and experience the elegance firsthand.
                  </p>
                  <a
                    href="/booking"
                    className="inline-block bg-white text-[var(--gold-dark)] px-8 py-4 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-[var(--gold)]/20 hover:scale-105 transition-all duration-300"
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
