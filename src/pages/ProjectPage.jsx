import { Flex } from 'antd';
import React from 'react'
import CardSliderProject from '../components/ui/CardSliderProject';
import { useTranslation } from 'react-i18next';

const projectData ={
  title:"Eco-Friendly Fresh Produce",
  title_kh: "ផលិតផលស្រស់ដែលមិនប៉ះពាល់ដល់បរិស្ថាន", 
};

function ProjectPage() {
  const {t ,i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <Flex id='project' vertical justify='center' align='center' style={{ width:'100%',padding:"40px 0px" ,backgroundColor:"#FFFFFF" }}>
      <Flex vertical justify='center' align='center' className='seection-service'>
        <h1 style={{ fontSize:14,fontWeight:'bold' }}>{t("our_product")}</h1>
        <h1 style={{ fontSize:28,fontWeight:600 ,textAlign:'center',padding:30 }}>
          {lang === "km" ? projectData.title_kh : projectData.title}
        </h1>
        <div style={{ width: '100%',margin:0 ,padding:"0px 40px" }}>
          <CardSliderProject />
        </div>
      </Flex>
    </Flex>
  )
}

export default ProjectPage;