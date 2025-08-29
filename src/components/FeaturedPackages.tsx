import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface TourPackage {
  id: number;
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  rating: number;
  reviews: number;
  image: string;
  price: string;
  highlights: string[];
}

const FeaturedPackages = () => {
  const packages: TourPackage[] = [
    {
      id: 1,
      title: "European Grand Tour",
      destination: "Paris, Rome, Amsterdam",
      duration: "14 Days",
      groupSize: "12-16 People",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop",
      price: "From $2,999",
      highlights: ["Expert Guides", "Luxury Hotels", "Cultural Experiences"]
    },
    {
      id: 2,
      title: "Tropical Paradise Escape",
      destination: "Maldives & Seychelles",
      duration: "10 Days",
      groupSize: "8-12 People",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop",
      price: "From $3,599",
      highlights: ["Private Beach", "Water Sports", "Spa Treatments"]
    },
    {
      id: 3,
      title: "Asian Cultural Journey",
      destination: "Japan, Thailand, Vietnam",
      duration: "16 Days",
      groupSize: "10-14 People",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop",
      price: "From $2,799",
      highlights: ["Temple Visits", "Local Cuisine", "Cultural Shows"]
    },
    {
      id: 4,
      title: "African Safari Adventure",
      destination: "Kenya & Tanzania",
      duration: "12 Days",
      groupSize: "6-10 People",
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
      price: "From $4,299",
      highlights: ["Wildlife Safari", "Luxury Camps", "Conservation Tours"]
    }
  ];

  return (
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
            Featured <span className="text-gradient-sunset">Tour Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular destinations and embark on journeys 
            that will create memories to last a lifetime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-floating hover:shadow-travel transition-all duration-500 bg-card/90 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {pkg.price}
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({pkg.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {pkg.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {pkg.destination}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {pkg.groupSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, idx) => (
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
                    onClick={() => window.open('https://wa.me/1234567890?text=I\'m interested in the ' + pkg.title + ' package', '_blank')}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
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
          <Button variant="sunset" size="lg" asChild>
            <a href="/services">
              Explore All Packages
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPackages;