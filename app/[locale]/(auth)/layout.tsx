import NavBar from "@/components/shared/NavBar";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <div className=" flex justify-center  flex-1 items-center">
        <div className="flex  flex-col flex-1 h-[90vh]  gap-10 items-center justify-center">
          <h2 className="text-3xl font-semibold">Sign in to edit pictures</h2>
          {children}
        </div>
      </div>
    </>
  );
}

export default layout;
