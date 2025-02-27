import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";

interface DishCardProps {
  image?: string;
  name?: string;
  description?: string;
  price?: string;
  category?: "sushi" | "ramen";
  ingredients?: string[];
  spicyLevel?: number;
  isVegetarian?: boolean;
  onViewDetails?: () => void;
}

const DishCard = ({
  image = "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  name = "Dragon Roll",
  description = "Premium sushi roll with fresh salmon, avocado, and special spicy sauce, topped with thinly sliced cucumber.",
  price = "€12.99",
  category = "sushi",
  ingredients = [
    "Salmon",
    "Avocado",
    "Cucumber",
    "Spicy Mayo",
    "Nori",
    "Sushi Rice",
  ],
  spicyLevel = 0,
  isVegetarian = false,
  onViewDetails = () => console.log("View details clicked"),
}: DishCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Card className="w-[350px] h-[450px] overflow-hidden flex flex-col bg-rich-black border-gold border-2 text-white hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 group">
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 bg-deep-red text-white px-2 py-1 text-xs rounded-full border border-gold/50">
            {category.toUpperCase()}
          </div>
          {isVegetarian && (
            <div className="absolute top-2 left-2 bg-jade text-white px-2 py-1 text-xs rounded-full">
              Vegetarian
            </div>
          )}
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-gold flex items-center">
            <span className="mr-2">{name}</span>
            {spicyLevel > 0 && (
              <span className="text-deep-red text-sm">
                {Array(spicyLevel).fill("🌶️").join("")}
              </span>
            )}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
          <p className="mt-4 text-xl font-bold text-gold">{price}</p>
        </CardContent>

        <CardFooter className="pt-2 border-t border-gold/20">
          <Button
            variant="ghost"
            className="w-full text-gold hover:text-amber-400 hover:bg-gray-900 flex items-center justify-center gap-2 group"
            onClick={() => setShowDetails(true)}
          >
            <Eye size={16} className="group-hover:animate-pulse" />
            <span>View Details</span>
          </Button>
        </CardFooter>
      </Card>

      {/* Dish Details Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="bg-rich-black border-2 border-gold max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gold flex items-center gap-2">
              {name}
              {isVegetarian && (
                <span className="bg-jade text-white text-xs px-2 py-0.5 rounded-full ml-2">
                  Vegetarian
                </span>
              )}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden border border-gold/30">
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
              />
            </div>

            <div>
              <div className="mb-4">
                <h4 className="text-gold font-semibold mb-2">Description</h4>
                <p className="text-gray-300">{description}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-gold font-semibold mb-2">Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 px-2 py-1 text-xs rounded-full"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {spicyLevel > 0 && (
                <div className="mb-4">
                  <h4 className="text-gold font-semibold mb-2">Spicy Level</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < spicyLevel ? "text-deep-red" : "text-gray-600"
                        }
                      >
                        🌶️
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <p className="text-2xl font-bold text-gold">{price}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button
              className="bg-red-gradient hover:bg-deep-red text-white border border-gold/30"
              onClick={() => setShowDetails(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DishCard;
