import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 93019 31222'],
      color: 'text-blue-500',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['dream.destination@hotmail.co.in'],
      color: 'text-green-500',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '132-B Mezzanine Floor Zone-1',
        'M.P. Nagar, Bhopal, Madhya Pradesh',
      ],
      color: 'text-red-500',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Mon - Sat: 10:30 AM - 8:00 PM'
      ],
      color: 'text-purple-500',
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Hello! I'm ${formData.name}.
    
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/7683931222?text=${encodeURIComponent(
      message
    )}`;

    // Show success toast
    toast({
      title: 'Redirecting to WhatsApp...',
      description: "We'll connect you with our team right away!",
    });

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-gradient-sunset">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
              Ready to start planning your next adventure? Our travel experts
              are here to help you create the perfect journey tailored to your
              dreams and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-travel border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient-ocean">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll redirect you to WhatsApp
                    for instant communication.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <Input
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 focus:border-primary transition-colors"
                        />
                      </motion.div>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 focus:border-primary transition-colors"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <Input
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="h-12 border-2 focus:border-primary transition-colors"
                        />
                      </motion.div>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 10,
                        }}
                      >
                        <Input
                          name="subject"
                          placeholder="Subject *"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 focus:border-primary transition-colors"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <Textarea
                        name="message"
                        placeholder="Tell us about your travel plans, preferences, and any questions you have... *"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="border-2 focus:border-primary transition-colors resize-none"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="travel"
                        size="lg"
                        className="w-full"
                        disabled={
                          !formData.name ||
                          !formData.email ||
                          !formData.subject ||
                          !formData.message
                        }
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message via WhatsApp
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gradient-ocean">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're here to help you plan the perfect trip. Reach out to us
                  through any of the channels below, and our travel experts will
                  get back to you promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="p-6 shadow-floating hover:shadow-travel transition-all duration-300 border-0 bg-card/90 backdrop-blur-sm">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className={`w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p
                                key={idx}
                                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <Card className="p-6 bg-gradient-sunset text-secondary-foreground border-0 shadow-travel">
                  <h3 className="font-bold text-xl mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="mb-4">
                    For urgent travel inquiries or last-minute bookings, contact
                    us directly:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() =>
                        window.open(
                          'https://wa.me/7683931222?text=I need immediate assistance with my travel plans',
                          '_blank'
                        )
                      }
                      className="flex-1 bg-gradient-sunset border-white border-2"
                    >
                      WhatsApp Now
                    </Button>
                    <Button
                      onClick={() =>
                        (window.location.href = 'tel:+15551234567')
                      }
                      className="flex-1 bg-gradient-sunset border-secondary-foreground text-secondary-foreground border-white border-2"
                    >
                      Call Now
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Visit Our <span className="text-gradient-ocean">Office</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Stop by our office for a personal consultation and trip planning
              session.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg shadow-travel overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6832.770033611447!2d77.4310994479349!3d23.234729539097305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4267c0000001%3A0x36f3115adac48961!2sDream%20Destination%20Travel%20Shoppe!5e0!3m2!1sen!2sin!4v1759238241393!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dream Destination Travels Office Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
