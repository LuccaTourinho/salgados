import HomeSection from "@/components/HomeSection";
import ProductSection from "@/components/ProductSection";
import ReviewSection from "@/components/ReviewSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="container flex flex-col items-center  h-full w-full">
      <HomeSection />
      <ProductSection />
      <ReviewSection />
      <AboutSection />
    </main>
  );
}
