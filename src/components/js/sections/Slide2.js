import React, { useEffect, useRef, useState } from 'react';
import SpanTitles from '../SpanTitles';
import '../../css/slide2.css';
import Fullpage, { FullpageContext } from '@ap.cx/react-fullpage';
import { scrollBarChangePosition } from '../supports';

const Slide2 = ({ languageData }) => {

  const [isCoffeeClicking, setIsCoffeeClicking] = useState(false);
  const aboutMeTitleRef = useRef(null);
  const aboutMeDescriptionRef = useRef(null);


  const handleGetRandomFacts = async () => {
      const msg = 'english' === localStorage.getItem('LSLanguage') ? "in dev" : "В разработке";
      showToast(msg);
    
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
    }, 10000);

    const timer2 = setTimeout(() => {
      progress.classList.remove('active');
      setIsCoffeeClicking(false);
    }, 10300);

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


  useEffect(() => {
    const aboutMeTitleElement = aboutMeTitleRef.current;
    const aboutMeDescriptionElement = aboutMeDescriptionRef.current;

    if (aboutMeTitleElement) {
      SpanTitles(languageData.complectNameText, aboutMeTitleElement);
    }
  }, [languageData]);

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
                      disabled="true"
                      onClick={() => { 
                      }}
                      onPress={() => { 
                      }}>
                      Development stack
                    </a>
                  )}
                </FullpageContext.Consumer>
                <FullpageContext.Consumer>
                  {(ctx) => (
                    <a
                      class="btn btn-outline-light btn-lg px-4"
                      disabled="true"
                      onClick={() => { 
                      }}
                      onPress={() => { 
                      }}>
                      Works
                    </a>
                  )}
                </FullpageContext.Consumer>
              </div>
            </div>
          </div>
          <div name="ну и зачем ты сюда залез?" class="col-xl-5 col-xxl-6  d-xl-block text-center">
            <div name="ладно если уж сюда залезь отправь мне скрин, посмотрим сколько вас таких">
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
