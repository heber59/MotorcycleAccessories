import { motion } from "framer-motion";
import { Button } from "../motorcicleButton";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gray-900 text-white rounded-2xl shadow-lg p-4 flex flex-col"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-sm text-gray-300 mb-4">{product.description}</p>
      <span className="text-orange-400 font-semibold text-lg mb-2">
        ${product.price.toFixed(2)}
      </span>
      <Button>Agregar al carrito</Button>
    </motion.div>
  );
};
