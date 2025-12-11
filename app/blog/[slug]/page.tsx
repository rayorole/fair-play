import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllBlogPosts } from "@/lib/blogData";
import Footer from "@/components/footer";
import Comments from "@/components/comments";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-green-600 mb-8 transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Article */}
        <article className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="p-8 md:p-12">
            {/* Date */}
            <time className="text-sm text-gray-500 font-medium mb-4 block">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                {post.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* References */}
              {(post.link || post.references) && (
                <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    {post.references && post.references.length > 1 ? "References:" : "Reference:"}
                  </p>
                  {post.references && post.references.length > 0 ? (
                    <ul className="space-y-2">
                      {post.references.map((ref, index) => (
                        <li key={index} className="text-sm">
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 font-medium underline"
                          >
                            {ref.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    post.link && (
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-semibold underline"
                      >
                        {post.linkText || post.link}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <Comments postSlug={slug} />
      </div>
      <Footer />
    </main>
  );
}

