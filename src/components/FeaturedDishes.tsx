import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import DishCard from "./DishCard";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "sushi" | "ramen";
  ingredients?: string[];
  spicyLevel?: number;
  isVegetarian?: boolean;
}

interface FeaturedDishesProps {
  title?: string;
  subtitle?: string;
  dishes?: Dish[];
}

const FeaturedDishes = ({
  title = "Our Signature Dishes",
  subtitle = "Discover our chef's carefully crafted selection of authentic Asian cuisine",
  dishes = [
    {
      id: "1",
      name: "Dragon Roll",
      description:
        "Premium sushi roll with fresh salmon, avocado, and special spicy sauce, topped with thinly sliced cucumber.",
      price: "€12.99",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "sushi",
      ingredients: [
        "Salmon",
        "Avocado",
        "Cucumber",
        "Spicy Mayo",
        "Nori",
        "Sushi Rice",
      ],
      spicyLevel: 2,
      isVegetarian: false,
    },
    {
      id: "2",
      name: "Rainbow Roll",
      description:
        "Colorful sushi roll featuring a variety of fresh fish, avocado, and cucumber, artfully arranged for a visual feast.",
      price: "€14.99",
      image:
        "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "sushi",
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
      spicyLevel: 0,
      isVegetarian: false,
    },
    {
      id: "3",
      name: "Spicy Tuna Roll",
      description:
        "Bold and flavorful roll with spicy tuna, cucumber, and a touch of sriracha mayo for the perfect kick.",
      price: "€11.99",
      image:
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "sushi",
      ingredients: [
        "Tuna",
        "Cucumber",
        "Sriracha",
        "Mayo",
        "Green Onion",
        "Nori",
        "Sushi Rice",
      ],
      spicyLevel: 3,
      isVegetarian: false,
    },
    {
      id: "4",
      name: "Tonkotsu Ramen",
      description:
        "Rich pork bone broth simmered for 24 hours, served with tender chashu pork, soft-boiled egg, and fresh noodles.",
      price: "€15.99",
      image:
        "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "ramen",
      ingredients: [
        "Pork Bone Broth",
        "Chashu Pork",
        "Soft-boiled Egg",
        "Green Onion",
        "Bamboo Shoots",
        "Nori",
        "Ramen Noodles",
      ],
      spicyLevel: 0,
      isVegetarian: false,
    },
    {
      id: "5",
      name: "Spicy Miso Ramen",
      description:
        "Hearty miso-based broth with a spicy kick, topped with ground pork, corn, bean sprouts, and a seasoned egg.",
      price: "€14.99",
      image:
        "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "ramen",
      ingredients: [
        "Miso Broth",
        "Ground Pork",
        "Corn",
        "Bean Sprouts",
        "Seasoned Egg",
        "Chili Oil",
        "Ramen Noodles",
      ],
      spicyLevel: 3,
      isVegetarian: false,
    },
    {
      id: "6",
      name: "Vegetable Ramen",
      description:
        "Light and flavorful vegetable broth with seasonal vegetables, tofu, and perfectly cooked ramen noodles.",
      price: "€13.99",
      image:
        "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "ramen",
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
      spicyLevel: 0,
      isVegetarian: true,
    },
  ],
}: FeaturedDishesProps) => {
  const sushiDishes = dishes.filter((dish) => dish.category === "sushi");
  const ramenDishes = dishes.filter((dish) => dish.category === "ramen");

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

  return (
    <section
      className="w-full py-16 px-4 md:px-8 bg-rich-black text-white relative overflow-hidden"
      id="menu"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="sushi-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 20 A20 20 0 0 1 40 20 A20 20 0 0 1 0 20 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#sushi-pattern)"
            className="text-gold"
          />
        </svg>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute left-0 top-1/4 opacity-20"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute right-0 bottom-1/4 opacity-20"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gold-gradient mb-3">
            {title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
          <div className="mt-6 flex items-center justify-center">
            <div className="h-0.5 w-12 bg-deep-red"></div>
            <div className="mx-4 w-2 h-2 rounded-full bg-gold"></div>
            <div className="h-0.5 w-12 bg-deep-red"></div>
          </div>
        </motion.div>

        {/* Tabs for dish categories */}
        <Tabs defaultValue="sushi" className="w-full">
          <TabsList className="w-full max-w-md mx-auto bg-gray-900/80 backdrop-blur-sm border border-gold/20 shadow-lg shadow-gold/10 rounded-full overflow-hidden">
            <TabsTrigger
              value="sushi"
              className="flex-1 data-[state=active]:bg-gold/10 data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-full"
            >
              Sushi Rolls
            </TabsTrigger>
            <TabsTrigger
              value="ramen"
              className="flex-1 data-[state=active]:bg-gold/10 data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-full"
            >
              Ramen Bowls
            </TabsTrigger>
          </TabsList>

          {/* Sushi content */}
          <TabsContent value="sushi" className="mt-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {sushiDishes.map((dish) => (
                <motion.div key={dish.id} variants={itemVariants}>
                  <DishCard
                    name={dish.name}
                    description={dish.description}
                    price={dish.price}
                    image={dish.image}
                    category="sushi"
                    ingredients={dish.ingredients}
                    spicyLevel={dish.spicyLevel}
                    isVegetarian={dish.isVegetarian}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Ramen content */}
          <TabsContent value="ramen" className="mt-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {ramenDishes.map((dish) => (
                <motion.div key={dish.id} variants={itemVariants}>
                  <DishCard
                    name={dish.name}
                    description={dish.description}
                    price={dish.price}
                    image={dish.image}
                    category="ramen"
                    ingredients={dish.ingredients}
                    spicyLevel={dish.spicyLevel}
                    isVegetarian={dish.isVegetarian}
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* View Full Menu Button */}
        <div className="mt-16 text-center">
          <Link to="/menu">
            <Button className="bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 px-8 py-6 group transition-all duration-300">
              <span>View Full Menu</span>
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
