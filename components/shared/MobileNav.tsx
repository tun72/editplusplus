"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="flex-between fixed h-16 w-full border-b-4 border-purple-100 bg-white p-5 lg:hidden">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src={"/logos/11.png"} alt="logo" width={100} height={100} />
      </Link>

      <nav className="flex gap-2">
        {/* <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent>
              <>
                <ul className="mt-8 flex w-full flex-col items-start gap-5">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.route}
                      >
                        <Link
                          className="p-16-semibold flex size-full gap-4 p-4 cursor-pointer"
                          href={link.route}
                        >
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut> */}
      </nav>
    </header>
  );
};

export default MobileNav;
