import Navbar from "./components/Bar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import ProductGrid from "./components/ProductGrid";
import PromoBanner from "./components/PromoBanner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 overflow-hidden text-slate-800">

      {/* Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-300/30 blur-[120px]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-300/30 blur-[120px]" />
      <div className="fixed top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-300/20 blur-[100px]" />

      <div className="relative z-10">
        <Navbar />

        <div className="max-w-[1600px] mx-auto px-6">
          <HeroSection />
          <CategorySection />
          <ProductGrid />
          <PromoBanner />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </main>
  );
}