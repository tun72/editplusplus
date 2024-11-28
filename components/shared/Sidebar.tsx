"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden  w-72 bg-white p-5 shadow-md shadow-yellow-200/50 lg:flex">
      <div className="flex size-full flex-col gap-4">
        <Link href="/user" className="h-[50px] w-[100%] flex items-center ml-5">
          {/* <ImageIcon />
          <h1>AI Image Demo</h1> */}
          <Image src={"/logos/11.png"} alt="logo" width={100} height={100} />
        </Link>

        <nav className="h-full flex-col justify-between md:flex md:gap-4">
          <SignedIn>
            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(0, 8).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-yellow-100 hover:shadow-inner group ${
                      isActive ? "bg-yellow-500 text-white hover:bg-yellow-600" : "text-gray-700"
                    }`}
                  >
                    <Link
                      className="p-16-semibold flex size-full gap-4 p-4"
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(8).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-yellow-100 hover:shadow-inner group ${
                      isActive ? "bg-yellow-500 text-white" : "text-gray-700"
                    }`}
                  >
                    <Link
                      className="p-16-semibold flex size-full gap-4 p-4"
                      href={link.route}
                    >
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4 ">
                <UserButton />
              </li>
            </ul>

            {/* <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-yellow-100 hover:shadow-inner group ${
                      isActive ? "bg-yellow-500 text-white" : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center cursor-pointer gap-2 p-4 ">
                <UserButton />
              </li>
            </ul> */}
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-yellow-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
