export const products = [
  {
      id: "prod_001",
      name: "Toyota Camry",
      price: 24000,
      rating: 4.5,
      category: "sedan_001", // Updated to new Sedan category
      description: "The Toyota Camry is a comfortable, fuel-efficient sedan perfect for family use, equipped with modern tech and safety features.",
      images: [
          "https://example.com/images/toyota_camry_1.jpg",
          "https://example.com/images/toyota_camry_2.jpg"
      ],
      stock: 15,
      isOnSale: false,
      engine: "2.5L 4-Cylinder",
      fuelType: "Gasoline",
      transmission: "Automatic",
      features: [
          "Apple CarPlay",
          "Android Auto",
          "Adaptive Cruise Control",
          "Lane Departure Warning"
      ],
      dimensions: {
          length: "192.1 inches",
          width: "72.4 inches",
          height: "56.9 inches"
      },
      weight: "3,340 lbs",
      colorOptions: ["White", "Black", "Silver"],
      warranty: "5 years / 60,000 miles",
      safetyRating: "5-Star Overall"
  },
  {
      id: "prod_002",
      name: "Honda Civic",
      price: 22000,
      rating: 4.4,
      category: "hatchback_002", // Updated to new Hatchback category
      description: "The Honda Civic is a compact car with a sporty design, known for its reliability and fuel efficiency.",
      images: [
          "https://example.com/images/honda_civic_1.jpg",
          "https://example.com/images/honda_civic_2.jpg"
      ],
      stock: 25,
      isOnSale: true,
      engine: "1.5L Turbocharged 4-Cylinder",
      fuelType: "Gasoline",
      transmission: "Manual",
      features: [
          "Heated Seats",
          "Multi-Angle Rearview Camera",
          "Remote Start",
          "Lane Keeping Assist"
      ],
      dimensions: {
          length: "177.9 inches",
          width: "70.9 inches",
          height: "55.7 inches"
      },
      weight: "2,771 lbs",
      colorOptions: ["Blue", "Red", "Gray"],
      warranty: "3 years / 36,000 miles",
      safetyRating: "4-Star Overall"
  },
  {
      id: "prod_003",
      name: "BMW M4",
      price: 72000,
      rating: 4.8,
      category: "coupe_003", // Updated to new Coupe category
      description: "The BMW M4 is a high-performance sports coupe, offering exhilarating driving dynamics and luxurious comfort.",
      images: [
          "https://example.com/images/bmw_m4_1.jpg",
          "https://example.com/images/bmw_m4_2.jpg"
      ],
      stock: 8,
      isOnSale: false,
      engine: "3.0L Twin-Turbocharged 6-Cylinder",
      fuelType: "Gasoline",
      transmission: "Automatic",
      features: [
          "M Sport Differential",
          "Adaptive M Suspension",
          "Harman Kardon Surround Sound",
          "Carbon Fiber Interior Trim"
      ],
      dimensions: {
          length: "189.1 inches",
          width: "74.3 inches",
          height: "54.8 inches"
      },
      weight: "3,880 lbs",
      colorOptions: ["Black", "Yellow", "White"],
      warranty: "4 years / 50,000 miles",
      safetyRating: "5-Star Overall"
  },
  {
      id: "prod_004",
      name: "Volvo V60",
      price: 48000,
      rating: 4.7,
      category: "wagon_004", // Updated to new Station Wagon category
      description: "The Volvo V60 is a versatile station wagon, combining Scandinavian design with advanced safety features and a spacious interior.",
      images: [
          "https://example.com/images/volvo_v60_1.jpg",
          "https://example.com/images/volvo_v60_2.jpg"
      ],
      stock: 10,
      isOnSale: true,
      engine: "2.0L Turbocharged 4-Cylinder",
      fuelType: "Hybrid",
      transmission: "Automatic",
      features: [
          "Panoramic Sunroof",
          "Pilot Assist",
          "360-Degree Camera",
          "Blind Spot Monitoring"
      ],
      dimensions: {
          length: "187.4 inches",
          width: "72.8 inches",
          height: "56.2 inches"
      },
      weight: "4,092 lbs",
      colorOptions: ["Gray", "Silver", "Blue"],
      warranty: "4 years / 50,000 miles",
      safetyRating: "5-Star Overall"
  },
  {
      id: "prod_005",
      name: "Ford Focus",
      price: 19000,
      rating: 4.2,
      category: "hatchback_002", // Updated to new Hatchback category
      description: "The Ford Focus is a practical hatchback with responsive handling and a comfortable ride, ideal for city driving.",
      images: [
          "https://example.com/images/ford_focus_1.jpg",
          "https://example.com/images/ford_focus_2.jpg"
      ],
      stock: 20,
      isOnSale: false,
      isHotDeal: true,
      engine: "2.0L 4-Cylinder",
      fuelType: "Gasoline",
      transmission: "Automatic",
      features: [
          "Sync 3 Infotainment System",
          "Rear Parking Sensors",
          "Dual-Zone Climate Control",
          "Keyless Entry"
      ],
      dimensions: {
          length: "178.7 inches",
          width: "71.8 inches",
          height: "57.8 inches"
      },
      weight: "2,935 lbs",
      colorOptions: ["Red", "White", "Blue"],
      warranty: "3 years / 36,000 miles",
      safetyRating: "4-Star Overall"
  },
  {
      id: "prod_006",
      name: "Mercedes-Benz E-Class",
      price: 55000,
      rating: 4.9,
      category: "sedan_001", // Updated to new Sedan category
      description: "The Mercedes-Benz E-Class is a luxurious sedan, offering a refined ride, cutting-edge technology, and elegant design.",
      images: [
          "https://example.com/images/mercedes_e_class_1.jpg",
          "https://example.com/images/mercedes_e_class_2.jpg"
      ],
      stock: 12,
      isOnSale: true,
      isHotDeal: true,
      engine: "2.0L Inline-4 Turbo",
      fuelType: "Gasoline",
      transmission: "Automatic",
      features: [
          "Burmester Surround Sound",
          "Ambient Lighting",
          "MBUX Multimedia System",
          "Heated and Ventilated Seats"
      ],
      dimensions: {
          length: "193.8 inches",
          width: "73.7 inches",
          height: "57.8 inches"
      },
      weight: "3,781 lbs",
      colorOptions: ["Black", "Silver", "White"],
      warranty: "4 years / 50,000 miles",
      safetyRating: "5-Star Overall"
  },
  {
      id: "prod_007",
      name: "Chevrolet Camaro",
      price: 40000,
      rating: 4.6,
      category: "coupe_003", // Updated to new Coupe category
      description: "The Chevrolet Camaro is a powerful sports car with aggressive styling, offering a thrilling driving experience.",
      images: [
          "https://example.com/images/chevrolet_camaro_1.jpg",
          "https://example.com/images/chevrolet_camaro_2.jpg"
      ],
      stock: 5,
      isOnSale: false,
      isHotDeal: true,
      engine: "6.2L V8",
      fuelType: "Gasoline",
      transmission: "Manual",
      features: [
          "Performance Exhaust System",
          "Brembo Brakes",
          "Recaro Performance Seats",
          "Head-Up Display"
      ],
      dimensions: {
          length: "188.3 inches",
          width: "74.7 inches",
          height: "53.1 inches"
      },
      weight: "3,907 lbs",
      colorOptions: ["Red", "Yellow", "Black"],
      warranty: "3 years / 36,000 miles",
      safetyRating: "4-Star Overall"
  }
];
