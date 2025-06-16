import { useEffect, useState } from "react";
import { useCart } from "../../../context/cartContext";
import { motion, AnimatePresence } from "framer-motion";

const Notification = () => {
  const { cart } = useCart();
  const [addedCount, setAddedCount] = useState(0);
  const [lastCartLength, setLastCartLength] = useState(0);

  useEffect(() => {
    const currentLength = cart.reduce((acc, item) => acc + item.quantity, 0);
    const diff = currentLength - lastCartLength;

    if (diff > 0) {
      setAddedCount(diff);
      setTimeout(() => {
        setAddedCount(0);
      }, 1500);
    }

    setLastCartLength(currentLength);
  }, [cart]);

  return (
    <div className="relative w-6 h-6">
      <AnimatePresence>
        {addedCount > 0 && (
          <motion.div
            key={addedCount}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1"
          >
            +{addedCount}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export { Notification };
