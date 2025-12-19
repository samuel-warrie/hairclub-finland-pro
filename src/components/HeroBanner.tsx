import { motion } from 'framer-motion';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  image: string;
}

const HeroBanner = ({ title, subtitle, image }: HeroBannerProps) => {
  return (
    <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[280px] sm:min-h-[320px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 sm:space-y-4"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="decorative-line" />
          </div>
          <h1 className="heading-display text-primary-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-primary-foreground/70 font-light px-4">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
