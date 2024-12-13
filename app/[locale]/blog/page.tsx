/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { BlogCard } from "@/components/shared/BlogCard";

import { createClient } from "@sanity/client";
import { useEffect, useState } from "react";

const client = createClient({
  projectId: "o7axs3xt", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-11-28", // Ensure the API version is valid
  useCdn: true, // Enables cached data for faster loading
});

// const blogPosts = [
//   {
//     category: "IMAGE EDITING",
//     title: "The Easiest Way to Add a Solid White Background to a Photo",
//     date: "Nov 22, 2024",
//     image: "/assets/images/free-images.jpg",
//     slug: "add-white-background",
//   },
//   {
//     category: "TIPS & IDEAS",
//     title: "How To Blur The Background Of A Photo Like A Pro",
//     date: "Nov 22, 2024",
//     image: "/assets/images/free-images.jpg",
//     slug: "blur-background",
//   },
//   {
//     category: "RESOURCES",
//     title: "Transform your Photography Business",
//     date: "Nov 22, 2024",
//     image: "/assets/images/free-images.jpg",
//     slug: "transform-photography-business",
//   },
//   {
//     category: "RESOURCES",
//     title: "Unlock the Power of AI in Photography",
//     date: "Nov 22, 2024",
//     image: "/assets/images/free-images.jpg",
//     slug: "ai-photography-power",
//   },
// ];

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<any>([]);
  useEffect(() => {
    async function getStaticProps() {
      const query = ` *[_type == "post"]{
    category,
    title,
    date,
    "image": mainImage.asset->url,
    slug
  }`; // Fetching posts
      const posts = await client.fetch(query);

      console.log(posts);
      setBlogPosts(posts);
      return {
        props: {
          posts,
        },
        revalidate: 10, // Revalidate at most every 10 seconds (optional)
      };
    }

    getStaticProps();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>

      {/* <Tabs defaultValue="All" className="mb-12">
        <TabsList className="w-full justify-start overflow-auto">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="text-sm md:text-base"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs> */}

      {blogPosts ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blogPosts.map((post: { category: any; title: any; date: any; image: any; slug: { current: any; }; }, index: any) => (
            <BlogCard
              key={index}
              category={post?.category || "category"}
              title={post?.title || "28.11.2024"}
              date={post?.date}
              image={post?.image}
              slug={post?.slug?.current}
            />
          ))}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
