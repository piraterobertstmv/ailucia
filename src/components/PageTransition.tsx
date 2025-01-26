import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  // Preload content
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};