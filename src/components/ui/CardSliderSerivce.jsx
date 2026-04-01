import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Button, Flex } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../style/CardSliderSerivce.css";

// Swiper styles
import "swiper/css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    title: "Fresh Fruits",
    title_kh: "ផ្លែឈើស្រស់",
    description: "Naturally sweet and rich in vitamins, fresh fruits are essential for a healthy lifestyle.",
    description_kh: "ផ្លែឈើស្រស់ៗមានរសជាតិផ្អែមធម្មជាតិ និងសម្បូរវីតាមីន ដែលចាំបាច់សម្រាប់ការរស់នៅមានសុខភាពល្អ។",
    image: "https://i.pinimg.com/736x/88/44/60/8844605ca6814eb08e80ae01cd9c5ef3.jpg",
  },
  {
    id: 2,
    title: "Organic Vegetables",
    title_kh: "បន្លែអ័រហ្គានិច",
    description: "Grown without chemicals, organic vegetables provide essential nutrients and better taste.",
    description_kh: "ដាំដុះដោយគ្មានសារធាតុគីមី បន្លែអ័រហ្គានិចផ្តល់សារធាតុចិញ្ចឹមចាំបាច់ និងរសជាតិឆ្ងាញ់ជាង។",
    image: "https://i.pinimg.com/1200x/57/e8/d3/57e8d34dccb9149a36e33ae90644db53.jpg",
  },
  {
    id: 3,
    title: "Sunflowers",
    title_kh: "ផ្កាព្រះអាទិត្យ",
    description: "Bright and beautiful, sunflowers are a source of healthy oils and natural seeds.",
    description_kh: "ភ្លឺស្រស់ស្អាត ផ្កាព្រះអាទិត្យជាប្រភពប្រេងល្អសម្រាប់សុខភាព និងគ្រាប់ធម្មជាតិ។",
    image: "https://i.pinimg.com/736x/f9/2c/4a/f92c4ad601a25841396828b7f0364eb7.jpg",
  },
  {
    id: 4,
    title: "Wheat Crops",
    title_kh: "ដំណាំស្រូវសាលី",
    description: "A staple food source, wheat is used to produce flour for bread and many daily foods.",
    description_kh: "ជាអាហារសំខាន់ ស្រូវសាលីត្រូវបានប្រើផលិតម្សៅសម្រាប់នំប៉័ង និងអាហារប្រើប្រាស់ប្រចាំថ្ងៃជាច្រើន។",
    image: "https://i.pinimg.com/736x/06/c3/06/06c3064d798d536c84cd5bdc2926cd10.jpg",
  },
  {
    id: 5,
    title: "Corn Fields",
    title_kh: "ស្រែពោត",
    description: "Corn is widely used for food, animal feed, and many industrial products.",
    description_kh: "ពោតត្រូវបានប្រើយ៉ាងទូលំទូលាយសម្រាប់អាហារ ចំណីសត្វ និងផលិតផលឧស្សាហកម្មជាច្រើន។",
    image: "https://i.pinimg.com/736x/87/e5/f3/87e5f39a3f4e040151b857c14c56f117.jpg",
  },
  {
    id: 6,
    title: "Rice Farming",
    title_kh: "ការដាំដុះស្រូវ",
    description: "Rice is a primary food for many countries, especially in Asia.",
    description_kh: "ស្រូវជាអាហារសំខាន់សម្រាប់ប្រទេសជាច្រើន ជាពិសេសនៅអាស៊ី។",
    image: "https://i.pinimg.com/736x/d0/28/11/d028118fe3d81c0247b3e77223eeb4a3.jpg",
  },
  {
    id: 7,
    title: "Green Herbs",
    title_kh: "ស្មៅបៃតង",
    description: "Fresh herbs add flavor and health benefits to your daily meals.",
    description_kh: "ស្មៅស្រស់បន្ថែមរសជាតិ និងអត្ថប្រយោជន៍សុខភាពដល់អាហារប្រចាំថ្ងៃរបស់អ្នក។",
    image: "https://i.pinimg.com/1200x/e2/47/9c/e2479c3cfe809e626eed7034cfdb6dee.jpg",
  },
  {
    id: 8,
    title: "Coffee Plants",
    title_kh: "ដំណាំកាហ្វេ",
    description: "Coffee is one of the most popular beverages, grown in tropical regions.",
    description_kh: "កាហ្វេជាភេសជ្ជៈពេញនិយមមួយ ដែលដាំដុះនៅតំបន់អាកាសធាតុក្តៅ។",
    image: "https://i.pinimg.com/736x/4a/f4/d7/4af4d715115577fa1892817ff79809d5.jpg",
  },
  {
    id: 9,
    title: "Tea Leaves",
    title_kh: "ស្លឹកតែ",
    description: "Tea is a refreshing drink made from carefully grown and harvested leaves.",
    description_kh: "តែជាភេសជ្ជៈស្រស់ស្រាយ ដែលផលិតពីស្លឹកដែលបានដាំ និងប្រមូលដោយយកចិត្តទុកដាក់។",
    image: "https://i.pinimg.com/736x/c4/3e/9f/c43e9f23ab66cac97a6af80ff78d61f0.jpg",
  },
  {
    id: 10,
    title: "Sugarcane",
    title_kh: "អំពៅ",
    description: "Sugarcane is used to produce sugar and many sweet products.",
    description_kh: "អំពៅត្រូវបានប្រើសម្រាប់ផលិតស្ករ និងផលិតផលផ្អែមជាច្រើន។",
    image: "https://i.pinimg.com/736x/21/8d/65/218d6593551d1ae30216aeeb00bd8ead.jpg",
  },
];

export default function CardSliderService() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const {t ,i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Custom prev button */}
      <Button
        icon={<LeftOutlined/>}          // icon only
        onClick={() => swiperInstance?.slidePrev()}
        style={{
           
            position: "absolute",
            top: "50%",
            left: -35,
            transform: "translateY(-50%)",
            zIndex: 10,
            border: "none",               // optional: remove border
            background: "transparent",    // optional: transparent bg
        }}
        />

      {/* Custom next button */}
      <Button
        icon={<RightOutlined />}         // icon only
        onClick={() => swiperInstance?.slideNext()}
        style={{
           
            position: "absolute",
            top: "50%",
            right: -35,
            transform: "translateY(-50%)",
            zIndex: 10,
            border: "none",               // optional: remove border
            background: "transparent",    // optional: transparent bg
        }}
        />

      <Swiper
        onSwiper={setSwiperInstance} // ✅ get swiper instance
        slidesPerView={4}
        spaceBetween={35}
        loop={true}
        breakpoints={{
          1400: { slidesPerView: 4, spaceBetween: 24 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
          800: { slidesPerView: 2, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          
          0: { slidesPerView: 1, spaceBetween: 12 },
        }}
        navigation={false} // disable default arrows
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Flex vertical className="box-card-serivce">
                <div className="pic-card">
                    <img src={item.image} alt={item.image+".png"}/>
                </div>
                <div className="content-card">
                    <h2>{lang === "km" ? item.title_kh : item.title}</h2>
                    <Flex align="center">
                        <div style={{flex:2}}>
                          <p>
                            {lang === "km" ? item.description_kh : item.description}
                          </p>
                        </div>

                        {/* button over */}
                        <Flex className="button-detail-card" justify="center" align="center">
                           <FaArrowRightLong />
                        </Flex>
                    </Flex>
                </div>
                
             
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}