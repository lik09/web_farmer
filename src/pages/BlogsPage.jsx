import { Col, Row, Flex } from "antd";
import React from "react";
import "../style/CardSliderBlog.css";
import CardSliderBlog from "../components/ui/CardSliderBlog";
import { useTranslation } from "react-i18next";

function BlogsPage() {
  const {t ,i18n } = useTranslation();
  

  return (
    <Flex
      id="blog"
      justify="center"
      align="center"
      style={{
        width: "100%",
        padding: "80px 0px",
        backgroundColor: "rgba(126, 153, 163, 0.1)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1400 ,padding:"0px 40px"}}>
        {/* Row for header */}
        <Row gutter={[0, 0]}>
          <Col span={24}>
            <h1 style={{deplay:'flex',textAlign:'center' ,fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>
              {t('our_blog')}
            </h1>
            <h1 style={{ deplay:'flex',textAlign:'center'  ,margin: 0 }}>{t('latest_news_and_articles')}</h1>
          </Col>
        </Row>

        {/* Row for carousel */}
        <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <CardSliderBlog />
          </Col>
        </Row>
      </div>
    </Flex>
  );
}

export default BlogsPage;