import { motion } from 'framer-motion';
import { Award, Users, Heart } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('about.excellence'),
      description: t('about.excellenceDesc'),
    },
    {
      icon: Users,
      title: t('about.community'),
      description: t('about.communityDesc'),
    },
    {
      icon: Heart,
      title: t('about.passion'),
      description: t('about.passionDesc'),
    },
  ];

  return (
    <main>
      <HeroBanner
        title={t('about.ourStory')}
        subtitle={t('about.subtitle')}
        image="/background1.jpg"
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
              className="text-center space-y-6 sm:space-y-8"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-center">
                  <div className="decorative-line" />
                </div>
                <span className="label-text">{t('about.since2012')}</span>
                <h2 className="heading-xl">{t('about.storyTitle')}</h2>
              </div>

              <div className="space-y-6 body-lg text-left">
                <p>{t('about.storyText1')}</p>
                <p>{t('about.storyText2')}</p>
                <p>{t('about.storyText3')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
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
              <span className="label-text">{t('about.whatDrivesUs')}</span>
              <h2 className="heading-lg">{t('about.ourValues')}</h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border/50 p-5 sm:p-6 lg:p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-accent mb-4 sm:mb-6">
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-medium mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              <span className="label-text">{t('about.meetTheExpert')}</span>
              <h2 className="heading-lg">{t('about.ourTeam')}</h2>
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
                  src="/image.png"
                  alt="Kasim Cevirel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="font-heading text-2xl font-medium mb-1">Kasim Cevirel</h3>
                <p className="label-text text-xs mb-6">{t('about.ownerRole')}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('about.ownerBio')}
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
