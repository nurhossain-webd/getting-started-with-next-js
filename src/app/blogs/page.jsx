import Link from "next/link";


const BlogPage = () => {
    const blogs = [
        {
            id: 1,
            title: "Getting Started with Next.js",
            author: "John Doe",
            date: "2026-04-09",
            category: "Web Development",
            description: "A beginner-friendly introduction to building modern web applications with Next.js.",
            image: "https://example.com/images/nextjs-blog-1.jpg"
        },
        {
            id: 2,
            title: "Why Developers Love React and Next.js",
            author: "Sarah Khan",
            date: "2026-04-08",
            category: "Frontend",
            description: "Explore the reasons why React and Next.js have become a popular choice for frontend developers.",
            image: "https://example.com/images/nextjs-blog-2.jpg"
        },
        {
            id: 3,
            title: "Understanding Server-Side Rendering in Next.js",
            author: "Michael Lee",
            date: "2026-04-07",
            category: "Programming",
            description: "Learn how server-side rendering works in Next.js and why it improves performance and SEO.",
            image: "https://example.com/images/nextjs-blog-3.jpg"
        },
        {
            id: 4,
            title: "Top 5 Features of Next.js",
            author: "Emma Watson",
            date: "2026-04-06",
            category: "JavaScript",
            description: "A quick look at the most useful features that make Next.js powerful for modern web development.",
            image: "https://example.com/images/nextjs-blog-4.jpg"
        }
    ];
    return (
        <div>
            <h2 className="text-3xl">Blogs</h2>
            {blogs.map(data => <div key={data.id}>
                <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
                <Link href={`/blogs/${data.id}`}> show details</Link>
            </div>)}
        </div>
    );
};

export default BlogPage;