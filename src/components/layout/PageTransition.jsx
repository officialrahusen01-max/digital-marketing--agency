import { motion } from "framer-motion";
import { pageVariants } from "../../animations/pageTransitions.js";

/**
 * Wrap each page component's return value with this to get a
 * consistent fade/slide transition between routes.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}
