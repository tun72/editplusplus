import Image from "next/image";
import Link from "next/link";
import SideNav from "./SideNav";
import { Button } from "../ui/button";
import { auth } from "@/lib/auth/auth";

const Sidebar = async () => {
  const user = await auth();

  return (
    <aside className="hidden  w-72 bg-white p-5 shadow-md shadow-yellow-200/50 lg:flex">
      <div className="flex size-full flex-col gap-4">
        <Link href="/user" className="h-[50px] w-[100%] flex items-center ml-5">
          {/* <ImageIcon />
          <h1>AI Image Demo</h1> */}
          <Image src={"/logos/11.png"} alt="logo" width={100} height={100} />
        </Link>

        {user ? (
          <SideNav
            image={user?.user?.image || ""}
            name={user?.user?.name || ""}
            email={user?.user?.email || ""}
          ></SideNav>
        ) : (
          <Button>Login</Button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
