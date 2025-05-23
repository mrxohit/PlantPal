import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./Car.css";

import video1 from "../assets/vd1.mp4";
import image1 from "../assets/img1.jpg";
import video2 from "../assets/vd2.mp4";
import image2 from "../assets/img2.jpg";
import video3 from "../assets/vd3.mp4";
import image3 from "../assets/img3.jpg";
import video4 from "../assets/vd4.mp4";
import video5 from "../assets/vd5.mp4";

const SlideCard = ({ id, type, src, videoRef, onPlay }) => {
  return type === "video" ? (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-full object-cover"
      controls
      loop
      onPlay={onPlay}
    ></video>
  ) : (
    <img src={src} alt={`Slide ${id}`} className="w-full h-full object-cover" />
  );
};

const slides = [
  { id: 1, type: "video", src: video1 },
  { id: 2, type: "image", src: image1 },
  { id: 3, type: "video", src: video2 },
  { id: 4, type: "image", src: image2 },
  { id: 5, type: "video", src: video3 },
  { id: 6, type: "image", src: image3 },
  { id: 7, type: "video", src: video4 },
  { id: 8, type: "video", src: video5 },
];

const Carousel = () => {
  const videoRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== swiper.realIndex && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="carousel  w-full   flex overflow-hidden gap-4 "
    >
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={90}
        onSlideChange={handleSlideChange}
        coverflowEffect={{
          rotate: 10,
          stretch: 2,
          depth: 400,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        className=" c1 w-[75vw]"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={slide.id}
            className="bg-white rounded-2xl overflow-hidden shadow-xl flex  items-baseline transition-all duration-500"
          >
            <SlideCard
              id={slide.id}
              type={slide.type}
              src={slide.src}
              videoRef={(el) => (videoRefs.current[index] = el)}
              onPlay={() => {
                videoRefs.current.forEach((video, idx) => {
                  if (idx !== index && video && !video.paused) video.pause();
                });
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Carousel;
