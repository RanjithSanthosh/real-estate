
import { notFound } from 'next/navigation';
import { blogsData } from '../../data/blogs';
import BlogClientPage from './client-page';



// ✅ Add this function to your server page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogsData.find(b => b.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.shortDescription,
    openGraph: {
      title: blog.title,
      description: blog.shortDescription,
      images: [
        {
          url: blog.image, // This tells platforms which image to show
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}


export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogsData.find(b => b.slug === slug);

    if (!blog) {
        notFound();
    }

    const relatedBlogs = blogsData.filter(b => 
        blog.relatedBlogsSlugs?.includes(b.slug) && b.slug !== blog.slug
    ).slice(0, 3);

    return <BlogClientPage blog={blog} relatedBlogs={relatedBlogs} />;
}