import {
    SquareChartGantt, BookA, LifeBuoy, Heart, User,
    ClipboardList, Truck, PackageCheck, MessagesSquare, Wallet,
    PackageOpen, RotateCcw, Newspaper, PackageSearch, UserCog,
    UserShield, Headset, BarChart, CreditCard, Settings
} from "lucide-react";

export const userNav = [
    {
        label: "Overview",
        path: "/dashboard/overview",
        icon: <SquareChartGantt />,
    },
    {
        label: "My Orders",
        path: "/dashboard/my-orders",
        icon: <BookA />,
    },
    {
        label: "Support Tickets",
        path: "/dashboard/support-tickets",
        icon: <LifeBuoy />,
    },
    {
        label: "Wishlist",
        path: "/dashboard/wishlist",
        icon: <Heart />,
    },
    {
        label: "Profile Settings",
        path: "/dashboard/profile-settings",
        icon: <User />,
    },
];

export const agentNav = [
    {
        label: "Overview",
        path: "/dashboard/overview",
        icon: <SquareChartGantt />,
    },
    {
        label: "Assigned Orders",
        path: "/dashboard/assigned-orders",
        icon: <ClipboardList />,
    },
    {
        label: "Processing Orders",
        path: "/dashboard/agent-process-orders",
        icon: <Truck />,
    },
    {
        label: "Completed Orders",
        path: "/dashboard/agent-complete-orders",
        icon: <PackageCheck />,
    },
    {
        label: "Customer Inquiries",
        path: "/dashboard/customer-inquiries",
        icon: <MessagesSquare />,
    },
    {
        label: "Earnings & Payouts",
        path: "/dashboard/earnings",
        icon: <Wallet />,
    },
];

export const adminNav = [
    {
        label: "Overview",
        path: "/dashboard/overview",
        icon: <SquareChartGantt />,
    },

    {
        label: "Pending Orders",
        path: "/dashboard/new-orders",
        icon: <PackageOpen />,
    },
    {
        label: "Processing Orders",
        path: "/dashboard/process-orders",
        icon: <Truck />,
    },
    {
        label: "Completed Orders",
        path: "/dashboard/complete-orders",
        icon: <PackageCheck />,
    },
    {
        label: "Refund Requests",
        path: "/dashboard/refund-requests",
        icon: <RotateCcw />,
    },
    {
        label: "Categories",
        path: "/dashboard/categories-control",
        icon: <Newspaper />,
    },
    {
        label: "Products",
        path: "/dashboard/products-control",
        icon: <PackageSearch />,
    },

    {
        label: "All Users",
        path: "/dashboard/users-control",
        icon: <UserCog />,
    },
    {
        label: "Agents",
        path: "/dashboard/agents-control",
        icon: <UserShield />,
    },
    {
        label: "Customer Support",
        path: "/dashboard/customer-support",
        icon: <Headset />,
    },
    {
        label: "Sales Reports",
        path: "/dashboard/reports",
        icon: <BarChart />,
    },
    {
        label: "Transactions",
        path: "/dashboard/transactions",
        icon: <CreditCard />,
    },
    {
        label: "Payouts",
        path: "/dashboard/payouts",
        icon: <Wallet />,
    },

    {
        label: "Settings",
        path: "/dashboard/settings",
        icon: <Settings />,
    },
];
