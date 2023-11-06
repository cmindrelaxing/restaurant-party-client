import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster
            position="top-left"
            reverseOrder={false}
            />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;