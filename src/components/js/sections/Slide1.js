import React, { useEffect, useRef } from 'react';
import SpanTitles from '../SpanTitles';
import ImageComputer from '../../images/computer';
const Slide1 = ({ languageData }) => {
  const greetingTitleRef = useRef(null);
  const complectNameRef = useRef(null);

  useEffect(() => {
    const greetingTitleElement = greetingTitleRef.current;
    const complectNameElement = complectNameRef.current;

    if (greetingTitleElement) {
      SpanTitles(languageData.greetingTitle, greetingTitleElement);
    }
    if (complectNameElement) {
      SpanTitles(languageData.complectNameText, complectNameElement);
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
            <h1 class="fs-4 logo-add-text text-light my-auto" ref={complectNameRef}>
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
      <div class="container pt-5" data-path="0.1">
        <div class="row align-items-center mb-5" data-path="0.1.0">
          <div class="col-12 col-md-10 col-lg-5 mb-5 mb-lg-0" data-path="0.1.0.0">
            <h1
              class="display-4 fw-bold mb-5"
              data-config-id="header"
              data-path="0.1.0.0.0"
              ref={greetingTitleRef}></h1>
            <p class="lead mb-5" data-config-id="desc" data-path="0.1.0.0.1">
              {languageData.greetingDescription}
            </p>
            <div class="d-flex flex-wrap" data-path="0.1.0.0.2">
              <a
                class="btn btn-primary me-2 mb-2 mb-sm-0"
                href="#"
                data-config-id="hero-primary-action"
                data-path="0.1.0.0.2.0">
                Track your performance
              </a>
              <a
                class="btn btn-outline-secondary mb-2 mb-sm-0"
                href="#"
                data-config-id="hero-secondary-action"
                data-path="0.1.0.0.2.1">
                Learn more
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-6 offset-lg-1" data-path="0.1.0.1">
            <ImageComputer />
          </div>
        </div>
        <div class="text-center d-none d-lg-block" data-path="0.1.1"></div>
      </div>
    </header>
  );
};
export default Slide1;
