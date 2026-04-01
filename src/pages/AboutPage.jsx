import { Button, Flex } from 'antd';
import React from 'react'
import "../style/AboutPage.css";

import small_logo from "../assets/small_logo.png";
import ButtonComponent from '../components/ui/ButtonComponent';
import { useTranslation } from 'react-i18next';

const aboutData = {

  title: "Breathtaking Views and the Heart of Farming",
  title_kh: "ទេសភាពអស្ចារ្យ និងបេះដូងនៃកសិកម្ម",

  description:
    "We offer an extraordinary agricultural experience, combining stunning natural scenery such as lush green fields, vibrant flowers, and various crops that showcase the art of nature. Visitors can relax and enjoy the beauty while learning about eco-friendly farming and environmental care. This experience also educates about different crops, their benefits, and sustainable farming methods for creativity and health. The scenery and activities create a deep connection with nature, bringing peace and freshness to the mind.",
  description_kh:
    "យើងផ្តល់នូវបទពិសោធន៍កសិកម្មដ៏អស្ចារ្យ ដែលរួមបញ្ចូលទេសភាពធម្មជាតិស្រស់ស្អាត ដូចជាស្រែស្រូវពណ៌បៃតង ផ្កាពណ៌ស្រស់ និងដំណាំផ្សេងៗ ដែលលេចធ្លោជាសិល្បៈធម្មជាតិ។ អ្នកអាចទទួលបានការសម្រាកចិត្ត និងការប៉ះពាល់ដោយសិល្បៈធម្មជាតិ ខណៈពេលស្គាល់ពីវិធីកសិកម្មប្រកបដោយចិត្តស្រឡាញ់ និងការថែរក្សាបរិស្ថាន។ បន្ថែមពីនេះ ការផ្តល់បទពិសោធន៍នេះជួយបង្រៀនអ្នកអំពីប្រភេទដំណាំ អត្ថប្រយោជន៍របស់វា និងវិធីធ្វើកសិកម្មចិញ្ចឹមដើម្បីភាពច្នៃប្រឌិត និងសុខភាពល្អ។ ទេសភាព និងសកម្មភាពទាំងនេះនាំឱ្យមានការទំនាក់ទំនងជាមួយធម្មជាតិ និងផ្តល់អារម្មណ៍ស្រស់ស្រាយ និងស្ងប់ស្ងាត់ចិត្ត។",

  button: "Explore More",
  button_kh: "ស្វែងយល់បន្ថែម",

  experience: "32+",
  experience_text: "Years of experience",
  experience_text_kh: "បទពិសោធន៍ជាង ៣២ ឆ្នាំ",

  image:
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
};

function AboutPage() {
    const {t ,i18n } = useTranslation();
    const lang = i18n.language;

  return (
    <Flex justify='center' align='center' style={{
        width:'100%',
        height:600 ,
        // backgroundColor:'red',
        
       
    }}>
      <div className='seection-about'>
        <div className='box-about'>
            
            <h1 style={{ fontSize:14,fontWeight:'bold' ,padding:'20px 0px' }}>{t("who_we_are")}</h1>
            <h3>{lang === "km" ? aboutData.title_kh : aboutData.title}</h3>
            <p className='dis-about' style={{ lineHeight:1.5 ,fontSize:16 }}>
                {lang === "km" ? aboutData.description_kh : aboutData.description}
            </p>
            
            <div style={{margin:'25px 0px'}}>
                <ButtonComponent text={t("explore_more")} onClick={()=>{}} />
            </div>
            
        </div>
        <div className='style-logo'>
            <img src={small_logo} alt="" />
        </div>
        <div className='picture-about'>
           <img src="https://i.pinimg.com/736x/97/66/97/976697f628e47d13f94bdaddc70667ac.jpg" alt="" />
        </div>
        <Flex vertical justify='center' align='center' className='experience'>
           <h1>{aboutData.experience}</h1>
           <p>{lang === "km"
              ? aboutData.experience_text_kh
              : aboutData.experience_text}</p>
        </Flex>
      </div>
    </Flex>
  )
}

export default AboutPage;