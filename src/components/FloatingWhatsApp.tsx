"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hello! I would like to know more about your services.");
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out pl-0 group-hover:pl-2 font-medium">
        Chat with us
      </span>
    </a>
  );
}
