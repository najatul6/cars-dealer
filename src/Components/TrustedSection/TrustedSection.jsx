import carImage from "../../assets/image/1.jpg";

const TrustedSection = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="shadow-md flex rounded-lg overflow-hidden">
        {/* <!-- Left Side --> */}
        <div className="bg-red-600 skew-x-12 text-white p-8 w-2/3">
          <div className="transform -skew-x-12">
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
            <button className="mt-8 bg-white text-red-600 font-semibold py-2 px-6 rounded hover:bg-gray-200 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
        {/* <!-- Right Side --> */}
        <div className="w-1/3 relative">
          <img
            className="h-full w-full object-cover"
            src={carImage}
            alt="Car image"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
