import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats: StatItem[] = [
    { value: 7500, label: 'Happy Clients', suffix: '+' },
    { value: 30, label: 'Countries Covered', suffix: '+' },
    { value: 500, label: 'Tour Packages', suffix: '+' },
    { value: 15, label: 'Years Experience', suffix: '+' },
  ];

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const AnimatedNumber = ({
    value,
    suffix = '',
  }: {
    value: number;
    suffix?: string;
  }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (!hasAnimated) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [value, hasAnimated]);

    return (
      <span className="text-gradient-ocean">
        {displayValue.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={ref} className=" py-16 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
