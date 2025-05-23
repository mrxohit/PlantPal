import React from "react";
import { motion } from "motion/react";

const Features2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fet2"
    >
      <img
        className="p2 border"
        src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/White_Plant_2_74409902-1042-49c6-ade5-9d484dffdb2d.jpg?v=1723064108"
        alt=""
      />

      <div className="div1  ">
        <div>
          <h2 className="heading font-semibold text-[2vw]">
            50+ Unique Facial Expressions!
          </h2>
          <p className="heading2 text-[1.1vw]">
            Your Plant Pal monitors light, humidity, water levels, and more,
            communicating your plant's needs with over 50 unique expressions.
            Whether it's thirsty, needs more sunlight, or is perfectly content,
            you'll always know how to keep your plant happy and healthy.
          </p>
        </div>
        <div className="mt-[3.5vh]">
          <h2 className="heading font-semibold text-[2vw]">
            7 Sensors track your plant's health.
          </h2>
          <p className="heading2 text-[1.1vw]">
            Your Plant Pal features over 7 sensors to monitor light, humidity,
            water levels, and more. Stay informed about your plant's health and
            provide the optimal care it needs. With precise, real-time data,
            maintaining a thriving plant has never been easier!
          </p>
        </div>
        <div className="mt-[3.5vh]">
          <h2 className="heading font-semibold text-[2vw]">
            Get real-time notifications in our app.
          </h2>
          <p className="heading2 text-[1.1vw]">
            Receive instant updates on your plant's health including watering
            reminders, status data, and more directly in our app. Stay informed
            and provide timely care with real-time notifications, ensuring your
            plant thrives with minimal effort.{" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Features2;
