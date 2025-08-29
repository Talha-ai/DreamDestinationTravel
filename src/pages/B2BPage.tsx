import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Shield,
  Send,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const B2BPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description: "Add travel services to your offerings and create new revenue streams for your business."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our dedicated B2B team provides ongoing support and training for your staff."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access our worldwide network of trusted partners and suppliers."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive insurance and risk management solutions for all business travel."
    }
  ];

  const services = [
    {
      title: "Corporate Travel Management",
      description: "End-to-end travel management for your employees and executives.",
      features: ["24/7 Support", "Cost Control", "Policy Compliance", "Reporting"]
    },
    {
      title: "Event & Conference Management",
      description: "Complete MICE services for your corporate events and conferences.",
      features: ["Venue Selection", "Logistics", "Group Bookings", "On-site Support"]
    },
    {
      title: "Travel Agency Partnership",
      description: "Partner with us to offer travel services under your brand.",
      features: ["White Label", "Commission Structure", "Marketing Support", "Training"]
    },
    {
      title: "Group Travel Solutions",
      description: "Specialized group travel packages for your clients or employees.",
      features: ["Custom Itineraries", "Group Rates", "Dedicated Coordinator", "Flexible Terms"]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `B2B Partnership Inquiry

Company: ${formData.companyName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Business Type: ${formData.businessType}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    
    toast({
      title: "Redirecting to WhatsApp...",
      description: "We'll connect you with our B2B team right away!",
    });

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);

    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      businessType: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-sunset text-secondary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              B2B <span className="text-white">Partnership</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-secondary-foreground/90">
              Join forces with Dream Destination Travels and unlock new opportunities 
              for your business in the travel industry.
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
              Why Partner <span className="text-gradient-ocean">With Us?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of partnering with one of the industry's most trusted travel agencies.
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

      {/* Services Section */}
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
              B2B <span className="text-gradient-sunset">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business travel solutions tailored to your company's needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full border-0 shadow-floating hover:shadow-travel transition-all duration-500 bg-card/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gradient-ocean">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Start Your <span className="text-gradient-ocean">Partnership</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to explore partnership opportunities? Let's discuss how we can work together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-travel border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient-sunset text-center">
                    B2B Partnership Inquiry
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="companyName"
                        placeholder="Company Name *"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                      <Input
                        name="contactPerson"
                        placeholder="Contact Person *"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Business Email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                      <Input
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="h-12 border-2 focus:border-primary transition-colors"
                      />
                    </div>

                    <Input
                      name="businessType"
                      placeholder="Type of Business *"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 focus:border-primary transition-colors"
                    />

                    <Textarea
                      name="message"
                      placeholder="Tell us about your partnership interests and how we can work together... *"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-2 focus:border-primary transition-colors resize-none"
                    />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="travel"
                        size="lg"
                        className="w-full"
                        disabled={!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone || !formData.businessType || !formData.message}
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Submit Partnership Inquiry
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join our network of successful partners and start offering world-class travel services today.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open('https://wa.me/1234567890?text=I\'m interested in B2B partnership opportunities', '_blank')}
                className="group"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Contact B2B Team
              </Button>
              <Button
                variant="glass"
                size="lg"
                asChild
              >
                <a href="/contact">
                  Schedule a Meeting
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default B2BPage;