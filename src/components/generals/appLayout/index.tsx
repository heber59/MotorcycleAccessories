import type { ReactNode } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between bg-white shadow p-4">
        {/* Título y navegación izquierda */}
        <div className="flex items-center gap-6 text-sm">
          <h1 className="text-xl font-bold text-gray-800">
            <Link to="/">Accesorios para tu moto</Link>
          </h1>
          <Link to="/" className="hover:text-blue-600">
            Inicio
          </Link>
          <Link to="/productos" className="hover:text-blue-600">
            Productos
          </Link>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link to="/nosotros" className="hover:text-blue-600">
            Nosotros
          </Link>
          <Link to="/contacto" className="hover:text-blue-600">
            Contacto
          </Link>
          <FaUserCircle
            size={24}
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          />
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="p-6">{children}</main>
    </div>
  );
};

export { AppLayout };
