import React, { useEffect, useRef, useState } from 'react';
import SpanTitles from '../SpanTitles';
import ImageComputer from '../../images/computer';
import '../../css/slide1.css';
import RandomFacts from '../randomFacts';
import { fetchAndParseJSON } from '../changeLanguage';
import { FullpageContext } from '@ap.cx/react-fullpage';

const jsonUrl =
  'https://raw.githubusercontent.com/lu4ik-dev/lu4ik-dev.github.io/main/randomFacts.json';

const Slide1 = ({ languageData }) => {
  const [isCoffeeClicking, setIsCoffeeClicking] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);

  function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  const handleGetRandomFacts = async () => {
    const data = await fetchAndParseJSON(jsonUrl);
    if (data) {
      const RandomFacts = getRandomItem(data[localStorage.getItem('LSLanguage')]);
      showToast(RandomFacts);
    }
  };

  const showToast = (text) => {
    const toast = document.querySelector('.toast');
    const progress = document.querySelector('.progress');
    const title = document.getElementById('titleRandomFactsElement');
    const description = document.getElementById('descriptionRandomFactsElement');
    toast.classList.add('active');
    progress.classList.add('active');
    setIsCoffeeClicking(true);

    title.textContent = languageData.titleCoffeeText;
    description.textContent = text;

    const timer1 = setTimeout(() => {
      toast.classList.remove('active');
      setIsCoffeeClicking(false);
    }, 5000);

    const timer2 = setTimeout(() => {
      progress.classList.remove('active');
      setIsCoffeeClicking(false);
    }, 5300);

    const closeIcon = document.querySelector('.close');
    closeIcon.addEventListener('click', () => {
      toast.classList.remove('active');
      setTimeout(() => {
        progress.classList.remove('active');
        setIsCoffeeClicking(false);
      }, 300);
      clearTimeout(timer1);
      clearTimeout(timer2);
    });
  };

  const greetingTitleRef = useRef(null);
  const complectNameRef = useRef(null);
  const textDescriptionRef = useRef(null);
  const buttonAboutRef = useRef(null);
  const buttonSecondaryRef = useRef(null);

  useEffect(() => {
    setIsTextVisible(false);
    const greetingTitleElement = greetingTitleRef.current;
    const complectNameElement = complectNameRef.current;
    const textDescriptionElement = textDescriptionRef.current;
    const buttonAboutElement = buttonAboutRef.current;
    const buttonSecondaryElement = buttonSecondaryRef.current;

    setTimeout(() => {
      setIsTextVisible(true);
      if (greetingTitleElement) {
        SpanTitles(languageData.greetingTitle, greetingTitleElement);
      }
      if (complectNameElement) {
        SpanTitles(languageData.complectNameText, complectNameElement);
      }
      if (textDescriptionElement) {
        textDescriptionElement.textContent = languageData.greetingDescription;
      }

      if (buttonAboutElement) {
        buttonAboutElement.textContent = languageData.buttonsText['btn-about-me'];
      }
      if (buttonSecondaryElement) {
        buttonSecondaryElement.textContent = languageData.buttonsText['btn-secondary'];
      }
    }, 400);
  }, [languageData]);
  return (
    <header class="bg-gradient-start vh-100">
      <div class="position-absolute w-100 py-3 mb-4">
        <div class="container-fluid p-0 px-lg-2 d-flex flex-wrap justify-content-center opacity-hover-effect">
          <a
            href="https://lu4ik-dev.github.io/"
            class="d-flex align-items-center ms-lg-3 mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <img src="assets/elis.png" class="logo-img my-auto" alt="logo" />
            <h1
              className={`fs-4 logo-add-text text-light my-auto sm-d-block  ${
                isTextVisible ? 'visible-change-language' : 'hidden-change-language'
              }`}
              ref={complectNameRef}>
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

          <button
            type="button"
            class="mx-2 py-2 my-auto btn btn-outline-light "
            data-bs-toggle="modal"
            data-bs-target="#modal-dialog-change-language">
            <i class="fs-4 mx-2 my-auto fa fa-language" aria-hidden="true"></i>
          </button>
        </div>
        <div class="position-relative py-5 end-0" style={{ zIndex: 9999 }}>
          <RandomFacts />
        </div>
      </div>

      <div class="container pt-5 ">
        <div class="row align-items-center mb-5 pt-5">
          <div class="col-12 col-md-10 col-lg-5 mb-5 mb-lg-0">
            <h1
              className={`display-4 text-light fw-bold mb-5 fs-1 ${
                isTextVisible ? 'visible-change-language' : 'hidden-change-language'
              }`}
              ref={greetingTitleRef}></h1>
            <h4
              className={` text-light mb-5 ${
                isTextVisible ? 'visible-change-language' : 'hidden-change-language'
              }`}
              data-config-id="desc"
              ref={textDescriptionRef}></h4>
            <div class="d-flex flex-wrap">
              <FullpageContext.Consumer>
                {(ctx) => (
                  <a
                    className={`btn btn-outline-light me-2 mb-2 mb-sm-0  ${
                      isTextVisible ? 'visible-change-language' : 'hidden-change-language'
                    }`}
                    ref={buttonAboutRef}
                    onClick={() => ctx.goto(ctx.slides[1], true)}
                    onPress={() => ctx.goto(ctx.slides[1], true)}></a>
                )}
              </FullpageContext.Consumer>

              <button
                className={`btn btn-outline-secondary mb-2 mb-sm-0  ${
                  isTextVisible ? 'visible-change-language' : 'hidden-change-language'
                }`}
                onClick={handleGetRandomFacts}
                disabled={isCoffeeClicking}
                ref={buttonSecondaryRef}></button>
            </div>
          </div>
          <div class="col-12 col-lg-6 offset-lg-1 mx-auto">
            <div class="">
              <ImageComputer />
            </div>
          </div>
        </div>
        <div class="text-center d-none d-lg-block"></div>
      </div>

      <di1v class="position-absolute w-100 my-5">
        <div class="container-fluid ms-1 opacity-hover-effect fs-3">
          <a
            href="https://github.com/lu4ik-dev/lu4ik-dev.github.io"
            class="text-decoration-none fw-normal text-white-50">
            <i data-bs-toggle="tooltip" title="Github" class="fab fa-github"></i>
          </a>
        </div>
      </di1v>
    </header>
  );
};
export default Slide1;
