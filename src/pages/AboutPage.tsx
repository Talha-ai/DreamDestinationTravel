import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart, Shield, Star } from 'lucide-react';
import StatsCounter from '@/components/StatsCounter';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import aboutHero from '@/assets/about-hero.jpg';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description:
        'We live and breathe travel, bringing genuine enthusiasm to every journey we plan.',
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description:
        "Your safety and satisfaction are our top priorities. We're here for you 24/7.",
    },
    {
      icon: Star,
      title: 'Excellence in Service',
      description:
        'We go above and beyond to deliver exceptional experiences that exceed expectations.',
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description:
        'With partners worldwide, we offer insider knowledge and authentic local experiences.',
    },
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face',
      description:
        'With 15+ years in the travel industry, Sarah founded Dream Destination to make travel accessible and unforgettable for everyone.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Operations',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description:
        'Michael ensures every trip runs smoothly with his expertise in logistics and his passion for customer service.',
    },
    {
      name: 'Emily Chen',
      role: 'Travel Specialist',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description:
        'Emily crafts personalized itineraries with her deep knowledge of Asian cultures and destinations.',
    },
    {
      name: 'David Thompson',
      role: 'Adventure Guide',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description:
        'David leads our adventure tours with his extensive experience in outdoor activities and safety protocols.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="About Dream Destination Travels"
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
              About <span className="text-gradient-sunset">Our Story</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-primary-foreground/90">
              Passionate about creating extraordinary travel experiences that
              inspire, educate, and connect people with the world's most amazing
              destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-gradient-ocean">Journey</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Dream Destination Travels is a leading travel
                  management company based in Bhopal, India. With a dedicated
                  team of experienced professionals, we specialize in
                  tailor-made domestic and international tour packages designed
                  to deliver quality, flexibility, and memorable experiences.
                </p>
                <p>
                  We operate exclusively on a B2B model, partnering with travel
                  agents under a white-label approach to ensure their guests
                  feel supported throughout their journey. With operational
                  offices in Siliguri, Port Blair, and Guwahati (soon expanding
                  to Cochin and Bhutan), we provide strong on-ground
                  infrastructure, seamless accommodations, transport, and
                  personalized care.
                </p>
                <p>
                  Our motto, “Quality for the Discerning Traveler,” reflects our
                  commitment to safety, reliability, and innovation. At Dream
                  Destination Travels, we don’t just plan trips — we create
                  journeys that inspire and delight.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-gradient-ocean p-6 rounded-lg text-primary-foreground text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Award Winning</h3>
                  <p className="text-sm">Awards if any</p>
                </div>
                <div className="bg-gradient-sunset p-6 rounded-lg text-secondary-foreground text-center">
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Expert Team</h3>
                  <p className="text-sm">25+ Travel Specialists</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-accent p-6 rounded-lg text-accent-foreground text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Global Reach</h3>
                  <p className="text-sm">30+ Countries Covered</p>
                </div>
                <div className="bg-primary p-6 rounded-lg text-primary-foreground text-center">
                  <Heart className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Happy Clients</h3>
                  <p className="text-sm">7500+ Satisfied Travelers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient-sunset">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape every journey
              we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-card p-6 rounded-lg shadow-floating hover:shadow-travel transition-all duration-300 text-center card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-ocean rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
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
              Meet Our <span className="text-gradient-ocean">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate travel experts dedicated to making your journey
              extraordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover shadow-travel"
                  />
                  <div className="absolute inset-0 bg-gradient-hero rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Testimonials */}
      <TestimonialsCarousel />
    </div>
  );
};

export default AboutPage;
