import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  testimony: string;
  rating: number;
  category: string;
}

const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Lagos, Nigeria",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimony: "Rev. Iniobong's ministry transformed my life completely. I was delivered from depression and found my purpose in God. His teachings on faith opened my eyes to God's love and power.",
      rating: 5,
      category: "Healing"
    },
    {
      id: 2,
      name: "Michael Okafor",
      location: "Abuja, Nigeria",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimony: "Through Rev. Udoh's mentorship, I discovered my calling in ministry. He taught me how to hear God's voice clearly and walk in divine purpose. I'm now pastoring my own church.",
      rating: 5,
      category: "Calling"
    },
    {
      id: 3,
      name: "Grace Adebayo",
      location: "Port Harcourt, Nigeria",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimony: "I received my miracle healing during one of Rev. Iniobong's crusades. After 5 years of barrenness, God blessed me with twins. His prayers are powerful and effective.",
      rating: 5,
      category: "Miracle"
    },
    {
      id: 4,
      name: "David Ekong",
      location: "Uyo, Nigeria",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimony: "Rev. Udoh's teaching on prosperity changed my mindset about money and success. I learned biblical principles that transformed my business and finances completely.",
      rating: 5,
      category: "Prosperity"
    },
    {
      id: 5,
      name: "Blessing Umoh",
      location: "Calabar, Nigeria",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimony: "I was addicted to drugs for 10 years until I attended Rev. Iniobong's deliverance service. God set me free instantly, and I've been clean for 3 years now. Praise God!",
      rating: 5,
      category: "Deliverance"
    },
    {
      id: 6,
      name: "Emmanuel Bassey",
      location: "Akwa Ibom, Nigeria",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      testimony: "Rev. Udoh's marriage counseling saved my family. We were on the verge of divorce, but his biblical wisdom and prayers restored love and unity in our home.",
      rating: 5,
      category: "Marriage"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-gold-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
          >
            Life-Changing <span className="gradient-text">Testimonies</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-primary-600 to-gold-500 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Hear from those whose lives have been transformed through Rev. Iniobong Udoh's ministry.
          </motion.p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-primary-200">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </motion.div>
                
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    key={`content-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex justify-center md:justify-start mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonials[currentIndex].testimony}"
                    </p>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                        {testimonials[currentIndex].category}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                "{testimonial.testimony}"
              </p>
              
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                {testimonial.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Ready to Experience God's Power?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands who have experienced transformation through Rev. Iniobong Udoh's ministry. 
            Your breakthrough is just one prayer away.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Contact for Prayer
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;