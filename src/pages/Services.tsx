import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';
import ServiceListItem from '@/components/ServiceListItem';
import { serviceCategories, getServicesByCategory } from '@/data/services';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);
  const currentServices = getServicesByCategory(activeCategory);

  return (
    <main>
      <HeroBanner
        title="Our Services"
        subtitle="Expert grooming tailored to your style"
        image="/background1.jpg"
      />

      {/* Intro Section */}
      <section className="section-padding-sm bg-background border-b border-border/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex justify-center">
                <div className="decorative-line" />
              </div>
              <span className="label-text">What We Offer</span>
              <h2 className="heading-lg">Complete Grooming Services</h2>
              <p className="body-md">
                From classic cuts to modern styling, we offer a comprehensive range of professional
                grooming services. Browse our services by category below.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Tabs */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl">
          {/* Category Navigation */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    px-4 sm:px-6 py-2.5 sm:py-3 font-heading font-medium text-sm sm:text-base
                    transition-all duration-300
                    ${
                      activeCategory === category
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Services List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border/50"
            >
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="mb-6 sm:mb-8">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-card-foreground">
                    {activeCategory}
                  </h3>
                  <div className="decorative-line mt-3" />
                </div>

                <div>
                  {currentServices.map((service) => (
                    <ServiceListItem key={service.id} {...service} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-center">
                <div className="decorative-line" />
              </div>
              <h2 className="heading-lg">Ready for Your Perfect Look?</h2>
              <p className="text-primary-foreground/70 text-lg">
                Walk in anytime during our business hours. No appointment needed —
                just come in and let our experts take care of you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+358458961423" className="btn-primary">
                <Phone className="w-4 h-4" />
                045 896 1423
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
