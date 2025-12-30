import { motion } from 'framer-motion';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  image: string;
}

const HeroBanner = ({ title, subtitle, image }: HeroBannerProps) => {
  return (
    <section className="relative h-[35vh] sm:h-[40vh] md:h-[45vh] min-h-[260px] sm:min-h-[300px] md:min-h-[360px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20" />
      </div>
    </section>
  );
};

export default HeroBanner;
