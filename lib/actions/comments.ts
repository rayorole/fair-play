"use server";

import redis from "@/lib/redis";

export interface Comment {
  id: string;
  username: string;
  text: string;
  date: string;
}

export async function getComments(postSlug: string): Promise<Comment[]> {
  try {
    if (!postSlug) {
      return [];
    }

    const commentsKey = `comments:${postSlug}`;
    const comments = await redis.lrange(commentsKey, 0, -1);

    // Handle both string and object responses from Redis
    const parsedComments = comments
      .map((comment) => {
        if (typeof comment === "string") {
          return JSON.parse(comment);
        }
        return comment;
      })
      .map((comment) => {
        // Ensure we have the correct structure
        if (typeof comment === "object" && comment !== null) {
          return comment as Comment;
        }
        return null;
      })
      .filter((comment): comment is Comment => comment !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return parsedComments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
}

export async function addComment(
  postSlug: string,
  username: string,
  text: string
): Promise<{ success: boolean; error?: string; comment?: Comment }> {
  try {
    if (!postSlug || !username || !text) {
      return {
        success: false,
        error: "postSlug, username, and text are required",
      };
    }

    const comment: Comment = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      username: username.trim(),
      text: text.trim(),
      date: new Date().toISOString(),
    };

    const commentsKey = `comments:${postSlug}`;
    await redis.lpush(commentsKey, JSON.stringify(comment));

    return { success: true, comment };
  } catch (error) {
    console.error("Error posting comment:", error);
    return {
      success: false,
      error: "Failed to post comment",
    };
  }
}

