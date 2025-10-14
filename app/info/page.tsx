import React from "react";
import Image from "next/image";

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured News Card */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-gray-400 border-dashed rounded flex items-center justify-center">
                  <span className="text-gray-400 text-2xl">×</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Titel van groot nieuws
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
              </div>
            </article>

            {/* Smaller News Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Titel art.", time: "2 uur geleden" },
                { title: "Titel art.", time: "Gisteren" },
                { title: "Titel art.", time: "Gisteren" },
              ].map((item, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-400 border-dashed rounded flex items-center justify-center">
                      <span className="text-gray-400">×</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <time className="text-sm text-gray-500">{item.time}</time>
                  </div>
                </article>
              ))}
            </div>

            {/* Competition Standings */}
            <article className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Competitiestanden
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">
                        #
                      </th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">
                        Team
                      </th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">
                        Ptn
                      </th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">
                        +/-
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 text-gray-600">1</td>
                      <td className="py-2 px-3 font-medium text-gray-900">
                        Team A
                      </td>
                      <td className="py-2 px-3 text-gray-600">25</td>
                      <td className="py-2 px-3 text-gray-600">15</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 text-gray-600">2</td>
                      <td className="py-2 px-3 font-medium text-gray-900">
                        Club B
                      </td>
                      <td className="py-2 px-3 text-gray-600">24</td>
                      <td className="py-2 px-3 text-gray-600">12</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 text-gray-600">3</td>
                      <td className="py-2 px-3 font-medium text-gray-900">
                        Club C
                      </td>
                      <td className="py-2 px-3 text-gray-600">22</td>
                      <td className="py-2 px-3 text-gray-600">10</td>
                    </tr>
                    <tr>
                      <td
                        colSpan={4}
                        className="py-2 px-3 text-center text-gray-400"
                      >
                        ...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Next Live Match */}
            <article className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Volgende Live Wedstrijd
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                    <span className="text-gray-600 text-xs">×</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    Club 1 – Club 2
                  </span>
                  <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                    <span className="text-gray-600 text-xs">×</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">Vandaag · 20:00</p>
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
                  LIVE VOLGEN
                </button>
              </div>
            </article>

            {/* Smaller News Cards */}
            <div className="space-y-4">
              {[
                { title: "Titel art.", time: "2 uur geleden" },
                { title: "Titel art.", time: "Gisteren" },
              ].map((item, index) => (
                <article
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-400 border-dashed rounded flex items-center justify-center">
                      <span className="text-gray-400">×</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <time className="text-sm text-gray-500">{item.time}</time>
                  </div>
                </article>
              ))}
            </div>

            {/* Video Highlights */}
            <article className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Video Highlights
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <div className="w-12 h-12 border-2 border-gray-400 border-dashed rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xl">×</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Samenvatting Team A – Team B
                  </p>
                </div>
                <div>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <div className="w-12 h-12 border-2 border-gray-400 border-dashed rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xl">×</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Doel van de Maand
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
