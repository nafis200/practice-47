import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";


const Roots = () => {
    return (
        <div>
            <h1>hellow world</h1>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;
