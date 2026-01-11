import { Loader } from "lucide-react";
import "./style.css";

export default function LoadScreen({status}) {
    return (
        <div className={ status ? "load-screen" : "load-screen none" }>
            <Loader className="spin" />
        </div>
    );
}