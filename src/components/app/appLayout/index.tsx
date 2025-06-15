import type { ReactNode } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <nav
        className="flex items-center justify-between 
       shadow p-4"
      >
        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className="text-xl  hover:text-blue-600">
            Inicio
          </Link>
          <Link to="/productos" className=" text-xl  hover:text-blue-600">
            Productos
          </Link>
        </div>
        <h1 className="text-3xl font-bold">
          Los mejores accesorios para tu moto
        </h1>

        <div className="flex items-center gap-4 text-sm">
          <Link to="/nosotros" className=" text-xl  hover:text-blue-600">
            Nosotros
          </Link>
          <Link to="/contacto" className=" text-xl  hover:text-blue-600">
            Contacto
          </Link>
          <FaUserCircle
            size={24}
            className="text-gray-600 hover:text-blue-600 cursor-pointer"
          />
        </div>
      </nav>
      <main className="bg-gray-100">{children}</main>
    </div>
  );
};

export { AppLayout };
