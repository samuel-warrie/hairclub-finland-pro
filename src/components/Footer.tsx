import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-semibold tracking-wide">HAIR CLUB</h3>
              <p className="text-[10px] tracking-[0.3em] text-primary-foreground/50 uppercase mt-1">
                Finland • Est. 2010
              </p>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Where traditional craftsmanship meets contemporary style. 
              Experience the art of grooming in the heart of Oulu.
            </p>
            <a
              href="https://instagram.com/thehairclubfinland"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @thehairclubfinland
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/50">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/50">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+358458961423"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors group"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>045 896 1423</span>
              </a>
              <a
                href="https://maps.google.com/?q=Kajaaninkatu+36,+90100+Oulu,+Finland"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors group"
              >
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Kajaaninkatu 36<br />90100 Oulu, Finland</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/50">
              Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/70">Business Hours</span>
              </div>
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span>10:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat – Sun</span>
                  <span className="text-destructive/80">Closed</span>
                </div>
              </div>
              <div className="pt-2">
                <span className="text-xs text-accent font-medium tracking-wide uppercase">
                  Walk-ins Welcome
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              © {currentYear} Hair Club Finland. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/40">
              Crafted with care in Oulu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
