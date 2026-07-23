"use client";

import Link from "next/link";
import { ChevronRight, Truck, Globe, Map, PackageOpen, CheckCircle2, Car, Send } from "lucide-react";

export default function LogisticsServicesPage() {
  const serviceAreas = [
    {
      title: "Ground Transportation",
      desc: "Heavy hauling, flatbed trucking, contracted long-haul network",
      icon: Truck
    },
    {
      title: "International Shipping",
      desc: "Air cargo, ocean freight, road/rail/barge; customs clearance expertise",
      icon: Globe
    },
    {
      title: "Specialized Heavy Haul",
      desc: "Oversized project cargo, multi-modal transport, on-time delivery",
      icon: PackageOpen
    },
    {
      title: "Special Project Logistics",
      desc: "Full project planning, phased execution, cost & timeline transparency",
      icon: Map
    }
  ];

  const heavyFleet = [
    "20-40ft Trailers", "Containers", "Trucks & Mini Trucks", "Fork-Lifters", 
    "Cranes", "Diesel & Water Tankers", "Dozers & Rollers", "Excavators", 
    "Wheel Loader", "Concrete Batch Plants", "Dump Truck", 
    "Water Well Drilling Machines", "Low Beds", "Tractors & Trolleys"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      {/* 1. PAGE HERO */}
      <section className="relative bg-navy text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?q=80&w=2560&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-orange transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Logistics</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Logistic Support
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* 2. INTRO TEXT */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Global Transportation Solutions</h2>
              <p className="text-lg text-steel leading-relaxed">
                OGS provides logistical solutions designed to meet the diverse needs of today's demanding business environment. Our Logistics Group is the single source contact for all ground transportation, shipping and trucking needs &mdash; structured with heavy hauling and financial protection foremost in mind.
              </p>
            </div>

            {/* 3. SERVICE AREAS */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Service Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-orange transition-colors group">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange transition-colors">
                      <area.icon className="w-6 h-6 text-orange group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-heading font-semibold text-navy mb-2">{area.title}</h4>
                    <p className="text-steel">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. HEAVY TRANSPORT FLEET */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Heavy Transport Fleet</h3>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {heavyFleet.map((vehicle, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-steel font-medium">{vehicle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. LIGHT VEHICLES */}
            <div className="bg-navy p-8 rounded-lg text-white relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <Car className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold mb-4 flex items-center">
                  <Car className="w-6 h-6 text-orange mr-3" />
                  Light Vehicles & Passenger Transport
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                  OGS provides a wide range of light vehicles on monthly and day rates: 4x4 Pick-Ups, Cars, Hi-Ace, Coasters (ambulance & crew shifts), Mazda, Shahzore. We also provide airport pick & drop services to fields and offices.
                </p>
              </div>
            </div>

          </div>

          {/* Right Sidebar - 6. INQUIRY FORM */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Logistics Inquiry</h3>
              
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
                  <label className="block text-sm font-medium text-steel mb-1">Cargo Type / Details</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="e.g. 20ft Container, Oversized Equipment" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-steel mb-1">Origin</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="City/Port" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel mb-1">Destination</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="City/Site" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Transport Mode</label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all text-steel bg-white">
                    <option value="">Select mode...</option>
                    <option value="Road">Road</option>
                    <option value="Air">Air</option>
                    <option value="Sea">Sea</option>
                    <option value="Rail">Rail</option>
                    <option value="Multi-modal">Multi-modal</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all resize-none" placeholder="Provide weight, dimensions, timeline, etc."></textarea>
                </div>
                
                <button type="submit" className="w-full flex items-center justify-center bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded font-medium transition-colors mt-2">
                  <Send className="w-4 h-4 mr-2" />
                  Get Logistics Quote
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
