import { Phone } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceListItemProps {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
}

const ServiceListItem = ({ title, description, price, icon: Icon }: ServiceListItemProps) => {
  return (
    <div className="group border-b border-border/50 last:border-0 py-5 sm:py-6 hover:bg-secondary/20 transition-colors">
      <div className="flex items-start gap-4 sm:gap-6">
        <div className="flex-shrink-0 bg-accent w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
            <h3 className="font-heading text-lg sm:text-xl font-semibold text-card-foreground">
              {title}
            </h3>
            <span className="font-heading text-xl sm:text-2xl font-bold text-primary whitespace-nowrap">
              {price}
            </span>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">
            {description}
          </p>

          <a
            href="tel:+358458961423"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group/btn"
          >
            <Phone className="w-4 h-4" />
            <span>Call to Book</span>
            <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceListItem;
