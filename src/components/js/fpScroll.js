import React, { useContext } from 'react';
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageContext,
  FullpageNavigation,
} from '@ap.cx/react-fullpage';
import OverlayRightScroll, { changeStyle } from './overlayRightScroll';

const FpScroll = ({ content }) => {
  return (
    <div>
      <Fullpage transitionTiming={1200} onSlideChange={console.log('slide changed')}>
        <FullPageSections>
          {content.map((sectionContent, index) => (
            <FullpageSection key={index} style={{ height: '100vh' }}>
              {sectionContent}
            </FullpageSection>
          ))}
        </FullPageSections>
        <OverlayRightScroll />
      </Fullpage>
    </div>
  );
};

export default FpScroll;
