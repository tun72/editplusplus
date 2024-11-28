/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(image: any) {
  console.log("hit");
  const image_size = "1000";
  try {
    const result = await cloudinary.v2.uploader.upload(image_size, {
      folder: "imaginify", // Optional folder in Cloudinary
    });
    console.log(result);

    return result;
  } catch (error) {
    console.error("Error uploading image:", error);
    return error;
  }
}
