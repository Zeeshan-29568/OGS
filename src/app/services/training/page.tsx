"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Award, Search, BookOpen, Send, GraduationCap, FileCheck2 } from "lucide-react";

export default function TrainingServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const certifications = [
    "IWCF Well Control Certification (Driller & Supervisor Level)",
    "IADC WellCAP Certification (Driller & Supervisor Level)",
    "NEBOSH",
    "IOSH Managing Safely"
  ];

  const technicalCourses = [
    "Stuck Pipe Recovery Course",
    "Simulator Training Program",
    "Drilling Fluids Technology"
  ];

  const allCourses = [
    "Accident & Incident Investigation", "Advanced Hydraulic Fracturing", "Basic Petroleum Geology", 
    "Basic Petroleum Technology", "CPR", "Casing & Cementing", "Chemical Spill Awareness", 
    "Chlorine Handling & Hazard", "Concepts of Exploration & Production", "Conflict Management", 
    "COSHH", "Cost Management", "Crane & Fork Lift Operation", "Drill String Failure Prevention", 
    "Drilling Fluids Technology", "Drilling Rig Site Safety", "Fire Fighting", "First Aid Level 1 & 2", 
    "Food Hygiene", "Gas Testing", "H2S Safety & SCBA", "HAZCOM", "HAZMAT", "HAZOP", 
    "IATA Dangerous Cargo Handling", "IMO Dangerous Cargo Handling", "Inspection of CO2 Welding", 
    "Intro to Drilling", "Introduction to Oil & Gas Production", "Introduction to Oil Industry", 
    "Introduction to Hazardous Oilfield Environment", "Lubrication & Greasing", "Maintenance of Rotating Machinery", 
    "Maintenance Planning & Work Control", "Manual Handling", "Mechanical Lifting", "Noise Hazards & Safety", 
    "Oil Field Services", "Oil From Pore to Pure", "Permit to Work", "Pumps Operation & Maintenance", 
    "Radiation Level 1 & 2", "Rig Pass", "Risk Assessment", "Scaffolding Safety Awareness", "Waste Management", 
    "Welding & Inspection", "Welding Safety", "Working at Height", "Working in Extreme Environment", 
    "Working Safely", "Workshop & Warehouse Safety"
  ];

  const filteredCourses = allCourses.filter(course => 
    course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      {/* 1. PAGE HERO */}
      <section className="relative bg-navy text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2560&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-orange transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Training</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Training Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl font-medium">
            Pre-eminent centre for petroleum geosciences, drilling technology, QHSE and management training
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* 2. TRAINING CENTER INTRO */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">Education, Training & Research</h2>
              <p className="text-lg text-steel leading-relaxed">
                OGS is a pre-eminent centre for Education, Training and Research in petroleum geosciences, drilling technology, QHSE, engineering and management. Our trainers are well versed in OHSAS 18001 implementation and have first-hand industry experience working for major oil and gas companies. We are active members of SPE and IADC.
              </p>
            </div>

            {/* 3. CERTIFICATION COURSES */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-6 flex items-center">
                <Award className="w-6 h-6 text-orange mr-2" />
                Industry Certifications
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-orange border-y border-r border-gray-100 hover:shadow-md transition-shadow">
                    <FileCheck2 className="w-8 h-8 text-orange/20 mb-3" />
                    <h4 className="text-lg font-heading font-semibold text-navy">{cert}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. TECHNICAL COURSES */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-6 flex items-center">
                <BookOpen className="w-6 h-6 text-orange mr-2" />
                Specialized Technical Courses
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {technicalCourses.map((course, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-center text-center hover:border-orange transition-colors">
                    <GraduationCap className="w-6 h-6 text-navy mx-auto mb-2" />
                    <span className="font-heading font-semibold text-steel">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. QHSE COURSE CATALOG */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">QHSE Course Catalog</h3>
              
              {/* Search Bar */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange sm:text-sm transition-all shadow-sm"
                  placeholder="Search over 50+ courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Filtered Results */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                {filteredCourses.length > 0 ? (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    {filteredCourses.map((course, idx) => (
                      <li key={idx} className="flex items-start group">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 mr-2 flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                        <span className="text-steel text-sm leading-relaxed">{course}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    No courses found matching "{searchQuery}"
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Sidebar - 6. ENROLLMENT FORM */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-navy mb-6">Course Enrollment</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="Enter your full name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="Your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Company (Optional)</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all" placeholder="Your organization" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Course Interested In</label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all text-steel bg-white">
                    <option value="">Select a course...</option>
                    <optgroup label="Certifications">
                      {certifications.map((c, i) => <option key={`cert-${i}`} value={c}>{c}</option>)}
                    </optgroup>
                    <optgroup label="Technical Courses">
                      {technicalCourses.map((c, i) => <option key={`tech-${i}`} value={c}>{c}</option>)}
                    </optgroup>
                    <optgroup label="QHSE Courses">
                      <option value="QHSE (General)">QHSE Catalog (Specify in message)</option>
                    </optgroup>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-steel mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange/50 focus:border-orange outline-none transition-all resize-none" placeholder="Any specific requirements or multiple courses..."></textarea>
                </div>
                
                <button type="submit" className="w-full flex items-center justify-center bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded font-medium transition-colors mt-2">
                  <Send className="w-4 h-4 mr-2" />
                  Enroll / Inquire Now
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
