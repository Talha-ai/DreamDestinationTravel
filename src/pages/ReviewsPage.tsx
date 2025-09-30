import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

const ReviewsPage = () => {
  const handleWriteReview = () => {
    window.open('https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review', '_blank');
  };

  const reviews = [
    {
      id: 1,
      name: 'Jessica Williams',
      location: 'California, USA',
      rating: 5,
      date: '2 weeks ago',
      review:
        'Absolutely incredible experience! Dream Destination planned our European honeymoon perfectly. Every detail was taken care of, from luxury accommodations to private tours. The personalized service exceeded our expectations.',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face',
      verified: true,
    },
    {
      id: 2,
      name: 'Robert Chen',
      location: 'Toronto, Canada',
      rating: 5,
      date: '1 month ago',
      review:
        'Outstanding service for our family trip to Japan! The cultural experiences were authentic and educational. Our kids are still talking about the temples and traditional ceremonies. Highly professional team!',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      verified: true,
    },
    {
      id: 3,
      name: 'Maria Garcia',
      location: 'Barcelona, Spain',
      rating: 5,
      date: '2 months ago',
      review:
        'Best travel agency ever! They organized our corporate retreat in Thailand with precision. Everything from team-building activities to business meetings was seamlessly coordinated. Will definitely use again!',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      verified: true,
    },
    {
      id: 4,
      name: 'Ahmed Hassan',
      location: 'Dubai, UAE',
      rating: 5,
      date: '3 months ago',
      review:
        'Exceptional educational tour for our university students! The historical sites, museums, and cultural interactions were perfectly balanced with learning objectives. Professional guides and smooth logistics throughout.',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      verified: true,
    },
    {
      id: 5,
      name: 'Sophie Laurent',
      location: 'Paris, France',
      rating: 5,
      date: '4 months ago',
      review:
        'Magnifique! Our luxury African safari was beyond words. The wildlife encounters, premium accommodations, and expert guides made this a once-in-a-lifetime experience. Every moment was magical!',
      image:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face',
      verified: true,
    },
    {
      id: 6,
      name: 'John Anderson',
      location: 'Sydney, Australia',
      rating: 5,
      date: '5 months ago',
      review:
        "Fantastic domestic tour of hidden Australian gems! They showed us places we never knew existed in our own country. The local guides' knowledge and passion made all the difference. Truly eye-opening!",
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
      verified: true,
    },
  ];

  const stats = [
    { value: '4.9', label: 'Average Rating', suffix: '/5' },
    { value: '1,250', label: 'Total Reviews', suffix: '+' },
    { value: '98', label: 'Satisfaction Rate', suffix: '%' },
    { value: '500', label: '5-Star Reviews', suffix: '+' },
  ];

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
              Customer <span className="text-gradient-sunset">Reviews</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-primary-foreground/90">
              See what our satisfied travelers have to say about their
              unforgettable journeys with Dream Destination Travels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient-ocean mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Share Your{' '}
              <span className="text-gradient-sunset">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Traveled with us? We'd love to hear about your journey! Your
              feedback helps us improve and helps other travelers make informed
              decisions.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <Button
                variant="travel"
                size="lg"
                onClick={handleWriteReview}
                className="group"
              >
                <Star className="w-5 h-5 mr-2" />
                Write a Google Review
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="sunset"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/1234567890?text=I'd like to share my travel experience with you",
                    '_blank'
                  )
                }
                className="group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Share via WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
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
              Recent <span className="text-gradient-ocean">Reviews</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real travelers who have journeyed with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-floating hover:shadow-travel transition-all duration-500 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {review.location}
                        </p>
                      </div>
                      {review.verified && (
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Verified
                        </div>
                      )}
                    </div>

                    <div className="flex items-center mb-3">
                      <div className="flex space-x-1 mr-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {review.date}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      "{review.review}"
                    </p>
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
            <Button variant="outline" size="lg" onClick={handleWriteReview}>
              View All Google Reviews
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />
    </div>
  );
};

export default ReviewsPage;
