import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingButtons = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/9301931222?text=Hello! I'm interested in your travel services.",
      '_blank'
    );
  };

  const handleB2BClick = () => {
    window.open('/b2b', '_self');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        className="floating-whatsapp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-floating hover:shadow-glow transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* B2B Button */}
      {/* <motion.div
        className="floating-b2b"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={handleB2BClick}
          className="w-14 h-14 rounded-full bg-gradient-sunset hover:shadow-glow transition-all duration-300 shadow-floating"
          aria-label="B2B Services"
        >
          <Briefcase className="w-6 h-6" />
        </Button>
      </motion.div> */}
    </>
  );
};

export default FloatingButtons;
