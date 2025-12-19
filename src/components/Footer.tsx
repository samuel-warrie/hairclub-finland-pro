import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, Scissors } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scissors className="w-8 h-8 text-accent" />
              <div>
                <h3 className="font-heading text-2xl font-bold">HAIR CLUB</h3>
                <p className="text-xs tracking-[0.2em] text-muted-foreground">FINLAND</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where classic barbershop traditions meet modern style. Walk-ins always welcome.
            </p>
            <a
              href="https://instagram.com/thehairclubfinland"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @thehairclubfinland
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+358458961423"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                045 8961423
              </a>
              <a
                href="https://maps.google.com/?q=Kajaaninkatu+36,+90100+Oulu,+Finland"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Kajaaninkatu 36<br />90100 Oulu, Finland</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Business Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Opening Hours</span>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p>Monday - Friday: 10:00 - 18:00</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
              <p className="text-accent font-medium pt-2">Walk-ins Welcome!</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Hair Club Finland. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Crafted with passion in Oulu, Finland
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
