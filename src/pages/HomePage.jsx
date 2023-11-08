import React from 'react';
import Menu from '../components/Menu';
import Home from '../components/Home';

const HomePage = () => {
     return (
          <div className='main'>
               <Menu/>
               <p>This is Home Page</p>
                <Home/>
          </div>
     );
};

export default HomePage;