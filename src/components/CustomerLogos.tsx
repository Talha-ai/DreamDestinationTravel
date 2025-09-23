import React from 'react';
import { motion } from 'framer-motion';

const CustomerLogos = () => {
  const logos = [
    { name: 'Silver Coin', logo: '🏢' },
    { name: 'SBI Employees', logo: '💻' },
    { name: 'Shree guruji', logo: '🎓' },
    // { name: 'Future Works', logo: '🚀' },
    // { name: 'Creative Studios', logo: '🎨' },
  ];

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-muted-foreground mb-2 text-center">
          Trusted by Leading Organizations
        </h3>
        <p className="text-muted-foreground text-center mb-8">
          Join thousands of satisfied customers who trust us with their travel
          needs
        </p>

        {/* Looping logos */}
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex space-x-12"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              ease: 'linear',
              duration: 15,
              repeat: Infinity,
            }}
          >
            {/* Duplicate list so it loops smoothly */}
            {[...logos, ...logos, ...logos, ...logos].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-3xl">{company.logo}</span>
                <span className="font-medium text-lg whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
