import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { applyScrollAnimation } from '../utils/animations';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      quote: "Our bookings doubled within weeks of uploading our virtual tour.",
      author: "Rosa Martinez",
      role: "Permaculture Retreat Owner",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      quote: "The Spatial Network gave our forest project a digital soul.",
      author: "Daniel Kowalski",
      role: "Agroforestry Collective",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      quote: "Visitors can now experience our ecovillage before they arrive, making the transition much smoother.",
      author: "Amara Johnson",
      role: "Ecovillage Community Lead",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      applyScrollAnimation(contentRef.current, 'fade-in-up');
    }
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={contentRef}
          className="max-w-4xl mx-auto opacity-0 transition-all duration-1000"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="relative bg-gray-50 rounded-2xl shadow-md p-6 md:p-10">
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                  }`}
                  style={{ display: index === activeIndex ? 'block' : 'none' }}
                >
                  <blockquote className="text-xl md:text-2xl italic text-gray-800 mb-6 text-center">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                    )}
                    <div className="text-center">
                      <div className="font-semibold text-gray-800">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;