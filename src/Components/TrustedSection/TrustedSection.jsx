import carImage from "../../assets/image/1.jpg"; // Your image path

const TrustedSection = () => {
  return (
    <div className="w-[1440px] relative overflow-hidden">
      <div className="shadow-md  flex w-full max-w-7xl relative">
        {/* Left Section with Diagonal Cut */}
        <div
          className="bg-regal-blue text-white p-8 w-2/3 relative z-10 flex flex-col justify-center"
          style={{ clipPath: "polygon(0 0, 100% 0%, 80% 100%, 0% 100%)" }}
        >
          <h2 className="text-4xl font-bold mb-6">Trusted Experience</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Premium cars, simple pricing.</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Car advice from a professional team.</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Easy financing options.</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Trusted experience since 2007.</span>
            </li>
          </ul>
         <div>
         <button className="mt-8 bg-gray-600 text-white font-semibold py-2 px-6 rounded hover:bg-gray-400 transition duration-300">
            Contact Us
          </button>
         </div>
        </div>

        {/* Right Section with Car Image */}
        <div className="absolute -right-[15%] top-0 bottom-7 left-[15%] flex justify-center items-center">
          <img
            className="bg-cover bg-center"
            src={carImage}
            alt="Car image"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
