import HomeSection from "@/components/HomeSection";
import ProductSection from "@/components/ProductSection";
import ReviewSection from "@/components/ReviewSection";
import AboutSection from "@/components/AboutSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="container flex flex-col items-center  h-full w-full">
      <Suspense fallback={<div>Loading...</div>}>
      <HomeSection />
      <ProductSection />
      <ReviewSection />
      <AboutSection />
      </Suspense>
    </main>
  );
}
