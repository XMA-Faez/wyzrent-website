'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Book Your Stay', href: 'https://wyzrent.holidayfuture.com/' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#') && href !== '#') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string, itemName: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href);
    } else if (href.startsWith('/')) {
      // Let Next.js handle internal routing
      window.location.href = href;
    } else if (itemName === 'Book Your Stay') {
      // Open external booking link in new tab
      e.preventDefault();
      window.open(href, '_blank', 'noopener,noreferrer');
    }
    // Other external links will open normally
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b ${
        isScrolled 
          ? 'bg-stone-50/98 border-gray-200 shadow-sm' 
          : 'bg-stone-50/95 border-gray-100'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="WYZRENT" 
                width={250}
                height={40}
                className="h-8 md:h-10 w-auto cursor-pointer hover:opacity-90 transition-opacity duration-200"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className={
                  item.name === 'Book Your Stay'
                    ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-transform shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    : "text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                }
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <span className="flex items-center gap-2">
                  {item.name}
                  {item.name === 'Book Your Stay' && (
                    <ExternalLink className="w-4 h-4" />
                  )}
                </span>
                {item.name !== 'Book Your Stay' && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 duration-300 group-hover:w-full"></span>
                )}
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 active:scale-95 transition-transform duration-150"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href, item.name);
                      setIsMenuOpen(false);
                    }}
                    className={
                      item.name === 'Book Your Stay'
                        ? "bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-blue-700 shadow-md"
                        : "text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
                    }
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {item.name}
                      {item.name === 'Book Your Stay' && (
                        <ExternalLink className="w-4 h-4" />
                      )}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
