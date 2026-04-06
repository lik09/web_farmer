import { Col, Row, Flex, Rate, Carousel } from 'antd';
import React, { useRef } from 'react';
import ButtonComponent from '../components/ui/ButtonComponent';
import small_logo from "../assets/small_logo.png";

import "../style/ContactPage.css";
import iconPre from "../assets/icons/back.png";
import iconNext from "../assets/icons/forward.png";
import AutoSlider from '../components/ui/AutoSlider';
import { useTranslation } from 'react-i18next';

const contactData = [
  {
    id: 1,
    description: `Discourage delight and plainly perceived wholly gentleman why joy pursuit.
    Upon my arrangement dreadful Eleanor fittingly he hastened forth.`,
    description_kh: `ការព្រួយបារម្ភ និងអារម្មណ៍រីករាយត្រូវបានបង្ហាញយ៉ាងច្បាស់។
    ការរៀបចំរបស់ខ្ញុំបានធ្វើឲ្យ Eleanor ឆាប់រហ័សទៅមុខ។`,
    
    customer_name: "Zen Warriors",
    customer_name_kh: "យុទ្ធជនសេន",
    
    rating: 5,
    avatars: [
      "https://i.pinimg.com/736x/bf/75/3c/bf753c1f22036a06522bf7828274a867.jpg",
      "https://i.pinimg.com/736x/79/95/1d/79951d778b234f011608639f66d7a7ba.jpg",
      "https://i.pinimg.com/736x/e6/54/a7/e654a798b0b7cceef537111aa29bb3b5.jpg",
    ],
  },
  {
    id: 2,
    description: `Another awesome testimonial from a happy customer.`,
    description_kh: `មតិយោបល់ដ៏ល្អមួយទៀតពីអតិថិជនដែលពេញចិត្ត។`,
    
    customer_name: "Green Fields",
    customer_name_kh: "វាលបៃតង",
    
    rating: 4,
    avatars: [
      "https://i.pinimg.com/736x/bf/75/3c/bf753c1f22036a06522bf7828274a867.jpg",
      "https://i.pinimg.com/736x/79/95/1d/79951d778b234f011608639f66d7a7ba.jpg",
      "https://i.pinimg.com/736x/e6/54/a7/e654a798b0b7cceef537111aa29bb3b5.jpg",
    ],
  },
  {
    id: 3,
    description: `Yet another feedback praising our farm products.`,
    description_kh: `មតិយោបល់មួយទៀតដែលសរសើរអំពីផលិតផលកសិកម្មរបស់យើង។`,
    
    customer_name: "Happy Farmers",
    customer_name_kh: "កសិកររីករាយ",
    
    rating: 5,
    avatars: [
      "https://i.pinimg.com/736x/bf/75/3c/bf753c1f22036a06522bf7828274a867.jpg",
      "https://i.pinimg.com/736x/79/95/1d/79951d778b234f011608639f66d7a7ba.jpg",
      "https://i.pinimg.com/736x/e6/54/a7/e654a798b0b7cceef537111aa29bb3b5.jpg",
    ],
  }
];

function ContactPage() {
  const carouselRef = useRef(null);
  const {t ,i18n } = useTranslation();
  const lang = i18n.language;
  

  const handlePrev = () => carouselRef.current.prev();
  const handleNext = () => carouselRef.current.next();

  return (
    <>
      <Flex
        id='contact'
        vertical
        align='center'
        style={{ width:'100%', padding:"80px 20px", backgroundColor: "rgba(126, 153, 163, 0.1)" }}
      >
        <Flex className='seection-contact'>
          <Row gutter={[10, 10]}>
            
            {/* LEFT */}
            <Col xs={24} md={8} lg={6}>
              <div className='box-contact' >
                <h3 className='box-contact-title'>{t('testimonials')}</h3>
                <h1>{t('hear_what_our_customer_are_saying')}</h1>
               
                <div style={{margin:'25px 0px'}}>
                  <ButtonComponent text={t('view_all')} />
                </div>
              </div>
            </Col>

            {/* CENTER */}
            <Col xs={24} md={14} lg={16}>
              <div className="carousel-wrapper" >
                <Carousel ref={carouselRef} dots={false} >
                  {contactData.map((item) => (
                    <div key={item.id}  className="carousel-slide-item">
                      <Flex vertical className='detail-slide'>
                        <p className='dis-customer'>{lang === "km" ? item.description_kh : item.description}</p>
                        <h1>{lang === "km" ? item.customer_name_kh : item.customer_name}</h1>
                        <span>{t('customer')}</span>

                        <Rate defaultValue={item.rating} />

                        <div className="avatar-group">
                          {item.avatars.map((src, i) => (
                            <div key={i} className="customer-avatar">
                              <img src={src} alt="" />
                            </div>
                          ))}
                        </div>

                        <div className='style-logo'>
                          <img src={small_logo} alt="" />
                        </div>
                      </Flex>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Col>

            {/* RIGHT */}
            <Col xs={24} md={2}>
              <div className="nav-buttons">
                <div className='button-pre' onClick={handlePrev}>
                  <img src={iconPre} alt="" />
                </div>
                <div className='button-next' onClick={handleNext}>
                  <img src={iconNext} alt="" />
                </div>
              </div>
            </Col>

          </Row>
        </Flex>
      </Flex>

      {/* Gallery */}
      <Flex vertical align='center' style={{ padding:"60px 0" }}>
        <h3>{t('our_gallery')}</h3>
        <h1 style={{ textAlign:'center' }}>
          {t('life_on_the_farm_our_gallery')}
        </h1>
        <AutoSlider />
      </Flex>
    </>
  );
}

export default ContactPage;