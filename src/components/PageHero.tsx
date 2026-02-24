import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ image, title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-black/80 via-navy-black/60 to-navy-black/85" />
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-xl text-primary-foreground mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="body-lg text-gold-light max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="gold-divider mt-8"
        />
      </div>
    </section>
  );
};

export default PageHero;
