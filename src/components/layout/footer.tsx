"use client";

import Link from "next/link";
import { Phone, Printer, Mail, Navigation, Facebook, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/data/siteConfig"; // Assuming you have this from earlier

export const Footer = () => {
  return (
    <footer 
      className="w-full py-12 md:py-16 text-white"
      style={{
        background: "linear-gradient(90deg, #024a87 0%, #68268c 50%, #d8008a 100%)",
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          
          {/* Column 1: Logo */}
          <div className="flex flex-col items-start lg:col-span-1">
            {/* Make sure to download the transparent/white version of the logo for this */}
            <img 
              src="/Gillaume-Counseling-Footer-Logo-1024x707.webp" // Update this path to your actual footer logo
              alt="Guillaume Counseling" 
              className="w-48 h-auto object-contain"
            />
          </div>

          {/* Column 2: Links Group 1 */}
          <div className="flex flex-col space-y-3 lg:col-span-1">
            <Link href="/" className="font-bold text-[15px] hover:text-gray-200 transition-colors w-fit">
              Home
            </Link>
            <Link href="/about-us" className="font-bold text-[15px] hover:text-gray-200 transition-colors w-fit">
              About Us
            </Link>
            <Link href="/appointment-requests" className="font-bold text-[15px] hover:text-gray-200 transition-colors w-fit">
              Appointment Requests
            </Link>
            <Link href="/contact-us" className="font-bold text-[15px] hover:text-gray-200 transition-colors w-fit">
              Contact Us
            </Link>
          </div>

          {/* Column 3: Links Group 2 */}
          <div className="flex flex-col space-y-3 lg:col-span-1">
            <Link href="/career" className="font-bold text-[15px] hover:text-gray-200 transition-colors w-fit">
              Career
            </Link>
            <Link href="/insurances" className="font-bold text-[15px] hover:text-gray-200 transition-colors w-fit">
              Insurances
            </Link>
            <Link href="/blogs" className="font-bold text-[15px] hover:text-gray-200 transition-colors w-fit">
              Blogs
            </Link>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col space-y-3 lg:col-span-1">
            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" />
              <span className="font-bold text-[15px]">Oregon: (503) 922-3360</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" />
              <span className="font-bold text-[15px]">California: (916) 992-2620</span>
            </div>
            <div className="flex items-start gap-2">
              <Printer className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="font-bold text-[15px]">971-352-4229</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 shrink-0 mt-0.5" />
              <a href="mailto:info@guillaumecounseling.com" className="font-bold text-[15px] hover:underline">
                info@guillaumecounseling.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <Navigation className="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" />
              <span className="font-bold text-[15px] leading-snug">
                Mailing address: 20333 State Hwy<br />
                249, Suite 200, Houston Texas 77070
              </span>
            </div>
          </div>

          {/* Column 5: Socials & Badges */}
          <div className="flex flex-col items-start lg:items-end space-y-6 lg:col-span-1">
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white text-[#d8008a] p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white text-[#d8008a] p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white text-[#d8008a] p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" fill="currentColor" strokeWidth={0} />
              </a>
            </div>

            {/* Psychology Today Badge */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="block w-48">
              {/* Download the badge from the live site and place it in your public/images folder */}
              <img 
                src="/psychologytoday.png" 
                alt="Verified by Psychology Today" 
                className="w-full h-auto rounded-full bg-[#477BE4] px-3 py-1 shadow-md"
              />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};