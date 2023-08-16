import React from 'react';
import FpScroll from './fpScroll';
import Slide1 from './sections/Slide1';
import Slide2 from './sections/Slide2';
import Slide3 from './sections/Slide3';
import Slide4 from './sections/Slide4';

const Sections = ({ languageData }) => {
  const sectionContent = [
    <Slide1 languageData={languageData} />,
    <Slide2 languageData={languageData} />,
    <Slide3 languageData={languageData} />,
    <Slide4 languageData={languageData} />,
  ];

  return <FpScroll content={sectionContent} />;
};

export default Sections;
