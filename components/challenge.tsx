import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Challenge as ChallengeType } from "@/lib/challenges";

export default function Challenge({
  challenge,
  darkMode,
}: {
  challenge: ChallengeType;
  darkMode: boolean;
}) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Hard":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Expert":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl h-full flex flex-col ${
        darkMode
          ? "bg-gray-800/5 backdrop-blur-sm border border-gray-800/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          : "bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      }`}
    >
      {/* Image Container */}
      <div
        className={`relative h-48 overflow-hidden shrink-0 ${
          darkMode
            ? "bg-gray-800/5 backdrop-blur-sm border border-gray-800/10"
            : "bg-white/5 backdrop-blur-sm border border-white/10"
        }`}
      >
        <img
          alt={challenge.title}
          src={challenge.image}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${getDifficultyColor(
              challenge.difficulty
            )}`}
          >
            {challenge.difficulty}
          </span>
        </div>

        {/* Play Button Overlay */}
        <Link
          href={`/challenges/${challenge.slug}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className={`text-xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          } mb-3 group-hover:text-green-400 transition-colors duration-300`}
        >
          {challenge.title}
        </h3>

        <p
          className={`text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {challenge.shortDescription}
        </p>

        {/* Stats */}
        <div
          className={`flex items-center justify-between text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          } mb-6 mt-auto`}
        >
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>{challenge.players}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{challenge.time}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={`/challenges/${challenge.slug}`}
          className={`w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 text-center ${
            darkMode
              ? "shadow-lg"
              : "shadow-md"
          }`}
        >
          Start Challenge
        </Link>
      </div>
    </article>
  );
}
