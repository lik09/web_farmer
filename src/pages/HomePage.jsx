import { Carousel } from 'antd';
import React from 'react'
import CarouselComponent from '../components/ui/CarouselComponent';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';
import AutoSlider from '../components/ui/AutoSlider';
import BlogsPage from './BlogsPage';

function HomePage() {
  return (
    <div>
      <CarouselComponent />

      <AboutPage />

      <ServicesPage />

      <ProjectPage />

      <ContactPage />

      <BlogsPage />
      
    </div>
  )
}
export default HomePage;