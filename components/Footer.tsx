import { Heart, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About Us" },
      { href: "#services", label: "Services" },
      { href: "#gallery", label: "Gallery" },
      { href: "#contact", label: "Contact" },
    ],
    services: [
      { href: "/booking?event=wedding", label: "Wedding Ceremonies" },
      { href: "/booking?event=mehndi", label: "Mehndi Events" },
      { href: "/booking?event=birthday", label: "Birthday Parties" },
      { href: "/booking?event=reception", label: "Reception" },
    ],
  };

  const contactInfo = [
    { icon: Phone, value: "+92 300 1234567", href: "tel:+923001234567" },
    { icon: Mail, value: "info@royalweddinghall.com", href: "mailto:info@royalweddinghall.com" },
    { icon: MapPin, value: "123 Marriage Road, Wedding City", href: "#" },
  ];

  const socialLinks = [
    { href: "#", label: "Facebook" },
    { href: "#", label: "Instagram" },
    { href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[var(--background-secondary)] via-[var(--background)] to-[var(--background-secondary)] dark:from-[#0a0908] dark:via-[#12100f] dark:to-[#0a0908] border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2">
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--gold)]" fill="currentColor" />
              <span className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">Royal Wedding Hall</span>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
              Creating unforgettable moments for your special occasions.
              Experience luxury and elegance at its finest.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[var(--gold)]/10 dark:bg-[var(--gold)]/20 flex items-center justify-center hover:bg-[var(--gold)] hover:scale-110 hover:shadow-lg hover:shadow-[var(--gold)]/30 transition-all duration-300"
                >
                  <span className="text-[var(--gold)] dark:text-white font-bold text-sm">{social.label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-[var(--gold)]">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--text-secondary)] dark:text-gray-300 hover:text-[var(--gold)] hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-[var(--gold)]">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="text-[var(--text-secondary)] dark:text-gray-300 hover:text-[var(--gold)] hover:translate-x-1 inline-block transition-all duration-300 text-sm sm:text-base"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-[var(--gold)]">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((item) => (
                <li key={item.value}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 text-[var(--text-secondary)] dark:text-gray-300 hover:text-[var(--gold)] transition-all duration-300 group"
                  >
                    <item.icon className="w-5 h-5 text-[var(--gold)] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base">{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--card-border)] dark:border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--text-muted)] dark:text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Royal Wedding Hall. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-[var(--text-muted)] dark:text-gray-400 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>for your special moments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
