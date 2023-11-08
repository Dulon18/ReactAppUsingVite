import React from 'react';
import Menu from '../components/Menu';
import Blog from '../components/Blog';
const BlogPage = () => {
     return (
          <div className='main'>
               <Menu/>
               <p>This is Blog Page</p>
               <Blog/>
          </div>
     );
};

export default BlogPage;