import React from "react";
import { challenges, Category } from "@/lib/challenges";
import Challenge from "@/components/challenge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenges - Fair Play",
  description: "Explore our collection of football challenges to test your skills.",
};

export default function ChallengesPage() {
  // Group challenges by category
  const categories: Category[] = [
    "Technical",
    "Precision & Control",
    "Fun & Creative",
    "Conditional / Funny",
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Football{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              Challenges
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of challenges to improve your skills, have fun with friends, or push your limits.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {categories.map((category) => {
            const categoryChallenges = challenges.filter(
              (c) => c.category === category
            );

            if (categoryChallenges.length === 0) return null;

            return (
              <section key={category} className="space-y-8">
                <div className="flex items-center space-x-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {category}
                  </h2>
                  <div className="h-px flex-grow bg-gray-200"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryChallenges.map((challenge) => (
                    <div key={challenge.slug} className="h-full">
                      <Challenge challenge={challenge} darkMode={false} />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
