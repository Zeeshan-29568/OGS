"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Flame, Shield, Activity, Wind, TrafficCone, LifeBuoy, Lock, Wrench, CheckCircle2, Send } from "lucide-react";

export default function SafetyServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "Fire Protection",
      icon: Flame,
      items: [
        "CO2, Foam, Dry Powder & Water Fire Extinguishers", "Fire Fighting Pumps", 
        "Fire Hose, Racks & Valves", "Fire Monitor & Nozzle", "Fire Alarms & Detectors", 
        "Fire Blankets", "Fire Suit", "Fire Coverall", "Fire Fighting Motorcycle", 
        "Fire Hook", "Fire Ring", "Jumping Cushion", "Fireproof Ladder"
      ]
    },
    {
      title: "Personal Protective Equipment",
      icon: Shield,
      items: [
        "Safety Helmets, Chin Strap", "Chemical Hood, Leather Safety Hood", "Face Shield", 
        "Welding Helmet & Shield", "Dust Mask, Respirators, Mask with Filter", 
        "Safety Shoes (Red Wing, Caterpillar)", "Rubber Shoes", "Reflection Vest", 
        "Cotton PC Coverall", "Rain Coats", "T-Shirts", "Cool Vest", "Winter Liners"
      ]
    },
    {
      title: "Fall Protection",
      icon: Activity,
      items: [
        "Harness, Safety Belt", "Shock Absorbing Lanyards & Tail Lines", "Tie-Off Straps", 
        "Fixed Beam Anchor", "Tool Lanyard", "Self Retracting Lifelines", "Rope Grab", 
        "Ladder Climb Assist System", "Ladder Mast System", "Tripod", "Portable Guard Rail", 
        "Self Closing Safety Gates", "Rescue at Heights Lanyards & Carabiner", "Climbing Lanyard"
      ]
    },
    {
      title: "Gas Detection",
      icon: Wind,
      items: [
        "Portable Gas Detection Instruments", "Gas Detection Accessories/Sensors", 
        "Calibration Kits", "SCUBA Diving Kit"
      ]
    },
    {
      title: "Site Safety & Traffic",
      icon: TrafficCone,
      items: [
        "Traffic Cones, Delineator Spring Posts", "Warning Signs, Speed Barriers", 
        "Road Studs, Road Barriers", "Barrication Chains & Tapes", "Convex Mirror", 
        "Baton Light", "Blinking Light", "Anti-Impact Barrel", "Emergency Lights", 
        "Traffic Warning Lights", "Windsock"
      ]
    },
    {
      title: "Emergency & Rescue",
      icon: LifeBuoy,
      items: [
        "First Aid Box", "Spill Kit", "Eyewash Station", "Emergency Exit Door", 
        "Breathing Apparatus", "Electric Moving Cannon", "Rescue Door Opener", 
        "Rescue Audio Finder", "EPIRB", "Line Thrower", "Distress Signals, Flares & Smokes", 
        "Ring Buoy", "Life Preserver Boxes", "Confined Space System", "Personnel Transfer Basket"
      ]
    },
    {
      title: "Lockout / Tagout",
      icon: Lock,
      items: [
        "Lockout Station", "Gate Valve Lockout", "Breaker Switch Lockout", 
        "Wall Switch Lockout", "Plug Lockout", "Right-to-Know Station"
      ]
    },
    {
      title: "Tools & Access",
      icon: Wrench,
      items: [
        "Aluminum & Fiber Ladder", "Alternative Cutting Tool", "Portable Spreader", 
        "Concrete Cutter", "Tool Bag", "Tethered Tool Kit", "Shock Absorbing Lanyards", 
        "Poly-Pro Rope", "5 Gallon Storage Can", "Fuel Nozzle", "Ground Fault Circuit Interrupter", 
        "Barrier Fencing", "Crowfoot Safety Cable"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      {/* 1. PAGE HERO */}
      <section className="relative bg-navy text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=2560&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-orange transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Safety</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Safety Equipment & Concern
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* 2. INTRO TEXT */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Protecting People & Assets</h2>
              <p className="text-lg text-steel leading-relaxed">
                OGS supplies a comprehensive range of safety equipment, PPE and fire protection systems to oil & gas operations, construction sites and industrial facilities across Pakistan and the region.
              </p>
            </div>

            {/* 3. PRODUCT CATEGORIES (Tabbed Layout) */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Product Catalog</h3>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                {/* Tabs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`py-4 px-2 text-sm font-medium font-heading transition-colors border-b-2 flex flex-col items-center gap-2 text-center ${
                        activeTab === idx 
                          ? "border-orange text-orange bg-orange/5" 
                          : "border-transparent text-steel hover:text-navy hover:bg-gray-50"
                      }`}
                    >
                      <cat.icon className="w-6 h-6" />
                      {cat.title}
                    </button>
                  ))}
                </div>
                
                {/* Tab Content */}
                <div className="p-8">
                  <h4 className="text-2xl font-heading font-semibold text-navy mb-6 flex items-center">
                    {categories[activeTab].title}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categories[activeTab].items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-steel leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar - 4. INQUIRY FORM */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Request a Quote</h3>
              
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
                  <label className="block text-sm font-medium text-steel mb-1">Equipment Required</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="e.g. 50x Safety Helmets" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-steel mb-1">Quantity</label>
                    <input type="number" min="1" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="Qty" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel mb-1">Location</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="City/Site" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Message / Details</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all resize-none" placeholder="Provide specific models, standards required, etc."></textarea>
                </div>
                
                <button type="submit" className="w-full flex items-center justify-center bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded font-medium transition-colors mt-2">
                  <Send className="w-4 h-4 mr-2" />
                  Request Safety Equipment Quote
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
