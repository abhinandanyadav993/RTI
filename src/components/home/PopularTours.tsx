import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, Users } from "lucide-react";

const popularTours = [
  {
    id: 1,
    title: "Majestic Swiss Alps Adventure",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
    price: 1299,
    duration: "7 Days",
    location: "Switzerland",
    rating: 4.8,
    groupSize: "10-15",
    description: "Experience the breathtaking beauty of the Swiss Alps with guided hiking and scenic train rides."
  },
  {
    id: 2,
    title: "Ancient Rome Discovery",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    price: 999,
    duration: "5 Days",
    location: "Italy",
    rating: 4.9,
    groupSize: "8-12",
    description: "Explore the historic sites of Rome including the Colosseum, Vatican, and Roman Forum."
  },
  {
    id: 3,
    title: "Tropical Bali Retreat",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: 899,
    duration: "6 Days",
    location: "Indonesia",
    rating: 4.7,
    groupSize: "6-10",
    description: "Discover Bali's temples, beaches, and rice terraces while enjoying luxury accommodations."
  },
  {
    id: 4,
    title: "Japan Cherry Blossom Tour",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
    price: 1499,
    duration: "8 Days",
    location: "Japan",
    rating: 4.9,
    groupSize: "8-12",
    description: "Experience Japan's cherry blossom season with visits to Tokyo, Kyoto, and Mount Fuji."
  },
  {
    id: 5,
    title: "Greek Islands Cruise",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    price: 1699,
    duration: "10 Days",
    location: "Greece",
    rating: 4.8,
    groupSize: "12-20",
    description: "Sail through the stunning Greek islands, exploring ancient ruins and pristine beaches."
  }
];

export default function PopularTours() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Most Popular Tours</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our highest-rated and most beloved travel experiences, carefully curated for unforgettable adventures.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory">
          {popularTours.map((tour) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="relative h-48">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    ${tour.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-gray-600">{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm text-gray-600">{tour.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-600">{tour.rating}/5.0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-gray-600">{tour.groupSize}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
