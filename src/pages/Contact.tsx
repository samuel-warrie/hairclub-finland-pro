import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import HeroBanner from '@/components/HeroBanner';
import { services } from '@/data/services';

const Contact = () => {
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Request sent!', {
      description: 'We will get back to you soon. For immediate service, please call us directly.',
    });

    setFormData({ name: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <main>
      <HeroBanner
        title="Contact Us"
        subtitle="We'd love to hear from you"
        image="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1920&q=80"
      />

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="label-text">Get In Touch</span>
                <h2 className="heading-lg mt-4">Contact Information</h2>
                <p className="text-muted-foreground mt-4">
                  Have questions? We're here to help. Reach out through any of the channels below 
                  or simply walk in during our business hours.
                </p>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <a
                  href="https://maps.google.com/?q=Kajaaninkatu+36,+90100+Oulu,+Finland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl card-hover group"
                >
                  <div className="bg-accent p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">Location</h3>
                    <p className="text-muted-foreground">
                      Kajaaninkatu 36<br />
                      90100 Oulu, Finland
                    </p>
                    <span className="text-accent text-sm mt-2 inline-block">View on Google Maps →</span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+358458961423"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl card-hover group"
                >
                  <div className="bg-accent p-3 rounded-full">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">Phone</h3>
                    <p className="text-muted-foreground text-lg">045 8961423</p>
                    <span className="text-accent text-sm mt-2 inline-block">Tap to call →</span>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl">
                  <div className="bg-accent p-3 rounded-full">
                    <Clock className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1 mt-2">
                      <div className="flex justify-between gap-8">
                        <span>Monday</span>
                        <span>10:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Tuesday</span>
                        <span>10:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Wednesday</span>
                        <span>10:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Thursday</span>
                        <span>10:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Friday</span>
                        <span>10:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between gap-8 text-destructive">
                        <span>Saturday - Sunday</span>
                        <span>Closed</span>
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
            >
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="font-heading text-2xl font-semibold mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                      placeholder="Any special requests or questions?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                  </button>
                </form>

                <div className="mt-6 p-4 bg-secondary rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">
                    Prefer to call directly?
                  </p>
                  <a
                    href="tel:+358458961423"
                    className="text-accent font-semibold text-lg hover:underline"
                  >
                    045 8961423
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
