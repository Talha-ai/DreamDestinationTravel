import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'International Tours', path: '/services/international' },
    { name: 'Domestic Tours', path: '/services/domestic' },
    { name: 'Reviews', path: '/reviews' },
  ];

  const services = [
    { name: 'International Tours', path: '/services/international' },
    { name: 'Domestic Tours', path: '/services/domestic' },
    { name: 'Educational Tours', path: '/services/educational' },
    { name: 'MICE Tours', path: '/services/mice' },
    // { name: 'B2B Services', path: '/b2b' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/DreamDestinationTravelShoppe',
      label: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/dreamdestinationtravels',
      label: 'Instagram',
    },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    {
      icon: Youtube,
      href: 'https://youtube.com/@dreamdestinationtravels?si=c0EezfO2JrSU8wXB',
      label: 'YouTube',
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-accent text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="DT" className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold">Dream Destination</h3>
                <p className="text-sm opacity-80">Travels</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted travel partner for creating unforgettable journeys
              and extraordinary experiences around the world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={service.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">
                  9301931222 / 7692931222
                </span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-primary-foreground/80">
                  dream.destination@hotmail.co.in
                </span>
              </motion.div>
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  132-B Mezzanine Floor Zone-1, M.P. Nagar, Bhopal, Madhya
                  Pradesh
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-primary-foreground/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-foreground/60">
            © 2024 Dream Destination Travels. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
