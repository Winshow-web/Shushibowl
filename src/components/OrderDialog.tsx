import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface OrderDialogProps {
  children: React.ReactNode;
}

const OrderDialog = ({ children }: OrderDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-rich-black border-2 border-gold max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gold text-center">
            Order with
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-6 mt-4">
          <a
            href="https://wolt.com/en/lva/riga/restaurant/shushi-bowl-riga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-[#00C2E8] hover:bg-[#00A8CC] text-white py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#00C2E8]/20"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Wolt_logo.svg"
              alt="Wolt"
              className="h-8"
            />
            <span className="font-bold text-lg">Order with Wolt</span>
          </a>

          <a
            href="https://bolt.eu/en/food/restaurants/riga/shushi-bowl-riga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-[#34D186] hover:bg-[#2BB974] text-white py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#34D186]/20"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/28/Bolt_app_logo.svg"
              alt="Bolt"
              className="h-8"
            />
            <span className="font-bold text-lg">Order with Bolt</span>
          </a>
        </div>

        <div className="text-center text-gray-400 text-sm mt-4">
          <p>Choose your preferred delivery service</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
