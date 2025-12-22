import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-wide">HAIR CLUB</h3>
              <p className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-primary-foreground/50 uppercase mt-1">
                Finland • Est. 2012
              </p>
            </div>
            <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed max-w-xs hidden sm:block">
              Where traditional craftsmanship meets contemporary style. 
              Experience the art of grooming in the heart of Oulu.
            </p>
            <a
              href="https://www.instagram.com/hairclubfinland/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              @hairclubfinland
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary-foreground/50">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs sm:text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary-foreground/50">
              Contact
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="tel:+358458961423"
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-primary-foreground/70 hover:text-accent transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                <span>045 896 1423</span>
              </a>
              <a
                href="https://maps.google.com/?q=Kajaaninkatu+36,+90100+Oulu,+Finland"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-primary-foreground/70 hover:text-accent transition-colors group"
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Kajaaninkatu 36<br />90100 Oulu</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary-foreground/50">
              Hours
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                <span className="text-primary-foreground/70">Business Hours</span>
              </div>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-primary-foreground/70">
                <div className="flex justify-between gap-4">
                  <span>Mon – Fri</span>
                  <span>10:00 – 18:00</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Sat – Sun</span>
                  <span className="text-destructive/80">Closed</span>
                </div>
              </div>
              <div className="pt-1 sm:pt-2">
                <span className="text-[10px] sm:text-xs text-accent font-medium tracking-wide uppercase">
                  Walk-ins Welcome
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
            <p className="text-[10px] sm:text-xs text-primary-foreground/50 text-center sm:text-left">
              © {currentYear} Hair Club Finland. All rights reserved.
            </p>
            <p className="text-[10px] sm:text-xs text-primary-foreground/40">
              Crafted with care in Oulu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
