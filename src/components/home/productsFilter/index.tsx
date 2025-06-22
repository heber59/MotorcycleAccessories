import { useNavigate } from "react-router-dom";
import { useState } from "react";

const tiposMoto = ["Urbana", "Deportiva", "Enduro", "Scooter"];
const tiposProducto = ["Cascos", "Guantes", "Exostos", "Luces", "Maletero"];

export const ProductFilters = () => {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");

  const redirigirConFiltro = (filtro: string, valor: string) => {
    navigate(`/productos?${filtro}=${encodeURIComponent(valor)}`);
  };

  const manejarBusqueda = (e: React.FormEvent) => {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/productos?busqueda=${encodeURIComponent(busqueda.trim())}`);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Filtrar productos
      </h2>

      <div className="mb-4">
        <p className="text-gray-700 font-medium mb-2">Tipo de moto:</p>
        <div className="flex flex-wrap gap-2">
          {tiposMoto.map((tipo) => (
            <button
              key={tipo}
              onClick={() => redirigirConFiltro("tipoMoto", tipo)}
              className="bg-red-300 hover:bg-red-700 text-black hover:text-white text-sm px-4 py-2 rounded transition-colors duration-200"
            >
              {tipo}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-700 font-medium mb-2">Tipo de producto:</p>
        <div className="flex flex-wrap gap-2">
          {tiposProducto.map((tipo) => (
            <button
              key={tipo}
              onClick={() => redirigirConFiltro("categoria", tipo)}
              className="bg-red-300 hover:bg-red-700 hover:text-white text-black text-sm px-4 py-2 rounded transition-colors duration-200"
            >
              {tipo}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={manejarBusqueda} className="mt-4">
        <input
          type="text"
          placeholder="Buscar producto"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </form>
    </div>
  );
};
