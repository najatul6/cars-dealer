import { Link } from "react-router-dom";
import errorImage from "../../assets/error/error.gif";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <div className="relative z-0">
          <div className="absolute z-1 top-20 left-[45%] text-center space-y-3">
            <h1 className="text-3xl text-white font-bold ">Opps !</h1>
            <h2 className="text-xl text-white font-bold">Data not founded</h2>
          </div>
          <img
            src={errorImage}
            alt="Error Animation"
            className="w-full h-screen"
          />
          <div className="absolute bottom-20 z-1 left-[45%] text-center">
            <div className="flex flex-col items-center justify-center  space-y-2 text-white">
              <Link
                to="/"
                className="capitalize btn text-xl font-bold btn-success text-white"
              >
               &laquo; Back to home 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
