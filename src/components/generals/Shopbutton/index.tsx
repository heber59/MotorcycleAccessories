import type { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      type={type}
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-xl font-semibold text-white bg-black shadow-md",
        className
      )}
    >
      {children}
    </motion.button>
  );
};
