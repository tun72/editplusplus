"use server";
import { createCupon } from "../actions/cupon.actions";

export async function generateCupon() {
  return await createCupon();
  //   return true;
}
