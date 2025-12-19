import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { featuredServices } from '@/data/services';
import { galleryPreview } from '@/data/gallery';

const Index = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80"
          >
            <source
              src="https://videos.pexels.com/video-files/3998601/3998601-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-px bg-accent mx-auto"
              />
              <p className="label-text">Parturi • Kampaamo</p>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-primary-foreground tracking-tight leading-[0.9]">
              HAIR CLUB
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mt-1 sm:mt-2 tracking-wide">Finland</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-primary-foreground/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-lg mx-auto font-light px-4"
            >
              Traditional craftsmanship meets contemporary style in the heart of Oulu
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4"
            >
              <a href="tel:+358458961423" className="btn-primary">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link to="/services" className="btn-outline-light">
                View Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="inline-block bg-accent/90 px-4 sm:px-5 py-1.5 sm:py-2"
            >
              <span className="text-[10px] sm:text-xs font-medium text-accent-foreground uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                Walk-in Service
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-primary-foreground/50"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] mb-3">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
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
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex justify-center">
                <div className="decorative-line" />
              </div>
              <span className="label-text">Our Expertise</span>
              <h2 className="heading-lg">Services</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex justify-center">
                <div className="decorative-line" />
              </div>
              <span className="label-text">Our Work</span>
              <h2 className="heading-lg">Gallery</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
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
            className="text-center mt-14"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8 lg:space-y-10"
            >
              <div className="space-y-4">
                <div className="decorative-line" />
                <span className="label-text">Find Us</span>
                <h2 className="heading-lg">Location & Hours</h2>
              </div>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
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

              <div className="bg-charcoal-light/30 border border-primary-foreground/10 p-6">
                <p className="font-heading text-xl font-medium text-accent mb-2">
                  Walk-ins Welcome
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  No appointment needed. Simply drop by during business hours.
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
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
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
