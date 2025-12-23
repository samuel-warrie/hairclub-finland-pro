interface ServiceListItemProps {
  title: string;
  price: string;
}

const ServiceListItem = ({ title, price }: ServiceListItemProps) => {
  return (
    <div className="group border-b border-border/50 last:border-0 py-4 sm:py-5 hover:bg-secondary/20 transition-colors">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-heading text-lg sm:text-xl font-semibold text-card-foreground">
          {title}
        </h3>
        <span className="font-heading text-xl sm:text-2xl font-bold text-primary whitespace-nowrap">
          {price}
        </span>
      </div>
    </div>
  );
};

export default ServiceListItem;
