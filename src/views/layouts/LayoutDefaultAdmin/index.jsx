import { Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import "./style.css";

export default function LayoutDefaultAdmin() {
    return (
        <>
            <Navbar />

            <div className="container-layout-default">
                <Outlet />
            </div>
        </>
    );
}