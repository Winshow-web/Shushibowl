import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import OrderDialog from "./OrderDialog";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onOrderNow?: () => void;
}

const HeroSection = ({
  title = "Shushi Bowl Riga",
  subtitle = "Experience authentic Japanese and Chinese cuisine with our premium sushi rolls and ramen bowls",
  imageUrl = "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
  onOrderNow = () => console.log("Order Now clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[700px] bg-rich-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt="Premium Sushi"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rich-black via-rich-black/80 to-transparent"></div>
      </div>

      {/* Decorative Elements - Cherry Blossoms Top Left */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 opacity-30 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Decorative Elements - Cherry Blossoms Bottom Right */}
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-30 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gold-gradient mb-4 animate-shimmer bg-[length:200%_auto]">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">{subtitle}</p>
          <OrderDialog>
            <Button
              onClick={onOrderNow}
              className="bg-red-gradient hover:bg-deep-red text-white px-8 py-6 text-lg rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-deep-red/30 border border-gold/20"
            >
              Order Now
            </Button>
          </OrderDialog>
        </motion.div>
      </div>

      {/* Decorative Japanese Pattern Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gold z-10 opacity-80">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/japanese-pattern.png')]"></div>
      </div>
    </div>
  );
};

export default HeroSection;
