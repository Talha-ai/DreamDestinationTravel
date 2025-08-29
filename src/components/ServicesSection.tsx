import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Camera, 
  Shield,
  Users,
  Star
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  color: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "International Tours",
      description: "Explore the world with our carefully curated international travel packages to exotic destinations.",
      icon: Plane,
      link: "/services/international",
      color: "text-blue-500"
    },
    {
      id: 2,
      title: "Domestic Tours",
      description: "Discover the hidden gems of your own country with our local expertise and insider knowledge.",
      icon: MapPin,
      link: "/services/domestic",
      color: "text-green-500"
    },
    {
      id: 3,
      title: "Educational Tours",
      description: "Enriching educational experiences that combine learning with adventure for students and groups.",
      icon: GraduationCap,
      link: "/services/educational",
      color: "text-purple-500"
    },
    {
      id: 4,
      title: "MICE Tours",
      description: "Professional corporate travel solutions for meetings, incentives, conferences, and events.",
      icon: Briefcase,
      link: "/services/mice",
      color: "text-orange-500"
    },
    {
      id: 5,
      title: "Photography Tours",
      description: "Capture stunning moments with expert-guided photography tours to picturesque locations.",
      icon: Camera,
      link: "/services",
      color: "text-pink-500"
    },
    {
      id: 6,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance coverage to ensure your peace of mind during your journeys.",
      icon: Shield,
      link: "/services",
      color: "text-red-500"
    },
    {
      id: 7,
      title: "Group Tours",
      description: "Specially designed group packages for families, friends, and organizations with custom itineraries.",
      icon: Users,
      link: "/services",
      color: "text-teal-500"
    },
    {
      id: 8,
      title: "Luxury Experiences",
      description: "Premium travel experiences with luxury accommodations, exclusive access, and personalized service.",
      icon: Star,
      link: "/services",
      color: "text-yellow-500"
    }
  ];

  return (
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
            Our <span className="text-gradient-ocean">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From international adventures to domestic discoveries, we offer comprehensive 
            travel services tailored to create your perfect journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link to={service.link}>
                <Card className="h-full border-0 shadow-floating hover:shadow-travel transition-all duration-500 bg-card/90 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:to-secondary/5">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className={`w-8 h-8 ${service.color} group-hover:text-primary transition-colors duration-300`} />
                    </motion.div>

                    <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <motion.div
                      className="mt-4 inline-flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Learn More →
                    </motion.div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-divider mb-8" />
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start planning your next adventure?
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <Link to="/services" className="btn-travel px-8 py-3 rounded-md font-semibold">
              View All Services
            </Link>
            <button 
              onClick={() => window.open('https://wa.me/1234567890?text=I\'d like to know more about your travel services', '_blank')}
              className="btn-sunset px-8 py-3 rounded-md font-semibold"
            >
              Get Free Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;