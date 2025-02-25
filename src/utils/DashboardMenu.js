import {
    SquareChartGantt,
    BookA,
    UserCog,
    Truck,
    PackageOpen,
    PackageCheck,
    Newspaper,
    PackageSearch,
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
      label: "Categories Management",
      path: "/dashboard/categories-control",
      icon: <Newspaper />,
    },
    {
      label: "Products Management",
      path: "/dashboard/products-control",
      icon: <PackageSearch />,
    },
    {
      label: "Users Management",
      path: "/dashboard/users-control",
      icon: <UserCog />,
    },
  ];