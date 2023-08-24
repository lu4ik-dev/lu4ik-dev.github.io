import React, { useContext } from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import FullpageNavigation from './slideNavigation';

const FpScroll = ({ content }) => {
  return (
    <div>
      <Fullpage transitionTiming={1200}>
        <FullpageNavigation />
        <FullPageSections>
          {content.map((sectionContent, index) => (
            <FullpageSection key={index} style={{ height: '100vh' }}>
              {sectionContent}
            </FullpageSection>
          ))}
        </FullPageSections>
      </Fullpage>
    </div>
  );
};

export default FpScroll;
