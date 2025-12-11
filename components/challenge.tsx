import React from "react";
import Image from "next/image";

export default function Challenge({ darkMode }: { darkMode: boolean }) {
  const challenges = [
    {
      title: "Premier League Legends Quiz",
      description:
        "Test your knowledge of the greatest players in Premier League history. Can you identify all the legends?",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop",
      difficulty: "Hard",
      questions: 25,
      time: "15 min",
    },
    {
      title: "World Cup History Challenge",
      description:
        "From 1930 to today, how well do you know the history of the FIFA World Cup?",
      image:
        "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1000&auto=format&fit=crop",
      difficulty: "Medium",
      questions: 20,
      time: "12 min",
    },
    {
      title: "Tactics & Formations Master",
      description:
        "Prove you understand the beautiful game's tactical side with this advanced challenge.",
      image:
        "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=1000&auto=format&fit=crop",
      difficulty: "Expert",
      questions: 30,
      time: "20 min",
    },
  ];

  const challenge = challenges[Math.floor(Math.random() * challenges.length)];

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
      className={`group relative overflow-hidden rounded-2xl ${
        darkMode
          ? "bg-gray-800/5 backdrop-blur-sm border border-gray-800/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          : "bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      }`}
    >
      {/* Image Container */}
      <div
        className={`relative h-48 overflow-hidden ${
          darkMode
            ? "bg-gray-800/5 backdrop-blur-sm border border-gray-800/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            : "bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        }`}
      >
        <Image
          alt={challenge.title}
          src={challenge.image}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
            darkMode
              ? "bg-gray-800/5 backdrop-blur-sm border border-gray-800/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              : "bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent ${
            darkMode
              ? "bg-gray-800/5 backdrop-blur-sm border border-gray-800/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              : "bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          }`}
        ></div>

        {/* Difficulty Badge */}
        <div
          className={`absolute top-4 right-4 ${
            darkMode
              ? "bg-gray-800/5 backdrop-blur-sm border border-gray-800/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              : "bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          }`}
        >
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              darkMode
                ? "bg-gray-800/5 backdrop-blur-sm border border-gray-800/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                : "bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            } ${getDifficultyColor(challenge.difficulty)}`}
          >
            {challenge.difficulty}
          </span>
        </div>

        {/* Play Button Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            darkMode
              ? "bg-gray-800/5 backdrop-blur-sm border border-gray-800/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              : "bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          }`}
        >
          <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300">
            <svg
              className="w-6 h-6 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className={`text-xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          } mb-3 group-hover:text-green-400 transition-colors duration-300`}
        >
          {challenge.title}
        </h3>

        <p
          className={`text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {challenge.description}
        </p>

        {/* Stats */}
        <div
          className={`flex items-center justify-between text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          } mb-4`}
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
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span>{challenge.questions} questions</span>
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
        <button
          className={`w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 ${
            darkMode
              ? "bg-gray-800/5 backdrop-blur-sm border border-gray-800/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              : "bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          }`}
        >
          Start Challenge
        </button>
      </div>
    </article>
  );
}
