import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
// import { auth } from "@clerk/nextjs/server";

import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@/lib/auth/auth";

const NavBar = async () => {
  // const user = await currentUser();
  // console.log(user);
  const userId = await auth();

  // console.log(userId);

  // const isAdmin = false;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <Image src={"/logos/11.png"} alt="logo" width={100} height={80} />
          </Link>

          <div className="h-full flex items-center space-x-4">
            {userId ? (
              <>
                <Link
                  href="/user"
                  className={buttonVariants({
                    size: "sm",
                    className:
                      "flex items-center gap-1 bg-yellow-400",
                  })}
                >
                  Start Now
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>

                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: "sm",
                    className:
                      "hidden sm:flex items-center gap-1  bg-yellow-500",
                  })}
                >
                  Login
                </Link>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
