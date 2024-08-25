import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";



const Layout = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <Header/>
            <Navbar/>
            <div>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;