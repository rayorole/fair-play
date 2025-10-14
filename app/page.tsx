import Footer from "@/components/footer";
import Hero from "../components/hero";
import Challenges from "@/components/challenges";
import Interview from "@/components/interview";

export default function Home() {
  return (
    <main>
      <Hero />
      <Challenges />
      <Interview />
      <Footer />
    </main>
  );
}
