"use server";
import axios from "axios";

import FormData from "form-data";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data = await req.json();

  console.log(data, "Dwadwad");

  const response = await axios.post(
    "https://api.deepai.org/api/style-transfer",
    { image: data.image, style: data.style },
    {
      headers: {
        "Api-Key": "281233c3-fc74-463a-bf3f-2d7a2eb56b25",
      },
    }
  );

  console.log(response);
  

  //   return res.status(200).json({ output_url: response.data.output_url });

  // .then((response) => {
  //   console.log("Response:", response.data);
  // })
  // .catch((error) => {
  //   console.error("Error:", error.message);
  // });

  //result.data.result_url
  return NextResponse.json({ url: "dawd" }); //  "https://neuroapi-store.s3.eu-central-1.amazonaws.com/2024-11-27/ace4bfc3-dc9d-4682-a412-4a065a72b760.jpg"
}

//"https://neuroapi-store.s3.eu-central-1.amazonaws.com/2024-11-27/8e26c7e8-e0c4-454f-9fa1-a32ae0adc8bf.jpg"
