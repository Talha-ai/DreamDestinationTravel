import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  image: string;
  verified: boolean;
}

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  return (
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
            What Our <span className="text-gradient-ocean">Travelers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from thousands of satisfied
            customers who have experienced unforgettable journeys with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-card rounded-2xl shadow-travel p-8 md:p-12"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <motion.img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                />

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      )
                    )}
                  </div>

                  <motion.p
                    className="text-lg text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    "{testimonials[currentIndex].review}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <h4 className="font-semibold text-lg text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="glass"
            size="icon"
            className="absolute top-1/2 -left-6 transform -translate-y-1/2"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="glass"
            size="icon"
            className="absolute top-1/2 -right-6 transform -translate-y-1/2"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
