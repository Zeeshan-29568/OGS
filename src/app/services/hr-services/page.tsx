"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle2, Send, Users, HardHat, Shield, Wrench, Truck, Utensils } from "lucide-react";

export default function HRServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "Management",
      icon: Users,
      roles: ["Rig Managers", "Drilling Superintendents", "Tool Pushers", "Project Managers", "OIM (Offshore Installation Managers)"]
    },
    {
      title: "Technical / Drilling",
      icon: HardHat,
      roles: ["Drillers", "Assistant Drillers", "Derrickmen", "Roughnecks", "Roustabouts", "Mud Engineers", "Geologists", "Wireline Operators", "Cementing Engineers", "Mud Loggers"]
    },
    {
      title: "Safety",
      icon: Shield,
      roles: ["HSE Officers", "Loss Prevention Officers", "Safety Officers", "Barge Safety Officers", "Permit to Work Coordinators"]
    },
    {
      title: "Engineering & Maintenance",
      icon: Wrench,
      roles: ["Mechanical Engineers", "Electrical Engineers", "Instrumentation Engineers", "Welders", "Crane Operators", "Motormen", "Mechanics"]
    },
    {
      title: "Support & Logistics",
      icon: Truck,
      roles: ["Drivers", "Warehouse Supervisors", "Construction Foremen", "Mechanical & Electrical Foremen"]
    },
    {
      title: "Catering & Camp",
      icon: Utensils,
      roles: ["Camp Boss", "Cooks", "Kitchen Helpers", "Housekeeping Staff"]
    }
  ];

  const steps = [
    { title: "Requirement Analysis", desc: "Understanding your operational needs, project scale, and specific technical requirements." },
    { title: "Candidate Sourcing & Screening", desc: "Leveraging our global database to find, vet, and technically screen the best candidates." },
    { title: "Client Shortlisting & Interviews", desc: "Presenting the top profiles for your final approval and coordinating interviews." },
    { title: "Deployment & Payroll Management", desc: "Handling visas, logistics, onboarding, and ongoing payroll administration." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      {/* 1. PAGE HERO */}
      <section className="relative bg-navy text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2560&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-orange transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">HR Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Human Resource Services
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* 2. INTRO TEXT */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Manpower Solutions for Oil & Gas</h2>
              <p className="text-lg text-steel leading-relaxed">
                OGS provides comprehensive manpower solutions to the oil & gas industry. We supply skilled, semi-skilled and unskilled personnel for onshore and offshore operations across Pakistan, the Gulf, Middle East, Europe and Africa.
              </p>
            </div>

            {/* 3. MANPOWER CATEGORIES */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Manpower Categories</h3>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex flex-wrap border-b border-gray-100">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`flex-1 min-w-[150px] py-4 px-4 text-sm font-medium font-heading transition-colors border-b-2 flex flex-col items-center gap-2 ${
                        activeTab === idx 
                          ? "border-orange text-orange bg-orange/5" 
                          : "border-transparent text-steel hover:text-navy hover:bg-gray-50"
                      }`}
                    >
                      <cat.icon className="w-5 h-5" />
                      {cat.title}
                    </button>
                  ))}
                </div>
                
                <div className="p-8">
                  <h4 className="text-xl font-heading font-semibold text-navy mb-6 flex items-center">
                    {categories[activeTab].title} Roles
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories[activeTab].roles.map((role, rIdx) => (
                      <li key={rIdx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-steel">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. RECRUITMENT PROCESS */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-8">Our Recruitment Process</h3>
              
              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex relative">
                    {/* Timeline line */}
                    {idx !== steps.length - 1 && (
                      <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gray-200 -z-10"></div>
                    )}
                    
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center font-bold text-lg font-heading shadow-md border-4 border-white">
                      {idx + 1}
                    </div>
                    <div className="ml-6 pb-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1">
                      <h4 className="text-xl font-heading font-semibold text-navy mb-2">{step.title}</h4>
                      <p className="text-steel">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar - 5. INQUIRY FORM */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Request Personnel</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Company Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="Enter company name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Contact Person</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="Full name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Position Required</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="e.g. Drilling Superintendent" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-steel mb-1">Number of Personnel</label>
                    <input type="number" min="1" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="Qty" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel mb-1">Location</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="City/Country" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Message / Requirements</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all resize-none" placeholder="Any specific requirements..."></textarea>
                </div>
                
                <button type="submit" className="w-full flex items-center justify-center bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded font-medium transition-colors mt-2">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Manpower Request
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
