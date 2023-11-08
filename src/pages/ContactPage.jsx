import React from 'react';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
const ContactPage = () => {
     return (
          <div className='main'>
               <Menu/>
               <p>This is Contact Page</p>
               <Contact/>
          </div>
     );
};

export default ContactPage;