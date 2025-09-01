import modelcontainer1 from "../assets/images/en1.jpeg";

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  specifications: {
    viscosity: string;
    type: string;
    applications: string;
  };
  image: string;
  price: number;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "ATF 45",
    category: "transmission",
    description: "Advanced transmission fluid for smooth gear shifts and extended transmission life.",
    longDescription: "Engineered for automatic transmissions, ATF 45 provides superior protection against wear and tear, ensuring smooth gear shifts and extended transmission life. Ideal for a wide range of vehicles.",
    features: ["Smooth shifting", "Extended transmission life", "Thermal stability"],
    specifications: {
      viscosity: "45",
      type: "Automatic Transmission Fluid",
      applications: "Cars, Trucks, SUVs"
    },
    image: modelcontainer1,
    price: 18500,
    rating: 4.8
  },
  {
    id: 2,
    name: "15W 40",
    category: "engine",
    description: "Heavy-duty engine oil for robust protection in demanding conditions and high temperatures.",
    longDescription: "A robust multi-grade oil designed for heavy-duty diesel engines. 15W 40 offers excellent performance in various operating conditions, providing optimal engine cleanliness and extended drain intervals.",
    features: ["High temperature stability", "Engine cleanliness", "Wear protection"],
    specifications: {
      viscosity: "15W-40",
      type: "Mineral Engine Oil",
      applications: "Diesel Engines, Heavy Duty Vehicles"
    },
    image: modelcontainer1,
    price: 15200,
    rating: 4.6
  },
  {
    id: 3,
    name: "10W 30",
    category: "engine",
    description: "Versatile engine oil offering excellent performance for a wide range of vehicles.",
    longDescription: "A versatile engine oil suitable for a wide range of gasoline engines. 10W 30 ensures reliable performance across different temperatures, protecting against sludge and varnish formation.",
    features: ["All-season performance", "Fuel efficiency", "Engine protection"],
    specifications: {
      viscosity: "10W-30",
      type: "Synthetic Blend",
      applications: "Cars, Light Trucks, Vans"
    },
    image: modelcontainer1,
    price: 16700,
    rating: 4.7
  },
  {
    id: 4,
    name: "0W 20",
    category: "engine",
    description: "Fuel-efficient synthetic oil for modern engines requiring low viscosity.",
    longDescription: "Formulated for modern engines requiring low-viscosity oils, 0W 20 enhances fuel efficiency and provides excellent cold-start protection. A full synthetic blend for ultimate performance.",
    features: ["Improved fuel economy", "Cold start performance", "Engine cleanliness"],
    specifications: {
      viscosity: "0W-20",
      type: "Full Synthetic",
      applications: "Modern Gasoline Engines"
    },
    image: modelcontainer1,
    price: 21900,
    rating: 4.9
  },
  {
    id: 5,
    name: "5W 30",
    category: "engine",
    description: "Premium synthetic blend oil for optimal performance in modern engines.",
    longDescription: "A premium synthetic blend oil that provides excellent engine protection in both high and low temperatures. Reduces engine wear and improves fuel economy.",
    features: ["Temperature resistance", "Wear reduction", "Fuel economy"],
    specifications: {
      viscosity: "5W-30",
      type: "Synthetic Blend",
      applications: "Modern Passenger Vehicles"
    },
    image: modelcontainer1,
    price: 17500,
    rating: 4.7
  },
  {
    id: 6,
    name: "20W 50",
    category: "engine",
    description: "High-performance oil designed for higher mileage engines.",
    longDescription: "Specifically formulated for vehicles with higher mileage. 20W 50 helps reduce oil consumption and minimizes leaks in older engines while providing superior protection.",
    features: ["Leak prevention", "High mileage protection", "Engine longevity"],
    specifications: {
      viscosity: "20W-50",
      type: "High Mileage Oil",
      applications: "Older Engines, High Mileage Vehicles"
    },
    image: modelcontainer1,
    price: 14800,
    rating: 4.5
  }
];