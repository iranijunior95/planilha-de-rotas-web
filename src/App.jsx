import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Zoom, ToastContainer } from "react-toastify";

//Layouts
const LayoutLoginAndRegister = lazy(() => import("./views/layouts/LayoutLoginAndRegister"));
const LayoutDefaultAdmin = lazy(() => import("./views/layouts/LayoutDefaultAdmin"));

//Pagínas
const Dashboard = lazy(() => import("./views/Dashboard"));
const Employees = lazy(() => import("./views/Employees"));
const Login = lazy(() => import("./views/Login"));
const Register = lazy(() => import("./views/Register"));
const Reports = lazy(() => import("./views/Reports"));
const Trips = lazy(() => import("./views/Trips"));
const Vehicles = lazy(() => import("./views/Vehicles"));
const RecoverPassword = lazy(() => import("./views/RecoverPassword"));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutLoginAndRegister />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recover-password" element={<RecoverPassword />} />
          </Route>

          <Route element={<LayoutDefaultAdmin />}>
            <Route path="/adm" element={<Dashboard />} />
            <Route path="/adm/dashboard" element={<Dashboard />} />
            <Route path="/adm/funcionarios" element={<Employees />} />
            <Route path="/veiculos" element={<Vehicles />} />
            <Route path="/viagens" element={<Trips />} />
            <Route path="/relatorios" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        transition={Zoom}
      />
    </>
  );
}