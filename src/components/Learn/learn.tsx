"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
const posts = [
  {
    title:
      "Data-Driven Email Marketing Strategies to Outsmart Your Competition",
    category: "WORDPRESS",
    image: "/images/email-marketing.jpg",
  },
  {
    title:
      "Optimize Your About Page: 7 Essential Ingredients to Build Credibility",
    category: "WORDPRESS",
    image: "/images/about-page.jpg",
  },
  {
    title: "Homepage Hacks: Essential Techniques to Boost Conversions",
    category: "DESIGN, GENERAL, MARKETING",
    image: "/images/homepage-hacks.jpg",
  },
  {
    title: "5 Smart Ways to Use AI to Create Content for Your Business",
    category: "AI",
    image: "/images/ai-content.jpg",
  },
  {
    title: "5 Smart Ways to Use AI to Create Content for Your Business",
    category: "AI",
    image: "/images/ai-content.jpg",
  },
  {
    title: "5 Smart Ways to Use AI to Create Content for Your Business",
    category: "AI",
    image: "/images/ai-content.jpg",
  },
  {
    title: "5 Smart Ways to Use AI to Create Content for Your Business",
    category: "AI",
    image: "/images/ai-content.jpg",
  },
  {
    title: "5 Smart Ways to Use AI to Create Content for Your Business",
    category: "AI",
    image: "/images/ai-content.jpg",
  },
  {
    title: "5 Smart Ways to Use AI to Create Content for Your Business",
    category: "AI",
    image: "/images/ai-content.jpg",
  },
];
const blogPosts: BlogPost[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742394194/e74bb5c8efaa066cc9db6f6d82d22634_b4cfgs.jpg",
    category: "WORDPRESS",
    title: "Data-Driven Email Marketing Strategies to Outmart Your Competition",
    slug: "data-driven-email-marketing",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742394285/R.434fa0dd0eeaaf615cfc5b89079012dc_tawbpc.jpg",
    category: "WORDPRESS",
    title:
      "Optimize Your About Page: 7 Essential Ingredients to Build Credibility",
    slug: "optimize-about-page",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742394340/AdobeStock_230366692_iybwdu.jpg",
    category: "DESIGN, GENERAL, MARKETING",
    title: "Homepage Hacks: Essential Techniques to Boost Conversions",
    slug: "homepage-hacks",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742394793/AI-in-People-Management-Image-scaled_gscq87.webp",
    category: "AI",
    title: "5 Smart Ways to Use AI to Create Content for Your Business",
    slug: "smart-ways-use-ai",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742394889/shutterstock_2326536577-1_i9sidy.jpg",
    category: "SEO / SEM, MARKETING",
    title: "SEO Unpacked: 7 Easy Steps to Improve Your Website's Organic Reach",
    slug: "seo-unpacked",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742394964/OIP_w78kb9.jpg",
    category: "WORDPRESS",
    title:
      "Is Your WordPress Website Stuck in Maintenance Mode? Here's How to Repair It",
    slug: "wordpress-maintenance-mode",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742395068/error-img_jvdswk.webp",
    category: "WORDPRESS",
    title: "Checking a WordPress Site for Broken Links",
    slug: "checking-wordpress-broken-links",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742395137/people-on-laptop-news_466862540_kqupo8.jpg",
    category: "GENERAL",
    title: "August WordPress News Roundup",
    slug: "august-wordpress-news",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742395179/seo-laptop_lv2pcj.jpg",
    category: "WORDPRESS",
    title: "How to Use the Yoast Plugin",
    slug: "how-to-use-yoast",
  },
];
interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  slug: string;
}
function learn() {
  return (
    <div>
      <div className="lg:h-[25rem] h-[20rem] relative">
        <div className="h-full w-full bg-black/70 absolute"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://res.cloudinary.com/druohnmyv/image/upload/v1742398060/College-Students-Using-Laptops-Feature-Image_nxbf74.jpg`}
          alt="logo"
        />
        <p className="absolute top-[50%] text-white font-bold text-center block w-full">
          <span className="border-b-4 border-[#F59583] lg:text-[70px] text-[40px]">
            Learn
          </span>
        </p>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className="group flex flex-col overflow-hidden border border-gray-200 rounded-md bg-[#f0ede4] hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col p-5">
                <div className="text-[16px] font-medium text-gray-600 mb-2">
                  {post.category}
                </div>
                <h3 className="text-[25px] font-bold text-[#ec6a2a] group-hover:text-orange-600 transition-colors duration-200">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center items-center mt-10 space-x-2">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-[#ec6a2a] text-white font-medium rounded-sm">
            1
          </span>
          {[2, 3, 4, 5].map((page) => (
            <Link
              key={page}
              href={`/blog/page/${page}`}
              className="inline-flex items-center justify-center w-8 h-8 text-gray-700 hover:bg-gray-100 font-medium rounded-sm"
            >
              {page}
            </Link>
          ))}
          <Link
            href="/blog/page/2"
            className="inline-flex items-center justify-center px-3 py-1 text-gray-700 hover:bg-gray-100 font-medium rounded-sm"
          >
            NEXT <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default learn;
