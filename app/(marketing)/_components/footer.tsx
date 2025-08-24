"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
        <Button variant="ghost" size="sm" onClick={() => window.open("https://github.com/Adnan-Malik-26", "_blank")}>
          Made with <Heart className="w-4 h-4 text-red-500 fill-current" />
          by Adnan Malik

        </Button>

      </div>
    </div>
  );
};
