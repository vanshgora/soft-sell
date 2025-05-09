'use client';

import { useState, ChangeEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  licenseType?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const licenseTypes: string[] = [
    "Enterprise Software",
    "Design Tools",
    "Cloud Services",
    "Development Tools",
    "Security Software",
    "Other"
  ];

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.licenseType) newErrors.licenseType = "Please select a license type";

    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = () => {
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 transition-colors">
        <h2 className="text-3xl font-bold text-center mb-2 text-blue-800 dark:text-blue-400">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Get a quote or learn more about selling your unused software licenses
        </p>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle size={64} className="text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Thank You!</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:bg-gray-800 dark:text-white'
                  }`}
                  placeholder="John Smith"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:bg-gray-800 dark:text-white'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.company
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:bg-gray-800 dark:text-white'
                  }`}
                  placeholder="Acme Inc."
                />
                {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
              </div>

              {/* License Type */}
              <div>
                <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  License Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.licenseType
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:bg-gray-800 dark:text-white'
                  }`}
                >
                  <option value="">Select license type</option>
                  {licenseTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.licenseType && <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-gray-800 dark:text-white"
                placeholder="Tell us about your software licenses and what you're looking to sell..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <Send size={18} className="mr-2" />
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
