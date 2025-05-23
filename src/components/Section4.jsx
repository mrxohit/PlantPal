import React from "react";
import { motion } from "motion/react";
const Section4 = () => {
  return (
    <div className="section4 section relative my-[5vw] w- bg-[url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/1b9cc64a-2d39-4f37-a7ca-2df522abfd21.__CR0,100,1465,600_PT0_SX1464_V1___.jpg')] bg-cover  ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative top-[6vw] left-[1vw]  "
      >
        <div className="bg-white bg-opacity-50 w-1/2 h-1/2">
          <h2 className="text-[1.5vw] font-semibold  ">
            Graceful home decoration
          </h2>
          <h1 className="text-[2vw] mt-[1vw] font-semibold">
            Home planter for green happy
          </h1>

          <p className="text-[1vw] mt-[1vw]">
            <span className="font-semibold">Smart Plant Care Technology</span>:
            Our Intelligent Flower Pot incorporates advanced technology to
            revolutionize the way you care for your plants. With automated
            watering, soil monitoring, and intelligent growth settings, this
            smart pot ensures optimal conditions for your plants to thrive.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Section4;
