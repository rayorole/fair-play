import Footer from "@/components/footer";
import Hero from "../components/hero";
import Challenges from "@/components/challenges";
import Interview from "@/components/interview";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <div className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white">
        <Challenges darkMode={true} />
      </div>
      <Interview />
      <Footer />
    </main>
  );
}
