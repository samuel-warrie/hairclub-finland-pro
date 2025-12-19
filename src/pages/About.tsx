import { motion } from 'framer-motion';
import { Award, Users, Heart } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue perfection in every cut, every style, and every interaction with our clients.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'More than a barbershop — a gathering place where everyone feels welcome and valued.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for the craft drives us to continuously learn and improve our skills.',
    },
  ];

  return (
    <main>
      <HeroBanner
        title="Our Story"
        subtitle="Where tradition meets modern style"
        image="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80"
      />

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="decorative-line" />
                </div>
                <span className="label-text">Since 2010</span>
                <h2 className="heading-xl">The Hair Club Story</h2>
              </div>
              
              <div className="space-y-6 body-lg text-left">
                <p>
                  Located in central Oulu, Hair Club Finland blends classic barber traditions 
                  with modern trends. Our shop is more than just a place to get a haircut — it's 
                  a sanctuary where craftsmanship meets community.
                </p>
                <p>
                  Founded with a vision to bring world-class grooming services to the heart 
                  of Finland, we've built our reputation on attention to detail, personalized 
                  service, and an unwavering commitment to making every client look and feel 
                  their absolute best.
                </p>
                <p>
                  Whether you're looking for a classic cut, a modern fade, or expert beard 
                  styling, our team brings years of experience and passion to every service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              <span className="label-text">What Drives Us</span>
              <h2 className="heading-lg">Our Values</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border/50 p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent mb-6">
                  <value.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-medium mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              <span className="label-text">Meet the Expert</span>
              <h2 className="heading-lg">Our Team</h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-card border border-border/50 overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Kasim Cevirelin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-heading text-2xl font-medium mb-1">Kasim Cevirelin</h3>
                <p className="label-text text-xs mb-6">Owner & Master Barber</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With over 15 years of experience in the industry, Kasim brings unparalleled 
                  expertise and passion to every haircut. His dedication to the craft and 
                  commitment to client satisfaction has made Hair Club Finland a destination 
                  for those seeking the best in grooming services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
