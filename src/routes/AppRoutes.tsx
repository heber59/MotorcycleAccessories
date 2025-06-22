import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Products } from "../pages/products";
import { Contact } from "../pages/contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}
