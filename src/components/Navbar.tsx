"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    "HR Services",
    "Rig Contracting",
    "Drilling Operations",
    "Training",
    "Procurement",
    "Logistics",
    "Safety",
    "Catering",
    "Consultancy",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-bold font-heading text-navy tracking-tight">
              OGS
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-steel hover:text-orange transition-colors font-medium">Home</Link>
            <Link href="/about" className="text-steel hover:text-orange transition-colors font-medium">About</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-steel hover:text-orange transition-colors font-medium py-2">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-steel hover:bg-offwhite hover:text-orange transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/clients" className="text-steel hover:text-orange transition-colors font-medium">Clients</Link>
            <Link href="/training" className="text-steel hover:text-orange transition-colors font-medium">Training</Link>
            <Link href="/careers" className="text-steel hover:text-orange transition-colors font-medium">Careers</Link>
            <Link href="/contact" className="text-steel hover:text-orange transition-colors font-medium">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-orange hover:bg-orange/90 text-white px-6 py-2.5 rounded font-medium transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-steel hover:text-navy focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-steel hover:text-orange hover:bg-offwhite rounded-md">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-steel hover:text-orange hover:bg-offwhite rounded-md">About</Link>
            
            <div className="px-3 py-2 text-base font-medium text-steel">
              Services
              <div className="mt-2 space-y-1 pl-4 border-l-2 border-offwhite">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-3 py-2 text-sm font-medium text-steel hover:text-orange hover:bg-offwhite rounded-md"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/clients" className="block px-3 py-2 text-base font-medium text-steel hover:text-orange hover:bg-offwhite rounded-md">Clients</Link>
            <Link href="/training" className="block px-3 py-2 text-base font-medium text-steel hover:text-orange hover:bg-offwhite rounded-md">Training</Link>
            <Link href="/careers" className="block px-3 py-2 text-base font-medium text-steel hover:text-orange hover:bg-offwhite rounded-md">Careers</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-steel hover:text-orange hover:bg-offwhite rounded-md">Contact</Link>
            
            <div className="pt-4 pb-2 px-3">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center bg-orange text-white px-4 py-2 rounded-md text-base font-medium"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
