import { useState, useLayoutEffect } from "react";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Features1 from "./components/Features1";
import Features2 from "./components/Features2";
import Features3 from "./components/Features3";
import Features4 from "./components/Features4";
import Features5 from "./components/Features5";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import Section4 from "./components/Section4";
import FAQ from "./components/FAQ";
import { motion, useScroll } from "motion/react";

import Buy from "./components/Buy";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("light");

  useLayoutEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div
      className={`app  ${theme === "dark" ? "bg-[#372a28]" : "bg-[#d8d0b5]"}`}
    >
      <nav className="navbar">
        <div className="logo -top-7">
          <img className="icn" src="icn1.png" alt="Facebook" />

          <img className="icn2" src="icn11.png" alt="Facebook" />
          <img className="icn" src="icn2.png" alt="Instagram" />
          <img className="icn2" src="icn22.png" alt="Instagram" />
          <img className="icn" src="icn3.png" alt="Twitter" />
          <img className="icn2" src="icn33.png" alt="Twitter" />
        </div>
      </nav>

      <nav
        className={` nav ${
          theme === "dark" ? "bg-[#372a28]" : "bg-[#d8d0b5]"
        } `}
      >
        <img className=" logog" src="logo.png" alt="logo" />

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-around items-center h-full"
          id="nav"
        >
          <a href="#nav">
            <h3 className="navt">Home</h3>
          </a>
          <a href="#features">
            <h3 className="navt">Features</h3>
          </a>
          <a href="#size-product">
            <h3 className="navt">Size & Product</h3>
          </a>
          <a href="#buy-now">
            <h3 className="navt">Buy Now</h3>
          </a>
          <a href="#faq">
            <h3 className="navt">FAQ</h3>
          </a>
        </motion.div>
      </nav>

      <div className="theme">
        <button onClick={() => setTheme("light")}></button>
        <button onClick={() => setTheme("dark")} className="dark"></button>
      </div>

      <Hero />

      <div className="features">
        <Features1 />
        <Features2 />
        <Features3 />
        <Features4 />
        <Features5 />
      </div>

      <Section2 />

      <Carousel />

      <Section1 />
      <FAQ />

      <Section4 />

      <Buy />

      <footer>
        <p className="text-[1.3vw] text-center  tracking-wide text-white bg-zinc-950">
          © 2025 PlantPal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
