import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Interview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Exclusive Interviews
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            A legend in the making
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get exclusive insights from football&apos;s greatest players,
            managers, and personalities. Hear their stories, experiences, and
            what makes them tick.
          </p>
        </div>

        {/* Interview Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96">
              <Image
                src="https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Jarne Flies interview"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">JF</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Jarne Flies
                </h3>
                <p className="text-gray-600">
                  Professional football player
                </p>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              &ldquo;The Beautiful Game Through My Eyes&rdquo;
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              In this interview, Jarne Flies shares his journey
              from a young boy in Belgium to becoming one of the most respected
              defenders in European football. He talks about the challenges,
              triumphs, and what it truly means to play the beautiful game at
              the highest level.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
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
                <span>8 minutes</span>
              </div>

              <div className="flex items-center gap-2">
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
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8"
                  />
                </svg>
                <span>Exclusive</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/interview" className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="relative z-10">Read Interview</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* More Interviews Preview */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            More exclusive interviews coming soon...
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 font-bold">?</span>
            </div>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 font-bold">?</span>
            </div>
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 font-bold">?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
