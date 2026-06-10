import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioContent } from "@/components/PortfolioContent";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioContent />
      </main>
      <Footer />
    </>
  );
}
