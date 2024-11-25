import { BlogCard } from "@/components/shared/BlogCard";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  "All",
  "Product Updates",
  "Resources",
  "Tips & Ideas",
  "Image Editing",
];

const blogPosts = [
  {
    category: "IMAGE EDITING",
    title: "The Easiest Way to Add a Solid White Background to a Photo",
    date: "Nov 22, 2024",
    image: "/assets/images/free-images.jpg",
    slug: "add-white-background",
  },
  {
    category: "TIPS & IDEAS",
    title: "How To Blur The Background Of A Photo Like A Pro",
    date: "Nov 22, 2024",
    image: "/assets/images/free-images.jpg",
    slug: "blur-background",
  },
  {
    category: "RESOURCES",
    title: "Transform your Photography Business",
    date: "Nov 22, 2024",
    image: "/assets/images/free-images.jpg",
    slug: "transform-photography-business",
  },
  {
    category: "RESOURCES",
    title: "Unlock the Power of AI in Photography",
    date: "Nov 22, 2024",
    image: "/assets/images/free-images.jpg",
    slug: "ai-photography-power",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>

      <Tabs defaultValue="All" className="mb-12">
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
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            category={post.category}
            title={post.title}
            date={post.date}
            image={post.image}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
