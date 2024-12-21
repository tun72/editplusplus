"use server";

import Cupon from "../database/models/cupon.model";
import { connectToDatabase } from "../database/mongoose";

export async function createCupon({ code, amount }: cuponType) {
  try {
    await connectToDatabase();

    const newCupon = await Cupon.create({ code, amount });

    console.log(newCupon);

    return JSON.parse(JSON.stringify(newCupon));
  } catch (error) {
    console.log(error);

    // handleError(error);
  }
}

export async function getAllCupons() {
  await connectToDatabase();
  const cupons = await Cupon.find();
  console.log(cupons);

  return cupons;
}

export async function deleteCupon(id: string) {
  await connectToDatabase();
  return await Cupon.findByIdAndDelete(id);
}

export async function checkCupon(code: string) {
  await connectToDatabase();
  return await Cupon.findOne({ code });
}

export async function updateCupon(id: string) {
  await connectToDatabase();
  return await Cupon.findByIdAndUpdate(id, { status: "used" });
}
