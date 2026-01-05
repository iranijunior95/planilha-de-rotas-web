import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

const Home = lazy(() => import("./views/Home"));
const Employees = lazy(() => import("./views/Employees"));
const Login = lazy(() => import("./views/Login"));
const Register = lazy(() => import("./views/Register"));
const Reports = lazy(() => import("./views/Reports"));
const Trips = lazy(() => import("./views/Trips"));
const Vehicles = lazy(() => import("./views/Vehicles"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/funcionarios" element={<Employees />} />
        <Route path="/veiculos" element={<Vehicles />} />
        <Route path="/viagens" element={<Trips />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}