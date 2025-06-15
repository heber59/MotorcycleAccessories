import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50 text-white text-3xl font-bold"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          style={{ transformOrigin: "center" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Tu moto merece lo mejor
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
