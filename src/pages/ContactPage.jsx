import { Col, Row, Flex, Rate } from 'antd';
import React from 'react';
import ButtonComponent from '../components/ui/ButtonComponent';
import small_logo from "../assets/small_logo.png";

import "../style/ContactPage.css";
import iconPre from "../assets/icons/back.png";
import iconNext from "../assets/icons/forward.png";
import AutoSlider from '../components/ui/AutoSlider';

const contactData = [
  {
    id: 1,
    section: "testimonials",
    heading: { en: "Testimonials", kh: "មតិពីអតិថិជន" },
    title: { en: "Hear What Our Customers Are Saying", kh: "ស្តាប់អ្វីដែលអតិថិជនរបស់យើងនិយាយ" },
    description: { 
      en: `Discourage delight and plainly perceived wholly gentleman why joy pursuit.
Upon my arrangement dreadful Eleanor fittingly he hastened forth. Truly
conceit pardon or sir admirers thereof.`,
      kh: `ការព្រួយបារម្ភក្តីស្រឡាញ់ និងអារម្មណ៍ស្ងប់ស្ងាត់បានលេចធ្លោពីប្រជាជន
នៅពេលដែលលោក Eleanor បានបញ្ចប់ការរៀបចំ។ ពិតជាសមរម្យសម្រាប់អ្នកគាំទ្រ។`
    },
    customerName: { en: "Zen Warriors", kh: "យុទ្ធជនសេន" },
    customerRole: { en: "Customer", kh: "អតិថិជន" },
    rating: 5,
    avatars: [
      "https://i.pinimg.com/736x/bf/75/3c/bf753c1f22036a06522bf7828274a867.jpg",
      "https://i.pinimg.com/736x/79/95/1d/79951d778b234f011608639f66d7a7ba.jpg",
      "https://i.pinimg.com/736x/e6/54/a7/e654a798b0b7cceef537111aa29bb3b5.jpg",
    ],
    buttonText: { en: "View All", kh: "មើលទាំងអស់" }
  },
  {
    id: 2,
    section: "gallery",
    heading: { en: "OUR GALLERY", kh: "វិចិត្រសាលរបស់យើង" },
    title: { en: "Life on the Farm Our Gallery", kh: "ជីវិតលើស្រែ វិចិត្រសាលរបស់យើង" },
    slides: [
      "https://picsum.photos/400/300?random=1",
      "https://picsum.photos/400/300?random=2",
      "https://picsum.photos/400/300?random=3",
      "https://picsum.photos/400/300?random=4",
    ]
  }
];

function ContactPage() {
  return (
    <>
      <Flex
        id='contact'
        vertical
        justify='center'
        align='center'
        style={{ width:'100%', padding:"80px 0px", backgroundColor: "rgba(126, 153, 163, 0.1)" }}
      >
        <Flex justify='center' align='center' className='seection-contact'>
          <Row gutter={[10, 0]}> {/* Add gutter for spacing */}
            {/* LEFT COLUMN */}
            <Col xs={24} sm={24} md={8} lg={6}> {/* smaller width */}
              <div className='box-contact'>
                <h3 className='box-contact-title'>Testimonials</h3>
                <h1>Hear What Our Customers Are Saying</h1>

                <div className='btn-wrapper'>
                  <ButtonComponent text='View All' onClick={()=>{}} />
                </div>
              </div>
            </Col>

            {/* RIGHT COLUMN */}
            <Col  xs={24} sm={24} md={14} lg={16}> {/* larger width */}
              <Flex vertical className='detail-customer' justify='center' align='flex-start' style={{ height: '100%' }}>
                <p className='dis-customer'>
                  Discourage delight and plainly perceived wholly gentleman why joy pursuit.
                  Upon my arrangement dreadful Eleanor fittingly he hastened forth. Truly
                  conceit pardon or sir admirers thereof.
                  
                </p>
                <h1>Zen Warriors</h1>
                <span style={{ padding:5 ,fontSize:18 }}>Customer</span>

                <Rate defaultValue={5} style={{padding:"5px 16px"}}/>
                <Flex gap={10} style={{marginTop:10 }}>
                  {[
                    { src: "https://i.pinimg.com/736x/bf/75/3c/bf753c1f22036a06522bf7828274a867.jpg", size: 45 },
                    { src: "https://i.pinimg.com/736x/79/95/1d/79951d778b234f011608639f66d7a7ba.jpg", size: 60 },
                    { src: "https://i.pinimg.com/736x/e6/54/a7/e654a798b0b7cceef537111aa29bb3b5.jpg", size: 45 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="customer-avatar"
                      style={{ width: item.size, height: item.size }}
                    >
                      <img src={item.src} alt={`customer-${index}`} />
                    </div>
                  ))}
                </Flex>
              </Flex>

              <div className='style-logo'>
                  <img src={small_logo} alt="Logo" />
                </div>

            </Col>

            <Col xs={24} sm={24} md={2} lg={2}> 
              <Flex justify='space-around' align='flex-end' style={{ minWidth:100, height: '100%'  }}>
                <div className='button-pre' >
                  <img src={iconPre}  alt="" />
                </div>
                <div className='button-next'>
                  <img src={iconNext} alt="" />
                  </div>
              </Flex>
            </Col>
          </Row>
        </Flex>
      </Flex>

      {/* Our Gallery */}
      <Flex
        vertical
        justify='center'
        align='center'
        style={{ width:'100%', padding:"60px 0px"}}
      >
        <h3 style={{padding:'16px 0px'}}>OUR GALLERY</h3>
        <h1 style={{ textAlign:'center'}}>Life on the Farm Our <br />Gallery</h1>

        <AutoSlider />
      </Flex>
    </>
  );
}

export default ContactPage;