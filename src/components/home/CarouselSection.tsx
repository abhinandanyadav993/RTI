import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const carouselSlides = [
  {
    image: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=2070",
    title: "Discover Amazing Places",
    description: "Explore the world's most beautiful destinations with TravelVista",
  },
  {
    image: "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=2070",
    title: "Adventure Awaits",
    description: "Create unforgettable memories with our curated travel experiences",
  },
  {
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2070",
    title: "Luxurious Getaways",
    description: "Indulge in premium accommodations and exclusive tour packages",
  },
];

export default function CarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className="relative flex-[0_0_100%] min-w-0"
          >
            <div
              className="relative h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-white px-4"
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Explore Now
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
