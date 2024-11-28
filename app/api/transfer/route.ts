"use server";

import { NextResponse } from "next/server";

import picsartfordevelopers from "@api/picsartfordevelopers";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    picsartfordevelopers.auth(
      "eyJraWQiOiI5NzIxYmUzNi1iMjcwLTQ5ZDUtOTc1Ni05ZDU5N2M4NmIwNTEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhdXRoLXNlcnZpY2UtZTJkNGIxYTUtOTNiMC00NzJlLWJmYWYtY2Y3ZWM0MGU2YjlmIiwiYXVkIjoiNDcwNDI5NTc1MDE4MTAxIiwibmJmIjoxNzMyODE1Mzg4LCJzY29wZSI6WyJiMmItYXBpLmdlbl9haSIsImIyYi1hcGkuaW1hZ2VfYXBpIl0sImlzcyI6Imh0dHBzOi8vYXBpLnBpY3NhcnQuY29tL3Rva2VuLXNlcnZpY2UiLCJvd25lcklkIjoiNDcwNDI5NTc1MDE4MTAxIiwiaWF0IjoxNzMyODE1Mzg4LCJqdGkiOiJmM2RlNzJiZS0zZjJkLTQ3YWUtODI0NC03ZmQ2ZDVjYWIzMmYifQ.bY72-yMShJkbES00P5JW-k5USgEvyvMTkUmvn-GhMYbwWqhL4soJjkifr4aiwrvDMaxsDsGmA9VmVf1aa43XvXK9PAQdpDMksaLfagMPLpY60LR0CbgNja3u0Y54rbHe0VYisGaxjCAKrlFjWeCq4lir-36Ss5ianJgdzKSBSLVUuP6AT3XIZA9xn3INnSNNY6Z91mH4meJGkhu85B5hwOEs4plhL_lsA6WZkMK7GRKm0iFXRfW7hFQAg0WE9HioyI_3a7PaTpa3mKpKiftNayLjpHt6oy1GUI490_6xF65JUbhViSyi4FISB_XOPQgNkP-TJMaExH1VP5GKOS-zYg"
    );

    const form = new FormData();
    form.append("level", "l1");
    form.append("format", "JPG");
    form.append("image_url", data?.url);
    form.append("reference_image_url", data?.tranUrl);

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "X-Picsart-API-Key":
          "eyJraWQiOiI5NzIxYmUzNi1iMjcwLTQ5ZDUtOTc1Ni05ZDU5N2M4NmIwNTEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhdXRoLXNlcnZpY2UtZTJkNGIxYTUtOTNiMC00NzJlLWJmYWYtY2Y3ZWM0MGU2YjlmIiwiYXVkIjoiNDcwNDI5NTc1MDE4MTAxIiwibmJmIjoxNzMyODE1Mzg4LCJzY29wZSI6WyJiMmItYXBpLmdlbl9haSIsImIyYi1hcGkuaW1hZ2VfYXBpIl0sImlzcyI6Imh0dHBzOi8vYXBpLnBpY3NhcnQuY29tL3Rva2VuLXNlcnZpY2UiLCJvd25lcklkIjoiNDcwNDI5NTc1MDE4MTAxIiwiaWF0IjoxNzMyODE1Mzg4LCJqdGkiOiJmM2RlNzJiZS0zZjJkLTQ3YWUtODI0NC03ZmQ2ZDVjYWIzMmYifQ.bY72-yMShJkbES00P5JW-k5USgEvyvMTkUmvn-GhMYbwWqhL4soJjkifr4aiwrvDMaxsDsGmA9VmVf1aa43XvXK9PAQdpDMksaLfagMPLpY60LR0CbgNja3u0Y54rbHe0VYisGaxjCAKrlFjWeCq4lir-36Ss5ianJgdzKSBSLVUuP6AT3XIZA9xn3INnSNNY6Z91mH4meJGkhu85B5hwOEs4plhL_lsA6WZkMK7GRKm0iFXRfW7hFQAg0WE9HioyI_3a7PaTpa3mKpKiftNayLjpHt6oy1GUI490_6xF65JUbhViSyi4FISB_XOPQgNkP-TJMaExH1VP5GKOS-zYg",
      },
      body: form,
    };

    const response = await fetch(
      "https://api.picsart.io/tools/1.0/styletransfer",
      options
    );

    const img_data = await response.json();
    // .then((res) => res.json())
    // .then((res) => console.log(res))
    // .catch((err) => console.error(err));
    console.log(img_data);

    return NextResponse.json({ url: img_data.data.url });
  } catch (err) {
    console.log(err);
  }

  // .then(({ data }: { data: any }) => {
  //   console.log(data);

  //   // return NextResponse.json({ url: data.url });
  // })
  // .catch((err: any) => console.error(err));

  //   return res.status(200).json({ output_url: response.data.output_url });

  // .then((response) => {
  //   console.log("Response:", response.data);
  // })
  // .catch((error) => {
  //   console.error("Error:", error.message);
  // });

  //result.data.result_url
  //  "https://neuroapi-store.s3.eu-central-1.amazonaws.com/2024-11-27/ace4bfc3-dc9d-4682-a412-4a065a72b760.jpg"
}

//"https://neuroapi-store.s3.eu-central-1.amazonaws.com/2024-11-27/8e26c7e8-e0c4-454f-9fa1-a32ae0adc8bf.jpg"
