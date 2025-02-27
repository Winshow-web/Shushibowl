import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Header from "./Header";
import Footer from "./Footer";
import OrderDialog from "./OrderDialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  ingredients?: string[];
  category: "sushi" | "ramen" | "appetizer" | "dessert";
  spicyLevel?: number;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

const MenuPage = () => {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [visibleItems, setVisibleItems] = useState(6);

  const menuItems: MenuItem[] = [
    // Sushi
    {
      id: "s1",
      name: "Dragon Roll",
      description:
        "Premium sushi roll with fresh salmon, avocado, and special spicy sauce, topped with thinly sliced cucumber.",
      price: "€12.99",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: [
        "Salmon",
        "Avocado",
        "Cucumber",
        "Spicy Mayo",
        "Nori",
        "Sushi Rice",
      ],
      category: "sushi",
      spicyLevel: 2,
      isGlutenFree: false,
      isVegetarian: false,
    },
    {
      id: "s2",
      name: "Rainbow Roll",
      description:
        "Colorful sushi roll featuring a variety of fresh fish, avocado, and cucumber, artfully arranged for a visual feast.",
      price: "€14.99",
      image:
        "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: [
        "Tuna",
        "Salmon",
        "Yellowtail",
        "Avocado",
        "Cucumber",
        "Crab Stick",
        "Nori",
        "Sushi Rice",
      ],
      category: "sushi",
      spicyLevel: 0,
      isGlutenFree: false,
      isVegetarian: false,
    },
    {
      id: "s3",
      name: "Spicy Tuna Roll",
      description:
        "Bold and flavorful roll with spicy tuna, cucumber, and a touch of sriracha mayo for the perfect kick.",
      price: "€11.99",
      image:
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: [
        "Tuna",
        "Cucumber",
        "Sriracha",
        "Mayo",
        "Green Onion",
        "Nori",
        "Sushi Rice",
      ],
      category: "sushi",
      spicyLevel: 3,
      isGlutenFree: false,
      isVegetarian: false,
    },
    {
      id: "s4",
      name: "Vegetable Roll",
      description:
        "Fresh and healthy roll filled with seasonal vegetables including avocado, cucumber, and carrot.",
      price: "€9.99",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: [
        "Avocado",
        "Cucumber",
        "Carrot",
        "Bell Pepper",
        "Asparagus",
        "Nori",
        "Sushi Rice",
      ],
      category: "sushi",
      spicyLevel: 0,
      isGlutenFree: false,
      isVegetarian: true,
    },
    // Ramen
    {
      id: "r1",
      name: "Tonkotsu Ramen",
      description:
        "Rich pork bone broth simmered for 24 hours, served with tender chashu pork, soft-boiled egg, and fresh noodles.",
      price: "€15.99",
      image:
        "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: [
        "Pork Bone Broth",
        "Chashu Pork",
        "Soft-boiled Egg",
        "Green Onion",
        "Bamboo Shoots",
        "Nori",
        "Ramen Noodles",
      ],
      category: "ramen",
      spicyLevel: 0,
      isGlutenFree: false,
      isVegetarian: false,
    },
    {
      id: "r2",
      name: "Spicy Miso Ramen",
      description:
        "Hearty miso-based broth with a spicy kick, topped with ground pork, corn, bean sprouts, and a seasoned egg.",
      price: "€14.99",
      image:
        "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: [
        "Miso Broth",
        "Ground Pork",
        "Corn",
        "Bean Sprouts",
        "Seasoned Egg",
        "Chili Oil",
        "Ramen Noodles",
      ],
      category: "ramen",
      spicyLevel: 3,
      isGlutenFree: false,
      isVegetarian: false,
    },
    {
      id: "r3",
      name: "Vegetable Ramen",
      description:
        "Light and flavorful vegetable broth with seasonal vegetables, tofu, and perfectly cooked ramen noodles.",
      price: "€13.99",
      image:
        "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: [
        "Vegetable Broth",
        "Tofu",
        "Corn",
        "Mushrooms",
        "Bok Choy",
        "Carrot",
        "Green Onion",
        "Ramen Noodles",
      ],
      category: "ramen",
      spicyLevel: 0,
      isGlutenFree: false,
      isVegetarian: true,
    },
    {
      id: "r4",
      name: "Shoyu Ramen",
      description:
        "Classic soy sauce-based broth with sliced chicken, bamboo shoots, and a marinated soft-boiled egg.",
      price: "€14.49",
      image:
        "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: [
        "Soy Sauce Broth",
        "Chicken",
        "Bamboo Shoots",
        "Marinated Egg",
        "Green Onion",
        "Nori",
        "Ramen Noodles",
      ],
      category: "ramen",
      spicyLevel: 1,
      isGlutenFree: false,
      isVegetarian: false,
    },
    // Appetizers
    {
      id: "a1",
      name: "Gyoza",
      description:
        "Pan-fried Japanese dumplings filled with seasoned ground pork and vegetables, served with dipping sauce.",
      price: "€7.99",
      image:
        "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: [
        "Ground Pork",
        "Cabbage",
        "Green Onion",
        "Garlic",
        "Ginger",
        "Dumpling Wrappers",
      ],
      category: "appetizer",
      spicyLevel: 0,
      isGlutenFree: false,
      isVegetarian: false,
    },
    {
      id: "a2",
      name: "Edamame",
      description:
        "Steamed young soybeans lightly seasoned with sea salt, a perfect healthy starter.",
      price: "€5.99",
      image:
        "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: ["Soybeans", "Sea Salt"],
      category: "appetizer",
      spicyLevel: 0,
      isGlutenFree: true,
      isVegetarian: true,
    },
    // Desserts
    {
      id: "d1",
      name: "Mochi Ice Cream",
      description:
        "Sweet rice dough filled with various flavors of ice cream, a delightful Japanese dessert.",
      price: "€6.99",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: ["Sweet Rice Flour", "Sugar", "Ice Cream", "Cornstarch"],
      category: "dessert",
      spicyLevel: 0,
      isGlutenFree: false,
      isVegetarian: true,
    },
    {
      id: "d2",
      name: "Green Tea Cheesecake",
      description:
        "Creamy cheesecake infused with premium matcha green tea, served with a light drizzle of honey.",
      price: "€8.99",
      image:
        "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      ingredients: [
        "Cream Cheese",
        "Matcha Powder",
        "Sugar",
        "Eggs",
        "Graham Cracker Crust",
        "Honey",
      ],
      category: "dessert",
      spicyLevel: 0,
      isGlutenFree: false,
      isVegetarian: true,
    },
  ];

  const sushiItems = menuItems.filter((item) => item.category === "sushi");
  const ramenItems = menuItems.filter((item) => item.category === "ramen");
  const appetizerItems = menuItems.filter(
    (item) => item.category === "appetizer",
  );
  const dessertItems = menuItems.filter((item) => item.category === "dessert");

  const loadMore = () => {
    setVisibleItems((prev) => prev + 6);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const renderMenuItem = (item: MenuItem) => (
    <motion.div key={item.id} variants={itemVariants} className="group">
      <div
        className="bg-rich-black border-2 border-gold rounded-lg overflow-hidden hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
        onClick={() => setSelectedDish(item)}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-deep-red text-white px-2 py-1 text-xs rounded-full border border-gold/50">
            {item.category.toUpperCase()}
          </div>
          {item.isVegetarian && (
            <div className="absolute top-2 left-2 bg-jade text-white px-2 py-1 text-xs rounded-full">
              Vegetarian
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-xl font-bold text-gold mb-2">{item.name}</h3>
          <p className="text-gray-300 text-sm line-clamp-2 mb-3">
            {item.description}
          </p>

          {item.spicyLevel > 0 && (
            <div className="flex items-center mb-2">
              <span className="text-xs text-gray-400 mr-2">Spicy Level:</span>
              <div className="flex">
                {[...Array(item.spicyLevel)].map((_, i) => (
                  <span key={i} className="text-deep-red">
                    🌶️
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mt-2">
            <p className="text-lg font-bold text-gold">{item.price}</p>
            <Button
              variant="ghost"
              size="sm"
              className="text-gold hover:text-white hover:bg-gold/20 border border-gold/30"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedDish(item);
              }}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-rich-black text-white">
      <Header />

      {/* Hero Banner */}
      <div className="relative h-64 bg-gradient-to-r from-rich-black to-deep-red/50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt="Menu background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-0 w-32 h-32 opacity-30">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-gold fill-current"
          >
            <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,10 C27.9,10 10,27.9 10,50 C10,72.1 27.9,90 50,90 C72.1,90 90,72.1 90,50 C90,27.9 72.1,10 50,10 Z" />
          </svg>
        </div>

        <div className="absolute right-0 bottom-0 w-40 h-40 opacity-30">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-deep-red fill-current"
          >
            <path d="M0,0 L100,0 L100,100 L0,100 L0,0 Z M10,10 L10,90 L90,90 L90,10 L10,10 Z M20,20 L80,20 L80,80 L20,80 L20,20 Z M30,30 L30,70 L70,70 L70,30 L30,30 Z" />
          </svg>
        </div>

        <div className="container mx-auto h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gold-gradient mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Explore our authentic Japanese and Chinese culinary creations,
              crafted with tradition and passion
            </p>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto py-12 px-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto bg-gray-900 border border-gold/20 shadow-lg shadow-gold/10 mb-8">
            <TabsTrigger
              value="all"
              className="flex-1 data-[state=active]:bg-gold/10 data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold"
            >
              All Items
            </TabsTrigger>
            <TabsTrigger
              value="sushi"
              className="flex-1 data-[state=active]:bg-gold/10 data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold"
            >
              Sushi
            </TabsTrigger>
            <TabsTrigger
              value="ramen"
              className="flex-1 data-[state=active]:bg-gold/10 data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold"
            >
              Ramen
            </TabsTrigger>
            <TabsTrigger
              value="other"
              className="flex-1 data-[state=active]:bg-gold/10 data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold"
            >
              Other
            </TabsTrigger>
          </TabsList>

          {/* All Items */}
          <TabsContent value="all">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {menuItems.slice(0, visibleItems).map(renderMenuItem)}
            </motion.div>

            {visibleItems < menuItems.length && (
              <div className="flex justify-center mt-12">
                <Button
                  onClick={loadMore}
                  className="bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 px-8 py-2"
                >
                  Load More
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Sushi */}
          <TabsContent value="sushi">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {sushiItems.map(renderMenuItem)}
            </motion.div>
          </TabsContent>

          {/* Ramen */}
          <TabsContent value="ramen">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {ramenItems.map(renderMenuItem)}
            </motion.div>
          </TabsContent>

          {/* Other */}
          <TabsContent value="other">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gold mb-6 flex items-center">
                <span className="w-8 h-0.5 bg-gold mr-3"></span>
                Appetizers
                <span className="w-8 h-0.5 bg-gold ml-3"></span>
              </h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {appetizerItems.map(renderMenuItem)}
              </motion.div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gold mb-6 flex items-center">
                <span className="w-8 h-0.5 bg-gold mr-3"></span>
                Desserts
                <span className="w-8 h-0.5 bg-gold ml-3"></span>
              </h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {dessertItems.map(renderMenuItem)}
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Item Detail Dialog */}
      {selectedDish && (
        <Dialog
          open={!!selectedDish}
          onOpenChange={(open) => !open && setSelectedDish(null)}
        >
          <DialogContent className="bg-rich-black border-2 border-gold max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gold flex items-center gap-2">
                {selectedDish.name}
                {selectedDish.isVegetarian && (
                  <span className="bg-jade text-white text-xs px-2 py-0.5 rounded-full ml-2">
                    Vegetarian
                  </span>
                )}
                {selectedDish.isGlutenFree && (
                  <span className="bg-gold/30 text-gold text-xs px-2 py-0.5 rounded-full ml-2">
                    Gluten Free
                  </span>
                )}
              </DialogTitle>
              <DialogDescription className="text-gray-300">
                {selectedDish.category.charAt(0).toUpperCase() +
                  selectedDish.category.slice(1)}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div>
                <div className="mb-4">
                  <h4 className="text-gold font-semibold mb-2">Description</h4>
                  <p className="text-gray-300">{selectedDish.description}</p>
                </div>

                {selectedDish.ingredients && (
                  <div className="mb-4">
                    <h4 className="text-gold font-semibold mb-2">
                      Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDish.ingredients.map((ingredient, index) => (
                        <span
                          key={index}
                          className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded-full"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedDish.spicyLevel > 0 && (
                  <div className="mb-4">
                    <h4 className="text-gold font-semibold mb-2">
                      Spicy Level
                    </h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < selectedDish.spicyLevel
                              ? "text-deep-red"
                              : "text-gray-600"
                          }
                        >
                          🌶️
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex justify-between items-center">
                  <p className="text-2xl font-bold text-gold">
                    {selectedDish.price}
                  </p>
                  <OrderDialog>
                    <Button className="bg-red-gradient hover:bg-deep-red text-white border border-gold/30">
                      Order Now
                    </Button>
                  </OrderDialog>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button
                className="bg-red-gradient hover:bg-deep-red text-white border border-gold/30"
                onClick={() => setSelectedDish(null)}
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  );
};

export default MenuPage;
