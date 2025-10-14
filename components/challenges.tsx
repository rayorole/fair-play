import React from "react";
import Challenge from "./challenge";

export default function Challenges() {
  return (
    <section className="max-w-6xl mx-auto p-8 my-32">
      <h2 className="text-3xl font-bold text-gray-800 tracking-wide font-sans text-center">
        Challenges
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Challenge />
        <Challenge />
        <Challenge />
      </div>
    </section>
  );
}
