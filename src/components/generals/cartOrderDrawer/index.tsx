import { motion } from "framer-motion";
import { Button } from "../Shopbutton";

export const CartOrderDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 w-80 h-full bg-gray-950 text-white shadow-lg z-50 p-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🛒 Tu Carrito</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          ✖
        </button>
      </div>
      <p className="text-gray-400">Carrito vacío por ahora.</p>
      <Button className="mt-6 w-full">Finalizar compra</Button>
    </motion.div>
  );
};
