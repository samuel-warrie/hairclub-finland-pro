import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';
import ServiceCard from '@/components/ServiceCard';
import { serviceCategories, getServicesByCategory } from '@/data/services';

const Services = () => {
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
                grooming services. Whether you are looking for a quick trim or a complete transformation,
                our expert team is here to bring your vision to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((category, categoryIndex) => {
        const categoryServices = getServicesByCategory(category);
        if (categoryServices.length === 0) return null;

        return (
          <section
            key={category}
            className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}`}
          >
            <div className="container-custom">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 sm:mb-10 md:mb-12"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="decorative-line" />
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold whitespace-nowrap">
                    {category}
                  </h2>
                  <div className="decorative-line flex-1" />
                </div>
              </motion.div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
                {categoryServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    {...service}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

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
