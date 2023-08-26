import React, { useEffect, useState, useRef } from 'react';
import SpanTitles from '../SpanTitles';
import '../../css/slide3.css';
import Fullpage, { FullpageContext } from '@ap.cx/react-fullpage';
import { fetchAndParseJSON } from '../changeLanguage';
import { scrollBarChangePosition } from '../supports';

const jsonUrl =
  'https://raw.githubusercontent.com/lu4ik-dev/lu4ik-dev.github.io/main/skillsAndExperience.json';

const Slide3 = ({ languageData }) => {
  const [dataSkills, setDataSkills] = useState([]);

  const skillsTitleLabelRef = useRef(null);

  useEffect(() => {
    const skillsTitleElement = skillsTitleLabelRef.current;

    if (skillsTitleElement) {
      SpanTitles(languageData.skillsTitleText, skillsTitleElement);
    }

    const fetchData = async () => {
      const skillsData = await fetchAndParseJSON(jsonUrl);
      setDataSkills(skillsData);
    };
    fetchData();
  }, [languageData]);

  return (
    <div class="bg-gradient-third py-5 vh-100">
      <div class="container px-5">
        <h1 class="display-5 fw-bolder text-white mb-2" ref={skillsTitleLabelRef}></h1>
        eto ne reliz
        <div className="container-icons ">
          <div class="row justify-content-sm-center justify-content-xl-start">
            {dataSkills.map((skillsInfo, index) => (
              <div class="col">
                <div class="card" style={{ '--num': skillsInfo.progress }}>
                  <div class="box">
                    <div class="percent">
                      <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                      </svg>
                      <div class="number">
                        <h2>
                          <i
                            data-bs-toggle="tooltip"
                            title="Java Script"
                            className={skillsInfo.styleIcon}></i>
                        </h2>
                      </div>
                    </div>
                    <h2 class="text">{skillsInfo.longText}</h2>
                    <h2 class="text">{skillsInfo.progress}%</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
          {/* <FullpageContext.Consumer>
            {(ctx) => (
              <a
                class="btn btn-outline-light btn-lg px-4 me-sm-3"
                onClick={() => {
                  scrollBarChangePosition(3);
                  //     ctx.goto(ctx.slides[3], true);
                }}
                onPress={() => {
                  scrollBarChangePosition(3);
                  //    ctx.goto(ctx.slides[3], true);
                }}>
                View projects
              </a>
            )}
          </FullpageContext.Consumer>*/}
        </div>
        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center text-white fs-1"></div>
      </div>
    </div>
  );
};
export default Slide3;
