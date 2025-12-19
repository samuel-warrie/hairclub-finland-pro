import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
  image: string;
  index?: number;
}

const ServiceCard = ({ title, description, price, icon: Icon, image, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-card shadow-md card-hover"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        
        {/* Icon Badge */}
        <div className="absolute top-4 right-4 bg-accent p-3 rounded-full shadow-gold">
          <Icon className="w-5 h-5 text-accent-foreground" />
        </div>
        
        {/* Price Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="text-primary-foreground font-heading text-xl font-bold">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-heading text-xl font-semibold text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        
        <a
          href="tel:+358458961423"
          className="inline-flex items-center gap-2 btn-gold text-sm w-full justify-center"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
