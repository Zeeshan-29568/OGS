import Link from "next/link";
import { ChevronRight, Globe2, MapPin } from "lucide-react";

export default function ClientsPage() {
  const clients = [
    {
      name: "CNPC Chuanqing Drilling Engineering Co. Ltd. (CCDC) — Pakistan Branch",
      region: "Pakistan / China"
    },
    {
      name: "BGP (Pakistan) International",
      region: "Pakistan"
    },
    {
      name: "Dewan Drilling Company (Pvt) Limited",
      region: "Pakistan"
    },
    {
      name: "Dewan Petroleum (Pvt) Ltd",
      region: "Pakistan"
    },
    {
      name: "Abraj Energy Services — Oman",
      region: "Oman"
    },
    {
      name: "OMV (Pakistan) Exploration & Production GmbH",
      region: "Pakistan / Austria"
    },
    {
      name: "Al Burgan Drilling Company",
      region: "Kuwait"
    },
    {
      name: "Kuwait Drilling Company",
      region: "Kuwait"
    },
    {
      name: "Pakistan Oilfields Limited",
      region: "Pakistan"
    },
    {
      name: "China National Logging Corporation (CNLC) — Pakistan",
      region: "Pakistan / China"
    },
    {
      name: "China State Construction and Engineering Co. (Overseas Division)",
      region: "International"
    },
    {
      name: "Pak Sino Unisys Engineering (Private) Limited",
      region: "Pakistan"
    },
    {
      name: "Islamabad Police Headquarters",
      region: "Pakistan"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      {/* 1. PAGE HERO */}
      <section className="relative bg-navy text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2560&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Clients</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Our Clients
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl font-medium">
            Trusted by leading national and international oil & gas companies
          </p>
        </div>
      </section>

      {/* 2. CLIENTS GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <Globe2 className="w-12 h-12 text-orange mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">A Global Network of Trust</h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            We are proud to have supported some of the most prestigious organizations in the energy sector with our diverse portfolio of services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-orange hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <h3 className="text-xl font-heading font-bold text-navy mb-6 group-hover:text-orange transition-colors leading-snug">
                {client.name}
              </h3>
              
              <div className="flex items-center text-sm font-medium text-steel bg-offwhite w-max px-3 py-1.5 rounded-full border border-gray-200">
                <MapPin className="w-4 h-4 mr-1.5 text-orange" />
                {client.region}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PARTNERSHIP CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy text-center relative overflow-hidden mt-auto">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-orange opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-steel opacity-20 blur-3xl"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join our growing list of satisfied clients. Contact us to discuss how OGS can serve your operations.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 rounded text-lg font-medium bg-orange hover:bg-orange/90 text-white transition-transform transform hover:scale-105 shadow-lg"
          >
            Get in Touch
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
