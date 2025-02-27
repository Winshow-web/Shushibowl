import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturedDishes from "./FeaturedDishes";
import AboutSection from "./AboutSection";
import LocationSection from "./LocationSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-rich-black text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Dishes Section */}
      <FeaturedDishes />

      {/* About Section */}
      <AboutSection />

      {/* Location Section */}
      <LocationSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
