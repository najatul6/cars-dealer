export const shopProducts = [
  {
    id: "prod_001",
    name: "Toyota Camry",
    price: 24000,
    rating: 4.5,
    category: "sedan",
    description:
      "The Toyota Camry is a comfortable, fuel-efficient sedan perfect for family use, equipped with modern tech and safety features.",
    images: [
      "https://example.com/images/toyota_camry_1.jpg",
      "https://example.com/images/toyota_camry_2.jpg",
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
      "Lane Departure Warning",
    ],
    dimensions: {
      length: "192.1 inches",
      width: "72.4 inches",
      height: "56.9 inches",
    },
    weight: "3,340 lbs",
    colorOptions: ["White", "Black", "Silver"],
    warranty: "5 years / 60,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_002",
    name: "Honda Civic",
    price: 22000,
    rating: 4.4,
    category: "hatchback",
    description:
      "The Honda Civic is a compact car with a sporty design, known for its reliability and fuel efficiency.",
    images: [
      "https://example.com/images/honda_civic_1.jpg",
      "https://example.com/images/honda_civic_2.jpg",
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
      "Lane Keeping Assist",
    ],
    dimensions: {
      length: "177.9 inches",
      width: "70.9 inches",
      height: "55.7 inches",
    },
    weight: "2,771 lbs",
    colorOptions: ["Blue", "Red", "Gray"],
    warranty: "3 years / 36,000 miles",
    safetyRating: "4-Star Overall",
  },
  {
    id: "prod_003",
    name: "BMW M4",
    price: 72000,
    rating: 4.8,
    category: "coupe",
    description:
      "The BMW M4 is a high-performance sports coupe, offering exhilarating driving dynamics and luxurious comfort.",
    images: [
      "https://example.com/images/bmw_m4_1.jpg",
      "https://example.com/images/bmw_m4_2.jpg",
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
      "Carbon Fiber Interior Trim",
    ],
    dimensions: {
      length: "189.1 inches",
      width: "74.3 inches",
      height: "54.8 inches",
    },
    weight: "3,880 lbs",
    colorOptions: ["Black", "Yellow", "White"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_004",
    name: "Volvo V60",
    price: 48000,
    rating: 4.7,
    category: "stationwagon",
    description:
      "The Volvo V60 is a versatile station wagon, combining Scandinavian design with advanced safety features and a spacious interior.",
    images: [
      "https://example.com/images/volvo_v60_1.jpg",
      "https://example.com/images/volvo_v60_2.jpg",
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
      "Blind Spot Monitoring",
    ],
    dimensions: {
      length: "187.4 inches",
      width: "72.8 inches",
      height: "56.2 inches",
    },
    weight: "4,092 lbs",
    colorOptions: ["Gray", "Silver", "Blue"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_005",
    name: "Ford Focus",
    price: 19000,
    rating: 4.2,
    category: "hatchback",
    description:
      "The Ford Focus is a practical hatchback with responsive handling and a comfortable ride, ideal for city driving.",
    images: [
      "https://example.com/images/ford_focus_1.jpg",
      "https://example.com/images/ford_focus_2.jpg",
    ],
    stock: 20,
    isOnSale: false,
    isHotDeal: true,
    engine: "2.0L 4-Cylinder",
    // fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Sync 3 Infotainment System",
      "Rear Parking Sensors",
      "Dual-Zone Climate Control",
      "Keyless Entry",
    ],
    dimensions: {
      length: "178.7 inches",
      width: "71.8 inches",
      height: "57.8 inches",
    },
    weight: "2,935 lbs",
    colorOptions: ["Red", "White", "Blue"],
    warranty: "3 years / 36,000 miles",
    safetyRating: "4-Star Overall",
  },
  {
    id: "prod_006",
    name: "Mercedes-Benz E-Class",
    price: 55000,
    rating: 4.9,
    category: "sedan",
    description:
      "The Mercedes-Benz E-Class is a luxurious sedan, offering a refined ride, cutting-edge technology, and elegant design.",
    images: [
      "https://example.com/images/mercedes_e_class_1.jpg",
      "https://example.com/images/mercedes_e_class_2.jpg",
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
      "Heated and Ventilated Seats",
    ],
    dimensions: {
      length: "193.8 inches",
      width: "73.7 inches",
      height: "57.8 inches",
    },
    weight: "3,781 lbs",
    colorOptions: ["Black", "Silver", "White"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_007",
    name: "Chevrolet Camaro",
    price: 40000,
    rating: 4.6,
    category: "sedan",
    description:
      "The Chevrolet Camaro is a powerful sports car with aggressive styling, offering a thrilling driving experience.",
    images: [
      "https://example.com/images/chevrolet_camaro_1.jpg",
      "https://example.com/images/chevrolet_camaro_2.jpg",
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
      "Head-Up Display",
    ],
    dimensions: {
      length: "188.3 inches",
      width: "74.7 inches",
      height: "53.1 inches",
    },
    weight: "3,907 lbs",
    colorOptions: ["Red", "Yellow", "Black"],
    warranty: "3 years / 36,000 miles",
    safetyRating: "4-Star Overall",
  },
  {
    id: "prod_018",
    name: "Kia Seltos",
    price: 23000,
    rating: 4.4,
    category: "stationwagon",
    description:
      "The Kia Seltos is a compact SUV that offers a perfect balance of style, versatility, and advanced features.",
    images: [
      "https://example.com/images/kia_seltos_1.jpg",
      "https://example.com/images/kia_seltos_2.jpg",
    ],
    stock: 18,
    isOnSale: true,
    engine: "2.0L 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "All-Wheel Drive",
      "10.25-inch Touchscreen",
      "Wireless Phone Charger",
      "Rear Cross-Traffic Alert",
    ],
    dimensions: {
      length: "172.0 inches",
      width: "70.9 inches",
      height: "64.4 inches",
    },
    weight: "3,185 lbs",
    colorOptions: ["Blue", "White", "Gray"],
    warranty: "5 years / 60,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_018",
    name: "Kia Seltos",
    price: 23000,
    rating: 4.4,
    category: "stationwagon",
    description:
      "The Kia Seltos is a compact SUV that offers a perfect balance of style, versatility, and advanced features.",
    images: [
      "https://example.com/images/kia_seltos_1.jpg",
      "https://example.com/images/kia_seltos_2.jpg",
    ],
    stock: 18,
    isOnSale: true,
    engine: "2.0L 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "All-Wheel Drive",
      "10.25-inch Touchscreen",
      "Wireless Phone Charger",
      "Rear Cross-Traffic Alert",
    ],
    dimensions: {
      length: "172.0 inches",
      width: "70.9 inches",
      height: "64.4 inches",
    },
    weight: "3,185 lbs",
    colorOptions: ["Blue", "White", "Gray"],
    warranty: "5 years / 60,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_019",
    name: "Volkswagen Golf Alltrack",
    price: 29000,
    rating: 4.5,
    category: "stationwagon",
    description:
      "The Volkswagen Golf Alltrack is a versatile station wagon with all-wheel drive, combining practicality with a sporty design.",
    images: [
      "https://example.com/images/vw_golf_alltrack_1.jpg",
      "https://example.com/images/vw_golf_alltrack_2.jpg",
    ],
    stock: 15,
    isOnSale: true,
    engine: "1.8L Turbocharged 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "4MOTION All-Wheel Drive",
      "Panoramic Sunroof",
      "Keyless Access with Push-Button Start",
      "Fender Premium Audio",
    ],
    dimensions: {
      length: "180.6 inches",
      width: "70.8 inches",
      height: "59.7 inches",
    },
    weight: "3,450 lbs",
    colorOptions: ["Red", "White", "Gray"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_020",
    name: "Subaru Levorg",
    price: 31000,
    rating: 4.7,
    category: "stationwagon",
    description:
      "The Subaru Levorg is a sporty station wagon with standard all-wheel drive, offering a blend of performance and practicality.",
    images: [
      "https://example.com/images/subaru_levorg_1.jpg",
      "https://example.com/images/subaru_levorg_2.jpg",
    ],
    stock: 12,
    isOnSale: false,
    engine: "2.0L Turbocharged 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Symmetrical All-Wheel Drive",
      "EyeSight Driver Assist Technology",
      "Heated Front Seats",
      "8-Inch Multimedia System",
    ],
    dimensions: {
      length: "183.0 inches",
      width: "70.7 inches",
      height: "58.3 inches",
    },
    weight: "3,500 lbs",
    colorOptions: ["Blue", "Silver", "Black"],
    warranty: "5 years / 60,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_021",
    name: "Volvo V90 Cross Country",
    price: 55000,
    rating: 4.8,
    category: "stationwagon",
    description:
      "The Volvo V90 Cross Country is a luxurious station wagon with a rugged design, offering comfort and advanced safety features.",
    images: [
      "https://example.com/images/volvo_v90_1.jpg",
      "https://example.com/images/volvo_v90_2.jpg",
    ],
    stock: 8,
    isOnSale: false,
    engine: "2.0L Turbocharged and Supercharged 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "All-Wheel Drive",
      "Pilot Assist",
      "Bowers & Wilkins Sound System",
      "Air Suspension",
    ],
    dimensions: {
      length: "194.4 inches",
      width: "75.9 inches",
      height: "60.7 inches",
    },
    weight: "4,200 lbs",
    colorOptions: ["Gray", "White", "Black"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_022",
    name: "Audi A6 Allroad",
    price: 65000,
    rating: 4.9,
    category: "stationwagon",
    description:
      "The Audi A6 Allroad is a premium station wagon with off-road capabilities, featuring a refined interior and advanced technology.",
    images: [
      "https://example.com/images/audi_a6_allroad_1.jpg",
      "https://example.com/images/audi_a6_allroad_2.jpg",
    ],
    stock: 10,
    isOnSale: false,
    engine: "3.0L V6 Turbocharged",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Quattro All-Wheel Drive",
      "Adaptive Air Suspension",
      "Bang & Olufsen 3D Sound System",
      "Matrix LED Headlights",
    ],
    dimensions: {
      length: "194.9 inches",
      width: "74.9 inches",
      height: "58.9 inches",
    },
    weight: "4,486 lbs",
    colorOptions: ["Green", "Gray", "Black"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_019",
    name: "Volkswagen Passat",
    price: 28000,
    rating: 4.5,
    category: "sedan",
    description:
      "The Volkswagen Passat is a spacious midsize sedan with a smooth ride, ample legroom, and advanced safety features.",
    images: [
      "https://example.com/images/vw_passat_1.jpg",
      "https://example.com/images/vw_passat_2.jpg",
    ],
    stock: 20,
    isOnSale: false,
    engine: "2.0L Turbocharged 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Adaptive Cruise Control",
      "Apple CarPlay & Android Auto",
      "Heated Seats",
      "Blind Spot Monitor",
    ],
    dimensions: {
      length: "193.6 inches",
      width: "72.2 inches",
      height: "58.0 inches",
    },
    weight: "3,451 lbs",
    colorOptions: ["Silver", "Black", "Blue"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_020",
    name: "Tesla Model S",
    price: 85000,
    rating: 4.9,
    category: "sedan",
    description:
      "The Tesla Model S is a luxury electric sedan, known for its incredible performance, long range, and cutting-edge technology.",
    images: [
      "https://example.com/images/tesla_model_s_1.jpg",
      "https://example.com/images/tesla_model_s_2.jpg",
    ],
    stock: 7,
    isOnSale: true,
    engine: "Dual Electric Motors",
    fuelType: "Electric",
    transmission: "Single-Speed",
    features: [
      "Autopilot",
      "Full Self-Driving Capability",
      "17-inch Touchscreen",
      "Premium Audio System",
    ],
    dimensions: {
      length: "196.0 inches",
      width: "77.3 inches",
      height: "56.9 inches",
    },
    weight: "4,941 lbs",
    colorOptions: ["Red", "White", "Black"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_021",
    name: "Jaguar F-Pace",
    price: 62000,
    rating: 4.6,
    category: "sedan",
    description:
      "The Jaguar F-Pace is a luxury SUV with a dynamic drive, sophisticated design, and advanced technology features.",
    images: [
      "https://example.com/images/jaguar_f_pace_1.jpg",
      "https://example.com/images/jaguar_f_pace_2.jpg",
    ],
    stock: 10,
    isOnSale: false,
    engine: "3.0L Supercharged V6",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Meridian Sound System",
      "Panoramic Roof",
      "Adaptive Dynamics",
      "All-Wheel Drive",
    ],
    dimensions: {
      length: "186.3 inches",
      width: "81.5 inches",
      height: "65.6 inches",
    },
    weight: "4,015 lbs",
    colorOptions: ["Blue", "Black", "White"],
    warranty: "5 years / 60,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_022",
    name: "Lexus RX 350",
    price: 47000,
    rating: 4.7,
    category: "sedan",
    description:
      "The Lexus RX 350 is a luxury crossover SUV, offering a comfortable ride, premium materials, and advanced safety features.",
    images: [
      "https://example.com/images/lexus_rx350_1.jpg",
      "https://example.com/images/lexus_rx350_2.jpg",
    ],
    stock: 14,
    isOnSale: false,
    engine: "3.5L V6",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Lexus Safety System+",
      "Mark Levinson Audio",
      "Heated and Ventilated Seats",
      "Power Rear Door",
    ],
    dimensions: {
      length: "192.5 inches",
      width: "74.6 inches",
      height: "67.7 inches",
    },
    weight: "4,222 lbs",
    colorOptions: ["Silver", "Black", "Red"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_023",
    name: "Hyundai Tucson",
    price: 29000,
    rating: 4.5,
    category: "sedan",
    description:
      "The Hyundai Tucson is a compact SUV with a modern design, efficient engine, and a suite of advanced safety features.",
    images: [
      "https://example.com/images/hyundai_tucson_1.jpg",
      "https://example.com/images/hyundai_tucson_2.jpg",
    ],
    stock: 25,
    isOnSale: true,
    engine: "2.5L 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Smart Cruise Control",
      "Blind-Spot Collision Warning",
      "8-inch Touchscreen",
      "Wireless Charging",
    ],
    dimensions: {
      length: "182.3 inches",
      width: "73.4 inches",
      height: "65.6 inches",
    },
    weight: "3,494 lbs",
    colorOptions: ["White", "Gray", "Blue"],
    warranty: "5 years / 60,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_024",
    name: "Chevrolet Tahoe",
    price: 65000,
    rating: 4.7,
    category: "sedan",
    description:
      "The Chevrolet Tahoe is a full-size SUV that offers a spacious interior, powerful engine options, and advanced towing capabilities.",
    images: [
      "https://example.com/images/chevrolet_tahoe_1.jpg",
      "https://example.com/images/chevrolet_tahoe_2.jpg",
    ],
    stock: 8,
    isOnSale: false,
    engine: "5.3L V8",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Max Trailering Package",
      "Rear Seat Entertainment",
      "Bose Audio System",
      "Safety Alert Seat",
    ],
    dimensions: {
      length: "210.7 inches",
      width: "81.0 inches",
      height: "75.8 inches",
    },
    weight: "5,602 lbs",
    colorOptions: ["Black", "Silver", "White"],
    warranty: "3 years / 36,000 miles",
    safetyRating: "4-Star Overall",
  },
  {
    id: "prod_025",
    name: "Acura MDX",
    price: 52000,
    rating: 4.6,
    category: "sedan",
    description:
      "The Acura MDX is a premium 3-row SUV, offering a powerful V6 engine, advanced safety features, and a luxurious cabin.",
    images: [
      "https://example.com/images/acura_mdx_1.jpg",
      "https://example.com/images/acura_mdx_2.jpg",
    ],
    stock: 12,
    isOnSale: true,
    engine: "3.5L V6",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Super Handling All-Wheel Drive",
      "AcuraWatch Safety Suite",
      "ELS Studio 3D Audio",
      "Panoramic Moonroof",
    ],
    dimensions: {
      length: "198.4 inches",
      width: "78.7 inches",
      height: "67.1 inches",
    },
    weight: "4,450 lbs",
    colorOptions: ["Black", "Blue", "White"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_026",
    name: "Mazda CX-5",
    price: 31000,
    rating: 4.6,
    category: "hatchback",
    description:
      "The Mazda CX-5 is a stylish compact SUV, known for its sharp handling, premium interior, and advanced safety features.",
    images: [
      "https://example.com/images/mazda_cx5_1.jpg",
      "https://example.com/images/mazda_cx5_2.jpg",
    ],
    stock: 20,
    isOnSale: false,
    engine: "2.5L Turbocharged 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "G-Vectoring Control Plus",
      "360-Degree View Monitor",
      "Active Driving Display",
      "Heated Steering Wheel",
    ],
    dimensions: {
      length: "179.1 inches",
      width: "72.5 inches",
      height: "65.3 inches",
    },
    weight: "3,825 lbs",
    colorOptions: ["Red", "White", "Gray"],
    warranty: "5 years / 60,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_027",
    name: "Audi A4",
    price: 41000,
    rating: 4.8,
    category: "sedan",
    description:
      "The Audi A4 is a luxury sedan that combines sporty performance with a premium interior and advanced technology.",
    images: [
      "https://example.com/images/audi_a4_1.jpg",
      "https://example.com/images/audi_a4_2.jpg",
    ],
    stock: 14,
    isOnSale: true,
    engine: "2.0L Turbocharged 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Quattro All-Wheel Drive",
      "Virtual Cockpit",
      "Bang & Olufsen Sound System",
      "Heated Front Seats",
    ],
    dimensions: {
      length: "185.1 inches",
      width: "72.5 inches",
      height: "56.2 inches",
    },
    weight: "3,627 lbs",
    colorOptions: ["Black", "White", "Gray"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_028",
    name: "Subaru Outback",
    price: 34000,
    rating: 4.7,
    category: "hatchback",
    description:
      "The Subaru Outback is a rugged crossover SUV with standard all-wheel drive, advanced safety features, and a spacious interior.",
    images: [
      "https://example.com/images/subaru_outback_1.jpg",
      "https://example.com/images/subaru_outback_2.jpg",
    ],
    stock: 18,
    isOnSale: true,
    engine: "2.5L 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "EyeSight Driver Assist Technology",
      "X-Mode with Hill Descent Control",
      "8.7 Inches of Ground Clearance",
      "Roof Rails with Integrated Cross Bars",
    ],
    dimensions: {
      length: "191.3 inches",
      width: "73.0 inches",
      height: "66.4 inches",
    },
    weight: "3,634 lbs",
    colorOptions: ["Green", "White", "Blue"],
    warranty: "5 years / 60,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_029",
    name: "Ford Mustang",
    price: 55000,
    rating: 4.8,
    category: "coupe",
    description:
      "The Ford Mustang is an iconic American muscle car with aggressive styling, powerful engine options, and thrilling performance.",
    images: [
      "https://example.com/images/ford_mustang_1.jpg",
      "https://example.com/images/ford_mustang_2.jpg",
    ],
    stock: 8,
    isOnSale: false,
    engine: "5.0L V8",
    fuelType: "Gasoline",
    transmission: "Manual",
    features: [
      "Performance Package",
      "Active Valve Performance Exhaust",
      "12-Inch Digital Instrument Cluster",
      "Track Apps",
    ],
    dimensions: {
      length: "188.3 inches",
      width: "75.4 inches",
      height: "54.3 inches",
    },
    weight: "3,732 lbs",
    colorOptions: ["Red", "Yellow", "Black"],
    warranty: "3 years / 36,000 miles",
    safetyRating: "4-Star Overall",
  },
  {
    id: "prod_030",
    name: "Toyota RAV4",
    price: 32000,
    rating: 4.5,
    category: "coupe",
    description:
      "The Toyota RAV4 is a versatile compact SUV with a spacious interior, advanced safety features, and excellent fuel economy.",
    images: [
      "https://example.com/images/toyota_rav4_1.jpg",
      "https://example.com/images/toyota_rav4_2.jpg",
    ],
    stock: 22,
    isOnSale: true,
    engine: "2.5L 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Toyota Safety Sense 2.0",
      "All-Wheel Drive",
      "Entune 3.0 Audio",
      "Power Liftgate",
    ],
    dimensions: {
      length: "180.9 inches",
      width: "73.0 inches",
      height: "67.0 inches",
    },
    weight: "3,370 lbs",
    colorOptions: ["Silver", "Blue", "White"],
    warranty: "3 years / 36,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_031",
    name: "Nissan Altima",
    price: 27000,
    rating: 4.4,
    category: "sedan",
    description:
      "The Nissan Altima is a midsize sedan with a comfortable interior, smooth ride, and advanced safety features.",
    images: [
      "https://example.com/images/nissan_altima_1.jpg",
      "https://example.com/images/nissan_altima_2.jpg",
    ],
    stock: 18,
    isOnSale: false,
    engine: "2.5L 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "ProPILOT Assist",
      "Intelligent All-Wheel Drive",
      "NissanConnect",
      "Remote Start with Intelligent Climate Control",
    ],
    dimensions: {
      length: "192.9 inches",
      width: "72.9 inches",
      height: "57.4 inches",
    },
    weight: "3,416 lbs",
    colorOptions: ["Black", "White", "Red"],
    warranty: "3 years / 36,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_032",
    name: "Honda Accord",
    price: 31000,
    rating: 4.7,
    category: "sedan",
    description:
      "The Honda Accord is a midsize sedan that offers a comfortable ride, spacious interior, and a host of advanced safety features.",
    images: [
      "https://example.com/images/honda_accord_1.jpg",
      "https://example.com/images/honda_accord_2.jpg",
    ],
    stock: 20,
    isOnSale: true,
    engine: "1.5L Turbocharged 4-Cylinder",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "Honda Sensing",
      "Apple CarPlay & Android Auto",
      "Multi-Angle Rearview Camera",
      "Heated Front Seats",
    ],
    dimensions: {
      length: "192.2 inches",
      width: "73.3 inches",
      height: "57.1 inches",
    },
    weight: "3,131 lbs",
    colorOptions: ["Silver", "Black", "White"],
    warranty: "5 years / 60,000 miles",
    safetyRating: "5-Star Overall",
  },
  {
    id: "prod_033",
    name: "BMW X5",
    price: 61000,
    rating: 4.8,
    category: "coupe",
    description:
      "The BMW X5 is a luxury midsize SUV that combines powerful engine options, advanced technology, and a premium interior.",
    images: [
      "https://example.com/images/bmw_x5_1.jpg",
      "https://example.com/images/bmw_x5_2.jpg",
    ],
    stock: 12,
    isOnSale: false,
    engine: "3.0L Turbocharged Inline-6",
    fuelType: "Gasoline",
    transmission: "Automatic",
    features: [
      "xDrive All-Wheel Drive",
      "Panoramic Moonroof",
      "Harman Kardon Surround Sound",
      "BMW Live Cockpit Professional",
    ],
    dimensions: {
      length: "194.3 inches",
      width: "78.9 inches",
      height: "68.7 inches",
    },
    weight: "4,813 lbs",
    colorOptions: ["Black", "White", "Blue"],
    warranty: "4 years / 50,000 miles",
    safetyRating: "5-Star Overall",
  },
];
