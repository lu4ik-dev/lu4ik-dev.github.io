import React, { useEffect, useRef } from 'react';
import SpanTitles from '../SpanTitles';
import ImageComputer from '../../images/computer';
import '../../css/slide1.css';
import RandomFacts from '../randomFacts';
const Slide1 = ({ languageData }) => {
  const showToast = () => {
    const toast = document.querySelector('.toast');
    const progress = document.querySelector('.progress');
    toast.classList.add('active');
    progress.classList.add('active');

    const timer1 = setTimeout(() => {
      // toast.classList.remove('active');
    }, 5000);

    const timer2 = setTimeout(() => {
      progress.classList.remove('active');
    }, 5300);

    const closeIcon = document.querySelector('.close');
    closeIcon.addEventListener('click', () => {
      toast.classList.remove('active');
      setTimeout(() => {
        progress.classList.remove('active');
      }, 300);
      clearTimeout(timer1);
      clearTimeout(timer2);
    });
  };

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
            <h1 class="fs-4 logo-add-text text-light my-auto sm-d-block" ref={complectNameRef}>
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
        <div class="py-5 end-0 ">
          <RandomFacts />
        </div>
      </div>

      <div class="container pt-5">
        <div class="row align-items-center mb-5">
          <div class="col-12 col-md-10 col-lg-5 mb-5 mb-lg-0">
            <h1 class="display-4 text-light fw-bold mb-5" ref={greetingTitleRef}></h1>
            <p class="lead text-light mb-5" data-config-id="desc">
              {languageData.greetingDescription}
            </p>
            <div class="d-flex flex-wrap">
              <a class="btn btn-primary me-2 mb-2 mb-sm-0" href="#">
                About me?
              </a>
              <a class="btn btn-outline-secondary mb-2 mb-sm-0" href="#" onClick={showToast}>
                coffee
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-6 offset-lg-1">
            <div>
              <ImageComputer />
            </div>
          </div>
        </div>
        <div class="text-center d-none d-lg-block"></div>
      </div>
    </header>
  );
};
export default Slide1;
