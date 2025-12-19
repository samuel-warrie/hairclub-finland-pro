import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

const Services = () => {
  return (
    <main>
      <HeroBanner
        title="Our Services"
        subtitle="Expert grooming tailored to your style"
        image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
      />

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="label-text"
            >
              What We Offer
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg mt-4"
            >
              Full Service Menu
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              From classic cuts to modern styling, we offer a complete range of grooming services 
              for every need and occasion.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="heading-lg">Ready for Your Perfect Look?</h2>
            <p className="text-muted-foreground text-lg">
              Walk in anytime during our business hours. No appointment needed – 
              just come in and let our experts take care of you.
            </p>
            <a
              href="tel:+358458961423"
              className="inline-flex items-center gap-2 btn-gold text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now: 045 8961423
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
