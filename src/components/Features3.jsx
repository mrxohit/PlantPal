import React from "react";
import { motion } from "motion/react";

const Features3 = () => {
  return (
    <motion.div className="fet3">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[3vw] heading font-semibold mt-[5vh]"
      >
        Beautiful life from Smart planter
      </motion.h1>
      <div className="sc grid grid-cols-2  gap-[7vw] mt-[5vh] relative ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-card"
        >
          <img
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/f2277751-6620-445a-963e-38f516aa9531.__CR0,0,650,350_PT0_SX650_V1___.jpg"
            alt=""
          />
          <h2>Plants for bedroom- happy and funny fresh air</h2>
          <p>
            <span>Sleek and Modern Design(2000mAh battery):</span> The
            Intelligent Flower Pot features a sleek and modern design that
            complements any home or office decor. Its contemporary aesthetics
            add a touch of sophistication to your plant display while blending
            seamlessly with your interior style.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-card"
        >
          <img
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/35dc96e5-48ae-4168-bb57-f53082d21933.__CR0,0,650,350_PT0_SX650_V1___.jpg"
            alt=""
          />
          <h2>Desk friends robot for study and work</h2>
          <p>
            <span>Automated Watering System</span>: Say goodbye to under or
            overwatering with the automated watering system of the Intelligent
            Flower Pot. It delivers the perfect amount of water based on your
            plant's needs, helping to prevent root rot and dehydration while
            promoting healthy growth.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features3;
