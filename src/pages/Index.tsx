import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import ServiceListItem from '@/components/ServiceListItem';
import { featuredServices } from '@/data/services';
import { galleryPreview } from '@/data/gallery';

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay prevented:', error);
      }
    };

    if (video.paused) {
      playVideo();
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[85vh] flex items-center justify-center overflow-hidden pt-8 md:pt-12 lg:pt-16">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            minWidth: '100%',
            minHeight: '100%',
            objectPosition: '30% center',
          }}
          onLoadedData={(e) => {
            e.currentTarget.play().catch(() => {});
          }}
          onError={(e) => {
            setTimeout(() => {
              e.currentTarget.load();
            }, 1000);
          }}
        >
          <source src="https://raw.githubusercontent.com/samuel-warrie/bg-video/main/hairclubfinland.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-primary/70" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-px bg-accent mx-auto"
              />
            </div>

            <h1 className="font-heading font-semibold tracking-tight leading-[0.9] flex flex-col items-center gap-0">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase" style={{ color: '#D4AF7A' }}>
                  HAIR
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase" style={{ color: '#D4AF7A' }}>
                  CLUB
                </span>
              </div>
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-[0.5em] uppercase" style={{ color: '#D4AF7A' }}>
                FINLAND
              </span>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light tracking-[0.3em] uppercase" style={{ color: '#D4AF7A' }}>
                PARTURI-KAMPAAMO
              </span>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light tracking-widest uppercase" style={{ color: '#D4AF7A' }}>
                EST. 2012
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-primary-foreground/70 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg mx-auto font-light px-2"
            >
              Traditional craftsmanship meets contemporary style in the heart of Oulu
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4"
            >
              <Link to="/services" className="btn-primary">
                View Services
              </Link>
              <Link to="/contact" className="btn-outline-light">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background texture-overlay">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex justify-center">
                <div className="decorative-line" />
              </div>
              <span className="label-text">Welcome</span>
              <h2 className="heading-xl">
                Full Service<br />Barber Shop
              </h2>
              <p className="body-lg max-w-2xl mx-auto">
                Located in the heart of Oulu, Hair Club Finland is where classic barbering traditions 
                meet modern styling techniques. With over 15 years of experience, we deliver 
                precision cuts, expert beard grooming, and personalized service.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-medium text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300 group"
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-secondary">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex justify-center">
                <div className="decorative-line" />
              </div>
              <span className="label-text">Our Expertise</span>
              <h2 className="heading-lg">Services</h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50"
          >
            <div className="p-4 sm:p-6 lg:p-8">
              <div>
                {featuredServices.map((service) => (
                  <ServiceListItem
                    key={service.id}
                    title={service.title}
                    price={service.price}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12 md:mt-14"
          >
            <Link to="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex justify-center">
                <div className="decorative-line" />
              </div>
              <span className="label-text">Our Work</span>
              <h2 className="heading-lg">Gallery</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-3 md:gap-4">
            {galleryPreview.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12 md:mt-14"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-accent font-medium text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5 sm:space-y-6 lg:space-y-8"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="decorative-line" />
                <span className="label-text">Find Us</span>
                <h2 className="heading-lg">Location & Hours</h2>
              </div>

              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                <a
                  href="https://maps.google.com/?q=Kajaaninkatu+36,+90100+Oulu,+Finland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 group"
                >
                  <div className="bg-accent w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium mb-1 group-hover:text-accent transition-colors">Address</h3>
                    <p className="text-primary-foreground/70">
                      Kajaaninkatu 36<br />90100 Oulu, Finland
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <div className="bg-accent w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium mb-3">Business Hours</h3>
                    <div className="text-primary-foreground/70 space-y-1 text-xs sm:text-sm">
                      <div className="flex justify-between gap-6 sm:gap-12">
                        <span>Monday – Friday</span>
                        <span>10:00 – 18:00</span>
                      </div>
                      <div className="flex justify-between gap-6 sm:gap-12">
                        <span>Saturday – Sunday</span>
                        <span className="text-destructive/80">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-light/30 border border-primary-foreground/10 p-5 sm:p-6">
                <p className="font-heading text-xl font-medium text-accent mb-2">
                  Walk-ins Welcome
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  Simply drop by during business hours.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/fddc6eb6-d795-4557-b19d-5bc6ef0dcbfd.jpg"
                  alt="Hair Club Finland Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
