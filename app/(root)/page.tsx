/* eslint-disable @typescript-eslint/no-unused-vars */
// import ImageComparisonSlider from "@/components/shared/image-comparitson-slider";
"use client";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ShinyButton from "@/components/shared/ShinnyButton";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import {
  ArrowRight,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  MoveRight,
  Star,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "People", active: true },
    { name: "Products", active: false },
    { name: "Animals", active: false },
    { name: "Cars", active: false },
    { name: "Graphics", active: false },
  ];

  const blogPosts = [
    {
      date: "Nov 22, 2024",
      title: "The Easiest Way to Add a Solid White Background to a Photo",
    },
    {
      date: "Nov 22, 2024",
      title: "How To Blur The Background Of A Photo Like A Pro",
    },
    {
      date: "Nov 19, 2024",
      title: "Transforming Photography: How AI Can Scale Your Business",
    },
  ];

  const footerLinks = {
    learn: {
      title: "Learn more",
      links: [
        { name: "Magic Brush", href: "#" },
        { name: "Individuals", href: "#" },
        { name: "Photographers", href: "#" },
        { name: "Marketing", href: "#" },
        { name: "Developers", href: "#" },
        { name: "Ecommerce", href: "#" },
        { name: "Media", href: "#" },
        { name: "Car Dealerships", href: "#" },
        { name: "Enterprise", href: "#" },
        { name: "Success stories", href: "#" },
      ],
    },
    tools: {
      title: "Tools & API",
      links: [
        { name: "API Documentation", href: "#" },
        { name: "Integrations, tools & apps", href: "#" },
        { name: "Photoshop Extension", href: "#" },
        { name: "Windows / Mac / Linux", href: "#" },
        { name: "Android App", href: "#" },
        { name: "Design Templates", href: "#" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { name: "Help & FAQs", href: "#" },
        { name: "Contact us", href: "#" },
        { name: "Refunds", href: "#" },
        { name: "Platform Status", href: "#" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "Blog", href: "/blog" },

        { name: "Create automatic designs", href: "#" },
        { name: "Video Background Removal", href: "#" },
        { name: "Careers", href: "#" },
        { name: "About us", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "TikTok", icon: Twitter, href: "#" }, // Using Twitter as placeholder for TikTok
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "#" },
    { name: "General Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Imprint", href: "#" },
  ];

  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper className="pb-24 pt-24  ">
          <div className="px-6 lg:px-0">
            <div className="relative mx-auto text-center  flex flex-col items-center  gap-5  justify-center">
              <h1 className="relative w-fit tracking-tight text-balance font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Remove{" "}
                <span className="bg-yellow-500 px-2 text-white">Custom</span>{" "}
                <span className="bg-yellow-500 px-2 text-white">Image</span>{" "}
                Background
              </h1>
              <p className="mt-8 text-lg  max-w-prose text-center text-balance ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span className="font-semibold">one-of-one</span> p Cum, aut
                accusantium minima rerum reprehenderit distinctio sit facilis ab
                unde sunt. Neque similique inventore eius delectus modi et
                exercitationem id fuga.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-yellow-500" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-yellow-500" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-yellow-500" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="w-full max-w-80 mt-8">
                <ShinyButton
                  href="/sign-up"
                  className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  Start For Free Today
                </ShinyButton>
              </div>
            </div>
          </div>

          {/* <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0  lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div> */}
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="px-4 py-12 md:px-6 md:py-24 lg:px-8  relative ">
          <div className="absolute top-0 left-0 w-24 h-24">
            <Image
              src="/assets/icons/placeholder.svg"
              alt=""
              width={96}
              height={96}
              className="text-yellow-400"
              role="presentation"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 rotate-180">
            <Image
              src="/assets/icons/placeholder.svg"
              alt=""
              width={96}
              height={96}
              className="text-yellow-400"
              role="presentation"
            />
          </div>

          {/* Main Content */}
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
              Stunning Quality
            </h2>

            {/* Navigation */}
            <nav className="flex justify-center gap-2 md:gap-4 mb-8 flex-wrap">
              {/* {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.active ? "default" : "ghost"}
                  className={cn(
                    "rounded-full",
                    category.active &&
                      "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  )}
                >
                  {category.name}
                </Button>
              ))} */}
            </nav>

            {/* Image Showcase */}
            <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden mb-8 bg-gray-50">
              <ReactCompareSlider
                className=" "
                itemOne={
                  <ReactCompareSliderImage
                    src={"/assets/images/image2.png"}
                    srcSet={"/assets/images/image2.png"}
                    alt={"Image one"}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={"/assets/images/images1.jpg"}
                    srcSet={"/assets/images/image1.jpg"}
                    alt={"Image two"}
                  />
                }
              />
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link
                href={"/user"}
                className="text-blue-600 text-lg font-medium hover:text-blue-700"
              >
                See more samples
                <MoveRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          {/* <ImageComparisonSlider
            beforeImage="/assets/images/free-images.jpg"
            afterImage="/assets/images/free-images-removebg.png"
          /> */}
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className="px-4  py-12  md:py-24 md:px-6 lg:px-8  relative ">
          {/* Text Content */}

          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="flex flex-col space-y-6 justify-center">
              <h2 className="font-display font-bold m-0 text-4xl leading-tight text-slate-700">
                Remove backgrounds 100% automatically in 5 seconds with one
                click
              </h2>

              <div className="text-typo text-base">
                <p className="text-base mb-4 leading-tight">
                  Thanks to clever AI, you can slash editing time - and have
                  more fun!
                </p>
                <p className="text-base">
                  No matter if you want to make a background transparent (PNG),
                  add a white background to a photo, extract or isolate the
                  subject, or get the cutout of a photo - you can do all this
                  and more with remove.bg, the AI background remover for
                  professionals.
                </p>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex flex-col space-y-4 justify-center">
              <div className="w-full h-96 relative">
                {/* Hand image */}
                <Image
                  src="/assets/images/finger.png"
                  alt="Hand making peace sign"
                  width={300}
                  height={300}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-300 rounded-full"></div>
                <div className="absolute top-20 left-4 w-12 h-12 bg-yellow-300 transform rotate-45"></div>
                <div className="absolute bottom-20 right-4 w-10 h-10 bg-[#E6FCF5] border-2 border-black"></div>
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-black rounded-full"></div>
                <div className="absolute bottom-4 left-1/4 w-6 h-6 bg-yellow-300 rounded-full"></div>
                <div className="absolute top-12 right-1/4 w-3 h-3 bg-black rounded-full"></div>

                {/* Lines */}
                <div className="absolute top-1/4 right-1/4 w-12 h-0.5 bg-black transform rotate-45"></div>
                <div className="absolute top-1/3 right-1/3 w-12 h-0.5 bg-black transform -rotate-45"></div>
                <div className="absolute bottom-1/4 left-1/4 w-12 h-0.5 bg-black"></div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className=" relative mt-12 my-12 md:mt-32 bg-pattern-brand bg-repeat-x bg-yellow-400">
        <div className="absolute top-[-7%] left-0 right-0 hidden md:block">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-yellow-400"
          >
            <path d="M0 48H1440V0C1440 0 1320 24 1200 24C1080 24 960 0 840 0C720 0 600 24 480 24C360 24 240 0 120 0C60 0 0 12 0 12V48Z" />
          </svg>
        </div>
        <MaxWidthWrapper className="py-12 md:py-24">
          {/* Top Wave */}

          <div className="container mx-auto px-4 relative">
            {/* Blog Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Blog</h2>
              <Link
                href="/blog"
                className="text-gray-800 hover:text-gray-600 flex items-center gap-2"
              >
                See more articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="bg-white hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="text-sm text-gray-600 mb-2">
                      {post.date}
                    </div>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Get Updates Section */}
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Get Updates
              </h2>
              <p className="text-gray-700 mb-6">
                Sign up for our mailing list to receive news and updates about
                editplusplus products and services. You can unsubscribe at any
                time.
              </p>

              <div className="flex gap-4 max-w-xl mx-auto mb-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Subscribe
                </Button>
              </div>

              <p className="text-sm text-gray-600">
                To learn more about how editplusplus handles your personal data,
                check our{" "}
                <Link href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom Wave */}
        </MaxWidthWrapper>
      </section>

      <section className="relative py-12 sm:py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Real-World Experiences
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
              What our customers say
            </h2>
          </div>

          <div className="mx-auto lg:max-w-none grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:grid-cols-2 divide-y lg:divide-x  divide-gray-200">
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]">
              <div className=" flex gap-0.5 mb-2 justify-center lg:justify-start">
                <Star className=" size-5 text-yellow-500 fill-yellow-500" />
                <Star className=" size-5 text-yellow-500 fill-yellow-500" />
                <Star className=" size-5 text-yellow-500 fill-yellow-500" />
                <Star className=" size-5 text-yellow-500 fill-yellow-500" />
                <Star className=" size-5 text-yellow-500 fill-yellow-500" />
              </div>

              <p className=" text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis mollitia quae, accusantium veritatis vero placeat
                dolorum doloremque maiores quo? Deserunt, delectus.
              </p>

              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                <Image
                  src="/user-2.png"
                  className=" rounded-full object-cover"
                  alt="Random user"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center sm:items-start">
                  <p className=" font-semibold flex items-center">
                    Freya Larsson
                    <Icons.verificationBadge className="size-4 inline-block ml-1.5" />
                  </p>
                  <p>@itsfreya</p>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">
              <div className=" flex gap-0.5 mb-2 justify-center lg:justify-start">
                <Star className=" size-5 text-yellow-500 fill-yellow-500" />
                <Star className=" size-5 text-yellow-500 fill-yellow-500" />
                <Star className=" size-5 text-yellow-500 fill-yellow-500" />
                <Star className=" size-5 text-yellow-500 fill-yellow-500" />
                <Star className=" size-5 text-yellow-500 fill-yellow-500" />
              </div>

              <p className=" text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis mollitia quae, accusantium veritatis vero placeat
                dolorum doloremque maiores quo? Deserunt, delectus.
              </p>
              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                <Image
                  src="/user-1.png"
                  className=" rounded-full object-cover"
                  alt="Random user"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center sm:items-start">
                  <p className=" font-semibold flex items-center">
                    Tun Tun
                    <Icons.verificationBadge className="size-4 inline-block ml-1.5" />
                  </p>
                  <p>@ttm</p>
                </div>
              </div>
            </div>
          </div>
          <ShinyButton
            href="/sign-up"
            className="relative z-10 h-14 max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Sign up for free
          </ShinyButton>
        </MaxWidthWrapper>
      </section>

      <footer className="bg-slate-700 text-slate-200">
        {/* Wave decoration */}

        <div className="container mx-auto px-4 py-12">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Learn more section */}
            <div>
              <h2 className="font-semibold mb-4">{footerLinks.learn.title}</h2>
              <ul className="space-y-2">
                {footerLinks.learn.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & API section */}
            <div>
              <h2 className="font-semibold mb-4">{footerLinks.tools.title}</h2>
              <ul className="space-y-2">
                {footerLinks.tools.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support section */}
            <div>
              <h2 className="font-semibold mb-4">
                {footerLinks.support.title}
              </h2>
              <ul className="space-y-2">
                {footerLinks.support.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company section */}
            <div>
              <h2 className="font-semibold mb-4">
                {footerLinks.company.title}
              </h2>
              <ul className="space-y-2">
                {footerLinks.company.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-slate-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Language selector */}
              {/* <div className="flex items-center">
                <Button variant="ghost" className="text-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                  English
                </Button>
              </div> */}

              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-slate-200 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Copyright and legal links */}
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>© remove.bg, a Canva Austria GmbH brand</p>
              <div className="flex flex-wrap justify-center gap-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// <div className="absolute w-28 left-0 -top-20 hidden lg:block">
//                 {/* i forgot this div right here in the video, it's purely visual gradient and looks nice */}
//                 <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
//                 {/* <img src="/snake-1.png" className="w-full" /> */}
//               </div>

// <div className="aspect-[16/9]">
{
  /* <Image
src="/assets/images/free-images.jpg"
alt="Smiling toddler in light blue patterned outfit"
fill
className="object-cover"
priority
/>
</div>
<Button
variant="outline"
size="icon"
className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full w-12 h-12"
>
<MoveRight className="h-6 w-6" />
<span className="sr-only">Next image</span>
</Button> */
}
