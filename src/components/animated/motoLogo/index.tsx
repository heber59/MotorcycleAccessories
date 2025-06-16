import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface MotoLogoProps {
  isRiding?: boolean;
  crash?: boolean;
}

export const MotoLogo = ({
  isRiding = false,
  crash = false,
}: MotoLogoProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (crash) {
      controls.start({
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [crash, controls]);

  useEffect(() => {
    if (isRiding) {
      controls.start({
        x: 150,
        rotate: [0, -10, -5, 0],
        transition: { duration: 1, ease: "easeInOut" },
      });

      setTimeout(() => {
        controls.set({ x: 0, rotate: 0 });
      }, 1000);
    }
  }, [isRiding, controls]);

  return (
    <motion.img
      src="/assets/motoButton-removebg.png"
      alt="Moto Logo"
      className="w-16 h-16 cursor-pointer select-none"
      animate={controls}
    />
  );
};
