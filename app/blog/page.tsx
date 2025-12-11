import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blogData";
import Footer from "@/components/footer";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts on football, fairness, and the future of the beautiful game
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden card-hover border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <time className="text-sm text-gray-500 font-medium">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
                >
                  Read more
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

