import React from "react";

export const FAQ = () => {
  return (
    <section id="faq" className="faq-section py-[8vw]  px-[10vw]">
      <h2 className="text-[2vw]  font-bold mb-[2vw] text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <details className="bg-white  rounded-lg shadow p-[1vw]">
          <summary className=" font-semibold cursor-pointer">
            What is PlantPal?
          </summary>
          <p className="mt-[1vh]">
            Plant Pal is an advanced plant care solution equipped with an AI
            chip for automatic water, light, and temperature detection.It offers
            70+ expressions and seamless integration with popular smart home
            platforms like Apple HomeKit, Google Home, and Amazon Alexa.
          </p>
        </details>
        <details className="bg-white  rounded-lg shadow p-[1vw]">
          <summary className="font-semibold cursor-pointer">
            Can i coustomise the settings and expressions for my plants?
          </summary>
          <p className="mt-[1vh]">
            Yes, you can customise the settings and expressions for your plants
            through our user-friendly app, allowing you to meet your plants'
            unique needs with the built-in plant selector. The app offers
            further customisation options, such as displaying photos, activating
            sleep mode, and adjusting various other settings to enhance your
            Plant Pal experience.
          </p>
        </details>
        <details className="bg-white  rounded-lg shadow p-[1vw]">
          <summary className="font-semibold cursor-pointer">
            Do i need to water my Plant mannually?
          </summary>
          <p className="mt-[1vh]">
            Your Plant Pal will notify you when it needs water and how much it
            requires, both through its facial expressions and our Tuya Smart
            App. Your Plant Pal automatically absorbs water from its tank, but
            it only supports adding water to the reservoir, not watering
            directly into the soil.
          </p>
        </details>
        <details className="bg-white  rounded-lg shadow p-[1vw]">
          <summary className="font-semibold cursor-pointer">
            How do I contact support?
          </summary>
          <p className="mt-[1vh]">
            You can reach out to our support team via the contact form available
            on our website.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
