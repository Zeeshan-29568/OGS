"use client";

import Link from "next/link";
import { ChevronRight, Users, HardHat, Shield, Wrench, Truck, Utensils, Send, Paperclip } from "lucide-react";

export default function CareersPage() {
  const categories = [
    { title: "Management", icon: Users },
    { title: "Technical / Drilling", icon: HardHat },
    { title: "Safety", icon: Shield },
    { title: "Engineering & Maintenance", icon: Wrench },
    { title: "Support & Logistics", icon: Truck },
    { title: "Catering & Camp", icon: Utensils }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      {/* 1. PAGE HERO */}
      <section className="relative bg-navy text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2560&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Careers</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Careers at OGS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl font-medium">
            Join Pakistan's leading oil & gas solutions provider
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content - Intro & Categories */}
          <div className="lg:w-5/12 space-y-12">
            
            {/* 2. INTRO TEXT */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Build Your Future With Us</h2>
              <p className="text-lg text-steel leading-relaxed">
                OGS is always looking for qualified professionals across all divisions. Whether you're an experienced driller, HSE officer, logistics specialist or fresh graduate, we want to hear from you.
              </p>
            </div>

            {/* 3. JOB CATEGORIES */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Current Focus Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((cat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center">
                    <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <cat.icon className="w-5 h-5 text-orange" />
                    </div>
                    <span className="font-heading font-medium text-navy">{cat.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-navy rounded-xl p-8 text-white">
              <h3 className="text-xl font-heading font-bold mb-3">Why Join OGS?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-orange mr-2" /> Competitive Remuneration</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-orange mr-2" /> Global Career Opportunities</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-orange mr-2" /> World-Class HSE Standards</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-orange mr-2" /> Continuous Learning & Training</li>
              </ul>
            </div>

          </div>

          {/* Right Sidebar - 4. APPLICATION FORM */}
          <div className="lg:w-7/12">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-navy mb-2">Submit Your Application</h3>
              <p className="text-steel mb-8">Send us your details and CV to be added to our global talent pool.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-steel mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-steel mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="+92 300 0000000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel mb-2">Years of Experience</label>
                    <input type="number" min="0" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="e.g. 5" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-2">Position Applying For</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="e.g. HSE Manager, Driller, etc." />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-2">Upload CV</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-orange hover:bg-orange/5 transition-colors cursor-pointer">
                    <div className="space-y-1 text-center">
                      <Paperclip className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-orange hover:text-orange/80 focus-within:outline-none">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all resize-none" placeholder="Briefly describe your qualifications..."></textarea>
                </div>
                
                <button type="submit" className="w-full flex items-center justify-center bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
