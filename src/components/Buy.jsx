import React from "react";
import { motion } from "motion/react";

const Buy = () => {
  return (
    <section className="buy" id="buy-now">
      <motion.div className="buy-section1 ">
        <h2 className="text-[3vw] font-semibold heading2 mb-[5vh]">
          Why Choose Plant Pal?
        </h2>
        <ul type="disc" className="list-disc h-5/6 ml-10">
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-[2vw] heading2"
          >
            Ivy is a [smart plant robot], her expressions to assist you in
            cultivating over 40 different plants, to make your life full of
            green, ease and beauty. Smart planter for home flowerpot for most
            inside plants. 24 hours to keep the plant health for growing well.
            Setting up and maintaining the smart flowerpot is simple and
            user-friendly.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-[2vw] heading2"
          >
            Ivy is also your intimate and adorable [plant companion], unlocking
            a delightful life with rich gesture interactions and expressive
            feedback.PLANTSIO intelligent flower pot is equipped with advanced
            technology to revolutionize how you care for your plants. With
            features such as automated watering, soil monitoring, and
            customizable growth settings, this smart flowerpot takes the
            guesswork out of plant care and helps your plants thrive.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-[2vw] heading2"
          >
            Ivy is also a [smart home remote] control that activates space
            lighting with the touch of a leaf.IVY flowerpot's automated watering
            system ensures that your plants receive the perfect amount of water
            based on their individual needs. Set watering intervals and
            durations through the companion app for hassle-free plant care.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-[2vw] heading2"
          >
            [APP remote viewing], reminder at any time, to understand the status
            of beloved plants.WIFI connecting with your mobile phone to show you
            the details all the time. Tailor the growth settings of your plants
            with ease using the smart flowerpot app. Adjust light exposure,
            temperature, and humidity levels to create the ideal environment for
            different plant species or growth stages. Watch your plants flourish
            under personalized care.
          </motion.li>
        </ul>
      </motion.div>
      <div className="buy-section2 ">
        <form className="flex   flex-col justify-start items-center ">
          <h2 className="text-[2vw] font-semibold heading mb-[3vh]">
            Get your Plant Pal today!
          </h2>
          <p className="heading mb-[3vh]">
            Join the smart gardening revolution and give your plants the care
            they deserve.
          </p>
          <div className="input-group w-full flex flex-col justify-start items-center">
            <input
              type="name"
              placeholder="Enter your name"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Enter your Address"
              className="input-field"
            />

            <input
              type="text"
              placeholder="Enter your phone number"
              className="input-field"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />
            <select className="input-field">
              <option value="select">colour</option>
              <option value="Green">Green</option>
              <option value="White">White</option>
              <option value="Pink">Pink</option>
              <option value="Orange">Orange</option>
              <option value="Yellow">Yellow</option>
              <option value="Blue">Blue</option>
            </select>

            <button type="submit" className="reg-button">
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Buy;
