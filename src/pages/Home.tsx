import Header from "@/components/layout/Header";
import CarouselSection from "@/components/home/CarouselSection";
import AboutSection from "@/components/home/AboutSection";
import PopularTours from "@/components/home/PopularTours";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <CarouselSection />
        <AboutSection />
        <PopularTours />
        <BlogSection />
      </main>
    </div>
  );
}