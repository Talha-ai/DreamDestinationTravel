import React from 'react';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-ocean flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.img
          src={logo}
          alt="Dream Destination Travels"
          className="w-24 h-24 mx-auto mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.h1
          className="text-4xl font-bold text-primary-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Dream Destination
        </motion.h1>
        <motion.p
          className="text-xl text-primary-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Travels
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="w-8 h-8 border-4 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;