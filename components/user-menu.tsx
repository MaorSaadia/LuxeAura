"use client";

import { useCallback, useState } from "react";
import { User } from "@prisma/client";
import { User as UserIcon } from "lucide-react";
import { signOut } from "next-auth/react";

import MenuItem from "./menu-item";
import useLoginModal from "@/hooks/use-login-modal";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center">
        <div
          onClick={currentUser ? toggleOpen : loginModal.onOpen}
          className="block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          <UserIcon />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-auto min-w-[100px] max-w-[100px] bg-white overflow-hidden right-0 top-12 text-sm z-50">
          <div className="flex flex-col cursor-pointer w-full">
            <>
              <MenuItem label="Favorites" onClick={() => {}} />
              <MenuItem label="Logout" onClick={() => signOut()} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
