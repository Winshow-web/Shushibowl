import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

interface AboutSectionProps {
  title?: string;
  story?: string;
  philosophy?: string;
  image?: string;
}

const AboutSection = ({
  title = "About Shushi Bowl Riga",
  story = "Founded in 2018, Shushi Bowl Riga began as a small family restaurant with a passion for authentic Asian cuisine. Our head chef, Master Tanaka, trained for over 15 years in Tokyo before bringing his expertise to Riga. What started as an intimate dining experience has grown into one of the city's most beloved culinary destinations.",
  philosophy = "At Shushi Bowl Riga, we believe in honoring traditional Japanese and Chinese culinary techniques while incorporating the freshest local ingredients. Every dish is crafted with precision, respect, and artistic presentation. We are committed to creating an authentic dining experience that transports our guests to the heart of Asia.",
  image = "",
}: AboutSectionProps) => {
  return (
    <section
      className="w-full py-16 px-4 md:px-8 bg-rich-black text-white relative overflow-hidden"
      id="about"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            viewBox=" 0 0 100 100"
            className="w-full h-full text-gold fill-current opacity-20"
          >
            <pattern
              id="bamboo-pattern"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
              patternTransform="rotate(45)"
            >
              <rect
                width="10"
                height="50"
                x="20"
                fill="currentColor"
                opacity="0.3"
              />
              <rect
                width="8"
                height="50"
                x="21"
                fill="currentColor"
                opacity="0.2"
              />
              <circle cx="25" cy="10" r="2" fill="currentColor" opacity="0.4" />
              <circle cx="25" cy="20" r="2" fill="currentColor" opacity="0.4" />
              <circle cx="25" cy="30" r="2" fill="currentColor" opacity="0.4" />
              <circle cx="25" cy="40" r="2" fill="currentColor" opacity="0.4" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#bamboo-pattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gold-gradient">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gold border overflow-hidden shadow-xl shadow-gold/10 relative">
              {/* Chinese calligraphy background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none"></div>

              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full text-deep-red fill-current"
                    >
                      <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,20 C33.4,20 20,33.4 20,50 C20,66.6 33.4,80 50,80 C66.6,80 80,66.6 80,50 C80,33.4 66.6,20 50,20 Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gold">Our Story</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{story}</p>

                <Separator className="my-6 bg-gold/20" />

                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full text-gold fill-current"
                    >
                      <path d="M20,0 L80,0 L100,20 L100,80 L80,100 L20,100 L0,80 L0,20 L20,0 Z M30,10 L70,10 L90,30 L90,70 L70,90 L30,90 L10,70 L10,30 L30,10 Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gold">
                    Our Philosophy
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{philosophy}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl border-2 border-gold/30"></div>

            {/* Cherry blossom decorative element */}
            <div className="absolute -top-10 -left-10 w-32 h-32 opacity-60 pointer-events-none"></div>

            {/* Dragon decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-30 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
