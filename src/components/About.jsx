import React, { useRef } from 'react';

const About = () => {
  let myHeadLine = useRef();

  const change = () => {
    myHeadLine.current.innerHTML = 'About';
  };

  return (
    <div>
      <h1 ref={myHeadLine}></h1>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default About;
