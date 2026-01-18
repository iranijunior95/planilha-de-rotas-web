import { useState } from "react";
import { Outlet } from "react-router-dom";
import LoadScreen from "../../../components/LoadScreen";
import "./style.css";

export default function LayoutLoginAndRegister() {
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [isLoad, setIsLoad] = useState(false);

    return (
        <div className="container-layout-login-register">
            <div className="card-form-layout-login-register">
                <div className="card-form-layout-login-register-header">
                    <h2>{title}</h2>
                    <p>{caption}</p>
                </div>

                <Outlet context={{ setTitle, setCaption, setIsLoad }}/>
            </div>

            <LoadScreen 
                status={isLoad}
            />
        </div>
    );
}