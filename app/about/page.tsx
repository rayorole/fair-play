import Nav from "@/components/nav";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            About us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everyone knows what football is — whether you&apos;re a man or a
            woman, it doesn’t matter. You’ve definitely heard about the sport.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://www.shutterstock.com/image-photo/football-world-championship-soccer-player-600nw-2253076431.jpg"
              alt="Football action"
              width={700}
              height={400}
              className="object-cover w-full h-64"
            />
          </div>
        </div>
      </section>

      {/* Football as Decisions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Football: A Game of Decisions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Imagine this: you’re running through on goal, ball at your feet.
              There’s only one defender left, and a teammate is running beside
              you. Do you pass, or do you shoot? That’s what football is about —
              making difficult decisions in a matter of seconds. That’s the game
              we love.
            </p>
          </div>
          <div>
            <img
              src="https://media.newyorker.com/photos/6543f23235570d74bd3ef32e/master/w_2560%2Cc_limit/Akam-Pelly%2520Ruddock%2520Mpanzu.jpg"
              alt="Striker facing decision"
              width={500}
              height={320}
              className="object-cover rounded-lg shadow-md w-full h-60"
            />
          </div>
        </div>
      </section>

      {/* Website Purpose Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/3/2025/02/Best-players-world-836ceda.jpg"
              alt="Football teamwork"
              width={500}
              height={320}
              className="object-cover rounded-lg shadow-md w-full h-60"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our goal with this website is to create that same feeling — to
              show that football is more than just a sport. It’s about making
              tough decisions, learning respect, and growing individually as
              both a player and a person.
            </p>
          </div>
        </div>
      </section>

      {/* How We Bring Football to Life Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            How We Bring Football To Life
          </h2>
          <ul className="list-disc pl-8 text-lg text-gray-600 space-y-4 mb-8">
            <li>
              <span className="font-semibold">Interactive Experiences:</span>{" "}
              Challenge yourself with a video of Eden Hazard doing keepy-ups —
              can you beat his score?
            </li>
            <li>
              <span className="font-semibold">Community & Respect:</span>{" "}
              Complete challenges, then invite and challenge others to promote
              fairness and sportsmanship.
            </li>
            <li>
              <span className="font-semibold">Stories from Footballers:</span>{" "}
              Real players share how football helped them mature both on and off
              the pitch.
            </li>
            <li>
              <span className="font-semibold">In-Game Decisions:</span> Take
              quick quizzes inspired by real situations &mdash; for example,{" "}
              <span className="italic">
                “You are Kevin De Bruyne. Where do you pass the ball?”
              </span>
            </li>
          </ul>
          <div className="flex justify-center">
            <img
              src="https://fw-prod.ams3.cdn.digitaloceanspaces.com/nopCommerce/images/thumbs/0392888_sunset-soccer_photowallpaper_scandiwall_450.jpeg"
              alt="Football tactics whiteboard"
              width={650}
              height={330}
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
