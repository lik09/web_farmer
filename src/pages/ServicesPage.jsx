import React from 'react'
import "../style/ServicesPage.css";
import { Col, Flex, Row } from 'antd';
import CardSliderSerivce from '../components/ui/CardSliderSerivce';
import ButtonComponent from '../components/ui/ButtonComponent';
import { useTranslation } from 'react-i18next';

const serviceData ={
    title: "The Benefits of Choosesing Fresh Organic Foods",
    title_kh : "អត្ថប្រយោជន៍នៃការជ្រើសរើសអាហារសរីរាង្គស្រស់ៗ",
    description: `Everything wistful lingered quietly, yet concern shadowed the unfolding vision.
    Association awakened reflections of refinement and silent awe. Gentlewomen she,
    cradling the season's passage, her mind uncertain, eyes adrift. Conversation hesitated
    never quite captured in words.`,
    description_kh: `អ្វីៗទាំងអស់នៅស្ងប់ស្ងាត់ ប៉ុន្តែការព្រួយបារម្ភបានបង្វិលនូវទស្សនៈកំពុងពន្លឺ។ 
    ការភ្ជាប់បានរំលេចការពិចារណាអំពីភាពសុវត្ថិភាព និងការភ្ញាក់ផ្អើលនៅក្នុងផ្លូវធម្មតា។ 
    នារីស្រស់ស្អាតបានដោះស្រាយរដូវកាល ដោយចិត្តមិនប្រាកដ និងភ្នែកអើពើ។ 
    ការសន្ទនាមិនធ្លាប់ចាប់យ៉ាងពេញលេញនៅក្នុងពាក្យ។`,


};

function ServicesPage() {
    const {t ,i18n } = useTranslation();
    const lang = i18n.language;

  return (
    <Flex id='service' justify='center' align='center' style={{ width:'100%',padding:"40px 0px" ,backgroundColor: "rgba(126, 153, 163, 0.1)"}}>
        <Flex vertical justify='space-between' className='seection-service'>
            <div style={{ padding:"20px 40px" }}>
               <h1 style={{fontSize:14 ,fontWeight:'bold',padding:"10px 0px" }}>{t("what_we_do")}</h1>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div style={{fontSize:28 ,fontWeight:600 ,padding:'10px 0px' }}>
                            {lang === "km" ? serviceData.title_kh : serviceData.title}
                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div style={{fontSize:18 ,padding:'10px 0px' ,lineHeight:1.5 }}>
                            {lang === "km" ? serviceData.description_kh : serviceData.description}
                        </div>
                    </Col>
                </Row>
            </div>

            {/* card */}
            <div style={{margin:0 ,padding:"0px 40px" }}>
                <CardSliderSerivce />
            </div>
            
            {/* button */}
            <Flex justify='center' style={{marginTop:30}}>
                <ButtonComponent text={t("view_all")} onClick={()=>{}} />
            </Flex>
        </Flex>
    </Flex>
  )
}

export default ServicesPage;