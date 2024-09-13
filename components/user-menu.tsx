"use client";

// import { useCallback, useState } from "react";
import { User } from "lucide-react";

// import MenuItem from "./menu-item";
import useLoginModal from "@/hooks/use-login-modal";

const UserMenu = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();

  // const toggleOpen = useCallback(() => {
  //   setIsOpen((value) => !value);
  // }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center">
        <div
          onClick={loginModal.onOpen}
          className="block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          <User />
        </div>
      </div>
      {/* {isOpen && (
        <div className="absolute rounded-xl shadow-md w-auto min-w-[100px] max-w-[100px] bg-white overflow-hidden right-0 top-12 text-sm z-50">
          <div className="flex flex-col cursor-pointer w-full">
            <>
              <MenuItem label="Login" onClick={loginModal.onOpen} />
              <MenuItem label="Sign up" onClick={() => {}} />
            </>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default UserMenu;
