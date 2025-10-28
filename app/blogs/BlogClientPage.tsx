
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { PrismicBlog } from "@/app/data/prismic";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Palmtree,
  CalendarDays,
} from "lucide-react";

// --- Blog Card Component (adapted for API data) ---
function BlogCard({ blog }: { blog: PrismicBlog }) {
  const title = blog.data.title[0]?.text || "Untitled Blog Post";
  const shortDescription = blog.data.link_title || "Read more...";

  return (
    <Link href={`/blogs/${blog.uid}`} className="block group">
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 md:flex">
        <div className="relative w-full h-60 md:w-80 md:h-auto flex-shrink-0">
          <Image
            src={blog.data.image_link.url}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2">
            <CalendarDays size={14} className="text-gray-500" />
            <span>
              {new Date(blog.data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8 flex flex-col">
          <div className="flex-grow">
            <div className="flex items-start gap-3">
              <Palmtree
                size={24}
                className="text-green-600 flex-shrink-0 mt-1"
              />
              <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                {title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm mt-4">
              <Palmtree
                size={16}
                className="text-green-600 inline-block mr-1 -mt-1"
              />
              {shortDescription}
            </p>
          </div>
          <div className="mt-6 flex-shrink-0">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 border border-gray-300 rounded-full px-4 py-2 group-hover:bg-green-50 group-hover:border-green-400 transition-colors">
              Read More
              <ArrowRight
                size={16}
                className="transform transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// --- ✅ NEW: Advanced Pagination Component ---
function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  const getPaginationNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const half = Math.floor(maxPagesToShow / 2);

    if (totalPages <= maxPagesToShow + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Add first page
      pages.push(1);
      if (currentPage > half + 2) {
        pages.push("...");
      }

      // Add middle pages
      let start = Math.max(2, currentPage - half);
      let end = Math.min(totalPages - 1, currentPage + half);

      if (currentPage <= half + 1) {
        end = maxPagesToShow - 1;
      }
      if (currentPage >= totalPages - half) {
        start = totalPages - (maxPagesToShow - 2);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - half - 1) {
        pages.push("...");
      }

      // Add last page
      pages.push(totalPages);
    }
    return pages;
  };

  const pages = getPaginationNumbers();

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-3 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <ArrowLeft size={20} />
      </button>
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="w-10 h-10 flex items-center justify-center text-gray-500">
              ...
            </span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`w-10 h-10 rounded-full font-semibold text-lg transition ${
                currentPage === page
                  ? "bg-green-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-3 rounded-full bg-white border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
}

// --- Blog Listing Client Page ---
interface BlogClientPageProps {
  initialBlogs: PrismicBlog[];
  initialPage: number;
  totalPages: number;
  totalResults: number;
  initialSearch: string;
}

export default function BlogClientPage({
  initialBlogs,
  initialPage,
  totalPages,
  totalResults,
  initialSearch,
}: BlogClientPageProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1");
    if (searchTerm) {
      params.set("q", searchTerm);
    } else {
      params.delete("q");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(pageNumber));
      router.push(`${pathname}?${params.toString()}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
        Blogs from Home Konnect®
      </h1>

      <form
        onSubmit={handleSearchSubmit}
        className="relative mb-12 max-w-2xl mx-auto"
      >
        <input
          type="text"
          placeholder="Search for blogs by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-12 pr-16 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 outline-none"
        />
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full p-2 hover:bg-green-700 transition-colors"
        >
          <Search size={18} />
        </button>
      </form>

      {initialBlogs.length > 0 ? (
        <div className="space-y-8 md:space-y-10">
          {initialBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 py-16">
          <h2 className="text-2xl font-semibold">No Blogs Found</h2>
          <p className="mt-2">
            Try adjusting your search. We're always adding new content!
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={initialPage}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}
