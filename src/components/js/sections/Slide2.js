import React, { useEffect, useRef } from 'react';
import SpanTitles from '../SpanTitles';
import '../../css/slide2.css';
import Fullpage, { FullpageContext } from '@ap.cx/react-fullpage';
import { scrollBarChangePosition } from '../supports';
import { useLocation, useNavigate } from 'react-router-dom';

const Slide2 = ({ languageData }) => {
  const aboutMeTitleRef = useRef(null);
  const aboutMeDescriptionRef = useRef(null);

  useEffect(() => {
    const aboutMeTitleElement = aboutMeTitleRef.current;
    const aboutMeDescriptionElement = aboutMeDescriptionRef.current;

    if (aboutMeTitleElement) {
      SpanTitles(languageData.complectNameText, aboutMeTitleElement);
    }
  }, [languageData]);
  const navigate = useNavigate();

  return (
    <div class="bg-gradient-second py-5 vh-100">
      <div class="container px-5">
        <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
              <h1 class="display-5 fw-bolder text-white mb-2" ref={aboutMeTitleRef}></h1>
              <h4 class="text-light mb-5" ref={aboutMeDescriptionRef}></h4>
              <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <FullpageContext.Consumer>
                  {(ctx) => (
                    <a
                      class="btn btn-outline-light btn-lg px-4 me-sm-3"
                      onClick={() => {
                        scrollBarChangePosition(2);
                        // ctx.goto(ctx.slides[2], true);
                      }}
                      onPress={() => {
                        scrollBarChangePosition(2);
                        // ctx.goto(ctx.slides[2], true);
                      }}>
                      Development stack
                    </a>
                  )}
                </FullpageContext.Consumer>

                <button
                  class="btn btn-outline-light btn-lg px-4"
                  onClick={() => navigate('projects', { replace: false })}>
                  Work
                </button>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-xxl-6  d-xl-block text-center">
            <div>
              <h4 className={` text-light mb-5 `} data-config-id="desc">
                {languageData.greetingDescription}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slide2;
