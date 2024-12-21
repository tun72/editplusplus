"use server";
import { createUser, getUserByEmail } from "@/lib/actions/user.actions";
import { auth } from "@/lib/auth/auth";

import { redirect } from "next/navigation";

async function page() {
  const user = await auth();

  if (!user?.user?.email || !user?.user?.name || !user?.user?.image) {
    return redirect("/login");
  }

  const isUser = await getUserByEmail(user.user.email);

  if (isUser) {
    return redirect("/user");
  }

  const isSyned = await createUser({
    username: user?.user?.name,
    email: user?.user?.email,
    photo: user?.user?.image,
  });

  console.log({
    name: user?.user?.name,
    email: user?.user?.email,
    image: user?.user?.image,
  });

  if (isSyned) {
    return redirect("/user");
  } else {
    return redirect("/sign-in");
  }
}

export default page;
