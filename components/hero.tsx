import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Fair Play Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              What football is
              <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                really about
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Experience the beautiful game like never before. Join our
              community of passionate football fans and discover the true spirit
              of fair play, transparency, and sportsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-400">Challenges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative z-10">
              {/* <video width="full" height="full" controls>
                <source src="promo.mp4" type="video/mp4" />
              </video> */}
              <iframe
                src="https://drive.google.com/file/d/1ZWkZj5WdNwThLab3W5x71EQyCkEGsh0D/preview"
                className="w-full h-96"
              ></iframe>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>

            {/* Decorative elements */}
            <div
              className="absolute top-1/2 -left-8 w-16 h-16 border-2 border-green-400/30 rounded-full animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div
              className="absolute bottom-1/4 -right-8 w-12 h-12 border-2 border-emerald-400/30 rounded-full animate-spin"
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
