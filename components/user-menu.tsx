"use client";

import { useCallback, useState } from "react";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";

import MenuItem from "./menu-item";
import useLoginModal from "@/hooks/use-login-modal";
import Avatar from "./avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null;
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
          className="py-3 px-4 rounded-full hover:opacity-70 transition cursor-pointer"
        >
          <div className="flex items-center justify-center w-8 h-8 overflow-hidden">
            <Avatar src={currentUser?.image} />
          </div>
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
