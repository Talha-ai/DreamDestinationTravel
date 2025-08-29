import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DomesticToursPage = () => {
  const destinations = [
    {
      id: 1,
      title: "National Parks Explorer",
      locations: ["Yellowstone", "Grand Canyon", "Yosemite", "Zion"],
      duration: "8 Days",
      groupSize: "10-15 People",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      highlights: ["Wildlife Viewing", "Hiking Trails", "Scenic Drives", "Photography"],
      description: "Discover America's most stunning national parks and natural wonders."
    },
    {
      id: 2,
      title: "Coastal Highway Adventure",
      locations: ["Big Sur", "Monterey", "Santa Barbara", "San Diego"],
      duration: "6 Days",
      groupSize: "8-12 People",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=400&fit=crop",
      highlights: ["Ocean Views", "Wine Tasting", "Beach Time", "Coastal Towns"],
      description: "Experience the breathtaking Pacific Coast Highway and charming coastal cities."
    },
    {
      id: 3,
      title: "Historic East Coast",
      locations: ["Boston", "New York", "Philadelphia", "Washington DC"],
      duration: "7 Days",
      groupSize: "12-16 People",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=400&fit=crop",
      highlights: ["Historic Sites", "Museums", "Architecture", "Cultural Tours"],
      description: "Walk through American history in the nation's most historic cities."
    },
    {
      id: 4,
      title: "Mountain Wilderness",
      locations: ["Rocky Mountains", "Aspen", "Vail", "Denver"],
      duration: "5 Days",
      groupSize: "6-10 People",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1464822759844-d150b9c328c8?w=500&h=400&fit=crop",
      highlights: ["Mountain Views", "Adventure Sports", "Alpine Lakes", "Fresh Air"],
      description: "Breathe in the crisp mountain air and enjoy outdoor adventures in the Rockies."
    },
    {
      id: 5,
      title: "Southern Charm Tour",
      locations: ["New Orleans", "Savannah", "Charleston", "Nashville"],
      duration: "9 Days",
      groupSize: "10-14 People",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      highlights: ["Southern Cuisine", "Music Culture", "Historic Architecture", "Local Stories"],
      description: "Experience the warmth, culture, and hospitality of America's South."
    },
    {
      id: 6,
      title: "Desert Southwest",
      locations: ["Sedona", "Grand Canyon", "Monument Valley", "Antelope Canyon"],
      duration: "6 Days",
      groupSize: "8-12 People",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=500&h=400&fit=crop",
      highlights: ["Red Rock Formations", "Native Culture", "Stargazing", "Unique Landscapes"],
      description: "Marvel at the unique geological formations and landscapes of the Southwest."
    }
  ];

  const benefits = [
    "Local Expert Guides",
    "Comfortable Transportation",
    "Handpicked Accommodations",
    "Authentic Local Experiences",
    "Small Group Sizes",
    "Flexible Itineraries",
    "Hidden Gem Locations",
    "Cultural Immersion"
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
              <Mountain className="w-10 h-10 text-secondary-foreground" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Domestic <span className="text-gradient-sunset">Tours</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
              Discover the hidden gems and iconic landmarks in your own backyard 
              with our carefully curated domestic travel experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose <span className="text-gradient-ocean">Domestic Tours</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="bg-muted/30 p-4 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-medium text-sm">{benefit}</p>
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
              Featured <span className="text-gradient-sunset">Destinations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore America's diverse landscapes, rich history, and vibrant culture 
              through our expertly designed domestic tour packages.
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
                        {destination.locations.join(", ")}
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
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Domestic Tours */}
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
                Discover Your Own <span className="text-gradient-ocean">Backyard</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Sometimes the most amazing adventures are closer than you think. Our domestic 
                  tours reveal the hidden treasures, untold stories, and breathtaking landscapes 
                  that make your own country truly extraordinary.
                </p>
                <p>
                  From the majestic national parks to vibrant cities rich in culture and history, 
                  we'll show you familiar places through fresh eyes. Our local experts know the 
                  secret spots, the best viewpoints, and the stories that guidebooks miss.
                </p>
                <p>
                  Whether you're seeking outdoor adventures, cultural immersion, or simply a 
                  change of scenery without the jet lag, our domestic tours offer authentic 
                  experiences that will surprise and delight you.
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
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Local Insights</h3>
                  <p className="text-sm">Expert local guides</p>
                </div>
                <div className="bg-gradient-sunset p-6 rounded-lg text-secondary-foreground text-center">
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Small Groups</h3>
                  <p className="text-sm">Intimate experiences</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-accent p-6 rounded-lg text-accent-foreground text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Flexible Tours</h3>
                  <p className="text-sm">Customizable itineraries</p>
                </div>
                <div className="bg-primary p-6 rounded-lg text-primary-foreground text-center">
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Hidden Gems</h3>
                  <p className="text-sm">Off-the-beaten-path spots</p>
                </div>
              </div>
            </motion.div>
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
              Ready to Explore Close to Home?
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
              Let us show you the incredible destinations waiting to be discovered 
              in your own country. Start planning your domestic adventure today.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('https://wa.me/1234567890?text=I\'d like to explore domestic tour options', '_blank')}
                className="group"
              >
                Plan My Domestic Tour
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
              >
                <a href="/contact">
                  Get Custom Itinerary
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DomesticToursPage;