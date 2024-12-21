"use client";
import { navLinks } from "@/constants";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import SignOut from "@/components/shared/sign-out";

interface SideNavProps {
  name: string;
  email: string;
  image: string;
}
function SideNav({ name, email, image }: SideNavProps) {
  const pathname = usePathname();

  const t = useTranslations("SideBar");

  console.log(image);

  return (
    <nav className="h-full flex-col justify-between md:flex md:gap-4">
      {/* <SignedIn> */}
      <ul className="hidden w-full flex-col items-start gap-2 md:flex">
        {navLinks.slice(0, 8).map((link) => {
          const isActive =
            link.route === pathname.split("en")[1] ||
            link.route === pathname.split("mm")[1];

          return (
            <li
              key={link.route}
              className={`flex-center font-semibold text-[14px] leading-[140%]  w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-yellow-100 hover:shadow-inner group ${
                isActive
                  ? "bg-yellow-500 text-white hover:bg-yellow-600"
                  : "text-gray-700"
              }`}
            >
              <Link
                className="font-semibold text-[14px] leading-[140%]  flex size-full gap-4 p-3"
                href={link.route}
              >
                <Image
                  src={link.icon}
                  alt="logo"
                  width={24}
                  height={24}
                  className={`${isActive && "brightness-200"}`}
                />
                {t(link.label)}
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
              className={`flex-center font-semibold text-[14px] leading-[140%]  w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-yellow-100 hover:shadow-inner group ${
                isActive ? "bg-yellow-500 text-white" : "text-gray-700"
              }`}
            >
              <Link
                className="font-semibold text-[14px] leading-[140%] md:text[14px] flex size-full gap-4 p-3"
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
        <li className="flex-center cursor-pointer gap-2 p-3 ">
          {/* <UserButton /> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src={image} className="" />
                <AvatarFallback>{name.slice(0, 3)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ml-5 w-44 cursor-pointer">
              <DropdownMenuItem>
                {/* <LogOut /> */}
                <SignOut />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <p className="font-semibold text-[14px] leading-[140%]">{name}</p>
        </li>
      </ul>

      {/* </SignedIn> */}

      {/* <SignedOut>
      <Button asChild className="button bg-yellow-500 bg-cover">
        <Link href="/sign-in">Login</Link>
      </Button>
    </SignedOut> */}
    </nav>
  );
}

export default SideNav;
