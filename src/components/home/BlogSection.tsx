import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CalendarDays, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Top 10 Hidden Gems in Southeast Asia",
    excerpt: "Discover unexplored destinations that will take your breath away",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1512553353614-82a7370096dc",
    category: "Travel Tips"
  },
  {
    title: "Essential Travel Photography Tips",
    excerpt: "Master the art of capturing your travel memories",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
    category: "Photography"
  },
  {
    title: "Sustainable Tourism Guide",
    excerpt: "How to travel responsibly and minimize your environmental impact",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    category: "Eco-Travel"
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Travel Stories & Tips</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get inspired with our latest travel stories, tips, and guides
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative pt-16 group cursor-pointer">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="px-2 py-1 rounded-full bg-gray-100">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-center text-blue-600 font-medium">
                    Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}