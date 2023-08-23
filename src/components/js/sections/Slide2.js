import React, { useEffect, useRef } from 'react';
import SpanTitles from '../SpanTitles';
import '../../css/slide2.css';
import Fullpage, { FullpageContext } from '@ap.cx/react-fullpage';
const Slide2 = ({ languageData }) => {
  const complectNameRef = useRef(null);

  useEffect(() => {
    const complectNameElement = complectNameRef.current;

    if (complectNameElement) {
      SpanTitles(languageData.complectNameText, complectNameElement);
    }
  }, [languageData]);

  return (
    <div class="bg-gradient-second py-5 vh-100">
      <div class="container px-5">
        <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
              <h1 class="display-5 fw-bolder text-white mb-2" ref={complectNameRef}></h1>
              <h4 class="text-light mb-5">Full-stack Developer / Desktop Developer</h4>

              <p class="fw-normal text-white-50 mb-4"></p>
              <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <FullpageContext.Consumer>
                  {(ctx) => (
                    <a
                      class="btn btn-outline-light btn-lg px-4 me-sm-3"
                      onClick={() => ctx.goto(ctx.slides[2], true)}
                      onPress={() => ctx.goto(ctx.slides[2], true)}>
                      Development stack
                    </a>
                  )}
                </FullpageContext.Consumer>
                <FullpageContext.Consumer>
                  {(ctx) => (
                    <a
                      class="btn btn-outline-light btn-lg px-4"
                      onClick={() => ctx.goto(ctx.slides[3], true)}
                      onPress={() => ctx.goto(ctx.slides[3], true)}>
                      Works
                    </a>
                  )}
                </FullpageContext.Consumer>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slide2;
