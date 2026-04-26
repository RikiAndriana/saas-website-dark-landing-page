import Image from "next/image";
import logoImage from "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="py-5 bg-black">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CD,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image
              src={logoImage}
              alt="logo"
              width={48}
              height={48}
              className="h-12 w-auto relative"
            />
          </div>
          <div className="border border-white/30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
            <MenuIcon className="text-white/80" />
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              href="#"
              className="text-white/60 hover:text-white transition"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white transition"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white transition"
            >
              Updates
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white transition"
            >
              Help
            </Link>
            <Link
              href="#"
              className="text-white/60 hover:text-white transition"
            >
              Customers
            </Link>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
