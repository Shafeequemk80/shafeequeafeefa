import FlowerBackground from "./components/FlowerBackground";
import HeroSection from "./components/HeroSection";
import GreetingsWall from "./components/GreetingsWall";
import InvitationMessage from "./components/InvitationMessage";
import EventDetails from "./components/EventDetails";
import Footer from "./components/Footer";
import Youtube from "./components/Youtube";

export default function Home() {
  return (
    <main className="min-h-screen relative pattern-bg">
      <FlowerBackground />
      <HeroSection />
      <InvitationMessage />
      <EventDetails />
      <Youtube />
      <GreetingsWall />
      <Footer />
    </main>
  );
}