import { Helmet } from "react-helmet-async";
import useRole from "../../Hooks/useRole";
import AdminOverview from "../../Components/Dashboard/Admin/Overview";
import UserOverview from "../../Components/Dashboard/User/Overview";
import AgentOverview from "../../Components/Dashboard/Agent/Overview";

const MainOverview = () => {
  const [userRole] = useRole();
  return (
    <div className="p-6 w-full">
      {/* Helmet for title and meta tags Start here */}
      <Helmet>
        <title>Dashboard Overview | Nincars</title>
        <meta
          name="description"
          content="Get a complete overview of your Nincars dashboard, including sales, orders, and analytics."
        />
        <meta
          name="keywords"
          content="dashboard, Nincars, admin panel, sales overview, analytics, business insights"
        />
        <meta name="author" content="Nincars" />

        {/* Open Graph for social media previews */}
        <meta property="og:title" content="Dashboard Overview | Nincars" />
        <meta
          property="og:description"
          content="Monitor sales, orders, and key business metrics from your Nincars dashboard."
        />
        <meta
          property="og:image"
          content="https://nin-supply.vercel.app/dashboard-og.jpg"
        />
        <meta
          property="og:url"
          content="https://nin-supply.vercel.app/dashboard/overview"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card for better previews on Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dashboard Overview | Nincars" />
        <meta
          name="twitter:description"
          content="Monitor sales, orders, and key business metrics from your Nincars dashboard."
        />
        <meta
          name="twitter:image"
          content="https://nin-supply.vercel.app/twitter-dashboard.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://nin-supply.vercel.app/dashboard" />

        {/* Favicon */}
        <link
          rel="icon"
          href="https://nin-supply.vercel.app/favicon.ico"
          type="image/x-icon"
        />
      </Helmet>

      {/* Helmet for title and meta tags End here */}

      {userRole === "admin" ? (
        <AdminOverview />
      ) : userRole === "agent" ? (
        <AgentOverview />
      ) : (
        <UserOverview />
      )}
    </div>
  );
};

export default MainOverview;
