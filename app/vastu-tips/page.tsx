import React from "react";
import Navbar from "@/components/shared/Navbar";
import DetailedFooter from "@/components/aboutPage/DetailedFooter";
import SiteMapFooter from "@/components/homePage/SiteMapFooter";
import { blogsData, Blog } from "../data/blogs";
import { vastuTipsData } from "../data/vastuTips"; // Import your new data
import Image from "next/image";
import Link from "next/link";
import { Palmtree } from "lucide-react";
import { searchBlogs } from "@/services/api"; //  Import API function
import { PrismicBlog } from "@/app/data/prismic"; //  Import Prismic type
import LatestBlogsSidebar from "@/components/shared/LatestBlogsSidebar"; //  Import shared component

// --- Reusable card for the "Latest in Blogs" sidebar ---
function LatestBlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="flex items-center gap-4 group"
    >
      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div>
        <p className="flex items-center text-xs text-gray-500 mb-1">
          <Palmtree size={14} className="text-green-600 mr-1.5" />
          {blog.tag || "Real Estate"}
        </p>
        <h4 className="font-semibold text-gray-800 leading-tight group-hover:text-green-600 transition-colors line-clamp-2">
          {blog.title}
        </h4>
        <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
      </div>
    </Link>
  );
}

// --- Main Page Component ---
export default async function VastuTipsPage() {
  // const latestBlogs = blogsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);
  // ✅ Fetch blog data from the API
  const latestBlogsResponse = await searchBlogs(1, 5);
  const latestBlogs = (latestBlogsResponse?.results || []) as PrismicBlog[];

  return (
    <div className="bg-white">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Breadcrumbs */}
        <div className="text-sm text-green-600 font-semibold tracking-wider mb-8">
          <Link href="/home" className="hover:underline">
            HOME
          </Link>
          <span className="mx-2">&gt;</span>
          <Link href="#" className="hover:underline">
            RESOURCES
          </Link>
          <span className="mx-2">&gt;</span>
          <span>VASTU TIPS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 font-bold mb-6">
              Vastu Tips
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Vastu is a set of principles that helps home owners lead a happy
              and peaceful life in their abode. The doctrine of Vastu is related
              to architecture and the designs are based on directional
              arrangements. Vastu guidelines can be applied during the
              construction of homes, offices, temples and other buildings to
              help bring them positive energy and general well-being for the
              home owner. As such, it is important to keep in mind few tips
              while searching for or building your ideal house:
            </p>

            <div className="space-y-8">
              {vastuTipsData.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.points.map((point, pIndex) => (
                      <li
                        key={pIndex}
                        className="flex items-start text-gray-600"
                      >
                        <span className="text-green-500 mr-3 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Latest in Blogs */}

          <LatestBlogsSidebar latestBlogs={latestBlogs} />
        </div>
      </main>
      <SiteMapFooter />
      <DetailedFooter />
    </div>
  );
}
