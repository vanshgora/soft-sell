// src/app/page.js
'use client';

import Chatbot from '@/Components/ChatBot';
import ContactForm from '@/Components/ContactUsForm';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import Testimonials from '@/Components/Testimonials';
import WhyChooseUs from '@/Components/WhyChooseUs';
import { useState } from 'react';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero />
      
      <WhyChooseUs />
      
      <Testimonials />
      
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Ready to Convert Your Licenses?</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <Chatbot/>
      
      <Footer />
    </main>
  );
}