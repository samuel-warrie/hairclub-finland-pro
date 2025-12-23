import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

const Services = () => {
  return (
    <main>
      <HeroBanner
        title="Our Services"
        subtitle="Expert grooming tailored to your style"
        image="/background1.jpg"
      />

      {/* Services Grid */}
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
              <span className="label-text">What We Offer</span>
              <h2 className="heading-lg">Full Service Menu</h2>
              <p className="body-md max-w-2xl mx-auto">
                From classic cuts to modern styling, we offer a complete range of grooming services 
                for every need and occasion.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                index={index}
              />
            ))}
          </div>
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
