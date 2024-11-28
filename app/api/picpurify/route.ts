"use server";
import axios from "axios";

import FormData from "form-data";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  //   if (req.method === "POST") {
  //     try {
  //       const picpurifyUrl = "https://www.picpurify.com/analyse/1.1";

  //       const data = await req.json();

  //       const url = data.image_url;

  //       console.log(url);

  //       const form = new FormData();
  //       form.append("url_image", url);
  //       form.append("API_KEY", "wwYVqcbsrczusODI0gl5IVxaO7pwCwM2");
  //       form.append("task", "porn_moderation,drug_moderation,gore_moderation");

  //       const response = await axios.post(picpurifyUrl, form, {
  //         headers: {
  //           ...form.getHeaders(),
  //         },
  //       });

  //       console.log(response);

  //       return NextResponse.json({ message: "success" });
  //     } catch (error) {
  //       console.error("Error in proxy request:", error);

  //     }
  //   } else {
  //     res.setHeader("Allow", ["POST"]);
  //     res.status(405).end(`Method ${req.method} Not Allowed`);
  //   }

  const data = await req.json();

  console.log(data, "Dwadwad");

  const apiUrl = "https://deep-image.ai/rest_api/process_result";

  // Request headers
  const headers = {
    "Content-Type": "application/json",
    "X-API-Key": "d8f760b0-acdf-11ef-bf44-39e16bc38d8c", // Replace 'API_KEY' with your actual API key
  };

  // Request data
  const requestData = {
    enhancements: ["light", "color", "white_balance", "exposure_correction"],
    url: data.image_url,
    width: 2000,
  };

  // Make POST request using Axios
  const result = await axios.post(apiUrl, requestData, { headers });

  if (!result.data.result_url) {
    throw new Error(result.data.processing_info);
  }

  // .then((response) => {
  //   console.log("Response:", response.data);
  // })
  // .catch((error) => {
  //   console.error("Error:", error.message);
  // });

  return NextResponse.json({ url: result.data.result_url }); //  "https://neuroapi-store.s3.eu-central-1.amazonaws.com/2024-11-27/ace4bfc3-dc9d-4682-a412-4a065a72b760.jpg"
}

//"https://neuroapi-store.s3.eu-central-1.amazonaws.com/2024-11-27/8e26c7e8-e0c4-454f-9fa1-a32ae0adc8bf.jpg"