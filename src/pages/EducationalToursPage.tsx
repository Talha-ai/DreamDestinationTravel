import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Clock, BookOpen, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EducationalToursPage = () => {
  const programs = [
    {
      id: 1,
      title: "Historical Europe Study Tour",
      subject: "History & Culture",
      duration: "12 Days",
      groupSize: "20-25 Students",
      ageGroup: "High School",
      destinations: ["Rome", "Athens", "Berlin", "Paris"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=400&fit=crop",
      highlights: ["Ancient Civilizations", "World War History", "Art Museums", "Cultural Immersion"],
      description: "Journey through European history from ancient Rome to modern times."
    },
    {
      id: 2,
      title: "Science & Innovation Japan",
      subject: "STEM & Technology",
      duration: "10 Days",
      groupSize: "15-20 Students",
      ageGroup: "University",
      destinations: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&h=400&fit=crop",
      highlights: ["Tech Companies", "Research Centers", "Traditional Crafts", "Innovation Labs"],
      description: "Explore cutting-edge technology and traditional Japanese culture."
    },
    {
      id: 3,
      title: "Marine Biology Costa Rica",
      subject: "Environmental Science",
      duration: "8 Days",
      groupSize: "12-18 Students",
      ageGroup: "High School & University",
      destinations: ["San José", "Manuel Antonio", "Monteverde", "Tortuguero"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=400&fit=crop",
      highlights: ["Biodiversity Studies", "Field Research", "Conservation Projects", "Rainforest Ecology"],
      description: "Study marine life and tropical ecosystems in one of the world's most biodiverse countries."
    },
    {
      id: 4,
      title: "Language Immersion Spain",
      subject: "Spanish Language & Culture",
      duration: "14 Days",
      groupSize: "15-25 Students",
      ageGroup: "Middle & High School",
      destinations: ["Madrid", "Barcelona", "Seville", "Granada"],
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=500&h=400&fit=crop",
      highlights: ["Homestay Experience", "Language Classes", "Cultural Activities", "Local Interaction"],
      description: "Immerse yourself in Spanish language and culture through authentic experiences."
    },
    {
      id: 5,
      title: "Ancient Civilizations Egypt",
      subject: "Archaeology & History",
      duration: "9 Days",
      groupSize: "18-22 Students",
      ageGroup: "High School & University",
      destinations: ["Cairo", "Luxor", "Aswan", "Alexandria"],
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6dee9d9?w=500&h=400&fit=crop",
      highlights: ["Pyramids & Sphinx", "Valley of Kings", "Archaeological Sites", "Egyptology Lectures"],
      description: "Uncover the mysteries of ancient Egypt with expert archaeologists and historians."
    },
    {
      id: 6,
      title: "Art & Renaissance Italy",
      subject: "Art History & Fine Arts",
      duration: "11 Days",
      groupSize: "16-20 Students",
      ageGroup: "High School & University",
      destinations: ["Florence", "Rome", "Venice", "Milan"],
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=500&h=400&fit=crop",
      highlights: ["Renaissance Masterpieces", "Art Studios", "Museum Tours", "Local Artists"],
      description: "Experience the birthplace of the Renaissance and study masterpieces firsthand."
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Curriculum Aligned",
      description: "All programs align with educational standards and learning objectives."
    },
    {
      icon: Users,
      title: "Expert Educators",
      description: "Accompanied by subject matter experts and experienced educators."
    },
    {
      icon: Globe,
      title: "Cultural Immersion",
      description: "Authentic cultural experiences that bring textbooks to life."
    },
    {
      icon: Award,
      title: "Academic Credit",
      description: "Programs can be structured to earn academic credit through partnerships."
    }
  ];

  const safetyFeatures = [
    "24/7 Group Supervision",
    "Comprehensive Insurance",
    "Emergency Medical Support",
    "Secure Transportation",
    "Background-Checked Staff",
    "Safety Briefings",
    "Parent Communication",
    "Risk Assessment"
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
              <GraduationCap className="w-10 h-10 text-secondary-foreground" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Educational <span className="text-gradient-sunset">Tours</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
              Transform learning into adventure with our immersive educational travel programs 
              designed to inspire, educate, and create lasting memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose <span className="text-gradient-ocean">Educational Tours</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our educational tours combine rigorous academic content with immersive travel experiences.
            </p>
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

      {/* Programs Grid */}
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
              Featured <span className="text-gradient-sunset">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully designed educational programs that bring classroom learning to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
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
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-primary">{program.ageGroup}</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {program.subject}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                      {program.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {program.groupSize}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Globe className="w-4 h-4 mr-2 text-primary" />
                        {program.destinations.join(", ")}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Learning Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant="travel" 
                      className="w-full"
                      onClick={() => window.open(`https://wa.me/9301931222?text=I'm interested in the ${program.title} educational tour`, '_blank')}
                    >
                      Request Information
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Support */}
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
                Safety & <span className="text-gradient-ocean">Support</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Student safety is our top priority. Every educational tour is carefully planned 
                  with comprehensive safety measures, experienced chaperones, and 24/7 support 
                  throughout the entire journey.
                </p>
                <p>
                  Our experienced team works closely with schools and educators to ensure that 
                  every aspect of the trip aligns with educational goals while maintaining the 
                  highest safety standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-travel bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient-ocean">
                    Safety Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {safetyFeatures.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              Ready to Inspire Your Students?
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
              Contact our educational travel specialists to design a custom program 
              that brings learning to life for your students.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('https://wa.me/9301931222?text=I\'d like to discuss educational tour options for my school', '_blank')}
                className="group"
              >
                Plan Educational Tour
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

export default EducationalToursPage;