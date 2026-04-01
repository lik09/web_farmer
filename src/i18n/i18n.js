import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        service: "Service",
        project: "Project",
        blog: "Blog",
        contact: "Contact",
        original_and_natural :"Original & natural",
        who_we_are :"WHO WE ARE",
        explore_more:"Explore More",
        what_we_do:"WHAT WE DO",
        view_all:"View All",
        our_product:"Our Product"
      },
    },
    km: {
      translation: {
        home: "ទំព័រដើម",
        about: "អំពីយើង",
        service: "សេវាកម្ម",
        project: "គម្រោង",
        blog: "ប្លុក",
        contact: "ទំនាក់ទំនង",
        original_and_natural :"ដើម & ធម្មជាតិ",
        who_we_are :"អំពីពួកយើង",
        explore_more:"ស្វែងយល់បន្ថែម",
        what_we_do:"អ្វីដែលយើងធ្វើ",
        view_all:"មើលទាំងអស់",
        our_product:"ផលិតផលរបស់យើង"
      
      },
    },
  },
  lng: "km",
  fallbackLng: "km",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;