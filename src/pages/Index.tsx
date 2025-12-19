import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Phone, MapPin, Clock, Scissors, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { featuredServices } from '@/data/services';
import { galleryPreview } from '@/data/gallery';

const Index = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center">
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
          <div className="overlay-gradient" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30"
            >
              <Scissors className="w-10 h-10 text-accent" />
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground tracking-tight">
              HAIR CLUB
            </h1>
            
            <p className="label-text text-lg">PARTURI - KAMPAAMO</p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-block bg-accent px-6 py-2 rounded-full"
            >
              <span className="font-semibold text-accent-foreground uppercase tracking-wider text-sm">
                Walk-in Service!
              </span>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="tel:+358458961423" className="btn-gold text-lg">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now
              </a>
              <Link to="/services" className="btn-outline-gold text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-primary-foreground/60"
          >
            <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Full Service Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label-text"
            >
              Welcome
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg mt-4 mb-6"
            >
              Full Service Barber Shop
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              Located in the heart of Oulu, Hair Club Finland is where classic barbering traditions 
              meet modern styling techniques. With over 15 years of experience, we deliver 
              precision cuts, expert beard grooming, and personalized service in a welcoming atmosphere.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label-text"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg mt-4"
            >
              Featured Services
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 btn-gold"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label-text"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg mt-4"
            >
              Gallery
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreview.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="label-text">Find Us</span>
                <h2 className="heading-lg mt-4">Location & Hours</h2>
              </div>

              <div className="space-y-6">
                <a
                  href="https://maps.google.com/?q=Kajaaninkatu+36,+90100+Oulu,+Finland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-accent p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">Address</h3>
                    <p className="text-muted-foreground">Kajaaninkatu 36<br />90100 Oulu, Finland</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1 mt-2">
                      <div className="flex justify-between gap-8">
                        <span>Monday - Friday</span>
                        <span>10:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Saturday - Sunday</span>
                        <span className="text-destructive">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-light/50 p-6 rounded-xl">
                <p className="text-xl font-heading font-semibold text-accent">
                  Walk-ins Welcome!
                </p>
                <p className="text-muted-foreground mt-2">
                  No appointment needed. Just drop by during business hours.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
                alt="Hair Club Finland Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
