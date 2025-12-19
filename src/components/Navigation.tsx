import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Mobile Contact Bar */}
      <div className="md:hidden bg-primary text-primary-foreground py-2 px-4 flex justify-between items-center text-xs">
        <a href="tel:+358458961423" className="flex items-center gap-1">
          <Phone className="w-3 h-3" />
          <span>045 8961423</span>
        </a>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>Mon-Fri 10-18</span>
        </span>
        <a 
          href="https://maps.google.com/?q=Kajaaninkatu+36,+90100+Oulu,+Finland" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          <MapPin className="w-3 h-3" />
          <span>Oulu</span>
        </a>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-start">
              <span className="font-heading text-2xl font-bold tracking-wider">HAIR CLUB</span>
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Finland</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent ${
                    location.pathname === link.path ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="tel:+358458961423"
              className="hidden md:flex items-center gap-2 btn-gold text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border overflow-hidden"
            >
              <div className="container-custom py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-2 text-lg font-medium ${
                        location.pathname === link.path ? 'text-accent' : 'text-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  href="tel:+358458961423"
                  className="btn-gold text-center mt-4"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navigation;
