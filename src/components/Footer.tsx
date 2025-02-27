import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  businessHours?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

const Footer = ({
  businessHours = "Mon-Fri: 11:00-22:00, Sat-Sun: 12:00-23:00",
  address = "Brīvības iela 123, Riga, LV-1001",
  phone = "+371 12345678",
  email = "info@shushibowlriga.lv",
  socialLinks = {
    facebook: "https://facebook.com/shushibowlriga",
    instagram: "https://instagram.com/shushibowlriga",
    twitter: "https://twitter.com/shushibowlriga",
  },
}: FooterProps) => {
  return (
    <footer className="bg-rich-black text-white py-8 border-t-2 border-gold">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-gold font-bold text-lg mb-2">
              Shushi Bowl Riga
            </h3>
            <p className="text-gray-300 text-sm">{address}</p>
            <p className="text-gray-300 text-sm">{phone}</p>
          </div>

          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-gold font-bold text-lg mb-2">Hours</h3>
            <p className="text-gray-300 text-sm">{businessHours}</p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-gold font-bold text-lg mb-2">Connect</h3>
            <div className="flex space-x-4 justify-center md:justify-end">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-4 bg-gray-800" />

        <div className="text-center text-gray-500 text-xs">
          <p>
            © {new Date().getFullYear()} Shushi Bowl Riga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
