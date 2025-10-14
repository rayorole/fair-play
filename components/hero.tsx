import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 m-0 tracking-wide font-sans">
            What football is about
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            doloremque saepe architecto maiores repudiandae amet perferendis
            repellendus, reprehenderit voluptas sequi.
          </p>
          <button className="bg-green-700 border rounded px-8 py-3 text-base font-bold text-white cursor-pointer tracking-wide font-sans self-start hover:bg-green-800 transition-colors">
            Start Now
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image src="/hero.webp" alt="hero" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
