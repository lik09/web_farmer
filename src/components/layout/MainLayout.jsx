import React from "react";
import { Layout, FloatButton, Flex } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import FooterComponent from "../navigation/FooterComponent";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./MainLayout.css";
const { Header, Content, Footer } = Layout;

function MainLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      
      {/* Header */}
      <div style={{ padding: 0 ,margin:0  }}>
        <Navbar />
      </div>

      {/* Content */}
      <Content
        style={{
            // padding: "20px",
            // background: "#f5f5f5",
        }}
        >
        <div
            style={{
            // maxWidth: "1400px",
            margin: "0 auto",   // center horizontally
            width: "100%",
         }}
        >
            <Outlet />
        </div>
        </Content>

      {/* Footer */}
      <Footer style={{ 
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
        color: "#fff"
      }}>
        {/* Background image with blur */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("https://i.pinimg.com/1200x/e6/72/80/e67280a8da5b21ad1a33174406f51086.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(4px)",      // THIS blurs the image
          zIndex: 0
        }} />

        {/* Footer content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <FooterComponent />
        </div>
      </Footer>

      {/* Floating Button (optional) */}
      <FloatButton 
        className="custom-backtop"
        icon={<ArrowUpOutlined />}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

    </Layout>
  );
}

export default MainLayout;