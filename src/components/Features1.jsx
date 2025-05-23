import React from "react";
import { motion } from "motion/react";

const Features1 = () => {
  return (
    <div className="fet1" id="features">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="imges relative inline-flex justify-items-center mt-[5vh] "
      >
        <motion.img
          className="exp"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/mj0EZ57z_2x_797cf00e-cda7-4f00-9519-67f48617d196.png?v=1722646731"
          alt=""
          animate={{
            x: [0, 0, 0],
            y: [0, -25, 0],
            transition: { duration: 2, delay: 0, repeat: Infinity },
          }}
          whileHover={{ scale: 1.1 }}
        />
        <motion.img
          className="exp"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/Dwg9ajuN_2x_c6f287fa-646b-401c-aa1a-e66f9510391a_1000x.png?v=1722646731"
          alt=""
          animate={{
            x: [0, 0, 0],
            y: [0, -25, 0],
            transition: { duration: 2, delay: 0.3, repeat: Infinity },
          }}
        />
        <motion.img
          className="exp"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/mj0EZ57z_2x_797cf00e-cda7-4f00-9519-67f48617d196.png?v=1722646731"
          alt=""
          animate={{
            x: [0, 0, 0],
            y: [0, -25, 0],
            transition: { duration: 2, delay: 0.7, repeat: Infinity },
          }}
        />
        <motion.img
          className="exp"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/rIP1ERxN_2x_da6fb74b-d5cb-4393-8430-40eb901dfdaf.png?v=1722646731"
          alt=""
          animate={{
            x: [0, 0, 0],
            y: [0, -25, 0],
            transition: { duration: 2, delay: 1, repeat: Infinity },
          }}
        />
        <motion.img
          className="exp"
          src="https://cdn.shopify.com/s/files/1/0659/6067/3418/files/1rGREkxK_2x_a2d12928-c1d1-495d-a218-21939a0e8187.png?v=1722646732"
          alt=""
          animate={{
            x: [0, 0, 0],
            y: [0, -25, 0],
            transition: { duration: 2, delay: 1.3, repeat: Infinity },
          }}
        />
      </motion.div>
      <h2 className="text-[2.2vw] font-semibold heading2  mb-5">
        50+ different expressions to let you know how your plant is doing!
      </h2>
      <video
        className="border relative w-[85vw] mt-10"
        controls
        src="https://cdn.shopify.com/videos/c/o/v/5de952e3e74a424d8b196abb3de6e7e9.mp4"
      ></video>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=" cd inline-flex w-full h-full  relative  mt-16"
      >
        <motion.div className="card">
          <img
            className="w-[6vw]"
            src="https://cdn.shopify.com/s/files/1/0567/9883/8848/files/4g23hb_1000x.png?v=1709751175"
            alt="shipping"
          />
          <h3 className="font-semibold paragraph">FREE 2-5 Day Shipping</h3>
          <p className="paragraph mt-3 ">Enjoy Fast and Free Shipping</p>
        </motion.div>
        <motion.div className="card">
          <img
            className="w-[6vw]"
            src="https://cdn.shopify.com/s/files/1/0567/9883/8848/files/2_30ec8ea6-6e11-416d-af9c-5b73a9a6b242_1000x.png?v=1709750632"
            alt="return"
          />
          <h3 className="font-semibold paragraph">30-Days Return Guarantee</h3>
          <p className="paragraph mt-3 ">
            Enjoy a satisfying shopping experience.
          </p>
        </motion.div>
        <motion.div className="card">
          <img
            className="w-[6vw]"
            src="https://cdn.shopify.com/s/files/1/0567/9883/8848/files/654642_1000x.png?v=1709751998"
            alt="usa flag"
          />
          <h3 className="font-semibold paragraph">Ship From USA</h3>
          <p className="paragraph mt-3 ">Read to be shipped in 24hours.</p>
        </motion.div>
        <motion.div className="card">
          <img
            className="w-[6vw]"
            src="https://cdn.shopify.com/s/files/1/0567/9883/8848/files/4_a1c8b274-7ef0-4001-aa18-4fdfcb755fda_1000x.png?v=1709750344"
            alt="warranty"
          />
          <h3 className="font-semibold paragraph">12 Month Warranty</h3>
          <p className="paragraph mt-3 ">
            12 months warranty from date of purchase.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features1;
