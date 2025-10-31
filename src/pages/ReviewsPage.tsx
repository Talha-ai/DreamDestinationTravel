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
      name: 'Mayank Shah',
      location: 'India',
      rating: 5,
      date: 'a year ago',
      review: `Excellent tour organised by Dream Destination Travel Shoppe, very well arranged and satisfied with their services. Recommendable for travel. Best Experience.`,
      image:
        'https://lh3.googleusercontent.com/a/ACg8ocLVmxyu0ZFEDanMtHdK7sAwPIBseIKtBhelUzsWJz0PeB1Uxw=w86-h86-p-rp-mo-ba4-br100',
      verified: true,
    },
    {
      id: 2,
      name: 'ALOK RAJPUT',
      location: 'India',
      rating: 5,
      date: '10 month ago',
      review: `It's a very good trip special thanks to dream destination to arrange such a beautiful tour to my parents. The service of dream destination is excellent from booking to till end the tour. The hotels which was booked by them are excellent interms of location,service and food quality. At all points my parents were very comfortable and extremely happy. They know about all the tourist places in the internary planned. Also they keep in touch with local Guide during the entire trip to give better experience. #Dubai trip`,
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjVJY3xJ7m2y122D_CIgZIblg4YnXpXpHNVYTN2Z_JVBio4va_4LiQ=w86-h86-p-rp-mo-br100',
      verified: true,
    },
    {
      id: 3,
      name: 'Dhaval Anadkat',
      location: 'India',
      rating: 5,
      date: '7 months ago',
      review: `Very good experience with dream destination and specially junedbhai; he has a good guy they manag my full trip..
I am very happy with their service.`,
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjWr16UEj7Vw4sYUVd-u--Fs5swLEZ1-Av-PJmoCMEbFIdUJ7A5s=w108-h108-p-rp-mo-br100',
      verified: true,
    },
    {
      id: 4,
      name: 'Sudipto Mangal',
      location: 'India',
      rating: 5,
      date: '2 years ago',
      review: `Excellent service. We have gone for Educational Tour to Hyderabad- 2023 with 41 members. Our experience was awesome. Service provided by the company was excellent.
`,
      image:
        'https://lh3.googleusercontent.com/a/ACg8ocJH8hD6xKCq0guJk2JqtzAvUdfIJy15lOJ-WBvsB7ItUGQTww=w86-h86-p-rp-mo-br100',
      verified: true,
    },
    {
      id: 5,
      name: 'Abhinav Patidar',
      location: 'India',
      rating: 5,
      date: '8 months ago',
      review: `Wonderful 😊 tour is get managed by...
Our Agent Mr. junned sir.

Thanks for... making this movement memorable and beautiful for our life...

All the arrangements are very good and respectful.
Thank you so much sir...😊
I hope we will meet again as soon as possible at new and advanture place...♥️`,
      image:
        'https://lh3.googleusercontent.com/a-/ALV-UjUHNvv80Iv_v-hRKL1zg0cfJ4xMKtLzEgZYotBh-O5qhTrxI_m_=w108-h108-p-rp-mo-br100',
      verified: true,
    },
    {
      id: 6,
      name: 'Uzair khan',
      location: 'India',
      rating: 5,
      date: 'a year ago',
      review: `Excellent planning of our trip to kashmir by Mr. Junaid. The whole trip was meticulously planned as well as executed without any major hindrance
Will definitely recommend 👍🏻`,
      image:
        'https://lh3.googleusercontent.com/a/ACg8ocJ3DnhUVckCW3aTATyxmbITMXsVT1UMQxGwwgy4EMXAZK-EeA=w86-h86-p-rp-mo-br100',
      verified: true,
    },
  ];

  const stats = [
    { value: '4.7', label: 'Average Rating', suffix: '/5' },
    { value: '47', label: 'Total Reviews', suffix: '+' },
    { value: '98', label: 'Satisfaction Rate', suffix: '%' },
    { value: '40', label: '5-Star Reviews', suffix: '+' },
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
                    "https://wa.me/7683931222?text=I'd like to share my travel experience with you",
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
