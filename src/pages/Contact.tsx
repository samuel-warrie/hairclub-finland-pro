import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import HeroBanner from '@/components/HeroBanner';
import { services } from '@/data/services';
import { servicesTranslations } from '@/data/servicesTranslations';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(t('contact.successTitle'), {
      description: t('contact.successDesc'),
    });

    setFormData({ name: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <main>
      <HeroBanner
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        image="/background1.jpg"
      />

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5 sm:space-y-6 lg:space-y-8"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="decorative-line" />
                <span className="label-text">{t('contact.getInTouch')}</span>
                <h2 className="heading-lg">{t('contact.visitShop')}</h2>
                <p className="body-md max-w-md">
                  {t('contact.description')}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {/* Location */}
                <a
                  href="https://maps.google.com/?q=Kajaaninkatu+36,+90100+Oulu,+Finland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 p-5 bg-secondary/50 border border-border/50 transition-all duration-300 hover:border-accent/30 hover:bg-secondary group"
                >
                  <div className="bg-accent w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-medium mb-1 group-hover:text-accent transition-colors">
                      {t('contact.location')}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Kajaaninkatu 36<br />
                      90100 Oulu, Finland
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent text-xs mt-3 font-medium">
                      {t('contact.viewOnMap')} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-5 p-5 bg-secondary/50 border border-border/50">
                  <div className="bg-accent w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-medium mb-3">{t('contact.businessHours')}</h3>
                    <div className="space-y-2 text-sm">
                      {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
                        <div key={day} className="flex justify-between text-muted-foreground">
                          <span>{t(`contact.${day}`)}</span>
                          <span>10:00 – 18:00</span>
                        </div>
                      ))}
                      <div className="flex justify-between text-muted-foreground pt-2 border-t border-border">
                        <span>{t('contact.saturday')} – {t('contact.sunday')}</span>
                        <span className="text-destructive">{t('contact.closed')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card border border-border p-5 sm:p-6 md:p-8">
                <div className="space-y-2 mb-6 sm:mb-8">
                  <h3 className="heading-sm">{t('contact.sendMessage')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.formDescription')}
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium tracking-wider uppercase mb-2 text-muted-foreground">
                        {t('contact.fullName')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder={t('contact.yourName')}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium tracking-wider uppercase mb-2 text-muted-foreground">
                        {t('contact.phoneNumber')} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder={t('contact.yourPhone')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-medium tracking-wider uppercase mb-2 text-muted-foreground">
                      {t('contact.serviceInterest')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="input-field appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%23999%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_1rem_center] bg-[length:1rem]"
                    >
                      <option value="">{t('contact.selectService')}</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {servicesTranslations[language].services[service.title] || service.title} – {service.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium tracking-wider uppercase mb-2 text-muted-foreground">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="input-field resize-none"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      t('contact.sending')
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t('contact.sendButton')}
                      </>
                    )}
                  </button>
                </form>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
