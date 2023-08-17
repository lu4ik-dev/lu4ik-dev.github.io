import React, { useEffect, useRef } from 'react';
import SpanTitles from '../SpanTitles';
import ImageComputer from '../../images/computer';
const Slide1 = ({ languageData }) => {
  const greetingTitleRef = useRef(null);

  useEffect(() => {
    const greetingTitleElement = greetingTitleRef.current;

    if (greetingTitleElement) {
      SpanTitles(languageData.greetingTitle, greetingTitleElement);
    }
  }, [languageData]);
  return (
    <header class="bg-gradient-start vh-100">
      <div class="position-absolute w-100 py-3 mb-4">
        <div class="container-fluid p-0 px-lg-2 d-flex flex-wrap justify-content-center">
          <a
            href="https://lu4ik-dev.github.io/"
            class="d-flex align-items-center ms-lg-3 mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <img src="assets/elis.png" class="logo-img my-auto" alt="logo" />
            <h1 class="fs-4 logo-add-text text-light my-auto">
              <span>D</span>
              <span>m</span>
              <span>i</span>
              <span>t</span>
              <span>r</span>
              <span>i</span>
              <span>y</span>
              <span> </span>
              <span>S</span>
              <span>m</span>
              <span>i</span>
              <span>r</span>
              <span>n</span>
              <span>o</span>
              <span>v</span>
            </h1>
          </a>
          <a class="mx-2 py-2 my-auto btn btn-outline-light fw-bolder" href="#" id="btn-contact">
            {languageData.btnContactLabel}
          </a>
          <button
            type="button"
            class="btn btn-outline-light "
            data-bs-toggle="modal"
            data-bs-target="#modal-dialog-change-language">
            <i class="fs-4 mx-2 my-auto fa fa-language" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div class="container px-auto py-5">
        <div class="row gx-5 align-items-center justify-content-center py-auto">
          <div class="col-lg-8 col-xl-7 col-xxl-6">
            <h1 class="display-5 fw-bolder text-white mb-2 fs-1" ref={greetingTitleRef}>
              {languageData.greetingTitle}
            </h1>
            <p>{languageData.greetingDescription}</p>
          </div>
          <div class="col-xl-5 col-xxl-6  d-xl-block text-center">
            {/* d-none after col-xxl-6 */}
            <ImageComputer width="auto" height="10vh" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Slide1;
