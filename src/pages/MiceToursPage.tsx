import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, Globe, Award, Shield, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MiceToursPage = () => {
  const services = [
    {
      id: 1,
      title: "Corporate Meetings",
      icon: Briefcase,
      description: "Professional meeting spaces and comprehensive logistics for your business gatherings.",
      features: ["Venue Selection", "AV Equipment", "Catering", "Transportation"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Incentive Travel",
      icon: Award,
      description: "Reward your top performers with unforgettable incentive trips that motivate and inspire.",
      features: ["Luxury Accommodations", "Exclusive Experiences", "Team Activities", "Recognition Events"],
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=500&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Conferences & Conventions",
      icon: Users,
      description: "Large-scale event management for conferences, conventions, and industry gatherings.",
      features: ["Convention Centers", "Registration Management", "Speaker Coordination", "Networking Events"],
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Corporate Events",
      icon: Calendar,
      description: "Special corporate events, product launches, and company celebrations.",
      features: ["Event Planning", "Brand Integration", "Entertainment", "Media Coordination"],
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&h=400&fit=crop"
    }
  ];

  const destinations = [
    {
      name: "Singapore",
      description: "Modern facilities and strategic location make it perfect for international conferences.",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300&h=200&fit=crop"
    },
    {
      name: "Dubai",
      description: "World-class venues and luxury accommodations for premium corporate events.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=200&fit=crop"
    },
    {
      name: "Barcelona",
      description: "Rich culture and excellent infrastructure for memorable business gatherings.",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=300&h=200&fit=crop"
    },
    {
      name: "Tokyo",
      description: "Innovation hub with cutting-edge technology and professional services.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=200&fit=crop"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Productivity",
      description: "Strategic locations and environments that enhance focus and creativity."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to premium venues and services in major business destinations worldwide."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive planning and contingency measures for seamless execution."
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Streamlined processes and dedicated support to maximize your event ROI."
    }
  ];

  const packages = [
    {
      title: "Executive Retreat",
      duration: "3-5 Days",
      groupSize: "10-20 Executives",
      price: "From $3,500 per person",
      features: ["Luxury Resort", "Private Meeting Rooms", "Gourmet Dining", "Team Activities"]
    },
    {
      title: "Annual Conference",
      duration: "2-4 Days",
      groupSize: "100-500 Attendees",
      price: "Custom Pricing",
      features: ["Convention Center", "Registration System", "Catering", "AV Support"]
    },
    {
      title: "Incentive Trip",
      duration: "5-7 Days",
      groupSize: "20-50 Winners",
      price: "From $4,200 per person",
      features: ["5-Star Hotels", "Exclusive Tours", "Awards Ceremony", "Cultural Experiences"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Briefcase className="w-10 h-10 text-secondary-foreground" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              MICE <span className="text-gradient-sunset">Services</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
              Professional corporate travel solutions for Meetings, Incentives, Conferences, 
              and Events that drive business success and team excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our <span className="text-gradient-ocean">MICE Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive corporate event solutions tailored to your business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-floating hover:shadow-travel transition-all duration-500 bg-card/90 backdrop-blur-sm h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
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

                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose <span className="text-gradient-sunset">Our MICE Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full text-center border-0 shadow-floating hover:shadow-travel transition-all duration-300 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-ocean rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
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
              Popular <span className="text-gradient-ocean">MICE Destinations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              World-class destinations with exceptional facilities for corporate events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-floating hover:shadow-travel transition-all duration-300 bg-card/90 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-32 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {destination.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {destination.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Options */}
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
              MICE <span className="text-gradient-sunset">Package Options</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible packages designed to meet various corporate needs and budgets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full border-0 shadow-floating hover:shadow-travel transition-all duration-500 bg-card/90 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-gradient-ocean">
                      {pkg.title}
                    </CardTitle>
                    <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Group Size:</span>
                        <span className="font-medium">{pkg.groupSize}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="travel" 
                      className="w-full"
                      onClick={() => window.open(`https://wa.me/9301931222?text=I'm interested in the ${pkg.title} MICE package`, '_blank')}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Plan Your Corporate Event?
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
              Let our MICE specialists create a customized corporate travel solution 
              that exceeds your expectations and delivers measurable results.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('https://wa.me/9301931222?text=I\'d like to discuss MICE services for my company', '_blank')}
                className="group"
              >
                Plan Corporate Event
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
              >
                <a href="/contact">
                  Request Proposal
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MiceToursPage;