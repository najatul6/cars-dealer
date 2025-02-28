import { Link } from "react-router-dom";
import logo from "../../assets/logo/ninCars.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-white py-3 px-2">
      {/* Brand Logo  */}
      <img src={logo} alt="brand logo" className="w-24 md:w-[15%] lg:w-[10%]" />

      {/* Others Info  */}
      <div className="flex justify-between gap-5">
        <div className="flex justify-between items-center gap-5">
          {/* Activity info  */}
          <div className="flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 lg:w-9 lg:h-9 text-light-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div>
              <h2 className="lg:font-bold text-xs lg:text-lg">
                Sat-Thu: 09:00 AM - 10:00 PM
              </h2>
              <h3>live chat available</h3>
            </div>
          </div>
          <div className="border-2 h-full rounded-full"></div>
          {/* Contact Details */}
          <div className="flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 md:w-6 md:h-6 lg:w-9 lg:h-9 text-light-blue"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <Link to="tel:+8801773827414">
              <h2 className="lg:font-bold text-xs lg:text-lg">
                +880 1738-27414
              </h2>
              <h3>toll free</h3>
            </Link>
          </div>
        </div>

        {/* Button */}
        <Link to="/dashboard/overview">
          <div className="btn btn-outline text-light-blue hover:bg-Dark-blue hover:text-white uppercase font-bold">
            see your car
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
