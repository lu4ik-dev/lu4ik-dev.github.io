import React, { useEffect, useState, useRef } from 'react';
import SpanTitles from '../SpanTitles';
import '../../css/slide3.css';
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
  const screenWidth = window.innerWidth;

  if (screenWidth > 1200) {
    return (
      <div class="bg-gradient-third py-5 vh-100">
        <div class="container px-5">
          <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-8 col-xl-7 col-xxl-6">
              <div class="my-5  text-xl-start">
                <div class="skill-bars">
                  {dataSkills.map((skillsInfo, index) => (
                    <div class="bar">
                      <div class="info text-secondary">
                        <span>{skillsInfo.longText}</span><span> {skillsInfo.progress}%</span>
                      </div>
                      <div class="progress-line" style={{ width: '100%' }}>
                        <span style={{ width: skillsInfo.progress + '%' }}>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-xxl-6  d-xl-block text-center">
              <div>
                <h1 class="display-5 fw-bolder text-white mb-2" ref={skillsTitleLabelRef}></h1>
                <h4 className={` text-light mb-5 `} data-config-id="desc">
                  Description
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="bg-gradient-third py-5 vh-100">
        <div class="container px-5">
          <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-8 col-xl-7 col-xxl-6">
              <div class="text-center">
                <h1 class="display-5 fw-bolder text-white mb-2" ref={skillsTitleLabelRef}></h1>
                <h4 className={` text-light mb-5 `} data-config-id="desc">
                  1
                </h4>
              </div>
            </div>
            <div class="col-xl-5 col-xxl-6  d-xl-block ">
              <div class="my-5  text-xl-start">
                <div class="skill-bars">
                  {dataSkills.map((skillsInfo, index) => (
                    <div class="bar">
                      <div class="info text-secondary">
                      <span>{skillsInfo.longText}</span>
                      </div>
                      <div class="progress-line" style={{ width: '100%' }}>
                        <span style={{ width: skillsInfo.progress + '%' }}>
                          <div class="text-light">{skillsInfo.progress}%</div>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Slide3;
