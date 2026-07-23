import Link from "next/link";
import { 
  ChevronRight, 
  Target, 
  Eye, 
  Rocket, 
  Award, 
  CheckCircle, 
  Shield, 
  PiggyBank 
} from "lucide-react";

export default function AboutPage() {
  const clients = [
    "CNPC/CCDC", "BGP Pakistan", "Dewan Drilling", "Dewan Petroleum", 
    "Abraj Energy (Oman)", "OMV Pakistan", "Al Burgan Drilling", 
    "Kuwait Drilling Company", "Pakistan Oilfields Limited", 
    "CNLC Pakistan", "China State Construction", "Pak Sino Unisys", 
    "Islamabad Police HQ"
  ];

  const values = [
    { label: "Quality", icon: Award },
    { label: "Reliability", icon: CheckCircle },
    { label: "Safety", icon: Shield },
    { label: "Affordability", icon: PiggyBank }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-offwhite">
      {/* 1. PAGE HERO */}
      <section className="relative bg-navy text-white pt-24 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888081198-5c4d34fb0e53?q=80&w=2560&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-orange transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            About Oil and Gas Solutions
          </h1>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-8 relative inline-block">
            Who We Are
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-orange"></span>
          </h2>
          <div className="text-lg text-steel leading-relaxed space-y-6 mt-8 text-left md:text-center">
            <p>
              Oil and Gas Solutions (OGS) is a well-established company in the market to fulfill the business and professional requirements of the Oil & Gas industry. We value every customer and appreciate every business opportunity with our sincere hope of maturing into a mutually beneficial corporation in the long run.
            </p>
            <p>
              In today's economy, where every dollar counts, our clients look for investment cost efficiency from the Appraise through the Execute stages of their projects. OGS provides key operational and technical management services built on years of experience acquired by working in different challenging fields.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THREE CARDS SIDE BY SIDE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Aim */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-orange hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-orange/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-navy mb-4">Our Aim</h3>
              <p className="text-steel">
                To meet customer requirements quickly, safely and effectively, to make life easier and better for our corporate clients.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-orange hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-orange/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-navy mb-4">Our Vision</h3>
              <p className="text-steel">
                To be the most innovative and outstanding provider of benefits, solutions and services to the energy sector. We envision a quality culture that enables us to exceed customer expectations.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-orange hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-orange/10 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-navy mb-4">Our Mission</h3>
              <p className="text-steel">
                To achieve the maximum commitment with a professional approach of voluntary co-operation based on a strong sense of personal responsibility. We accomplish our mission through continuous improvement, with quality as our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES ROW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {values.map((value, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full border-2 border-steel/30 flex items-center justify-center mb-4 group-hover:bg-orange group-hover:border-orange transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-heading font-medium tracking-wide">{value.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENTS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Trusted By Industry Leaders</h2>
            <div className="w-20 h-1 bg-orange mx-auto"></div>
            <p className="text-steel mt-6 max-w-2xl mx-auto">
              We have had the privilege of working with some of the most prominent names in the oil, gas, and energy sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, i) => (
              <div 
                key={i} 
                className="bg-offwhite border border-gray-100 p-6 rounded-lg text-center flex items-center justify-center hover:bg-white hover:border-orange hover:shadow-md transition-all duration-300 cursor-default min-h-[100px]"
              >
                <span className="font-heading font-bold text-navy/80">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
