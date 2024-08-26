import { IoSearch } from "react-icons/io5";
import { carsIcons } from "../../utils/menu";

const CarSearchSection = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl  lg:text-3xl text-white font-bold text-center pb-5">
        Lets Find your car.
      </h1>
      <div className="flex justify-center items-center gap-6 py-5">
        {carsIcons?.map((item) => {
          return (
            <div
              key={item?.id}
              className="flex flex-col justify-center items-center gap-3"
            >
              <img src={item?.icon} alt={item?.alt} className="w-16 h-10" />
              <p className="text-xl uppercase font-bold ">{item?.alt}</p>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="range"
          min={0}
          max="100"
          className="range [--range-shdw:#01D1FF]"
          step="20"
        />
        <div className="flex w-full justify-between px-2 text-xs text-light-blue">
          <span>$0</span>
          <span>$100</span>
          <span>$500</span>
          <span>$1000</span>
          <span>$2000</span>
          <span>$5000</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 mt-6">
        <select name="carName" className="text-xl py-2 w-1/2 text-center border bg-transparent focus:bg-black">
          <option selected>Select Model</option>
          <option value="Ferrari Roma">Ferrari Roma</option>
          <option value="Lamborghini Aventador">
            Lamborghini Aventador
          </option>
          <option value="Mercedes-Benz S-Class">
            Mercedes-Benz S-Class
          </option>
          <option value="BMW 7 Series">BMW 7 Series</option>
          <option value="Toyota Camry">Toyota Camry</option>
          <option value="Audi A6">Audi A6</option>
          <option value="Volkswagen Beetle">Volkswagen Beetle</option>
          <option value="Honda CR-V">Honda CR-V</option>
          <option value="Ford F-150">Ford F-150</option>
          <option value="Nissan GT-R">Nissan GT-R</option>
          <option value="Chevrolet Corvette">Chevrolet Corvette</option>
          <option value="Ford Mustang">Ford Mustang</option>
          <option value="Porsche 911">Porsche 911</option>
          <option value="Mercedes-Benz C-Class">
            Mercedes-Benz C-Class
          </option> 
          <option value="BMW X6">BMW X6</option>
          <option value="Toyota Highlander">Toyota Highlander</option>
          <option value="Honda Accord">Honda Accord</option>
          <option value="Ford Fusion">Ford Fusion</option>
          <option value="Nissan Pathfinder">Nissan Pathfinder</option>
          <option value="Chevrolet Tahoe">Chevrolet Tahoe</option>
          <option value="Ford Explorer">Ford Explorer</option>
          <option value="Porsche 918 Spyder">Porsche 918 Spyder</option>
          <option value="Mercedes-Benz E-Class">
            Mercedes-Benz E-Class
          </option>
          <option value="BMW X5">BMW X5</option>
          <option value="Toyota Prius">Toyota Prius</option>
          <option value="Honda Fit">Honda Fit</option>
          <option value="Ford Fiesta">Ford Fiesta</option>
          <option value="Nissan Maxima">Nissan Maxima</option>
          <option value="Chevrolet Camaro">Chevrolet Camaro</option>
          <option value="Ford Mustang GT">Ford Mustang GT</option>
        </select>
        <button className="text-xl py-2 w-1/2 text-white text-center border uppercase flex justify-center items-center gap-5 hover:bg-light-blue">
          search <IoSearch/>
        </button>
      </div>
    </div>
  );
};

export default CarSearchSection;
