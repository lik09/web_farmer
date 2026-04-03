import React, { useRef } from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ButtonComponent from "./ButtonComponent";
import { useTranslation } from "react-i18next";

const slides = [
  {
    img: "https://i.pinimg.com/1200x/b0/a7/d9/b0a7d9b6c9e2d5bc48ed4457cfa5ab83.jpg",
    title: "Pure Agriculture & Organic Essentials",
    title_kh: "ដើម & ធម្មជាតិ កសិកម្មសុទ្ធ & សរីរាង្គសំខាន់ៗ",
    description: "Experience the purity of nature with fresh, organic agricultural products grown with care and sustainability.",
    description_kh: "ទទួលបានផលិតផលកសិកម្មសុទ្ធ និងសរីរាង្គថ្មីៗ ដែលដាំដុះដោយការយកចិត្តទុកដាក់ និងគាំទ្របរិស្ថាន។"
  },
  {
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    title: "Fresh From Farm",
    title_kh: "ថ្មីៗពីកសិដ្ឋាន",
    description: "Directly sourced from local farms, bringing freshness and quality straight to your table.",
    description_kh: "នាំមកពីកសិដ្ឋានមូលដ្ឋាន ដើម្បីផ្តល់ភាពស្រស់ និងគុណភាពដល់តុបាយរបស់អ្នក។"
  },
  {
    img: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
    title: "Healthy Organic Living",
    title_kh: "ជីវិតសុខភាពល្អសរីរាង្គ",
    description: "Choose organic for a healthier lifestyle free from harmful chemicals.",
    description_kh: "ជ្រើសរើសផលិតផលសរីរាង្គ ដើម្បីរស់នៅមានសុខភាពល្អ និងគ្មានសារធាតុគីមីអាក្រក់។"
  },
  {
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    title: "Sustainable Farming",
    title_kh: "កសិកម្មនិរន្តរភាព",
    description: "Supporting eco-friendly farming practices that protect nature.",
    description_kh: "គាំទ្រការដាំដុះដែលសន្សំសំចៃបរិស្ថាន និងការពារធម្មជាតិ។"
  },
  {
    img: "https://i.pinimg.com/1200x/d3/d8/fb/d3d8fb8c8dd2fda7ce298686764f9b48.jpg",
    title: "Farm to Table",
    title_kh: "ពីកសិដ្ឋានដល់តុបាយ",
    description: "Fresh produce delivered directly from farms to your home.",
    description_kh: "ផលិតផលស្រស់ៗ នាំផ្ទាល់ពីកសិដ្ឋានមកដល់ផ្ទះរបស់អ្នក។"
  },
  {
    img: "https://i.pinimg.com/736x/a8/44/41/a84441a1e354ba640138c90ab5c88e37.jpg",
    title: "Natural & Safe Products",
    title_kh: "ផលិតផលធម្មជាតិ និងសុវត្ថិភាព",
    description: "Safe, clean, and natural products you can trust for your family’s health.",
    description_kh: "ផលិតផលសុវត្ថិភាព ស្អាត និងធម្មជាតិ ដែលអ្នកអាចទុកចិត្តសម្រាប់សុខភាពគ្រួសារ។"
  },
  {
    img: "https://i.pinimg.com/1200x/b0/99/0f/b0990f32f94679a39128d831052238f4.jpg",
    title: "Support Local Farmers",
    title_kh: "គាំទ្រកសិករមូលដ្ឋាន",
    description: "Empowering local farmers by connecting them directly with customers.",
    description_kh: "ជួយគាំទ្រកសិករមូលដ្ឋាន ដោយភ្ជាប់ពួកគេទៅកាន់អតិថិជនដោយផ្ទាល់។"
  },
  {
    img: "https://i.pinimg.com/1200x/cb/c8/eb/cbc8eb9389a17fd2d2e5bc6463548f3a.jpg",
    title: "Green & Fresh Lifestyle",
    title_kh: "ជីវិតបៃតង និងស្រស់ស្រាយ",
    description: "Live green with fresh, eco-friendly products that care for you and the planet.",
    description_kh: "រស់នៅបែបបៃតងជាមួយផលិតផលស្រស់ និងគាំទ្របរិស្ថាន។"
  },
  {
    img: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6",
    title: "Pure Taste of Nature",
    title_kh: "រសជាតិដើមពីធម្មជាតិ",
    description: "Enjoy the authentic taste of naturally grown fruits and vegetables.",
    description_kh: "រីករាយនឹងរសជាតិពិតប្រាកដពីផ្លែឈើ និងបន្លែដែលដាំដោយធម្មជាតិ។"
  },
  {
    img: "https://i.pinimg.com/736x/8d/99/14/8d9914ce83f0e0592e4ae16cc1cae493.jpg",
    title: "Organic for Better Future",
    title_kh: "សរីរាង្គសម្រាប់អនាគតល្អប្រសើរ",
    description: "Building a healthier future through organic farming and sustainable choices.",
    description_kh: "កសាងអនាគតល្អប្រសើរដោយការជ្រើសរើសកសិកម្មសរីរាង្គ និងជីវិតនិរន្តរភាព។"
  }
];

const carouselHeight = 600;

function CarouselComponent() {
  const carouselRef = useRef(null);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handlePrev = () => carouselRef.current.prev();
  const handleNext = () => carouselRef.current.next();

  return (
    <div id='home' style={{ position: "relative" }}>
      <Carousel
        ref={carouselRef}
        autoplay
        autoplaySpeed={3000}
        dots={true}
        pauseOnHover={true}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <div style={{ position: "relative", height: `${carouselHeight}px` }}>
              {/* Image */}
              <img
                loading="lazy"
                src={slide.img}
                alt={`slide-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Overlay text + button */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  textAlign: "center",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                }}
              >
                <div style={{ marginBottom:25 ,fontSize:12 }}>
                  <h1>{t("original_and_natural")}</h1>
                </div>
                <h1 style={{ fontSize: "60px", marginBottom: "16px" ,fontWeight:"bold" ,lineHeight: 1.2}}>
                  {currentLang === "km" ? slide.title_kh : slide.title}
                </h1>
                
                <div style={{margin:'25px 0px'}}>
                  <ButtonComponent text={t('discover_more')} onClick={()=>{}} />
                </div>  

              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Prev Button */}
      <Button
        type="primary"
        shape="shape"
        icon={<LeftOutlined />}
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(0,0,0,0.5)",
          border: "none",
        }}
      />

      {/* Next Button */}
      <Button
        type="primary"
        shape="shape"
        icon={<RightOutlined />}
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "rgba(0,0,0,0.5)",
          border: "none",
        }}
      />
    </div>
  );
}

export default CarouselComponent;