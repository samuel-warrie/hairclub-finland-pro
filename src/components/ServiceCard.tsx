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
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card border border-border/50 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-44 sm:h-52 lg:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80" />
        
        {/* Icon Badge */}
        <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-accent w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
        </div>
        
        {/* Price Badge */}
        <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
          <span className="text-primary-foreground font-heading text-xl sm:text-2xl font-semibold">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
        <h3 className="font-heading text-lg sm:text-xl font-semibold text-card-foreground">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
        
        <a
          href="tel:+358458961423"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-accent hover:text-accent/80 transition-colors group/btn"
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Call to Book</span>
          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
