/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Badge } from "@/components/ui/badge";
import { createClient } from "@sanity/client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
const client = createClient({
  projectId: "o7axs3xt", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-11-28", // Ensure the API version is valid
  useCdn: true, // Enables cached data for faster loading
});

function Blog({ params }: { params: { slug: string } }) {
  const [blogDetail, setBlogDetail] = useState<{
    body: any;
    image: string | undefined;
    title: string;
    category: string;
  } | null>(null);
  const { slug } = params;
  useEffect(() => {
    async function fetchDetail() {
      const detailQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    category,
    title,
    date,
    body,
    "image": mainImage.asset->url,
    slug
  }
`;
      const post = await client.fetch(detailQuery, { slug });

      console.log(post);
      setBlogDetail(post);
    }

    fetchDetail();
  }, [slug]);

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Social Share Sidebar */}
      {/* <div className="fixed left-4 top-1/3 hidden lg:flex flex-col gap-3">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        // onClicked={() => window.open(`https://facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-5 w-5 text-muted-foreground" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        // onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, '_blank')}
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5 text-muted-foreground" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        // onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5 text-muted-foreground" />
      </Button>
    </div> */}

      {/* Main Content */}
      <div className="space-y-8">
        <header className="space-y-4">
          <div className="space-y-2">
            <Badge
              variant="secondary"
              className="text-purple-600 bg-purple-100"
            >
              {blogDetail?.category || "category"}
            </Badge>
            <p className="text-sm text-muted-foreground">{blogDetail?.date || "date"}</p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {blogDetail?.title}
          </h1>
        </header>

        <figure className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={blogDetail?.image || ""}
            alt="Orange gerbera daisy against grey background"
            className="object-cover"
            priority
            width={600}
            height={400}
          />
        </figure>

        <div className="prose lg:prose-lg">
          <PortableText value={blogDetail?.body} />
        </div>

        {/* Mobile Social Share */}
      </div>
    </article>
  );
}

export default Blog;
