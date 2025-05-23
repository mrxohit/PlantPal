import React from "react";
import { motion } from "motion/react";

import hero2 from "../assets/plantpalai.jpg";
const Hero = () => {
  return (
    <div className="hero" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="hero1"
      >
        <h1 className=" h1txt ">
          🌿 Plant<span className="heading2">Pal</span>
        </h1>

        <h2 className="subheading">Hydrate Smart. Save Earth. 💧🌍</h2>

        <p className="line mt-3 w-1/2">
          "Make your home greener and your plants happier, while helping the
          planet — one smart step at a time."
        </p>

        <h2 className="subheading">
          Price
          <span className="heading2 font-semibold text-white">: $251</span>
        </h2>
        <div className=" btgrp grid grid-flow-cols grid-cols-2 gap-0 justify-around mt-7">
          <a href="#features">
            <button className="button  ">Features</button>
          </a>
          <a href="#buy-now">
            <button className="button ">Buy Now</button>
          </a>
        </div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        
        className="hero2"
        src={hero2}
        alt="Product"
      />
    </div>
  );
};
export default Hero;
