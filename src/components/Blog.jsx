import React, { useRef, useState, useEffect } from 'react';

const Header = () => {
  return <header> Blog Header Component</header>;
};

const MainContent = () => {
  const [content, setContent] = useState('Initial Content');

  useEffect(() => {
    // fetching data after 2 seconds
    const fetchData = setTimeout(() => {
      setContent('Fetched Content');
    }, 2000);

    return () => clearTimeout(fetchData);
  }, []);
     // useState example

  return <main>{content}</main>;
};

const Sidebar = () => {
  const sidebarRef = useRef();
  useEffect(() => {
    // Access and manipulate the sidebarRef
    sidebarRef.current.style.color = 'red';
  }, []);
  return <aside ref={sidebarRef}>Sidebar Component</aside>;
};

const Footer = () => {
  return <footer>Footer Component</footer>;
};

const Blog = () => {
     return (
          <div>
               <Header />
               <MainContent />
               <Sidebar />
               <Footer />
          </div>
     );
};

export default Blog;