import Link from "next/link";
import { SafeUser } from "@/app/types";

import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = async ({ currentUser }) => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center w-full sm:w-auto">
            <div className="flex items-center w-full sm:w-auto">
              <div className="sm:hidden">
                <MainNav data={categories} />
              </div>
              <Link href="/" className="flex gap-x-2">
                <p className="font-bold text-xl">LuxeAura</p>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-4">
              <MainNav data={categories} />
            </div>
          </div>
          <NavbarActions currentUser={currentUser} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
