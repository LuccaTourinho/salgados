import HomeSection from "@/components/HomeSection";
import ProductSection from "@/components/ProductSection";
import ReviewSection from "@/components/ReviewSection";
import AboutSection from "@/components/AboutSection";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="container flex flex-col items-center  h-full w-full">
      <Suspense fallback={<Loading />}>
      <HomeSection />
      <ProductSection />
      <ReviewSection />
      <AboutSection />
      </Suspense>
    </main>
  );
}
