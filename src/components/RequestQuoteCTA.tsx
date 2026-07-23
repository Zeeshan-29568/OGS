import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RequestQuoteCTA() {
  return (
    <section className="bg-navy py-16 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-orange opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-steel opacity-20 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact our team of experts today to discuss your specific requirements and how we can support your next project.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-3 rounded text-base font-medium bg-orange hover:bg-orange/90 text-white transition-all transform hover:scale-105"
        >
          Request a Quote
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
