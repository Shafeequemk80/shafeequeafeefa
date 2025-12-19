import FlowerBackground from "./components/FlowerBackground";
import HeroSection from "./components/HeroSection";
import InvitationMessage from "./components/InvitationMessage";
import EventDetails from "./components/EventDetails";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative pattern-bg">
      <FlowerBackground />
      <HeroSection />
      <InvitationMessage />
      <EventDetails />
      <RSVPForm />
      <Footer />
    </main>
  );
}