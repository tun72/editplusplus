"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

function SignOut() {
  const router = useRouter()
  return (
    <form
      action={async () => {
        await axios.post("/api/auth/logout");
        router.push("/")
      }}
    >
      <button>Log out</button>
    </form>
  );
}

export default SignOut;
