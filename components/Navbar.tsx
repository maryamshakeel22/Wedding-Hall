"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Sun, Moon, User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeProvider";
import { useHashNavigation } from "@/hooks/useHashNavigation";
import { SignInButton, SignOutButton, UserButton, Show } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { navigateWithHash } = useHashNavigation();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
const router = useRouter()
const handleNavClick = (hash: string) => {
  setIsOpen(false);
  router.push("/"+hash)
};

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Heart 
                className="w-8 h-8 text-gold group-hover:text-gold-dark transition-colors duration-300" 
                fill="currentColor" 
              />
            </motion.div>
            <span className="text-xl sm:text-2xl font-bold gradient-text tracking-tight">
              Royal Wedding Hall
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.hash}
                onClick={() => handleNavClick(link.hash)}
                className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--gold)] transition-all duration-300 rounded-xl hover:bg-[var(--hover-bg)] dark:hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}

            {/* Desktop Auth & Actions */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-[var(--card-border)]">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors">
                    Sign In
                  </button>
                </SignInButton>
              </Show>

              <Show when="signed-in">
                <Link
                  href="/booking"
                  className="btn-primary px-6 py-2.5 text-sm shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40"
                >
                  Book Now
                </Link>
              </Show>

              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-xl hover:bg-hover-bg transition-colors"
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                {mounted ? (
                  theme === "dark" ? (
                    <Sun className="w-5 h-5 text-gold" />
                  ) : (
                    <Moon className="w-5 h-5 text-gold" />
                  )
                ) : (
                  <div className="w-5 h-5" />
                )}
              </motion.button>

              {/* User Button */}
              <Show when="signed-in">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9 ring-2 ring-gold ring-offset-2 ring-offset-background transition-shadow",
                    },
                  }}
                />
              </Show>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden ">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-[var(--hover-bg)] dark:bg-white/10"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-5 h-5 text-[var(--gold)]" />
                ) : (
                  <Moon className="w-5 h-5 text-[var(--gold)]" />
                )
              ) : (
                <div className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile User Button */}
            <Show when="signed-in">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 ring-2 ring-[var(--gold)] ring-offset-2 ring-offset-[var(--background)]",
                  },
                }}
              />
            </Show>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-[var(--hover-bg)] dark:bg-white/10 hover:bg-[var(--gold-pale)] dark:hover:bg-white/15 transition-colors shadow-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-[var(--text-primary)]" />
              ) : (
                <Menu className="w-6 h-6 text-[var(--text-primary)]" />
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
            className="md:hidden glass-strong border-t"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.hash}
                  onClick={() => handleNavClick(link.hash)}
                  className="block w-full text-left px-4 py-3.5 text-text-secondary hover:text-gold transition-colors rounded-xl hover:bg-hover-bg font-medium"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="pt-4 mt-4 border-t border-card-border">
                <Show when="signed-out">
                  <SignInButton mode="modal">
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-3.5 rounded-xl text-text-secondary font-medium hover:bg-hover-bg transition-colors">
                      <User className="w-5 h-5" />
                      <span>Sign In</span>
                    </button>
                  </SignInButton>
                </Show>

                <Show when="signed-in">
                  <Link
                    href="/booking"
                    onClick={() => setIsOpen(false)}
                    className="block btn-primary text-center px-6 py-3.5 rounded-xl mt-2 shadow-lg shadow-gold/30"
                  >
                    Book Now
                  </Link>
                </Show>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
