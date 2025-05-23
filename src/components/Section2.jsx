import React from "react";
import { motion } from "motion/react";

const Section2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="section2 bottom-2 sc2 relative   grid grid-flow-col col-span-2  gap-5"
    >
      <div className=" list-card border">
        <div className="grid grid-cols-2 gap-[2vw]">
          <img
            src="https://m.media-amazon.com/images/I/51JO686vzIL.__AC_SR166,182___.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/51KRe7PnskL.__AC_SR166,182___.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/51alcTAlq%2BL.__AC_SR166,182___.jpg"
            alt=""
          />
          <img
            src="https://m.media-amazon.com/images/I/41CFtqy9%2BPL.__AC_SR166,182___.jpg"
            alt=""
          />
        </div>
        <h2 className=" font-semibold text-3xl">
          50+ Unique Facial Expressions!
        </h2>
      </div>

      <div className="list-card border">
        <img
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/702de028-a399-4fa0-94b9-6398fbc77f70.__CR0,98,1920,884_PT0_SX315_V1___.jpg"
          alt=""
        />
        <p className="mt-[1vw]">
          At <span className="font-semibold"> PLANTIO</span> , we believe that
          the best technology doesn’t just fit into your home—it
          <span className="font-semibold"> elevates</span>
          your way of living. Born out of a passion for integrating
          nature-inspired solutions with cutting-edge design, PLANTIO’s mission
          is to create home devices that are
          <span className="font-semibold"> functional, elegant, </span>
          and <span className="font-semibold"> sustainable.</span> From the
          beginning, our vision has been simple: to help people achieve a more
          connected, harmonious lifestyle, one innovative product at a time.
        </p>
      </div>
      <div className="list-card  border">
        <img
          className="w-full h-full"
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1bcbc409-4f8b-47f2-aa48-2e2b47efb0fc.__CR0,124,1000,1251_PT0_SX362_V1___.png"
          alt=""
        />
        <div className="bg-white bg-opacity-45 absolute top-10 text-start  ">
          <p className="font-semibold">Notice by cellphone for plants</p>

          <p>Make sure your honey plants growth well.</p>
        </div>
      </div>
      <div className="list-card border">
        <p className="font-semibold text-xl">
          Dose IVY need linked the cable all the time?
        </p>
        <p className="card-t">
          Yes, as a plants pot, it should be linked the charging cable to make
          sure the plants growing well for real time monitoring the plants'
          health.
        </p>
        <p className="font-semibold text-xl">
          Why IVY cannot Detect the Plant?
        </p>
        <p className="card-t">
          The soil is too dry. Please add some water to the water tank and
          placing the plant inside, then waiting for more than half an hour
          until the soil absorbs enough water to see if it can be detected.
        </p>
        <p className="font-semibold text-xl">
          Why is lvy able to become smart?
        </p>
        <p className="card-t">
          The intelligence of Ivy results from its use of a plant behavior tree.
          As Ivy learns through machine learning, it will become increasingly
          intelligent.
        </p>
      </div>
    </motion.div>
  );
};

export default Section2;
