import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default function Promovideo() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center font-bold text-gray-900 my-6">
            Webinar
          </h1>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Video Container */}
          <iframe
            src="https://drive.google.com/file/d/1WX-GcSzWNzvpPcyoB7DuedmYWlSThKPg/preview"
            className="w-full h-[800px]"
          ></iframe>

          {/* Video Info */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Over deze webinar
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              In deze webinar ontdek je waarom Saudi-Arabië zo snel uitgroeit
              tot een nieuwe voetbalmacht. We bespreken de grote investeringen,
              de komst van internationale sterren en de gevolgen voor Europa.
              Een compacte blik op een ontwikkeling die het mondiale voetbal
              verandert.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <span className="relative z-10">Sluit je aan bij Fair Play</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
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
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
