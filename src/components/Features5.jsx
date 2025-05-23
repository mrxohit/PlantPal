import React from "react";
import { motion } from "motion/react";

const Features5 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fet4"
    >
      <img
        className="h-full "
        src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4e6199cb-9a70-474a-821f-ea1877767a14.__CR0,0,1464,600_PT0_SX1464_V1___.png"
        alt="informative"
      />
    </motion.div>
  );
};

export default Features5;
