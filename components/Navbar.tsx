"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeProvider";
import { useHashNavigation } from "@/hooks/useHashNavigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { navigateWithHash } = useHashNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { hash: "#home", label: "Home" },
    { hash: "#about", label: "About" },
    { hash: "#services", label: "Services" },
    { hash: "#gallery", label: "Gallery" },
    { hash: "#contact", label: "Contact" },
  ];

  const handleNavClick = (hash: string) => {
    navigateWithHash(hash);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Heart className="w-8 h-8 text-[var(--gold)] group-hover:text-[var(--gold-dark)] transition-colors" fill="currentColor" />
            </motion.div>
            <span className="text-xl sm:text-2xl font-bold gradient-text">
              Royal Wedding Hall
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.hash}
                onClick={() => handleNavClick(link.hash)}
                className="px-4 py-2 text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-[var(--gold)] dark:hover:text-[var(--gold)] transition-colors duration-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/booking"
              className="ml-4 btn-primary px-6 py-2.5 rounded-full text-sm lg:text-base"
            >
              Book Now
            </Link>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-2 p-2.5 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-[var(--gold)]" />
              ) : (
                <Moon className="w-5 h-5 text-[var(--gold)]" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-slate-800"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-[var(--gold)]" />
              ) : (
                <Moon className="w-5 h-5 text-[var(--gold)]" />
              )}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.hash}
                  onClick={() => handleNavClick(link.hash)}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-[var(--gold)] dark:hover:text-[var(--gold)] transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className="block btn-primary text-center px-6 py-3 rounded-full mt-4"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
