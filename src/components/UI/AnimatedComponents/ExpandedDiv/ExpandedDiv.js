import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const expandedDiv = (props) => {
  return (
    <AnimatePresence initial={false}>
      {props.isExpanded && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default expandedDiv;
