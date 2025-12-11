import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Image from "next/image";

export default function InterviewPage() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Interview met Jarne Flies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Een gesprek over passie, groei, discipline en fair play in de
            sportwereld.
          </p>
          <div className="relative w-48 h-48 mx-auto mt-8 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/jarne-flies.jpg"
              alt="Jarne Flies"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Wie hebben wij geïnterviewd? */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Wie hebben wij geïnterviewd?
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Voor onze teamwebsite interviewden wij Jarne Flies, een jonge en
                gemotiveerde voetballer die opvalt door zijn inzet, mentaliteit
                en leiderschapskwaliteiten. Jarne speelt al jarenlang in de
                jeugdopleiding van RSC Anderlecht, waar hij zelfs kapitein was
                van de U18, nu is hij doorgebroken naar de echte jeugdploeg van
                Anderlecht ook wel bekend als RSCA Neerpede en hij maakte ook al
                deel uit van de jeugdploegen van het Belgische nationale elftal.
              </p>
              <p className="mt-4">
                Zijn passie voor voetbal en zijn sterke persoonlijkheid maakten
                hem de ideale persoon om te interviewen voor ons project.
              </p>
            </div>
          </div>

          {/* Waarom hebben we hem geïnterviewd? */}
          <div className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Waarom hebben we hem geïnterviewd?
            </h2>
            <div className="prose prose-lg prose-invert text-gray-300">
              <p className="mb-4">
                We kozen Jarne omdat hij perfect aansluit bij ons thema: passie,
                groei, discipline en fair play in de sportwereld. Hij is een
                voorbeeld van een speler die:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>hard traint om zijn doelen te bereiken,</li>
                <li>respect toont op en naast het veld,</li>
                <li>een leider kan zijn binnen een team,</li>
                <li>
                  moeilijke momenten overwint, zoals blessure periodes,
                </li>
                <li>
                  en een positieve invloed had van zijn vader, die zelf
                  profvoetballer was.
                </li>
              </ul>
              <p className="mt-4">
                We wisten dat zijn verhaal inspirerend zou zijn voor iedereen
                die meer wil leren over sportmentaliteit.
              </p>
            </div>
          </div>

          {/* Wat hebben we uit het interview geleerd? */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Wat hebben we uit het interview geleerd?
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "1. Plezier blijft de basis van succes",
                  content:
                    "Jarne benadrukte dat plezier hebben in wat je doet het allerbelangrijkste is. Zonder plezier blijft niets duren.",
                },
                {
                  title: "2. Fair Play is essentieel",
                  content:
                    "Voor Jarne betekent fair play respect: respect voor de scheids, de tegenstander, je ploegmaat en jezelf. Het is volgens hem even belangrijk als techniek en tactiek omdat je door respect alles gaat accepteren hoe je bent en zo makkelijk beter kan worden.",
                },
                {
                  title: "3. Leiderschap is meer dan kapitein zijn",
                  content:
                    "Hij vertelde dat zijn periode als kapitein van Anderlecht U17 hem heeft geleerd om verantwoordelijkheid te nemen, anderen te motiveren en met het goede voorbeeld voorop te gaan.",
                },
                {
                  title: "4. Nationale trots geeft motivatie",
                  content:
                    "Het feit dat hij al mocht spelen voor de jeugd van de nationale ploeg is één van zijn grootste trotsen. Het gaf hem kippenvel en bevestigde dat zijn harde werk loonde.",
                },
                {
                  title: "5. Doorzettingsvermogen groeit in moeilijke periodes",
                  content:
                    "Zijn blessureperiode was zwaar, maar hij werd enorm gesteund door professionele spelers. Vooral het bericht van Jan Vertonghen met de woorden “spoedig herstel” gaf hem een boost. Dat moment motiveerde hem om sterker terug te komen.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audiofragment */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span>🎧</span> Audiofragment van het interview
            </h2>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center text-gray-500 italic">
              (Hier komen nog fragmenten)
            </div>
          </div>

          {/* Transcriptie */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span>✍️</span> Transcriptie van het meest pakkende interviewdeel
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold text-gray-900 mb-2">Vraag:</p>
                <p className="text-gray-700 italic">
                  “Hoe heeft je vader jou beïnvloed, aangezien hij zelf
                  profvoetballer was?”
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <p className="font-bold text-gray-900 mb-2">Jarne:</p>
                <p className="text-gray-700">
                  “Heel belangrijk. Hij heeft me nooit geduwd, maar wel altijd
                  geholpen. Hij weet hoe zwaar en hoe mooi voetbal tegelijk kan
                  zijn. Hij gaf me altijd de juiste raad op het juiste moment.
                  Vooral dat ik mijn eigen carrière moet maken. Dat heeft mij
                  echt gevormd.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
