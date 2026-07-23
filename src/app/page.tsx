import Link from "next/link";
import { 
  Users, 
  Settings2, 
  Droplets, 
  BookOpen, 
  Package, 
  Truck, 
  ShieldCheck, 
  Utensils,
  Award,
  HeartHandshake,
  PiggyBank
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "HR Services",
      desc: "Recruitment, staffing & manpower for oil & gas operations",
      icon: Users,
      slug: "hr-services"
    },
    {
      title: "Rig Contracting",
      desc: "Land rig hiring, crew management & maintenance",
      icon: Settings2,
      slug: "rig-contracting"
    },
    {
      title: "Drilling Operations",
      desc: "Well logging, cementing, D&C operations & advisory",
      icon: Droplets,
      slug: "drilling-operations"
    },
    {
      title: "Training Services",
      desc: "IWCF, IADC, NEBOSH, IOSH & 50+ QHSE courses",
      icon: BookOpen,
      slug: "training"
    },
    {
      title: "Procurement",
      desc: "Rig spares, equipment, fuel, lubricants & drilling compounds",
      icon: Package,
      slug: "procurement"
    },
    {
      title: "Logistics",
      desc: "Heavy haul, air/sea/road freight & customs clearance",
      icon: Truck,
      slug: "logistics"
    },
    {
      title: "Safety",
      desc: "Fire equipment, PPE, gas detection & rescue gear",
      icon: ShieldCheck,
      slug: "safety"
    },
    {
      title: "Catering",
      desc: "Well site accommodation, camp setup & food services",
      icon: Utensils,
      slug: "catering"
    }
  ];

  const whyOgs = [
    {
      title: "Quality",
      desc: "Outstanding reputation for efficient, reliable delivery",
      icon: Award
    },
    {
      title: "Service",
      desc: "Meeting client requirements quickly, safely and effectively",
      icon: HeartHandshake
    },
    {
      title: "Affordability",
      desc: "Cost-efficient solutions from appraise to execute stage",
      icon: PiggyBank
    }
  ];

  const clients = [
    "CNPC/CCDC", "BGP Pakistan", "Dewan Drilling", "Dewan Petroleum", 
    "Abraj Energy (Oman)", "OMV Pakistan", "Al Burgan Drilling", 
    "Kuwait Drilling Company", "Pakistan Oilfields Limited", 
    "CNLC Pakistan", "China State Construction", "Pak Sino Unisys", 
    "Islamabad Police HQ"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-navy text-white pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-navy/90 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2560&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Complete Oil & Gas Solutions &mdash; From Manpower to Machinery, From Training to Transport
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium">
            OGS is a well-established company delivering quality, service, and affordability to the energy sector since inception.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" className="bg-orange hover:bg-orange/90 text-white px-8 py-3 rounded font-medium transition-colors">
              Explore Our Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-3 rounded font-medium transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-navy border-t border-steel/20 py-12 relative z-30 -mt-12 mx-4 sm:mx-6 lg:mx-8 rounded-lg shadow-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <p className="text-3xl md:text-4xl font-heading font-bold text-orange mb-2">15+</p>
              <p className="text-sm md:text-base font-medium text-white">Years Experience</p>
            </div>
            <div className="p-4 border-l border-steel/20">
              <p className="text-3xl md:text-4xl font-heading font-bold text-orange mb-2">50+</p>
              <p className="text-sm md:text-base font-medium text-white">Training Courses</p>
            </div>
            <div className="p-4 md:border-l border-steel/20">
              <p className="text-3xl md:text-4xl font-heading font-bold text-orange mb-2">13+</p>
              <p className="text-sm md:text-base font-medium text-white">Major Clients</p>
            </div>
            <div className="p-4 border-l border-steel/20">
              <p className="text-3xl md:text-4xl font-heading font-bold text-orange mb-2">6</p>
              <p className="text-sm md:text-base font-medium text-white">Core Service Divisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Our Services</h2>
            <p className="text-steel max-w-2xl mx-auto">Comprehensive solutions tailored for the demanding environment of the oil and gas industry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link 
                href={`/services/${service.slug}`} 
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-orange hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-4 text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-sm text-steel">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY OGS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">Why Choose OGS?</h2>
            <div className="w-20 h-1 bg-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {whyOgs.map((feature, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-navy mb-4">{feature.title}</h3>
                <p className="text-steel text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENTS LOGO STRIP */}
      <section className="py-16 bg-offwhite overflow-hidden border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <h3 className="text-xl font-heading font-semibold text-steel uppercase tracking-wider">Trusted By Industry Leaders</h3>
        </div>
        
        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden flex bg-white py-6">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {/* Double the list to create infinite scroll effect */}
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="mx-8 text-xl font-heading font-bold text-navy/40 hover:text-navy transition-colors cursor-default">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
            Ready to partner with OGS?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-orange hover:bg-orange/90 text-white px-8 py-3 rounded font-medium transition-colors">
              Request a Quote
            </Link>
            <Link href="/services" className="bg-transparent border border-steel hover:border-white text-white px-8 py-3 rounded font-medium transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
