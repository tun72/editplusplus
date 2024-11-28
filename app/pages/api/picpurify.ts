export default function handler(req: Request, res: Response) {
  return res.json();
  // if (req.method === "POST") {
  //   try {
  //     const picpurifyUrl = "https://www.picpurify.com/analyse/1.1";
  //     const { url } = req.body; // Extracting URL from request body

  //     console.log(req.body);

  //     if (!url) {
  //       return res.status(400).json({ error: "URL is required" });
  //     }

  //     const form = new FormData();
  //     form.append("url_image", url);
  //     form.append("API_KEY", "gD44WHGMacOlX5fxfgJmVdJDxgYQNLi");
  //     form.append("task", "porn_moderation,drug_moderation,gore_moderation");

  //     const response = await axios.post(picpurifyUrl, form, {
  //       headers: {
  //         ...form.getHeaders(),
  //       },
  //     });

  //     res.status(200).json(response.data);
  //   } catch (error) {
  //     console.error("Error in proxy request:", error);
  //     res.status(500).json({ message: "Failed to connect to Picpurify API" });
  //   }
  // } else {
  //   res.setHeader("Allow", ["POST"]);
  //   res.status(405).end(`Method ${req.method} Not Allowed`);
  // }
}
