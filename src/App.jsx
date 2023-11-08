import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Blog from './pages/BlogPage.jsx';
import Contact from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import ServicePage from './pages/ServicePage.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route path="/service" element={<ServicePage></ServicePage>}></Route>
          <Route path="/project" element={<ProjectPage></ProjectPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;