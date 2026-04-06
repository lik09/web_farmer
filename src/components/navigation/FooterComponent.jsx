import { Button, Col, Flex, Input, Row, Menu, Grid } from "antd";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "../../style/FooterComponent.css";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const footerData = {
  description: "Web Farmer is dedicated to supporting sustainable agriculture by offering fresh, organic produce directly from local farms. We connect farmers with consumers, ensuring fair prices and high-quality products while promoting healthy eating and environmental stewardship.",
  description_kh: "វេបហ្វាមឺរ ត្រូវបានបង្កើតឡើងដើម្បីគាំទ្រដល់វិស័យកសិកម្មប្រកបដោយចីរភាព ដោយផ្តល់ជូននូវផលិតផលសរីរាង្គស្រស់ៗដោយផ្ទាល់ពីកសិដ្ឋានក្នុងស្រុក។ យើងភ្ជាប់កសិករទៅកាន់អ្នកប្រើប្រាស់ ធានាតម្លៃសមរម្យ និងផលិតផលគុណភាពខ្ពស់ ខណៈពេលដែលលើកកម្ពស់ការបរិភោគអាហារដែលមានសុខភាពល្អ និងការថែរក្សាបរិស្ថាន។"
};

const addressData = {
  address: "National Road No. 3, Makbrang Commune Tuek Chhou District, Kampot Province",
  address_kh: "ផ្លូវជាតិលេខ ៣ ឃុំមែកប្រាំង ស្រុកទឹកឈូ ខេត្តកំពត"
};

function FooterComponent() {
  const [email, setEmail] = useState("");
  const {t ,i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleSubscribe = () => {
    console.log("Subscribed with:", email);
    setEmail(""); // clear input
  };

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: 1400,
        // backgroundColor: "yellow",
        padding: "40px 0px",
        color:'#CBCBCB'
      }}
    >
      <Row gutter={[16, 46]}>
        {/* Column 1 */}
        <Col xs={24} md={12} lg={8}>
          <Flex className="footer-info" vertical style={{ backgroundColor: "transparent" }}>
            <img src={logo} alt="logo.png" style={{ height: 64, width: 170 ,objectFit:'cover'}} />
            <p>
              {currentLang === "km" ? footerData.description_kh : footerData.description}
            </p>

            <Flex
              style={{
                alignItems: "center",
                backgroundColor: "#ffff",
                width: "80%",
                padding: 8,
                borderRadius: 8,
              }}
            >
              <Input
                placeholder={t('enter_your_email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: "none", borderRadius: 0,padding:"10px 5px" }}
              />
              <Button onClick={handleSubscribe} style={{ backgroundColor: "#174143", color: "#fff",padding: 20 }}>
                {t('subscribe')}
              </Button>
            </Flex>
          </Flex>
        </Col>

        {/* Column 2 */}
        <Col xs={24} md={12} lg={8}>
          <Flex style={{ backgroundColor: "transparent" }}>
            <Flex vertical align="center" style={{ flex:1 ,backgroundColor: "transparent",
              borderLeft:"2px solid #FFF6F6"
            }}>
              <h3 style={{fontWeight:600 ,color:'white'}}>{t('explore')}</h3>
              <Menu
                className="footer-menu-item"
                mode="vertical"
                selectable={false}
                style={{
                  backgroundColor: "transparent",
                  border: "none",       // remove default border
                  boxShadow: "none",    // remove shadow
                  color:'#fff',
                  width:150,
                  padding:'0px 10px'
                }}
                items={[
                  { key: "about", label: <a href="#about">{t("about_us")}</a> },
                  { key: "services", label: <a href="#services">{t("service")}</a> },
                  { key: "projects", label: <a href="#project">{t("project")}</a> },
                  { key: "blog", label: <a href="#blog">{t("blog")}</a> },
                  { key: "contact", label: <a href="#contact">{t("contact")}</a> },
                ]}
              />
            </Flex>
            <Flex className="contact-info" vertical  align="flex-start" style={{ flex:2 ,width: "100%" ,textAlign:'start',paddingLeft:10 }}>
              <h3 style={{fontWeight:600 ,color:'white'}}>{t('contact_info')}</h3>
              <p style={{padding:"5px 0px" }}>{t("address")}:<span> {currentLang === "km" ? addressData.address_kh : addressData.address}</span></p>
              <p style={{padding:"5px 0px" }}>{t("email")}:<span> info@example.com</span></p>
              <p style={{padding:"5px 0px" }}>{t("phone")}:<span> +1 234 567 890</span></p>
              

              {/* Social Icons */}
              <Flex gap={10} style={{ marginTop: 15 }}>
                {[FaXTwitter, LiaFacebookF, FaInstagram, FaWhatsapp].map((Icon, index) => (
                  <div
                    key={index}
                    style={{
                      
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.color = "#f0f0f0";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.color = "White";
                    }}
                  >
                    <Icon size={18} color="#f0f0f0" />
                  </div>
                ))}
              </Flex>
            </Flex>
          </Flex>
          
        </Col>

        {/* Column 3 */}
        <Col xs={24} md={12} lg={8}>
          <Flex vertical align="flex-start" style={{ backgroundColor: "transparent" }}>
            <h3 style={{fontWeight:600,paddingBottom:15 ,color:'white' }}>{t("f_our_gallery")}</h3>
            <div style={{width:"100%", height:"60%"}}>
              <Row gutter={[16, 16]}>
                {[
                  "https://i.pinimg.com/1200x/6a/8e/53/6a8e53fae50f65e51ce816fb7923617f.jpg",
                  "https://i.pinimg.com/1200x/16/39/69/163969910c7e09462cb9eb858fa9f2bd.jpg",
                  "https://i.pinimg.com/736x/e1/97/54/e197541134f94ba268224cc0daf6397d.jpg",
                  "https://i.pinimg.com/736x/49/cb/68/49cb68c58155e43767343ebfe0ca114e.jpg",
                  "https://i.pinimg.com/736x/6a/e1/1b/6ae11b076a6e99d8719da223fd61a67d.jpg",
                  "https://i.pinimg.com/1200x/f8/f5/65/f8f56525452eb430d2da2b3eaaf98bc7.jpg",
                ].map((img, index) => (
                  <Col xs={8} key={index}>
                    <div className="gallery-item">
                      <img
                        src={img}
                        alt={`Gallery ${index}`}/>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Flex>
        </Col>
      </Row>
    </div>
  );
}

export default FooterComponent;