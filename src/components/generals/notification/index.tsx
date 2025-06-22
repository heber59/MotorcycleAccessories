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
    <div className="absolute z-0">
      <AnimatePresence>
        {addedCount > 0 && (
          <motion.div
            key={addedCount}
            initial={{ opacity: 0, y: -15, x: 2 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute text-red text-xs font-bold rounded-full px-1  "
          >
            +{addedCount}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export { Notification };
