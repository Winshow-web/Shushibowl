import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import OrderDialog from "./OrderDialog";

interface HeaderProps {
  logo?: string;
  onMenuClick?: () => void;
}

const Header = ({
  logo = "/sushi-bowl-logo.png",
  onMenuClick = () => console.log("Menu clicked"),
}: HeaderProps) => {
  // Fallback logo if the provided one doesn't load
  const fallbackLogo =
    "https://api.dicebear.com/7.x/avataaars/svg?seed=shushi-bowl-riga";

  return (
    <header className="w-full h-20 bg-rich-black border-b border-gold/50 sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-12">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Shushi Bowl Riga"
            className="h-12 mr-2"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = fallbackLogo;
            }}
          />
        </Link>
        <Link to="/">
          <h1 className="text-gold font-bold text-xl hidden md:block bg-clip-text text-transparent bg-gold-gradient">
            Shushi Bowl Riga
          </h1>
        </Link>
      </div>

      {/* Navigation - Desktop */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link to="/menu">
                <NavigationMenuLink className="text-gold hover:text-amber-400 px-4 py-2 text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gold-gradient after:transition-all after:duration-300">
                  Menu
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/#about"
                className="text-gold hover:text-amber-400 px-4 py-2 text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gold-gradient after:transition-all after:duration-300"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/#location"
                className="text-gold hover:text-amber-400 px-4 py-2 text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gold-gradient after:transition-all after:duration-300"
              >
                Location
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/#contact"
                className="text-gold hover:text-amber-400 px-4 py-2 text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-gold-gradient after:transition-all after:duration-300"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gold hover:text-amber-400 hover:bg-gray-900"
          onClick={onMenuClick}
        >
          <Menu size={20} />
        </Button>

        {/* Order Now Button - Desktop */}
        <OrderDialog>
          <Button className="hidden md:flex bg-red-gradient hover:bg-deep-red text-white border border-gold/30 shadow-lg shadow-deep-red/20 hover:shadow-deep-red/40 transition-all duration-300">
            Order Now
          </Button>
        </OrderDialog>
      </div>
    </header>
  );
};

export default Header;
