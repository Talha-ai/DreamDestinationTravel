import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const InternationalToursPage = () => {
  const destinations = [
    {
      id: 1,
      title: "European Grand Tour",
      countries: ["France", "Italy", "Spain", "Netherlands"],
      duration: "14 Days",
      groupSize: "12-16 People",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&h=400&fit=crop",
      highlights: ["Eiffel Tower", "Colosseum", "Sagrada Familia", "Anne Frank House"],
      description: "Experience the rich history, art, and culture of Europe's most iconic cities."
    },
    {
      id: 2,
      title: "Asian Cultural Journey",
      countries: ["Japan", "Thailand", "Vietnam", "Cambodia"],
      duration: "16 Days",
      groupSize: "10-14 People",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&h=400&fit=crop",
      highlights: ["Mount Fuji", "Thai Temples", "Ha Long Bay", "Angkor Wat"],
      description: "Immerse yourself in the diverse cultures and ancient traditions of Southeast Asia."
    },
    {
      id: 3,
      title: "African Safari Adventure",
      countries: ["Kenya", "Tanzania", "South Africa", "Botswana"],
      duration: "12 Days",
      groupSize: "8-12 People",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&h=400&fit=crop",
      highlights: ["Serengeti", "Masai Mara", "Table Mountain", "Okavango Delta"],
      description: "Witness the Big Five and experience the raw beauty of Africa's wilderness."
    },
    {
      id: 4,
      title: "South American Explorer",
      countries: ["Peru", "Bolivia", "Chile", "Argentina"],
      duration: "15 Days",
      groupSize: "10-14 People",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1531065208531-4036c0dba3d5?w=500&h=400&fit=crop",
      highlights: ["Machu Picchu", "Salar de Uyuni", "Atacama Desert", "Patagonia"],
      description: "Discover ancient civilizations and breathtaking landscapes across South America."
    },
    {
      id: 5,
      title: "Middle Eastern Odyssey",
      countries: ["UAE", "Jordan", "Egypt", "Morocco"],
      duration: "13 Days",
      groupSize: "12-16 People",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6dee9d9?w=500&h=400&fit=crop",
      highlights: ["Burj Khalifa", "Petra", "Pyramids", "Sahara Desert"],
      description: "Journey through ancient wonders and modern marvels of the Middle East."
    },
    {
      id: 6,
      title: "Tropical Paradise Islands",
      countries: ["Maldives", "Seychelles", "Mauritius", "Fiji"],
      duration: "10 Days",
      groupSize: "6-10 People",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&h=400&fit=crop",
      highlights: ["Private Beaches", "Coral Reefs", "Luxury Resorts", "Water Sports"],
      description: "Relax and unwind in some of the world's most beautiful tropical destinations."
    }
  ];

  const features = [
    "Expert Local Guides",
    "Luxury Accommodations",
    "Cultural Experiences",
    "Small Group Sizes",
    "24/7 Support",
    "All Meals Included",
    "Transportation",
    "Travel Insurance"
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
              <Plane className="w-10 h-10 text-secondary-foreground" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              International <span className="text-gradient-sunset">Tours</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
              Embark on extraordinary international adventures to the world's most captivating 
              destinations with our expertly crafted tour packages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              What's <span className="text-gradient-ocean">Included</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="bg-muted/30 p-4 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-medium text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
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
              Popular <span className="text-gradient-sunset">Destinations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our most sought-after international destinations and create memories that will last a lifetime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-floating hover:shadow-travel transition-all duration-500 bg-card/90 backdrop-blur-sm h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {destination.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {destination.countries.join(", ")}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {destination.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {destination.groupSize}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {destination.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant="travel" 
                      className="w-full"
                      onClick={() => window.open(`https://wa.me/1234567890?text=I'm interested in the ${destination.title} package`, '_blank')}
                    >
                      Get Details
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
              Ready for Your International Adventure?
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
              Let our travel experts customize the perfect international tour package for you. 
              Contact us today to start planning your dream journey.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('https://wa.me/1234567890?text=I\'d like to plan an international tour', '_blank')}
                className="group"
              >
                Plan My Trip
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
              >
                <a href="/contact">
                  Get Free Quote
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InternationalToursPage;