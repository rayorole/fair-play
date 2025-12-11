import React from "react";
import Challenge from "./challenge";
import { challenges } from "@/lib/challenges";
import Link from "next/link";

export default function Challenges({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Featured Challenges
          </div>

          <h2
            className={`text-4xl sm:text-5xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            } mb-6`}
          >
            Test Your
            <span
              className={`block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Football Knowledge
            </span>
          </h2>

          <p
            className={`text-xl ${
              darkMode ? "text-neutral-300" : "text-gray-600"
            } max-w-3xl mx-auto leading-relaxed`}
          >
            Challenge yourself with our curated collection of football quizzes,
            trivia, and interactive games designed for true football
            enthusiasts.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.slice(0, 3).map((challenge, index) => (
            <div
              key={challenge.slug}
              className={`animate-fade-in-up ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <Challenge challenge={challenge} darkMode={darkMode} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link href="/challenges"
            className={`group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <span className="relative z-10">View All Challenges</span>
            <div
              className={`absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            ></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
