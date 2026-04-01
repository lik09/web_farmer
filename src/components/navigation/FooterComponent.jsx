import { Button, Col, Flex, Input, Row, Menu, Grid } from "antd";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "../../style/FooterComponent.css";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function FooterComponent() {
  const [email, setEmail] = useState("");

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis.
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
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: "none", borderRadius: 0,padding:"10px 5px" }}
              />
              <Button onClick={handleSubscribe} style={{ backgroundColor: "#174143", color: "#fff",padding: 20 }}>
                Subscribe
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
              <h3 style={{fontWeight:600 ,color:'white'}}>Explore</h3>
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
                  { key: "about", label: <a href="#about">About Us</a> },
                  { key: "services", label: <a href="#services">Services</a> },
                  { key: "projects", label: <a href="#project">Projects</a> },
                  { key: "blog", label: <a href="#blog">Blog</a> },
                  { key: "contact", label: <a href="#contact">Contact</a> },
                ]}
              />
            </Flex>
            <Flex className="contact-info" vertical  align="flex-start" style={{ flex:2 ,width: "100%" ,textAlign:'start',paddingLeft:10 }}>
              <h3 style={{fontWeight:600 ,color:'white'}}>Contact Info</h3>
              <p style={{padding:"5px 0px" }}>Address:<span> 5601 Chalkville Road Center Point AL 35215</span></p>
              <p style={{padding:"5px 0px" }}>Email:<span> info@example.com</span></p>
              <p style={{padding:"5px 0px" }}>Phone:<span> +1 234 567 890</span></p>
              

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
            <h3 style={{fontWeight:600,paddingBottom:15 ,color:'white' }}>Our Gallery</h3>
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