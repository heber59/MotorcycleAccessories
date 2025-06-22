import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Shopbutton";
import { useCart } from "../../../context/cartContext";

export const CartOrderDrawer = ({
  isOpen,
  onClose,
  onCheckout,
}: {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}) => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 w-80 h-full bg-gray-950 text-white shadow-lg z-50 p-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold"> Tu Carrito</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <IoMdClose />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-400">Carrito vacío por ahora.</p>
      ) : (
        <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-800 pb-2"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="text-md font-semibold">
                    {item.name}{" "}
                    <span className="text-xs text-orange-400">
                      x{item.quantity}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-400">
                    ${item.price.toFixed(2)} c/u
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-400 hover:text-red-600"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}


      <div className="mt-6">
        <div className="flex justify-between mb-4 text-lg font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button className="w-full" onClick={onCheckout}>Finalizar compra</Button>
      </div>

    </motion.div>
  );
};
