import React from "react";
import { motion } from "motion/react";
import leaf from "../assets/leaf.png";
import leaf2 from "../assets/leaf2.png";

const Section1 = () => {
  return (
    <div className="section1">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="imgtop"
      >
        <img
          className="chotu"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/Purple_Plant_2.jpg?v=1722973543&width=375"
          alt=""
        />
        <img
          className="chotu"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/White_Plant_3.jpg?v=1722973543&width=550"
          alt=""
        />
        <img
          className="chotu"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/Yellow_Plant_1.jpg?v=1722973543&width=550"
          alt=""
        />
        <img
          className="chotu"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/green_plant_3.jpg?v=1722973543&width=550"
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="imgleft"
      >
        <img
          className="chotu"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/Pink_PLant_1_Mint.jpg?v=1722973543&width=550"
          alt=""
        />
        <div className=" text justify-items-center text-center ">
          <div className=" justify-items-center text-center  ">
            <img className="leaf w-[10vh]" src={leaf} alt="" />
            <img className="leaf2 w-[10vh]" src={leaf2} alt="" />
            <h3 className="heading font-semibold text-[2.1vw]">
              An Ever-Growing Database of 40+ Plants
            </h3>
            <p className="heading2 mt-[3vh] text-[1.5vw]">
              As the database expands, Plant Pal continuously learns and adapts,
              providing more accurate and personalized advice for a wide variety
              of plants.
            </p>
            <p className="heading2 mt-[3vh] text-[1.5vw]">
              Plant Pal’s growing database of plants ensures that your smart pot
              stays up-to-date with the latest plant care insights.
            </p>
            <p className="heading2 mt-[3vh] text-[1.5vw]">
              Whether you’re nurturing a classic houseplant or trying something
              new, you can trust that Plant Pal is equipped with the most
              current information to keep your greenery thriving.
            </p>
          </div>
        </div>
        <img
          className="chotu "
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/White_Plant_2.jpg?v=1722973543&width=550"
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="imgright"
      >
        <img
          className="chotu"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/Purple_Plant_1.jpg?v=1722973544&width=550"
          alt=""
        />
        <img
          className="chotu"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/green_plant_1.jpg?v=1722973521&width=550"
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="imgbottom"
      >
        <img
          className="chotu"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/Yellow_Plant_2.jpg?v=1722973543&width=550"
          alt=""
        />
        <img
          className="chotu"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/Pink_PLant_2.jpg?v=1722973543&width=550"
          alt=""
        />
        <img
          className="chotu"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/White_Plant_1.jpg?v=1722973543&width=550"
          alt=""
        />
        <img
          className="chotu"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/green_plant_2.jpg?v=1722973543&width=550"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Section1;
