import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Image from "next/image";

export default function WieIsWie() {
  const teamMembers = [
    {
      name: "Mathias Aerts",
      role: "SPOC",
      description: "Single Point of Contact for the project.",
      image: "/1.png",
    },
    {
      name: "Lennox Geens",
      role: "Organiser",
      description:
        "Deals with the organisation of the project including the communication with the other team members.",
      image: "/2.jpg",
    },
    {
      name: "Rube Verhulst",
      role: "Timekeeper",
      description:
        "Takes care of the timekeeping of the project. Makes sure deadlines are met.",
      image: "/3.jpg",
    },
    {
      name: "Mariam",
      role: "Quality Control",
      description:
        "Ensuring the quality of the project by checking the work of the other team members.",
      image: "/4.png",
    },
    {
      name: "Orolé Ray",
      role: "Developer",
      description:
        "In charge of the development and maintenance of the website.",
      image: "/5.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            WIE IS WIE
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ontmoet het team achter Fair Play. We zijn gepassioneerd over
            voetbal, eerlijkheid en transparantie in de mooiste sport ter
            wereld.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Grid: 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-green-300 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-green-500 flex items-center justify-center transition-colors duration-300 group"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg
                        className="w-4 h-4 text-gray-600 hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Onze Missie
              </h3>
              <p className="text-gray-600">
                We streven naar eerlijkheid en transparantie in de
                voetbalwereld, zodat iedereen kan genieten van de mooiste sport
                ter wereld.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Onze Waarden
              </h3>
              <p className="text-gray-600">
                Fair play, integriteit en respect staan centraal in alles wat we
                doen. We geloven in de kracht van gemeenschap en samenwerking.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Onze Visie
              </h3>
              <p className="text-gray-600">
                Een platform waar voetbalfans samenkomen om te leren, te delen
                en te groeien in hun passie voor het spel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
