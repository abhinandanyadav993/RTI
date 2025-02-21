import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">
              Discover the World with <span className="text-primary">TravelVista</span>
            </h2>
            <p className="text-gray-600 mb-6">
              At TravelVista, we believe that travel is more than just moving from one place to another 
              – it's about creating unforgettable experiences and memories that last a lifetime. 
              With over a decade of expertise in crafting perfect getaways, we've helped thousands 
              of travelers explore the world's most breathtaking destinations.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary mb-2">10+</span>
                <span className="text-gray-600">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary mb-2">50+</span>
                <span className="text-gray-600">Tour Destinations</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary mb-2">24/7</span>
                <span className="text-gray-600">Support Available</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-primary mb-2">1M+</span>
                <span className="text-gray-600">Happy Travelers</span>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Learn More About Us
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80"
                alt="Travel Experience"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-lg p-6 shadow-lg hidden md:block">
                <div className="text-white">
                  <p className="text-2xl font-bold mb-2">500+</p>
                  <p className="text-sm">Weekly Tours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
