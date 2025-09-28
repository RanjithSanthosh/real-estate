
import { notFound } from 'next/navigation';
import { blogsData } from '../../data/blogs';
import BlogClientPage from './client-page';

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