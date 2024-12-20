"use server"
import Cupon from "../database/models/cupon.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import { getUserByEmail } from "./user.actions";

export async function createCupon() {
  try {
    await connectToDatabase();

    console.log("hit");

    const newCupon = await Cupon.create({
      code: "23123213",
      amount: 1000,
    });

    console.log(newCupon);
    

    return JSON.parse(JSON.stringify(newCupon));
  } catch (error) {
    console.log(error);

    // handleError(error);
  }
}
