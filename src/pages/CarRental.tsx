
import Header from "@/components/layout/Header";
import CarRentalForm from "@/components/car-rental/CarRental";

interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  seats: number;
  transmission: string;
  fuelType: string;
  description: string;
}

export default function CarRental() {
  const cars: Car[] = [
    {
      id: 1,
      name: "Toyota Innova Crysta",
      price: 50,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      seats: 4,
      transmission: "Automatic",
      fuelType: "Diesel",
      description: "Toyota Innova is a great combination of good look with ease of use luxuries interiors and unmatched safety features."
    },
    {
      id: 2,
      name: "Swift Dzire",
      price: 35,
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=600&fit=crop",
      seats: 4,
      transmission: "Manual",
      fuelType: "Petrol",
      description: "Perfect for city driving with excellent mileage and comfortable seating for families."
    },
    {
      id: 3,
      name: "Toyota Fortuner",
      price: 80,
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop",
      seats: 4,
      transmission: "Automatic",
      fuelType: "Diesel",
      description: "A premium SUV offering supreme comfort and powerful performance for both city and off-road adventures."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <section className="relative h-[60vh] bg-black">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&h=900&fit=crop" 
            alt="Luxury cars" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Premium Car Rental Service</h1>
            <p className="text-xl">Travel in comfort and style with our luxury fleet</p>
          </div>
        </div>
      </section>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Car Rental With Personal Driver</h1>
          <div className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            <p className="mb-4">Experience comfort and convenience with our professional driver service. All our drivers are well-trained, experienced, and committed to ensuring your safety and comfort throughout your journey.</p>
            <p>Our service includes fuel costs, driver allowance, and vehicle maintenance, allowing you to focus on your travel while we take care of everything else.</p>
          </div>
          
          <div className="space-y-8">
            {cars.map((car, index) => (
              <div key={car.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white shadow-lg rounded-lg overflow-hidden`}>
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{car.name}</h3>
                      <p className="text-3xl font-bold text-primary">${car.price}<span className="text-base font-normal text-gray-600">/day</span></p>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{car.description}</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-gray-600">Maximum {car.seats} people + Driver</p>
                      <p className="text-gray-600">Transmission: {car.transmission}</p>
                      <p className="text-gray-600">Fuel Type: {car.fuelType}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <CarRentalForm />
          </div>
        </div>
      </main>
    </div>
  );
}
