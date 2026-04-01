import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Avatar, Button, Flex, Rate } from 'antd';

import "../../style/CardSliderProject.css";
import a from "../../assets/image_silder_project/a.png";
import b from "../../assets/image_silder_project/b.png";
import c from "../../assets/image_silder_project/c.png";
import d from "../../assets/image_silder_project/d.png";
import e from "../../assets/image_silder_project/e.png";
import f from "../../assets/image_silder_project/f.png";
import g from "../../assets/image_silder_project/g.png";
import h from "../../assets/image_silder_project/h.png";
import i from "../../assets/image_silder_project/i.png";

import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const projectCardSliderData = [
  { 
    id: 1, 
    title: 'Oranges', 
    title_kh: 'ផ្លែក្រូច',
    sale_price: 20, 
    price_after_discount: 12, 
    image: a
  },
  { 
    id: 2, 
    title: 'Watermelon', 
    title_kh: 'ផ្លែឪឡឹក',
    sale_price: 18, 
    price_after_discount: 15, 
    image: b 
  },
  { 
    id: 3, 
    title: 'Grapes', 
    title_kh: 'ផ្លែទំពាំងបាយជូ',
    sale_price: 25, 
    price_after_discount: 20, 
    image: c 
  },
  { 
    id: 4, 
    title: 'Avocado', 
    title_kh: 'ផ្លែបឺរ',
    sale_price: 30, 
    price_after_discount: 24, 
    image: d 
  },
  { 
    id: 5, 
    title: 'Pineapple', 
    title_kh: 'ផ្លែម្នាស់',
    sale_price: 22, 
    price_after_discount: 18, 
    image: e 
  },
  { 
    id: 6, 
    title: 'Green Melon', 
    title_kh: 'ផ្លែឪឡឹកបៃតង',
    sale_price: 15, 
    price_after_discount: 8.5, 
    image: f
  },
  { 
    id: 7, 
    title: 'Custard Apple', 
    title_kh: 'ផ្លែទៀប',
    sale_price: 3.99, 
    price_after_discount: 2.67, 
    image: g
  },
  { 
    id: 8, 
    title: 'Mangosteen', 
    title_kh: 'ផ្លែមង្ឃុត',
    sale_price: 5, 
    price_after_discount: 4.99, 
    image: h
  },
  { 
    id: 9, 
    title: 'Rambutan', 
    title_kh: 'ផ្លែសាវម៉ាវ',
    sale_price: 7, 
    price_after_discount: 5.99, 
    image: i
  },
];
export default function CardSliderProject() {
  const {t ,i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="slider-wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={35}
        pagination={{ clickable: true }}
        breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 10 }, 
            640: { slidesPerView: 2, spaceBetween: 15 }, 
            768: { slidesPerView: 3, spaceBetween: 20 }, 
            1400: { slidesPerView: 4, spaceBetween: 24 },
        }}
        modules={[Pagination]}
       
      >
        {projectCardSliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <Flex
              vertical
              justify="space-evenly"
              align="center"
              className="card-box"
            >
              {/* image */}
              <div className="card-img">
                <img src={item.image} alt={item.title} />
              </div>
              <h1 className="card-title">{lang === "km" ? item.title_kh : item.title}</h1>
              <Rate defaultValue={4} />
              <Flex align="center" gap={20} style={{padding:10}}>
                <p className="old-price">${item.sale_price}</p>
                <span className="new-price">${item.price_after_discount}</span>
              </Flex>

              <Flex vertical justify="flex-end" align="center" className="effect-over" >
                
                <Avatar
                    size={50}
                    style={{
                    backgroundColor: "#174143",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop:10,
                    position:'absolute',
                    top:"40%"
                    
                    }}
                >
                    <MdOutlineShoppingCart size={25} color="#fff" />
                </Avatar>
                {/* Button below avatar */}
                <Flex justify='center' align='center' className='button-cart' type="primary" >
                    <span>Add To Cart</span> <FaArrowRightLong />
                </Flex>
                </Flex>
            </Flex>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}