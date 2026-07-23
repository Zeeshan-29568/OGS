"use client";

import Link from "next/link";
import { ChevronRight, Settings2, HardHat, Home, Wrench, Pickaxe, Target, ShieldCheck, ClipboardCheck, Briefcase, FileSearch, Send, CheckCircle2 } from "lucide-react";

export default function RigContractingPage() {
  const services = [
    { title: "Rig Hiring on Day Rate", icon: Settings2 },
    { title: "Complete Crew Hiring & Management", icon: HardHat },
    { title: "Well Site Accommodation & Food", icon: Home },
    { title: "Rig Maintenance & Inspection", icon: Wrench },
    { title: "Drilling & Completion Operations", icon: Pickaxe },
    { title: "Project Management", icon: Target },
    { title: "Asset Integrity Management", icon: ShieldCheck },
    { title: "Rig Audits & Inspections", icon: FileSearch },
    { title: "HSE Supervision, Procedures & Audits", icon: ClipboardCheck },
    { title: "Staffing & Payroll for Contract Labor", icon: Briefcase }
  ];

  const techSupport = [
    "Well Logging, Testing & Cementing",
    "Advisory for Oil & Gas Investors",
    "Drilling & Services Management",
    "Bridge connection between client and drilling/service companies"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      {/* 1. PAGE HERO */}
      <section className="relative bg-navy text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2560&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-orange transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Rig Contracting</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Rig Contracting Services
          </h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* 2. INTRO TEXT */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Expertise in Land Rigs & Operations</h2>
              <p className="text-lg text-steel leading-relaxed">
                OGS provides drilling services on day rate and conducts drilling operations as a third party. We operate land rigs across multiple locations and are well-positioned to handle the most challenging drilling programs.
              </p>
            </div>

            {/* 3. SERVICES LIST (2-column icon grid) */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-8">Our Capabilities</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center hover:border-orange hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-offwhite rounded-full flex items-center justify-center mr-4 group-hover:bg-orange/10 transition-colors duration-300 flex-shrink-0">
                      <service.icon className="w-6 h-6 text-navy group-hover:text-orange transition-colors duration-300" />
                    </div>
                    <span className="font-heading font-semibold text-navy group-hover:text-orange transition-colors duration-300">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. TECHNICAL SUPPORT SECTION */}
            <div className="bg-navy text-white p-8 md:p-10 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-orange opacity-10 blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold mb-6">Technical Support</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  OGS provides a full range of services covering every phase of drilling and completion &mdash; from development of rig contract strategy through well site D&amp;C operations. We offer experienced technical support in:
                </p>
                
                <ul className="space-y-4">
                  {techSupport.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-orange mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Right Sidebar - 5. INQUIRY FORM */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Inquire About Rigs</h3>
              
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
                  <label className="block text-sm font-medium text-steel mb-1">Rig Type Required</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="e.g. 1500 HP Land Rig" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-steel mb-1">Location</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="Field/Country" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel mb-1">Duration</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="e.g. 6 months" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Message / Requirements</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all resize-none" placeholder="Any specific technical requirements..."></textarea>
                </div>
                
                <button type="submit" className="w-full flex items-center justify-center bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded font-medium transition-colors mt-2">
                  <Send className="w-4 h-4 mr-2" />
                  Request Rig Contracting Services
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
