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

const BlogDetailPage = async ({ params }) => {
    const { blogId } = await params;
    const blog = blogs.find((b) => b.id === parseInt(blogId));
    return (
        <div>
            <h4>Blog detail comming soon</h4>
            {blog && <div>
                <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
                <p className="text-gray-600 mb-2">By {blog.author} on {blog.date}</p>
                <p className="text-gray-800 mb-4">{blog.description}</p>

            </div>}
        </div>
    );
};

export default BlogDetailPage;