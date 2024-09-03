export const priceplan=[
    {
        id: 1,
        name: "Basic",
        price: 500,
        currency: "USD",
        billingCycle: "monthly",
        features: [
            "Basic car listings",
            "Access to standard car database",
            "Limited customer support"
        ],
        limits: {
            listings: 5,  // Number of car listings allowed
            users: 1,
            inquiries: 50  // Number of customer inquiries allowed
        },
        discounts: {
            yearly: "10%"
        },
        additionalInfo: "Suitable for individual car sellers."
    },
    {
        id: 2,
        name: "Small",
        price: 700,
        currency: "USD",
        billingCycle: "monthly",
        features: [
            "Up to 20 car listings",
            "Access to advanced car database",
            "Priority customer support"
        ],
        limits: {
            listings: 20,
            users: 3,
            inquiries: 200
        },
        discounts: {
            yearly: "15%"
        },
        additionalInfo: "Ideal for small dealerships."
    },
    {
        id: 3,
        name: "Medium",
        price: 1500,
        currency: "USD",
        billingCycle: "monthly",
        features: [
            "Up to 50 car listings",
            "Access to premium car database",
            "Priority customer support",
            "Advanced analytics and reporting"
        ],
        limits: {
            listings: 50,
            users: 10,
            inquiries: 500
        },
        discounts: {
            yearly: "20%"
        },
        additionalInfo: "Perfect for mid-sized dealerships."
    },
    {
        id: 4,
        name: "Premium",
        price: 2500,
        currency: "USD",
        billingCycle: "monthly",
        features: [
            "Unlimited car listings",
            "Full access to all car databases",
            "Dedicated customer support",
            "Advanced analytics and reporting",
            "Customizable marketing tools"
        ],
        limits: {
            listings: "Unlimited",
            users: "Unlimited",
            inquiries: "Unlimited"
        },
        discounts: {
            yearly: "25%"
        },
        additionalInfo: "Best for large dealerships with high-volume sales."
    }
]