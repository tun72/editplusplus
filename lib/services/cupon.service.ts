"use server";
import {
  checkCupon,
  createCupon,
  getAllCupons,
  updateCupon,
} from "../actions/cupon.actions";
import {
  addCredits,
  getUserByEmail,
  updateCredits,
} from "../actions/user.actions";
import { auth } from "../auth/auth";


export async function generateCupon({ code, amount }: cuponType) {
  return await createCupon({ code, amount });
  //   return true;
}

export async function getCupons() {
  const cupons = await getAllCupons();
  return cupons;
}

export async function addCupon(code: string) {
  const authentication = await auth();

  const user = await getUserByEmail(authentication?.user?.email || "");

  if (!user) return false;

  const isCupon = await checkCupon(code);
  console.log(isCupon);

  if (!isCupon) return false;

  if (isCupon?.status === "used") {
    return false;
  }

  await updateCredits(user._id, 10);

  await updateCupon(isCupon._id);

  return true;
}
