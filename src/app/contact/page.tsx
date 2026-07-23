"use client";

import Link from "next/link";
import { ChevronRight, Globe, Mail, MapPin, Phone, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const services = [
    "HR Services",
    "Rig Contracting",
    "Drilling Operations",
    "Training",
    "Procurement",
    "Logistics",
    "Safety",
    "Catering",
    "Consultancy"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      {/* 1. PAGE HERO */}
      <section className="relative bg-navy text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2560&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-medium">
            Get in touch with our team to discuss how OGS can support your operations.
          </p>
        </div>
      </section>

      {/* 2. CONTACT COLUMNS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left - Contact Info */}
          <div className="lg:w-5/12 space-y-10">
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Let's Talk Business</h2>
              <p className="text-lg text-steel leading-relaxed mb-8">
                Whether you need a complete rig crew, specialized training, or large-scale logistics support, our experts are ready to assist you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-navy text-lg">Website</h4>
                  <a href="https://www.oilandgassolutions.com" className="text-steel hover:text-orange transition-colors">www.oilandgassolutions.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-navy text-lg">Email</h4>
                  <a href="mailto:info@oilandgassolutions.com" className="text-steel hover:text-orange transition-colors">info@oilandgassolutions.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-navy text-lg">Address</h4>
                  <p className="text-steel">123 Energy Avenue, Sector F-8<br />Islamabad, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-navy text-lg">Phone</h4>
                  <p className="text-steel">+92 51 1234567<br />+92 300 1234567</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="https://wa.me/923001234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded font-medium transition-colors shadow-md"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:w-7/12">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="absolute top-0 right-0 w-2 h-full bg-orange rounded-r-xl"></div>
              
              <h3 className="text-2xl font-heading font-bold text-navy mb-8">Send Us a Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-steel mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel mb-2">Company</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="Your Organization" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-steel mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="+123 456 7890" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all text-steel bg-white appearance-none">
                    <option value="">Select a service...</option>
                    {services.map((service, i) => (
                      <option key={i} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-2">Your Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="submit" className="w-full flex items-center justify-center bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-transform transform hover:-translate-y-1 shadow-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. MAP PLACEHOLDER */}
      <section className="w-full h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-navy/5">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-steel/40 mx-auto mb-2" />
            <p className="text-steel font-medium">Google Maps Integration Placeholder</p>
            <p className="text-sm text-steel/70">Map coordinates to be added</p>
          </div>
        </div>
      </section>
    </div>
  );
}
