import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { challenges } from "@/lib/challenges";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return challenges.map((challenge) => ({
    slug: challenge.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const challenge = challenges.find((c) => c.slug === slug);

  if (!challenge) {
    return {
      title: "Challenge Not Found",
    };
  }

  return {
    title: `${challenge.title} - Fair Play`,
    description: challenge.shortDescription,
  };
}

export default async function ChallengePage({ params }: Props) {
  const { slug } = await params;
  const challenge = challenges.find((c) => c.slug === slug);

  if (!challenge) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full bg-gray-900">
        <img
          src={challenge.image}
          alt={challenge.title}
          className="object-cover opacity-60 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto space-y-4">
            <Link
              href="/challenges"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Challenges
            </Link>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold backdrop-blur-md">
                {challenge.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-md">
                {challenge.difficulty}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-md">
                {challenge.time}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-md">
                {challenge.players} Players
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white">
              {challenge.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              {challenge.fullDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-12">
          {/* Setup */}
          <section>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Setup</h2>
            </div>
            <ul className="space-y-3">
              {challenge.setup.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Rules */}
          <section>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg
                  className="w-6 h-6"
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
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Rules</h2>
            </div>
            <ul className="space-y-3">
              {challenge.rules.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Winning Condition */}
          <section className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">How to Win</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {challenge.winningCondition}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
