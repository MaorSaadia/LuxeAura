"use client";

import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

import useCart from "@/hooks/use-cart";
import Button from "@/components/ui/button";
import UserMenu from "./user-menu";

interface NavbarActionsProps {
  currentUser?: SafeUser | null;
}

const NavbarActions: React.FC<NavbarActionsProps> = ({ currentUser }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-0">
      <UserMenu currentUser={currentUser} />
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
