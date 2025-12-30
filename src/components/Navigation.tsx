import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/98 backdrop-blur-md border-b border-border/50 shadow-subtle' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          {/* Logo */}
          <Link to="/" className="relative z-10">
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className={`text-[13px] font-medium tracking-wider uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : location.pathname === '/' ? 'text-muted-foreground' : 'text-accent'
                }`}>
                  {link.name}
                </span>
                <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Language Toggle & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fi' : 'en')}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors hover:text-accent"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4" />
              <span>{language === 'en' ? 'FI' : 'EN'}</span>
            </button>
            <Link to="/contact" className="btn-primary text-xs py-3 px-5">
              {t('hero.contactUs')}
            </Link>
          </div>

          {/* Mobile Language & Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === 'en' ? 'fi' : 'en')}
              className="relative z-50 p-2 hover:bg-accent/10 rounded-md transition-colors duration-200"
              aria-label="Toggle language"
            >
              <div className="flex items-center gap-1.5">
                <Languages className={`w-5 h-5 ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'}`} />
                <span className={`text-sm font-medium uppercase ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'}`}>{language.toUpperCase()}</span>
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2 -mr-2 hover:bg-accent/10 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/98 backdrop-blur-lg z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`font-heading text-3xl sm:text-4xl font-medium tracking-wide transition-colors hover:text-accent ${
                      location.pathname === link.path ? 'text-accent' : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                className="mt-8 flex flex-col items-center gap-6"
              >
                <button
                  onClick={() => setLanguage(language === 'en' ? 'fi' : 'en')}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors hover:text-accent border border-border rounded"
                  aria-label="Toggle language"
                >
                  <Languages className="w-5 h-5" />
                  <span>{language === 'en' ? 'Suomi' : 'English'}</span>
                </button>
                <Link to="/contact" className="btn-primary text-base px-8 py-3">
                  {t('hero.contactUs')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
