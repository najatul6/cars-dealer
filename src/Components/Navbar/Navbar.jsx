import { useState } from "react";
import { navLinks } from "../../utils/menu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      // Edit top position (top-[25%])
      <header className="fixed top-[20%] left-0 w-full py-[1.3rem] px-[2%] lg:py-5 lg:px-[2%]  flex justify-between items-center z-[100] before:content-[''] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:bg-gradient-back before:backdrop-blur-[50px] before:z-[-1] shadow-xl shadow-gradient-back text-white font-bold">
        <div className="text-3xl font-bold lg:leading-[70px] capitalize cursor-pointer">
          <a href="/" className="block">
          company logo
          </a>
        </div>
        <label
          htmlFor=""
          className="text-4xl text-white cursor-pointer lg:hidden absolute right-[5%] inline-flex duration-300 hover:shadow-[#33ffff_0px_0px_5px] hover:text-cyan-500 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </label>
        <nav className={`${
            isOpen ? "h-[17 rem]" : " h-0 overflow-hidden "
          } top-full  absolute left-0 w-full bg-gradient-back backdrop-blur-2xl shadow-2xl shadow-gradient-back transition-all duration-500 lg:h-auto lg:static lg:w-auto lg:bg-inherit lg:backdrop-blur-0 lg:shadow-none delay-700 lg:delay-0`}
        >
          <ul className="flex flex-col lg:flex-row justify-between items-center gap-6 px-5 py-5 md:py-2 lg:py-0">
            {navLinks?.map((item) => (
              <li key={item} className={`${
                  isOpen ? "translate-y-0 transition-all duration-300" : "translate-y-[-50px] lg:translate-y-0 transition-all duration-700"
                }`}>
                <a
                  href={item?.path}
                  className="md:leading-[70px] w-full text-lg py-2 px-4 hover:shadow-[#33ffff_0px_0px_5px] hover:text-cyan-500 rounded-md"
                >
                  {item?.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
};

export default Navbar;
