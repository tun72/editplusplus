"use client"
import { SignIn } from "@clerk/nextjs";
import React from "react";

function page() {
  return <div className="w-full flex-1 flex items-center justify-center mt-20">
     <SignIn />
  </div>;
}

export default page;
