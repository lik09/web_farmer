import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Flex } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "swiper/css";
import "../../style/CardSliderBlog.css";
import { FaArrowRightLong, FaRegComments } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import small_logo from "../../assets/small_logo.png";

const data = [
  {
    id: 1,
    title: "Fresh Fruits",
    description:
      "Naturally sweet and rich in vitamins, fresh fruits are essential for a healthy lifestyle.",
    image:
      "https://i.pinimg.com/1200x/ab/d3/9c/abd39c905de130d458b568d5dce93dd5.jpg",
  },
  {
    id: 2,
    title: "Organic Vegetables",
    description:
      "Grown without chemicals, organic vegetables provide essential nutrients and better taste.",
    image:
      "https://i.pinimg.com/1200x/2b/96/21/2b9621ec2a5d20bac60d8b17a9623aba.jpg",
  },
  {
    id: 3,
    title: "Sunflowers",
    description:
      "Bright and beautiful, sunflowers are a source of healthy oils and natural seeds.",
    image:
      "https://i.pinimg.com/1200x/7a/f4/32/7af4325acc90e04370531c1182c51338.jpg",
  },
  {
    id: 4,
    title: "Wheat Crops",
    description:
      "A staple food source, wheat is used to produce flour for bread and many daily foods.",
    image:
      "https://i.pinimg.com/736x/37/5a/7b/375a7b1b1b36bde39ad510808956220f.jpg",
  },
  {
    id: 5,
    title: "Corn Fields",
    description:
      "Corn is widely used for food, animal feed, and many industrial products.",
    image: "https://i.pinimg.com/1200x/29/60/0f/29600f1718eaf242e593caf61e2ac40b.jpg",
  },
  {
    id: 6,
    title: "Rice Farming",
    description: "Rice is a primary food for many countries, especially in Asia.",
    image: "https://i.pinimg.com/1200x/aa/32/b8/aa32b8f2a07d497e51e0eb8f79c64cc8.jpg",
  },
];

export default function CardSliderBlog() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Prev Button */}
      <Button
        icon={<LeftOutlined />}
        onClick={() => swiperInstance?.slidePrev()}
        style={{
          position: "absolute",
          top: "50%",
          left: -35,
          transform: "translateY(-50%)",
          zIndex: 10,
          border: "none",
          background: "transparent",
        }}
      />

      {/* Next Button */}
      <Button
        icon={<RightOutlined />}
        onClick={() => swiperInstance?.slideNext()}
        style={{
          position: "absolute",
          top: "50%",
          right: -35,
          transform: "translateY(-50%)",
          zIndex: 10,
          border: "none",
          background: "transparent",
        }}
      />

      <Swiper
        onSwiper={setSwiperInstance}
        loop={true}
        spaceBetween={20}
        slidesPerView={4} // default, overridden by breakpoints
        breakpoints={{
          1400: { slidesPerView: 3, spaceBetween: 24 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
          800: { slidesPerView: 2, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          
          0: { slidesPerView: 1, spaceBetween: 12 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Flex vertical className="box-card-blog">
              <div className="pic-card">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="content-card">
                <Flex
                  align="center"
                  
                  style={{
                    fontSize: 12,
                    fontWeight: 200,
                    gap: "10px",
                    padding: "5px 0px",
                  }}
                >
                  <p style={{ display: "flex", alignItems: "center", margin: 0, gap: "4px" }}>
                    <MdOutlineDateRange /> March 03, 2026
                  </p>
                  <p style={{ display: "flex", alignItems: "center", margin: 0, gap: "4px" }}>
                    <FaRegComments /> 0 Comments
                  </p>
                </Flex>

                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <Flex
                  className="button-rand-more-card"
                  justify="start"
                  align="center"
                  style={{ backgroundColor: "transparent" }}
                >
                  <span
                    onClick={() => console.log("Read more clicked")}
                    style={{
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Read More <FaArrowRightLong />
                  </span>
                </Flex>
              </div>

              {/* logo */}
              <div className="style-logo">
                <img src={small_logo} alt="" />
              </div>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}