'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-heading font-bold text-xl group-hover:bg-primary-light transition-colors">
            D+
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${
            scrolled ? 'text-primary' : 'text-primary'
          }`}>
            Dental
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-teal ${
                scrolled ? 'text-gray-600' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+1234567890"
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent-teal ${
              scrolled ? 'text-primary' : 'text-primary'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>(555) 123-4567</span>
          </a>
          <button suppressHydrationWarning onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 duration-200">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl py-4 px-6 flex flex-col gap-4 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 font-medium py-2 border-b border-gray-50 flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 text-primary font-medium py-3 rounded-lg bg-surface-muted"
              >
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <button suppressHydrationWarning onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-light transition-colors">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
