import React, { useContext } from 'react';
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageContext,
} from '@ap.cx/react-fullpage';
import OverlayRightScroll, { changeStyle } from './overlayRightScroll';
import FullpageNavigation from './slideNavigation';

const FpScroll = ({ content }) => {
  return (
    <div>
      <Fullpage transitionTiming={1200} onChange={console.log('slide changed')}>
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
