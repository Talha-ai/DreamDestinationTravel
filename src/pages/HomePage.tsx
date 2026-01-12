import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronDown, Globe, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsCounter from '@/components/StatsCounter';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FeaturedPackages from '@/components/FeaturedPackages';
import ServicesSection from '@/components/ServicesSection';
import CustomerLogos from '@/components/CustomerLogos';
import heroImage from '@/assets/hero-travel.jpg';
import herovideo from '../assets/dreamdestination_herosection.mp4';

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/7683931222?text=Hello! I'm interested in planning my next adventure with Dream Destination Travels.",
      '_blank'
    );
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (type) => {
    setShowDropdown(false);
    // Navigate to packages page with filter
    window.location.href = `/services/${type}`;
  };

  const handleWatchStory = () => {
    // Navigate to videos/gallery page
    window.location.href = '/videos-gallery';
  };

  // return (
  //   <div className="min-h-screen">
  //     {/* Hero Section */}
  //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  //       {/* Background Image */}
  //       <div className="absolute inset-0">
  //         {/* <img
  //           src={heroImage}
  //           alt="Dream Destination Travels"
  //           className="w-full h-full object-cover"
  //         /> */}
  //         <video
  //           src={herovideo}
  //           autoPlay={true}
  //           loop={true}
  //           muted={true}
  //           playsInline
  //           className="w-full h-full object-cover"
  //         />
  //         <div className="absolute inset-0 hero-gradient" />
  //         <div className="absolute inset-0 hero-pattern" />
  //       </div>
  //       {/* Hero Content */}
  //       <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
  //         <motion.div
  //           initial={{ opacity: 0, y: 50 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 1, delay: 0.5 }}
  //         >
  //           <motion.h1
  //             className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
  //             initial={{ opacity: 0, scale: 0.8 }}
  //             animate={{ opacity: 1, scale: 1 }}
  //             transition={{ duration: 1.2, delay: 0.7 }}
  //           >
  //             Discover Your
  //             <br />
  //             <span className="text-gradient-sunset">Dream Destination</span>
  //           </motion.h1>

  //           <motion.p
  //             className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-primary-foreground/90"
  //             initial={{ opacity: 0, y: 30 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.8, delay: 1 }}
  //           >
  //             Embark on extraordinary journeys with our expertly curated travel
  //             experiences. From exotic international destinations to hidden
  //             local gems, we make your travel dreams come true.
  //           </motion.p>

  //           <motion.div
  //             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
  //             initial={{ opacity: 0, y: 30 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.8, delay: 1.2 }}
  //           >
  //             {/* Start Your Journey Button with Dropdown */}
  //             <div className="relative">
  //               <Button
  //                 variant="hero"
  //                 size="lg"
  //                 onClick={handleDropdownToggle}
  //                 aria-haspopup="true"
  //                 aria-expanded={showDropdown}
  //                 className="group flex items-center"
  //               >
  //                 Start Your Journey
  //                 <motion.div
  //                   className="ml-2"
  //                   animate={{ rotate: showDropdown ? 180 : 0 }}
  //                   transition={{ duration: 0.2 }}
  //                 >
  //                   <ChevronDown className="w-5 h-5" />
  //                 </motion.div>
  //               </Button>

  //               {/* Dropdown Menu */}
  //               <AnimatePresence>
  //                 {showDropdown && (
  //                   <motion.div
  //                     initial={{ opacity: 0, y: -8, scale: 0.97 }}
  //                     animate={{ opacity: 1, y: 0, scale: 1 }}
  //                     exit={{ opacity: 0, y: -8, scale: 0.97 }}
  //                     transition={{ duration: 0.25, ease: 'easeOut' }}
  //                     className={`absolute bottom-12 left-1/8 md:left-1/2 -translate-x-1/2 mt-2 w-72 
  //             bg-white/95 backdrop-blur-md rounded-xl 
  //             shadow-xl border border-gray-200 
  //             overflow-hidden z-[9999]`}
  //                     role="menu"
  //                   >
  //                     <div className="divide-y divide-gray-100">
  //                       {/* Option Item */}
  //                       <button
  //                         onClick={() => handleOptionSelect('international')}
  //                         role="menuitem"
  //                         className="w-full flex items-center gap-3 px-6 py-4 text-left transition-colors duration-200 hover:bg-primary/10 focus:bg-primary/10 focus:outline-none group"
  //                       >
  //                         <Globe className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
  //                         <div className="flex flex-col">
  //                           <span className="font-semibold text-gray-800">
  //                             International Packages
  //                           </span>
  //                           <span className="text-sm text-gray-600">
  //                             Explore worldwide destinations
  //                           </span>
  //                         </div>
  //                         <ArrowRight className="w-4 h-4 ml-auto text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
  //                       </button>

  //                       <button
  //                         onClick={() => handleOptionSelect('domestic')}
  //                         role="menuitem"
  //                         className="w-full flex items-center gap-3 px-6 py-4 text-left transition-colors duration-200 hover:bg-primary/10 focus:bg-primary/10 focus:outline-none group"
  //                       >
  //                         <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
  //                         <div className="flex flex-col">
  //                           <span className="font-semibold text-gray-800">
  //                             Domestic Packages
  //                           </span>
  //                           <span className="text-sm text-gray-600">
  //                             Discover local hidden gems
  //                           </span>
  //                         </div>
  //                         <ArrowRight className="w-4 h-4 ml-auto text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
  //                       </button>
  //                     </div>
  //                   </motion.div>
  //                 )}
  //               </AnimatePresence>
  //             </div>

  //             <Button
  //               variant="glass"
  //               size="lg"
  //               className="group text-white"
  //               onClick={handleWatchStory}
  //             >
  //               <Play className="w-5 h-5 mr-2" />
  //               Watch Our Story
  //             </Button>
  //           </motion.div>
  //         </motion.div>

  //         {/* Floating Elements */}
  //         <motion.div
  //           className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full"
  //           animate={{
  //             y: [0, -20, 0],
  //             rotate: [0, 180, 360],
  //           }}
  //           transition={{
  //             duration: 6,
  //             repeat: Infinity,
  //             ease: 'easeInOut',
  //           }}
  //         />
  //         <motion.div
  //           className="absolute bottom-40 right-16 w-16 h-16 bg-primary/20 rounded-full"
  //           animate={{
  //             y: [0, 20, 0],
  //             rotate: [360, 180, 0],
  //           }}
  //           transition={{
  //             duration: 8,
  //             repeat: Infinity,
  //             ease: 'easeInOut',
  //           }}
  //         />
  //       </div>
  //     </section>

  //     {/* Stats Counter */}
  //     <StatsCounter />

  //     {/* Services Section */}
  //     <ServicesSection />

  //     {/* Featured Packages */}
  //     <div id="featured-packages">
  //       <FeaturedPackages />
  //     </div>

  //     {/* Customer Logos */}
  //     <CustomerLogos />

  //     {/* Testimonials */}
  //     <TestimonialsCarousel />

  //     {/* CTA Section */}
  //     <section className="py-16 bg-gradient-ocean text-primary-foreground">
  //       <div className="container mx-auto px-4 text-center">
  //         <motion.div
  //           initial={{ opacity: 0, y: 30 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.8 }}
  //           viewport={{ once: true }}
  //         >
  //           <h2 className="text-4xl font-bold mb-4">
  //             Ready to Create Unforgettable Memories?
  //           </h2>
  //           <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
  //             Let our travel experts design the perfect journey for you. Contact
  //             us today for a free consultation and start planning your dream
  //             vacation.
  //           </p>
  //           <motion.div
  //             className="flex flex-col sm:flex-row gap-4 justify-center"
  //             whileHover={{ scale: 1.02 }}
  //           >
  //             <Button
  //               variant="secondary"
  //               size="lg"
  //               onClick={handleWhatsAppClick}
  //               className="group"
  //             >
  //               Get Free Consultation
  //               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
  //             </Button>
  //             <Button variant="glass" size="lg" asChild>
  //               <a href="/services" className="text-white">
  //                 Browse All Packages
  //               </a>
  //             </Button>
  //           </motion.div>
  //         </motion.div>
  //       </div>
  //     </section>
  //   </div>
  // );
return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* <h1 className="text-4xl font-bold mb-4">404</h1> */}
        <p className="text-xl text-gray-600 mb-4">Coming soon!</p>
        {/* <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a> */}
      </div>
    </div>
  );
};

export default HomePage;
