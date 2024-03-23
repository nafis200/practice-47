import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";


const Roots = () => {
    return (
        <div>
            <h1>I am roots</h1>
            <div>
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <div className=" min-w-full mt-4">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Roots;
