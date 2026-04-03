import React from "react";
import { Suspense, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'

const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ProjectPage = React.lazy(() => import('./pages/ProjectPage'));
const BlogsPage = React.lazy(() => import('./pages/BlogsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
function App() {
 

  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ textAlign: 'center', padding: 50 }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="service" element={<ServicesPage />} />
            <Route path="project" element={<ProjectPage />} />
            <Route path="blog" element={<BlogsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
