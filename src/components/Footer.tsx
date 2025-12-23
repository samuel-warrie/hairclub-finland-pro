import { Link } from 'react-router-dom';
import { MapPin, Clock, Instagram, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getBusinessStatus } from '@/lib/businessHours';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [status, setStatus] = useState(getBusinessStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getBusinessStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-4 sm:space-y-6">
            <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(180deg, #d4b5a0 0%, #c9a68b 50%, #b8957a 100%)' }}>
              HAIR CLUB FINLAND
            </h3>
            <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed max-w-xs hidden sm:block">
              {t('footer.tagline')}
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
              {t('footer.navigation')}
            </h4>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {[
                { name: t('nav.home'), path: '/' },
                { name: t('nav.services'), path: '/services' },
                { name: t('nav.about'), path: '/about' },
                { name: t('nav.gallery'), path: '/gallery' },
                { name: t('nav.contact'), path: '/contact' },
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
              {t('footer.contact')}
            </h4>
            <div className="space-y-3 sm:space-y-4">
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
              {t('footer.hours')}
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                {status.status === 'open' && (
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" />
                )}
                {status.status === 'closing-soon' && (
                  <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                )}
                {status.status === 'closed' && (
                  <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                )}
                <span className={`font-medium ${
                  status.status === 'open' ? 'text-green-500' :
                  status.status === 'closing-soon' ? 'text-amber-500' :
                  'text-red-500'
                }`}>
                  {status.status === 'open' ? t('footer.open') :
                   status.status === 'closing-soon' ? t('footer.closingSoon') :
                   t('footer.closedNow')}
                </span>
              </div>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-primary-foreground/70">
                <div className="flex justify-between gap-4">
                  <span>{t('footer.monFri')}</span>
                  <span>10:00 – 18:00</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>{t('footer.saturday')}</span>
                  <span className="text-destructive/80">{t('footer.closed')}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>{t('footer.sunday')}</span>
                  <span className="text-destructive/80">{t('footer.closed')}</span>
                </div>
              </div>
              <div className="pt-2 sm:pt-3 border-t border-primary-foreground/10">
                <p className="text-[10px] sm:text-xs text-amber-500 font-medium">
                  {t('footer.holidayClosure')}
                </p>
              </div>
              <div className="pt-1 sm:pt-2">
                <span className="text-[10px] sm:text-xs text-accent font-medium tracking-wide uppercase">
                  {t('footer.walkIns')}
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
              © {currentYear} Hair Club Finland. {t('footer.rights')}.
            </p>
            <p className="text-[10px] sm:text-xs text-primary-foreground/40">
              {t('footer.crafted')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
