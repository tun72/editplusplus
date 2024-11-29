/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Badge } from "@/components/ui/badge";
import { createClient } from "@sanity/client";

import type { PortableTextSpan } from "sanity";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  PortableText,
  PortableTextBlock,
  PortableTextComponentProps,
} from "@portabletext/react";
import { Card, CardContent } from "@/components/ui/card";
import { Prose } from "@/components/ui/Prose";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
const client = createClient({
  projectId: "o7axs3xt", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-11-28", // Ensure the API version is valid
  useCdn: true, // Enables cached data for faster loading
});

function Blog({ params }: { params: { slug: string } }) {
  const [blogDetail, setBlogDetail] = useState<{
    title: string;
    description: string | null;
    mainImage: {
      _type: "image";
      alt: string;
      asset: {
        _ref: string;
        _type: "reference";
      };
    } | null;
    body: PortableTextBlock[] | null;
    authorName: string | null;
    authorImage: string | null;
    authorTwitter: string | null;
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
    description,
    "mainImage": mainImage.asset->url,
    slug
  }
`;
      const post = await client.fetch(detailQuery, { slug });

      console.log(post);
      setBlogDetail(post);
    }

    fetchDetail();
  }, [slug]);

  const builder = imageUrlBuilder(client);

  console.log(blogDetail?.body);

  return (
    <article className="mx-auto  w-full max-w-screen-xl gap-5 px-0 pt-16  md:pt-24 lg:gap-4 lg:px-20">
      <main className="">
        <Card>
          <CardContent className="p-10 space-x-4">
            <Prose>
              <h1 className="text-4xl mb-5">{blogDetail?.title}</h1>

              <p className="text-2xl">{blogDetail?.description}</p>
              {blogDetail?.mainImage ? (
                <div className="-mx-10 my-8">
                  <Image
                    src={builder
                      .image(blogDetail?.mainImage)
                      .width(1200)
                      .height(675)
                      .url()}
                    alt={""}
                    width={1200}
                    height={675}
                    className="h-auto w-full"
                  />
                </div>
              ) : null}
              {blogDetail?.body ? (
                <PortableText
                  value={blogDetail?.body}
                  components={{
                    block: {
                      h2: createHeadingComponent("h2"),
                      h3: createHeadingComponent("h3"),
                    },
                    types: {
                      image: ({ value }) => {
                        // https://www.sanity.io/answers/how-to-get-the-width-height-or-dimensions-of-uploaded-image-with-sanity-and-next-js-to-prevent-cls
                        const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

                        const decodeAssetId = (id: string) => {
                          const match = pattern.exec(id);
                          if (!match) {
                            console.error(`Invalid asset ID: ${id}`);
                            return null;
                          }
                          const [, assetId, dimensions, format] = match;
                          const [width, height] = dimensions
                            .split("x")
                            .map((v) => Number.parseInt(v, 10));

                          return {
                            assetId,
                            dimensions: { width, height },
                            format,
                          };
                        };

                        const { dimensions } =
                          decodeAssetId(value.asset?._id) || {};

                        return (
                          <Image
                            src={builder.image(value).width(800).url()}
                            alt={value.alt || ""}
                            width={dimensions?.width || 800}
                            height={dimensions?.height || 600}
                            className="h-auto w-full"
                          />
                        );
                      },
                    },
                    marks: {
                      link: ({ children, value }) => {
                        const href = value?.href;
                        return (
                          <Link
                            href={href}
                            className="font-semibold text-blue-600 hover:underline"
                          >
                            {children}
                          </Link>
                        );
                      },
                    },
                  }}
                />
              ) : null}
            </Prose>
          </CardContent>
        </Card>

        <div className="mt-4">{/* <ReadMore /> */}</div>
      </main>
    </article>
    // <article className="max-w-4xl mx-auto px-4 py-8">
    //   {/* Social Share Sidebar */}
    //   {/* <div className="fixed left-4 top-1/3 hidden lg:flex flex-col gap-3">
    //   <Button
    //     variant="outline"
    //     size="icon"
    //     className="rounded-full"
    //     // onClicked={() => window.open(`https://facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
    //     aria-label="Share on Facebook"
    //   >
    //     <Facebook className="h-5 w-5 text-muted-foreground" />
    //   </Button>
    //   <Button
    //     variant="outline"
    //     size="icon"
    //     className="rounded-full"
    //     // onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, '_blank')}
    //     aria-label="Share on Twitter"
    //   >
    //     <Twitter className="h-5 w-5 text-muted-foreground" />
    //   </Button>
    //   <Button
    //     variant="outline"
    //     size="icon"
    //     className="rounded-full"
    //     // onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
    //     aria-label="Share on LinkedIn"
    //   >
    //     <Linkedin className="h-5 w-5 text-muted-foreground" />
    //   </Button>
    // </div> */}

    //   {/* Main Content */}
    //   <div className="space-y-8">
    //     <header className="space-y-4">
    //       <div className="space-y-2">
    //         <Badge
    //           variant="secondary"
    //           className="text-purple-600 bg-purple-100"
    //         >
    //           {blogDetail?.category || "category"}
    //         </Badge>
    //         <p className="text-sm text-muted-foreground">{blogDetail?.date || "date"}</p>
    //       </div>
    //       <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
    //         {blogDetail?.title}
    //       </h1>
    //     </header>

    //     <figure className="relative aspect-[16/9] overflow-hidden rounded-lg">
    //       <Image
    //         src={blogDetail?.image || ""}
    //         alt="Orange gerbera daisy against grey background"
    //         className="object-cover"
    //         priority
    //         width={600}
    //         height={400}
    //       />
    //     </figure>

    //     <div className="prose lg:prose-lg">
    //       <PortableText value={blogDetail?.body[0]} />
    //     </div>

    //     {/* Mobile Social Share */}
    //   </div>
    // </article>
  );
}

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const extractTextFromPortableTextBlock = (
  block: PortableTextBlock,
): string => {
  return block.children
    .filter(
      (child): child is PortableTextSpan =>
        typeof child === "object" && "_type" in child && "text" in child,
    )
    .map((child) => child.text)
    .join("");
};


const createHeadingComponent =
  (Tag: "h2" | "h3") =>
  ({ children, value }: PortableTextComponentProps<PortableTextBlock>) => {
    const text = extractTextFromPortableTextBlock(value);
    const id = slugify(text)

    return (
      <Tag id={id} className="group relative flex items-center">
        <Link href={`#${id}`} className="flex items-center">
          <span className="absolute left-0 -translate-x-full pr-2 opacity-0 transition-opacity group-hover:opacity-100">
            <LinkIcon className="size-4" />
          </span>
          {children}
        </Link>
      </Tag>
    );
  };

export default Blog;
