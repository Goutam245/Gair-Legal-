import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const CountUp = ({ end, suffix = "", label, duration = 2 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-gold mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm tracking-[0.15em] uppercase text-primary-foreground/50 font-body">{label}</div>
    </motion.div>
  );
};

export default CountUp;
