// src/app/page.js
'use client';

import ContactForm from '@/Components/ContactUsForm';
import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import HowItWorks from '@/Components/HowItWorks';
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
      
      <HowItWorks />
      
      <WhyChooseUs />
      
      <Testimonials />
      
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ready to Convert Your Licenses?</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <footer />
    </main>
  );
}