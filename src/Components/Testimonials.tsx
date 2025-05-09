'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was seamless and the team was incredibly professional throughout.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "Global Innovations Inc.",
      avatar: "S",
    },
    {
      id: 2,
      quote: "As a small business owner, every dollar counts. SoftSell gave us the best rates for our unused licenses, and the payment was in our account within 24 hours. Highly recommended!",
      name: "Michael Chen",
      role: "Operations Manager",
      company: "TechStart Solutions",
      avatar: "M",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with SoftSell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="absolute top-4 right-4 text-blue-100 dark:text-blue-300 opacity-70">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6667 13.3333H15.3333C14.2288 13.3333 13.3333 14.2288 13.3333 15.3333V18.6667C13.3333 19.7712 14.2288 20.6667 15.3333 20.6667H18.6667C19.7712 20.6667 20.6667 19.7712 20.6667 18.6667V15.3333C20.6667 14.2288 19.7712 13.3333 18.6667 13.3333Z" fill="currentColor" />
                  <path d="M18.6667 24H15.3333C14.2288 24 13.3333 24.8954 13.3333 26V29.3333C13.3333 30.4379 14.2288 31.3333 15.3333 31.3333H18.6667C19.7712 31.3333 20.6667 30.4379 20.6667 29.3333V26C20.6667 24.8954 19.7712 24 18.6667 24Z" fill="currentColor" />
                  <path d="M29.3333 13.3333H26C24.8954 13.3333 24 14.2288 24 15.3333V18.6667C24 19.7712 24.8954 20.6667 26 20.6667H29.3333C30.4379 20.6667 31.3333 19.7712 31.3333 18.6667V15.3333C31.3333 14.2288 30.4379 13.3333 29.3333 13.3333Z" fill="currentColor" />
                  <path d="M29.3333 24H26C24.8954 24 24 24.8954 24 26V29.3333C24 30.4379 24.8954 31.3333 26 31.3333H29.3333C30.4379 31.3333 31.3333 30.4379 31.3333 29.3333V26C31.3333 24.8954 30.4379 24 29.3333 24Z" fill="currentColor" />
                </svg>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            Join Our Satisfied Customers
          </a>
        </div>
      </div>
    </section>
  );
}
