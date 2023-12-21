import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navber/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;