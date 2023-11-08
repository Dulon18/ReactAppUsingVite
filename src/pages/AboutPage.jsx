import React from 'react';
import Menu from '../components/Menu';
import About from '../components/About';
const AboutPage = () => {
     return (
          <div className='main'>
               <Menu/>
               <p>This is About Page</p>
               <About/>
          </div>
     );
};

export default AboutPage;