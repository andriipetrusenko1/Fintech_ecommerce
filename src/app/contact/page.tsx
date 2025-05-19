'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram,
  FaCheckCircle
} from 'react-icons/fa';

// Office location type
type OfficeLocation = {
  id: number;
  city: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  hours: string;
};

// Office locations data
const officeLocations: OfficeLocation[] = [
  {
    id: 1,
    city: "New York",
    address: "123 Financial District, New York, NY 10005",
    phone: "+1 (212) 555-1234",
    email: "newyork@fintechcommerce.com",
    image: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM"
  },
  {
    id: 2,
    city: "San Francisco",
    address: "456 Tech Plaza, San Francisco, CA 94105",
    phone: "+1 (415) 555-6789",
    email: "sanfrancisco@fintechcommerce.com",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    hours: "Monday - Friday: 8:30 AM - 5:30 PM"
  },
  {
    id: 3,
    city: "London",
    address: "789 Financial Centre, London, EC2V 8DS, UK",
    phone: "+44 20 7946 0321",
    email: "london@fintechcommerce.com",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    hours: "Monday - Friday: 9:00 AM - 5:30 PM"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    product: '',
    preferredContact: 'email',
    urgency: 'normal'
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedOffice, setSelectedOffice] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to your server here
      console.log('Form submitted:', formData);
      setFormStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        product: '',
        preferredContact: 'email',
        urgency: 'normal'
      });
      
      // Reset form status after a delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 bottom-0 h-full w-full text-white opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
              Have questions or ready to start your financial journey? Our team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-xl shadow-soft p-8">
                  <h2 className="text-2xl font-semibold text-secondary-900 mb-6">Send Us a Message</h2>
                  
                  {formStatus === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <FaCheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Message Sent Successfully!</h3>
                      <p className="text-secondary-600 mb-4">
                        Thank you for contacting us. One of our representatives will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                            placeholder="(123) 456-7890"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                            Subject *
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                            placeholder="How can we help you?"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-secondary-700 mb-1">
                          Interested Product/Service
                        </label>
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="">Select a product/service</option>
                          <option value="investment">Investment Products</option>
                          <option value="insurance">Insurance Solutions</option>
                          <option value="retirement">Retirement Planning</option>
                          <option value="wealth">Wealth Management</option>
                          <option value="education">Education Planning</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Please provide details about your inquiry..."
                        ></textarea>
                      </div>
                      
                      <div>
                        <p className="block text-sm font-medium text-secondary-700 mb-2">
                          Preferred Contact Method
                        </p>
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="email"
                              checked={formData.preferredContact === 'email'}
                              onChange={handleRadioChange}
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="ml-2 text-sm text-secondary-600">Email</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="phone"
                              checked={formData.preferredContact === 'phone'}
                              onChange={handleRadioChange}
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="ml-2 text-sm text-secondary-600">Phone</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <p className="block text-sm font-medium text-secondary-700 mb-2">
                          Urgency
                        </p>
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="urgency"
                              value="normal"
                              checked={formData.urgency === 'normal'}
                              onChange={handleRadioChange}
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="ml-2 text-sm text-secondary-600">Normal</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="urgency"
                              value="urgent"
                              checked={formData.urgency === 'urgent'}
                              onChange={handleRadioChange}
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                            />
                            <span className="ml-2 text-sm text-secondary-600">Urgent</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={formStatus === 'submitting'}
                          className={`w-full btn-primary py-3 px-6 text-center ${
                            formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                        >
                          {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
              
              {/* Office Information */}
              <div>
                <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={officeLocations.find(office => office.id === selectedOffice)?.image || officeLocations[0].image}
                      alt="Office Location"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-semibold text-white">
                        {officeLocations.find(office => office.id === selectedOffice)?.city || officeLocations[0].city} Office
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex mb-6">
                      {officeLocations.map(office => (
                        <button
                          key={office.id}
                          onClick={() => setSelectedOffice(office.id)}
                          className={`px-4 py-2 text-sm font-medium ${
                            selectedOffice === office.id
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 text-secondary-600 hover:bg-gray-200'
                          } rounded-md mr-2 transition-colors duration-200`}
                        >
                          {office.city}
                        </button>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-md font-medium text-secondary-900 mb-1">Address</h4>
                          <p className="text-secondary-600">
                            {officeLocations.find(office => office.id === selectedOffice)?.address || officeLocations[0].address}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <FaPhone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-md font-medium text-secondary-900 mb-1">Phone</h4>
                          <p className="text-secondary-600">
                            <a href={`tel:${officeLocations.find(office => office.id === selectedOffice)?.phone || officeLocations[0].phone}`} className="hover:text-primary-600 transition-colors duration-200">
                              {officeLocations.find(office => office.id === selectedOffice)?.phone || officeLocations[0].phone}
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <FaEnvelope className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-md font-medium text-secondary-900 mb-1">Email</h4>
                          <p className="text-secondary-600">
                            <a href={`mailto:${officeLocations.find(office => office.id === selectedOffice)?.email || officeLocations[0].email}`} className="hover:text-primary-600 transition-colors duration-200">
                              {officeLocations.find(office => office.id === selectedOffice)?.email || officeLocations[0].email}
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <FaClock className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-md font-medium text-secondary-900 mb-1">Business Hours</h4>
                          <p className="text-secondary-600">
                            {officeLocations.find(office => office.id === selectedOffice)?.hours || officeLocations[0].hours}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="text-md font-medium text-secondary-900 mb-3">Connect With Us</h4>
                      <div className="flex space-x-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                          <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                          <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                          <FaFacebook className="h-6 w-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-primary-600 transition-colors duration-200">
                          <FaInstagram className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-primary-50 border border-primary-100 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">Need Immediate Assistance?</h3>
                  <p className="text-secondary-600 mb-4">
                    Our customer service team is available to help you with any urgent inquiries.
                  </p>
                  <div className="flex items-center">
                    <FaPhone className="text-primary-600 mr-2" />
                    <a href="tel:+18005551234" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                      1-800-555-1234
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-secondary-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-secondary-600">
                Find quick answers to common questions about contacting us and our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">How quickly will I receive a response?</h3>
                <p className="text-secondary-600">
                  We aim to respond to all inquiries within 24 business hours. For urgent matters, please call our customer service line directly.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Can I schedule a virtual consultation?</h3>
                <p className="text-secondary-600">
                  Yes, we offer virtual consultations via video conference. You can request this option when filling out the contact form or by calling our office.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Do I need to prepare anything for my first consultation?</h3>
                <p className="text-secondary-600">
                  It&apos;s helpful to have a general idea of your financial goals and current situation. We&apos;ll guide you through any specific documents or information needed.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Is there a fee for an initial consultation?</h3>
                <p className="text-secondary-600">
                  No, we offer complimentary initial consultations to understand your needs and determine how we can best assist you with your financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold text-secondary-900 mb-4">Visit Our Offices</h2>
            <p className="text-secondary-600">
              Find the nearest FinTech Commerce office location to schedule an in-person meeting.
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-soft">
            <div className="relative h-96 w-full">
              {/* This would be replaced with an actual map component in a real application */}
              <Image
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1733&q=80"
                alt="Office Locations Map"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3">Interactive Map Coming Soon</h3>
                  <p className="text-secondary-600 mb-4">
                    We&apos;re working on an interactive map to help you locate our offices more easily.
                  </p>
                  <Link href="/contact" className="btn-primary py-2 px-4 text-center inline-block">
                    View Office Locations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Our team of experts is ready to help you achieve your financial goals with personalized solutions designed for your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/consultation" className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition-colors duration-200 shadow-sm text-center">
                Schedule a Consultation
              </Link>
              <Link href="/products" className="bg-transparent hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-md border border-white transition-colors duration-200 text-center">
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}