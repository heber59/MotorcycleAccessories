import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MotoLogoProps {
  isRiding?: boolean;
  crash?: boolean;
}

export const MotoLogo = ({
  isRiding = false,
  crash = false,
}: MotoLogoProps) => {
  const [localRide, setLocalRide] = useState(false);

  useEffect(() => {
    if (isRiding) setLocalRide(true);
  }, [isRiding]);

  return (
    <motion.img
      src="/assets/motoButton-removebg.png"
      alt="Moto Logo"
      className="w-16 h-16 cursor-pointer select-none"
      animate={
        crash
          ? { x: [0, -10, 10, -10, 10, 0] }
          : localRide
            ? { x: 80, rotate: [0, -30, -15, -5] }
            : { x: 0, rotate: 0 }
      }
      transition={{
        duration: crash ? 0.5 : 1,
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {
        if (localRide) {
          setTimeout(() => setLocalRide(false), 10);
        }
      }}
    />
  );
};
