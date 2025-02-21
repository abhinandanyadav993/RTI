import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlaneTakeoff } from "lucide-react";

export default function Header() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <PlaneTakeoff className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold text-white">
              Real<span className="text-primary"> Travel India</span>
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <span className={`cursor-pointer transition-colors ${
              isActive("/") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Home
            </span>
          </Link>
          <Link href="/destination">
            <span className={`cursor-pointer transition-colors ${
              isActive("/destination") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Destination
            </span>
          </Link>
          <Link href="/tours">
            <span className={`cursor-pointer transition-colors ${
              isActive("/tours") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Tours
            </span>
          </Link>
          <Link href="/car-rental">
            <span className={`cursor-pointer transition-colors ${
              isActive("/car-rental") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Car Rental
            </span>
          </Link>
          <Link href="/about">
            <span className={`cursor-pointer transition-colors ${
              isActive("/about") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              About Us
            </span>
          </Link>
          <Link href="/contact">
            <span className={`cursor-pointer transition-colors ${
              isActive("/contact") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Contact Us
            </span>
          </Link>
        </nav>

        <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
          Book Now
        </Button>
      </div>
    </motion.header>
  );
}