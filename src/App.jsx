import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './components/layout/MainLayout'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectPage from './pages/ProjectPage'
import BlogsPage from './pages/BlogsPage'
import ContactPage from './pages/ContactPage'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about"  element={<AboutPage />} />
          <Route path="service"  element={<ServicesPage />} />
          <Route path="project"  element={<ProjectPage />} />
          <Route path="blog"  element={<BlogsPage />} />
          <Route path="contact"  element={<ContactPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
