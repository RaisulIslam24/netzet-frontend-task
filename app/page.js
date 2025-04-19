import HeroSection from "./components/HeroSection";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Header from "./components/layout/Header";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnnouncementBar />
      <Header />
      <HeroSection />
    </div>
  );
}
