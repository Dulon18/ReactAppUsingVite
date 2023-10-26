import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import Service from './components/Service';
import Hero from './components/Hero';
import Header from './components/Header';

const App = () => {
  return (
    <div className='main'>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Project/>
      <Footer/>
    </div>
  );
};

export default App;