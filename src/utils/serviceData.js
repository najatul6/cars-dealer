import image1 from "../assets/image/auto-repair.jfif"
import image2 from "../assets/image/car-insurance.jpg"
import image3 from "../assets/image/sell-buy-car.jpg"

export const servicesData = [
    {
      id: "1a2b3c4d",
      title: "Machine Auto Repair",
      description: "Comprehensive auto repair services including engine diagnostics, brake repair, and routine maintenance to keep your vehicle running smoothly.",
      image: `${image1}`,
      priceList: [
        { id: "a1b2c3d4", packageName: "Engine Diagnostics", price: "$80" },
        { id: "e5f6a7b8", packageName: "Brake Repair", price: "$120" },
        { id: "c9d0e1f2", packageName: "Oil Change", price: "$50" },
        { id: "g3h4i5j6", packageName: "Tire Rotation", price: "$30" }
      ]
    },
    {
      id: "5e6f7g8h",
      title: "Car Insurance",
      description: "Affordable car insurance plans tailored to your needs, covering everything from basic liability to comprehensive coverage.",
      image: `${image2}`,
      priceList: [
        { id: "k7l8m9n0", packageName: "Basic Liability", price: "$50/month" },
        { id: "o1p2q3r4", packageName: "Collision Coverage", price: "$75/month" },
        { id: "s5t6u7v8", packageName: "Comprehensive Coverage", price: "$100/month" },
        { id: "w9x0y1z2", packageName: "Uninsured Motorist", price: "$60/month" }
      ]
    },
    {
      id: "9i0j1k2l",
      title: "Sell and Buy Car",
      description: "A hassle-free platform to buy or sell your car, offering competitive pricing and a wide range of vehicles.",
      image: `${image3}`,
      priceList: [
        { id: "a3b4c5d6", packageName: "Car Valuation", price: "Free" },
        { id: "e7f8g9h0", packageName: "Listing Fee", price: "$20" },
        { id: "i1j2k3l4", packageName: "Dealer Fee", price: "5% of sale price" },
        { id: "m5n6o7p8", packageName: "Premium Listing", price: "$50" }
      ]
    }
  ];
  
  