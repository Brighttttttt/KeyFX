import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import {Outlet} from "react-router";

function MainLayoutComponent() {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
}

export default MainLayoutComponent;