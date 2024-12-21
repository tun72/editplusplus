import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google],
});

export async function signInAction() {
  await signIn("google", { redirectTo: "/welcome" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
