

// import { notFound } from 'next/navigation';
// import { Metadata } from 'next';
// import { getBlogByUID, searchBlogs } from '@/services/api';
// import { PrismicBlog } from '@/app/data/prismic';
// import BlogClientPage from './client-page';
// import Navbar from '@/components/shared/Navbar';
// import SiteMapFooter from '@/components/homePage/SiteMapFooter';
// import DetailedFooter from '@/components/aboutPage/DetailedFooter';

// // This function generates the SEO metadata
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   //  const { slug } = await params;
//   const blog = await getBlogByUID(params.slug);

//   if (!blog) {
//     return { title: 'Blog Post Not Found' };
//   }

//   const title = blog.data.title[0]?.text || 'Blog Post';
//   const description = blog.data.link_title || 'Read this blog from Home Konnect.';

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       images: [
//         {
//           url: blog.data.image_link.url,
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },
//   };
// }

// // This is the Server Component page
// export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
//     // const { slug } =  params;
//     const blog = await getBlogByUID(params.slug);

//     if (!blog) {
//         notFound();
//     }

//     // Fetch related blogs (e.g., 3 latest, excluding the current one)
//     const relatedBlogsResponse = await searchBlogs(1, 3);
//     const relatedBlogs = (relatedBlogsResponse?.results || [])
//       .filter(b => b.uid !== params.slug) as PrismicBlog[];

//     return (
//       <div className="bg-white">
//         <Navbar />
//         <BlogClientPage blog={blog} relatedBlogs={relatedBlogs} />
//         <SiteMapFooter />
//         <DetailedFooter />
//       </div>
//     );
// }


import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogByUID, searchBlogs } from '@/services/api';
import { PrismicBlog } from '@/app/data/prismic';
import BlogClientPage from './client-page';
import Navbar from '@/components/shared/Navbar';
import SiteMapFooter from '@/components/homePage/SiteMapFooter';
import DetailedFooter from '@/components/aboutPage/DetailedFooter';

// This function generates the SEO metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogByUID(params.slug);

  if (!blog) {
    return { title: 'Blog Post Not Found' };
  }

  const title = blog.data.title[0]?.text || 'Blog Post';
  const description = blog.data.link_title || 'Read this blog from Home Konnect.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: blog.data.image_link.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// This is the Server Component page
export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
    // We get the slug from params
    const blog = await getBlogByUID(params.slug);

    if (!blog) {
        notFound();
    }

    // Fetch related blogs (e.g., 3 latest, excluding the current one)
    const relatedBlogsResponse = await searchBlogs(1, 3);
    const relatedBlogs = (relatedBlogsResponse?.results || [])
      // ✅ FIX: Use params.slug here instead of the undefined 'slug'
      .filter(b => b.uid !== params.slug) as PrismicBlog[];

    return (
      <div className="bg-white">
        <Navbar />
        <BlogClientPage blog={blog} relatedBlogs={relatedBlogs} />
        <SiteMapFooter />
        <DetailedFooter />
      </div>
    );
}