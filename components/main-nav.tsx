"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Category } from "@/types";
import { cn } from "@/lib/utils";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="relative z-50">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden p-2 z-50 relative"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-opacity duration-300 ease-in-out",
          "sm:static sm:block sm:bg-transparent",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          "sm:opacity-100 sm:pointer-events-auto"
        )}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 sm:block sm:h-auto sm:space-y-0">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-2xl font-medium transition-colors hover:text-black",
                "sm:text-sm sm:px-4",
                route.active ? "text-black" : "text-neutral-500"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
