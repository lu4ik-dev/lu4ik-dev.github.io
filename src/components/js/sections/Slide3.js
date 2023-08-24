import React, { useEffect, useState, useRef } from 'react';
import SpanTitles from '../SpanTitles';
import '../../css/slide3.css';
import Fullpage, { FullpageContext } from '@ap.cx/react-fullpage';
import { fetchAndParseJSON } from '../changeLanguage';

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
        <div class="row gx-5 align-items-center justify-content-center">
          <h1 class="display-5 fw-bolder text-white mb-2" ref={skillsTitleLabelRef}></h1>
          <div className="container">
            <div className="box">
              <div className="shadow" />
              <div className="content">
                <div className="percent" data-text="HTML" style={{ '--num': 85 }}>
                  <div className="dot" />
                  <svg>
                    <circle cx={70} cy={70} r={70} />
                    <circle cx={70} cy={70} r={70} />
                  </svg>
                </div>
                <div className="number">
                  <h2>
                    85<span>%</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
            <FullpageContext.Consumer>
              {(ctx) => (
                <a
                  class="btn btn-outline-light btn-lg px-4 me-sm-3"
                  onClick={() => ctx.goto(ctx.slides[3], true)}
                  onPress={() => ctx.goto(ctx.slides[3], true)}>
                  View projects
                </a>
              )}
            </FullpageContext.Consumer>
          </div>

          <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center text-white fs-1"></div>
        </div>
      </div>
    </div>
  );
};
export default Slide3;
