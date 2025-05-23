import React from "react";
import { motion } from "motion/react";

const Features4 = () => {
  return (
    <div className="fet3" id="size-product">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[3vw] heading font-semibold mt-[5vh]"
      >
        Smart planter size and package
      </motion.h1>
      <div className="section5 sc grid grid-cols-2 gap-[7vw] mt-[5vh] relative ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-card"
        >
          <img
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c01c03fa-901c-4997-b390-4d539646ee8f.__CR0,0,650,350_PT0_SX650_V1___.jpg"
            alt=" "
          />
          <h2>Product size</h2>
          <ul>
            <li>Main Device : 3.8" (H) × 4" (W) × 4.5" (D)</li>
            <li>Inner Pot : 2.8" (H) × 2.2" (inner diameter) × 2.1" (D)</li>
            <li>
              Ways to extend battery lifeTurning on "Night Mode + Smart Sleep"
              can extend usage to 2-3 days.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-card"
        >
          <img
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/5a1cb60f-e531-4e90-9062-300c34487630.__CR0,0,650,350_PT0_SX650_V1___.png"
            alt=""
          />
          <h2>Package info</h2>
          <ul>
            <li>Smart planter body with type-c cable *1 pc</li>
            <li>Instruction *1 pc</li>
            <li>White Pebbles *1 pc</li>
            <li>Colorful ceramsite *1 pc</li>
            <li>Inner pot *1 pc with Measuring cup *1 pc</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Features4;
