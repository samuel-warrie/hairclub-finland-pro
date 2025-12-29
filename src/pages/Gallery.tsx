import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play, Pause, Instagram } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';
import { galleryImages } from '@/data/gallery';
import { useLanguage } from '@/contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isPlaying || lightboxOpen) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, lightboxOpen]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextLightbox = () => {
    setDirection(1);
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevLightbox = () => {
    setDirection(-1);
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'ArrowRight':
          nextLightbox();
          break;
        case 'ArrowLeft':
          prevLightbox();
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <main>
      <HeroBanner
        title={t('gallery.title')}
        subtitle={t('gallery.subtitle')}
        image="/background1.jpg"
      />

      {/* Carousel Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex justify-center">
                <div className="decorative-line" />
              </div>
              <span className="label-text">{t('gallery.featuredWork')}</span>
            </motion.div>
          </div>

          {/* Main Carousel */}
          <div className="relative group">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-hidden bg-muted">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  custom={direction}
                  initial={{ x: direction > 0 ? '100%' : '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: direction > 0 ? '-100%' : '100%' }}
                  transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                  onClick={() => openLightbox(currentIndex)}
                />
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-background"
              aria-label={t('gallery.previousSlide')}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-background"
              aria-label={t('gallery.nextSlide')}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm w-10 h-10 flex items-center justify-center hover:bg-background transition-colors"
              aria-label={isPlaying ? t('gallery.pauseSlideshow') : t('gallery.playSlideshow')}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-2.5 sm:mt-3 md:mt-4 flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-14 h-10 sm:w-20 sm:h-14 overflow-hidden transition-all duration-300 ${
                  index === currentIndex ? 'ring-2 ring-accent' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-5 md:mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-accent' : 'w-1.5 bg-border hover:bg-muted-foreground/30'
                }`}
                aria-label={`${t('gallery.goToSlide')} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-center">
                <div className="decorative-line" />
              </div>
              <Instagram className="w-10 h-10 mx-auto text-accent" />
              <h2 className="heading-md">{t('gallery.followJourney')}</h2>
              <p className="text-primary-foreground/70">
                {t('gallery.followDescription')}
              </p>
            </div>
            <a
              href="https://www.instagram.com/hairclubfinland/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Instagram className="w-4 h-4" />
              @hairclubfinland
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/98 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-primary-foreground hover:text-accent transition-colors z-10"
              aria-label={t('gallery.closeLightbox')}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 text-primary-foreground/70 text-sm font-medium">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-primary-foreground hover:text-accent transition-colors"
              aria-label={t('gallery.previousImage')}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-primary-foreground hover:text-accent transition-colors"
              aria-label={t('gallery.nextImage')}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={lightboxIndex}
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                custom={direction}
                initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
                transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
                className="max-w-[90vw] max-h-[85vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
