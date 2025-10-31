import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Plane,
  MapPin,
  GraduationCap,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ServicesSection from '@/components/ServicesSection';
import servicesHero from '@/assets/services-hero.jpg';

const ServicesPage = () => {
  const mainServices = [
    {
      title: 'International Tours',
      description:
        'Explore exotic destinations across the globe with our expertly crafted international tour packages.',
      link: '/services/international',
      icon: Plane,
      image:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop',
    },
    {
      title: 'Domestic Tours',
      description:
        'Discover the hidden gems and cultural treasures within your own country.',
      link: '/services/domestic',
      icon: MapPin,
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    },
    {
      title: 'Educational Tours',
      description:
        'Combine learning with adventure through our comprehensive educational travel programs.',
      link: '/services/educational',
      icon: GraduationCap,
      image:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop',
    },
    {
      title: 'MICE Tours',
      description:
        'Professional corporate travel solutions for meetings, incentives, conferences, and events.',
      link: '/services/mice',
      icon: Briefcase,
      image:
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={servicesHero}
            alt="Our Travel Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient-sunset">Services</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-primary-foreground/90">
              From international adventures to corporate travel solutions, we
              offer comprehensive services to make every journey extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Carousel */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-gradient-ocean">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our specialized travel services designed to cater to
              every type of traveler.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={service.link}>
                  <Card className="overflow-hidden border-0 shadow-floating hover:shadow-travel transition-all duration-500 bg-card/90 backdrop-blur-sm h-full">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </motion.div>
                    </div>

                    <CardContent className="p-8">
                      <h3 className="font-bold text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <motion.div
                        className="flex items-center text-primary font-semibold group-hover:text-secondary transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <ServicesSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-sunset text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Plan Your Perfect Trip?
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
              Our travel experts are standing by to help you create an
              unforgettable journey tailored to your preferences and budget.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/7683931222?text=I'd like to discuss my travel plans",
                    '_blank'
                  )
                }
                className="group bg-gradient-sunset border-2 border-white"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                asChild
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
              >
                <a href="/contact">Contact Us</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
