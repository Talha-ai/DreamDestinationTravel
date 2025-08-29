import React from 'react';
import { motion } from 'framer-motion';

const CustomerLogos = () => {
  // Sample customer/partner logos (using placeholder company names)
  const logos = [
    { name: "Global Corp", logo: "🏢" },
    { name: "TechStart", logo: "💻" },
    { name: "EduWorld", logo: "🎓" },
    { name: "Adventure Co", logo: "🌟" },
    { name: "Business Plus", logo: "📊" },
    { name: "Creative Studios", logo: "🎨" },
    { name: "Future Works", logo: "🚀" },
    { name: "Innovation Hub", logo: "💡" },
  ];

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
            Trusted by Leading Organizations
          </h3>
          <p className="text-muted-foreground">
            Join thousands of satisfied customers who trust us with their travel needs
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12 items-center justify-center"
            animate={{
              x: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0.6 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-3xl">{company.logo}</span>
                <span className="font-medium text-lg whitespace-nowrap">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            Want to become our partner? 
            <motion.a
              href="/b2b"
              className="ml-2 text-primary hover:text-secondary transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Learn about our B2B services →
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerLogos;