import { motion } from "framer-motion";
import { useState } from "react";

export const MotoLogo = () => {
  const [isWheelie, setIsWheelie] = useState(false);

  const handleClick = () => {
    setIsWheelie(true);
    setTimeout(() => setIsWheelie(false), 1000);
  };

  return (
    <motion.img
      src="/assets/motoButton.jpg"
      alt="Moto Logo"
      className="w-16 h-16 cursor-pointer select-none"
      animate={{
        rotate: isWheelie ? -35 : 0,
        y: isWheelie ? -10 : 0,
      }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={handleClick}
    />
  );
};
