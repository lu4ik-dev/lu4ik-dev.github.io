import React from 'react';
import FpScroll from './fpScroll';
import Slide1 from './sections/Slide1';
import Slide2 from './sections/Slide2';
import Slide3 from './sections/Slide3';
import Slide4 from './sections/Slide4';
const Sections = () => {
  const sectionContent = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />];

  return <FpScroll content={sectionContent} />;
};

export default Sections;
