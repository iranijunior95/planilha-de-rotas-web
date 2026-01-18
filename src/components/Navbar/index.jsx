import { useState, useRef, useEffect, lazy } from "react";
import { 
    UserCog, 
    LogOut, 
    Gauge, 
    Users, 
    Truck, 
    Route, 
    FileChartColumnIncreasing,
    Menu 
} from 'lucide-react';
import ImgLogo from "../../assets/logo01.png";
import "./style.css";

const Button = lazy(() => import("../Button"));

export default function Navbar() {
    const [renderMobile, setRenderMobile] = useState(false);
    const [renderDropdown, setRenderDropdown] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function checkWindowWidth() {
            const windowWidth = window.innerWidth;
            
            if (windowWidth >= 810) setRenderMobile(false);
            
            if (windowWidth < 810) setRenderDropdown(false);
        }

        window.addEventListener('resize', checkWindowWidth);

        checkWindowWidth();
    }, []);

    return (
        <>
            <header>
                <nav>
                    <img
                        src={ImgLogo}
                        alt="logo nav"
                        className="img-logo-nav"
                    />

                    <ul className="links-menu links-menu-desktop">
                        <li>
                            <a href="#">
                                <Gauge /> Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Users /> Funcionários
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Truck /> Veículos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Route /> Rotas
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FileChartColumnIncreasing /> Relatórios
                            </a>
                        </li>
                    </ul>

                    <div className="user-menu" ref={menuRef}>
                        <button className="link-user" onClick={() => setRenderDropdown(!renderDropdown)}>
                            <p>IJ</p>
                        </button>

                        <ul className={`dropdown-menu ${renderDropdown ? "show" : ""}`}>
                            <li>
                                <a href="#"><UserCog /> Meu Perfil</a>
                            </li>
                            <li>
                                <a href="#"><LogOut /> Sair</a>
                            </li>
                        </ul>
                    </div>

                    <button 
                        className="btn-menu-mobile"
                        onClick={() => setRenderMobile(!renderMobile)}
                    >
                        <Menu />
                    </button>
                </nav>
            </header>

            <div className={renderMobile ? 'mobile-menu-content show' : 'mobile-menu-content'}>
                <div className={renderMobile ? 'menu-mobile show' : 'menu-mobile'}>
                    <div className="menu-mobile-header">
                        <div className="menu-mobile-profile">
                            <span className="link-user">
                                ij
                            </span>

                            <p>Irani Junior</p>
                        </div>

                        <ul className="links-menu links-menu-mobile">
                            <li>
                                <a href="#">
                                    <Gauge /> Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Users /> Funcionários
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Truck /> Veículos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Route /> Rotas
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FileChartColumnIncreasing /> Relatórios
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="menu-mobile-footer">
                        <Button
                            type="button"
                            text="Meu Perfil"
                            icon={<UserCog />}
                            color="default"
                        />

                        <Button
                            type="button"
                            text="Sair"
                            icon={<LogOut />}
                            color="default"
                        />
                    </div>
                </div>
            </div>
        </>
    );
    // const [open, setOpen] = useState(false);
    // const menuRef = useRef(null);

    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (menuRef.current && !menuRef.current.contains(event.target)) {
    //             setOpen(false);
    //         }
    //     }

    //     //document.addEventListener("mousedown", handleClickOutside);
    //     return () => document.removeEventListener("mousedown", handleClickOutside);
    // }, []);

    // return (
    //     <>
    //         <header>
    //             <nav>
    //                 <img
    //                     src={ImgLogo}
    //                     alt="logo nav"
    //                     className="img_logo_nav"
    //                 />

    //                 <ul className="menu-desktop">
    //                     <li>
    //                         <a href="#">
    //                             <Gauge /> Dashboard
    //                         </a>
    //                     </li>
    //                     <li>
    //                         <a href="#">
    //                             <Users /> Funcionários
    //                         </a>
    //                     </li>
    //                     <li>
    //                         <a href="#">
    //                             <Truck /> Veículos
    //                         </a>
    //                     </li>
    //                     <li>
    //                         <a href="#">
    //                             <Route /> Rotas
    //                         </a>
    //                     </li>
    //                     <li>
    //                         <a href="#">
    //                             <FileChartColumnIncreasing /> Relatórios
    //                         </a>
    //                     </li>
    //                 </ul>

    //                 <div className="user-menu" ref={menuRef}>
    //                     <button className="link_user" onClick={() => setOpen(!open)}>
    //                         <p>IJ</p>
    //                     </button>

    //                     <ul className={`dropdown ${open ? "show" : ""}`}>
    //                         <li>
    //                             <a href="#"><UserCog /> Meu Perfil</a>
    //                         </li>
    //                         <li>
    //                             <a href="#"><LogOut /> Sair</a>
    //                         </li>
    //                     </ul>
    //                 </div>

    //                 <button className="btn-menu-mobile">
    //                     <Menu />
    //                 </button>
    //             </nav>
    //         </header>

    //         <div className="menu-mobile-content">
    //             <div className="menu-mobile">
    //                 <div className="content-header-menu-mobile">
    //                     <div className="content-header-menu-mobile-perfil">
    //                         <button className="link_user">
    //                             <p>IJ</p>
    //                         </button>

    //                         <p>Irani Junior</p>
    //                     </div>

    //                     <ul className="">
    //                         <li>
    //                             <a href="#">
    //                                 <Gauge /> Dashboard
    //                             </a>
    //                         </li>
    //                         <li>
    //                             <a href="#">
    //                                 <Users /> Funcionários
    //                             </a>
    //                         </li>
    //                         <li>
    //                             <a href="#">
    //                                 <Truck /> Veículos
    //                             </a>
    //                         </li>
    //                         <li>
    //                             <a href="#">
    //                                 <Route /> Rotas
    //                             </a>
    //                         </li>
    //                         <li>
    //                             <a href="#">
    //                                 <FileChartColumnIncreasing /> Relatórios
    //                             </a>
    //                         </li>
    //                     </ul>
    //                 </div>

    //                 <div className="content-header-menu-mobile-config">
    //                     <Button
    //                         type="button"
    //                         text="Meu Perfil"
    //                         icon={<UserCog />}
    //                         color="default"
    //                     />

    //                     <Button
    //                         type="button"
    //                         text="Sair"
    //                         icon={<LogOut />}
    //                         color="default"
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // );
}