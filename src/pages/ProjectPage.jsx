import React from 'react';
import Menu from '../components/Menu';
import Project from '../components/Project';
const ProjectPage = () => {
     return (
          <div className='main'>
               <Menu/>
               <p>This is Project Page</p>
               <Project/>

          </div>
     );
};

export default ProjectPage;