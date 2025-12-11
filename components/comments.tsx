"use client";

import { useState, useEffect, useTransition } from "react";
import { getComments, addComment, type Comment } from "@/lib/actions/comments";

export default function Comments({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    loadComments();
  }, [postSlug]);

  const loadComments = async () => {
    try {
      const fetchedComments = await getComments(postSlug);
      setComments(fetchedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !commentText.trim()) {
      alert("Please fill in both username and comment");
      return;
    }

    startTransition(async () => {
      const result = await addComment(
        postSlug,
        username.trim(),
        commentText.trim()
      );

      if (result.success) {
        setUsername("");
        setCommentText("");
        await loadComments();
      } else {
        alert(result.error || "Failed to submit comment");
      }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Comments ({comments.length})
      </h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Comment
          </label>
          <textarea
            id="comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors resize-none"
            placeholder="Share your thoughts..."
            required
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isPending ? "Submitting..." : "Post Comment"}
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {isLoading ? (
          <p className="text-gray-500 text-center py-8">Loading comments...</p>
        ) : comments.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                    {comment.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {comment.username}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(comment.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 ml-[52px] leading-relaxed">
                {comment.text}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

