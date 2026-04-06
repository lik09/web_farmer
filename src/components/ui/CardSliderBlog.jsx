import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Flex } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "swiper/css";
import "../../style/CardSliderBlog.css";
import { FaArrowRightLong, FaRegComments } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import small_logo from "../../assets/small_logo.png";
import { useTranslation } from "react-i18next";
import { formatDate } from "../../utils/dateFormatter";

const data = [
  {
    id: 1,
    title: "Farmers grow rice",
    title_kh:"កសិករធ្វើស្រែ ស្រូវ",
    description:
      "Our Cambodian farmers work hard to cultivate rice traditionally to obtain fresh, delicious rice, rich in vitamins, and high quality for your family's health.",
    description_kh:"កសិករខ្មែរយើងខំប្រឹងប្រែងដាំដុះស្រូវតាមបែបប្រពៃណី ដើម្បីបានអង្ករស្រស់ឆ្ងាញ់ សម្បូរវីតាមីន និងគុណភាពខ្ពស់សម្រាប់សុខភាពគ្រួសារអ្នក។",
    date:"03-03-2026",
    comments:"5",
    image:
      "https://i.pinimg.com/1200x/ab/d3/9c/abd39c905de130d458b568d5dce93dd5.jpg",
  },
  {
    id: 2,
    title: "Organic tomatoes",
    title_kh: "ផ្លែប៉េងបោះសរីរាង្គ",
    description:
      "Organic tomatoes from Cambodian farmers' farms, grown without chemicals, using natural fertilizers, provide a delicious natural taste, are rich in vitamins A, C, and antioxidants, and are good for heart and skin health.",
    description_kh:"ផ្លែប៉េងបោះសរីរាង្គពីចំការកសិករខ្មែរ ដាំដុះដោយគ្មានជាតិគីមី ប្រើប្រាស់ជីធម្មជាតិ ផ្តល់នូវរសជាតិឆ្ងាញ់ធម្មជាតិ សម្បូរវីតាមីន A, C និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ល្អសម្រាប់សុខភាពបេះដូង និងស្បែក។",
    date:"2-01-2026",
    comments:"15",
    image:
      "https://i.pinimg.com/1200x/2b/96/21/2b9621ec2a5d20bac60d8b17a9623aba.jpg",
  },
  {
    id: 3,
    title: "Strawberry farm",
    title_kh:"ចម្ការផ្លែស្ត្របឺរី",
    description:
      "Organic strawberries from Cambodian farmers' farms, grown without chemicals, have a delicious sweet taste, are rich in vitamin C and antioxidants, and are good for skin health and the immune system.",
    description_kh:"ផ្លែស្ត្របឺរីសរីរាង្គពីចំការកសិករខ្មែរ ដាំដុះដោយគ្មានជាតិគីមី មានរសជាតិផ្អែមឆ្ងាញ់ សម្បូរវីតាមីន C និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ល្អសម្រាប់សុខភាពស្បែក និងប្រព័ន្ធភាពស៊ាំ។",
    date:"7-02-2026",
    comments:"58",
    image:
      "https://i.pinimg.com/1200x/7a/f4/32/7af4325acc90e04370531c1182c51338.jpg",
  },
  {
    id: 4,
    title: "Fresh Farm Lettuce",
    title_kh:"សាឡាត់ស្រស់ពីកសិដ្ឋាន",
    description:
      "Fresh lettuce from our farm, grown without chemicals, has crisp, crunchy leaves, rich in fiber and vitamins K and A, good for heart health and the digestive system.",
    description_kh:"សាឡាត់ស្រស់ៗពីកសិដ្ឋានរបស់យើង ដាំដុះដោយគ្មានជាតិគីមី មានស្រទាប់ស្លឹកក្រៀមៗ ស្រួយៗ សម្បូរជាតិសរសៃ និងវីតាមីន K, A ល្អសម្រាប់សុខភាពបេះដូង និងប្រព័ន្ធរំលាយអាហារ។",
    date:"7-03-2026",
    comments:"78",
    image:
      "https://i.pinimg.com/736x/37/5a/7b/375a7b1b1b36bde39ad510808956220f.jpg",
  },
  {
    id: 5,
    title: "Organic plants from the farm",
    title_kh:"រុក្ខជាតិសរីរាង្គពីកសិដ្ឋាន",
    description:
      "Organic plants from our farm, grown without chemicals, using 100% natural fertilizers, suitable for planting in farms, vegetable gardens or family gardens, ensuring quality and good growth.",
    description_kh:"កូនរុក្ខជាតិសរីរាង្គពីកសិដ្ឋានរបស់យើង ដាំដុះដោយគ្មានជាតិគីមី ប្រើប្រាស់ជីធម្មជាតិ ១០០% សមស្របសម្រាប់ដាំក្នុងចំការ សួនបន្លែ ឬសួនច្បារក្នុងគ្រួសារ ធានាគុណភាព និងការលូតលាស់ល្អ។",
    date:"22-03-2026",
    comments:"200",
    image: "https://i.pinimg.com/1200x/29/60/0f/29600f1718eaf242e593caf61e2ac40b.jpg",
  },
  {
    id: 6,
    title: "Fruit tree",
    title_kh:"កូនឈើហូបផ្លែ",
    description: "Many types of fruit trees, such as mangoes, papayas, pineapples, oranges, jackfruit, guavas, and other fruit trees, are suitable for planting in large orchards and gardens.",
    description_kh:"កូនឈើហូបផ្លែជាច្រើនប្រភេទ ដូចជា កូនស្វាយ កូនទៀប កូនម្នាស់ កូនក្រូច កូនខ្នុរ កូនត្របែក និងឈើហូបផ្លែផ្សេងៗទៀត ស័ក្តិសមសម្រាប់ដាំក្នុងចំការ និងសួនច្បារធំៗ។",
    date:"12-03-2026",
    comments:"178",
    image: "https://i.pinimg.com/1200x/aa/32/b8/aa32b8f2a07d497e51e0eb8f79c64cc8.jpg",
  },
];




export default function CardSliderBlog() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const {t ,i18n } = useTranslation();
  const currentLang = i18n.language;

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
                    <MdOutlineDateRange /> {formatDate(item.date, currentLang)}
                  </p>
                  <p style={{ display: "flex", alignItems: "center", margin: 0, gap: "4px" }}>
                    <FaRegComments /> {item.comments} <span>{t('comments')}</span>
                  </p>
                </Flex>

                <h2>{currentLang === "km" ? item.title_kh : item.title}</h2>
                <p>{currentLang === "km" ? item.description_kh : item.description}</p>

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
                    {t('read_more')} <FaArrowRightLong />
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