import React, { useEffect, useState } from 'react';
import { fetchAndParseJSON } from '../changeLanguage';
import '../../css/slide4.css';
import '../../scss/slide4.scss';

const Slide4 = ({ languageData }) => {
  const [dataProjects, setDataProjects] = useState([]);
  const [slideTrans, setSlideTrans] = useState([]);

  const jsonUrl =
    'https://raw.githubusercontent.com/lu4ik-dev/lu4ik-dev.github.io/main/projects.json';

  useEffect(() => {
    const buttonsWrapper = document.querySelector('.map');
    const slides = document.getElementById('slidesContainerForProjects');

    const fetchData = async () => {
      const projectsData = await fetchAndParseJSON(jsonUrl);
      setDataProjects(projectsData);
      let a = getComputedStyle(slides).width;
      const countOfProjects = projectsData.length;
      buttonsWrapper.addEventListener('click', (e) => {
        if (e.target.nodeName === 'BUTTON') {
          Array.from(buttonsWrapper.children).forEach((item) => item.classList.remove('active'));
          let targetKey = e.target.getAttribute('data-id');
          e.target.classList.add('active');
          let slideTrans = targetKey !== 0 ? targetKey * (countOfProjects * 2) : 0;
          setSlideTrans(slideTrans);
        }
      });
    };

    fetchData();
  }, []);
  const selectedLanguage = localStorage.getItem('LSLanguage');
  return (
    <div class="bg-gradient-fourth py-5 vh-100">
      <div className="center">
        <div className="wrapper">
          <div
            className="inner"
            id="slidesContainerForProjects"
            style={{ transform: `translateX(-${slideTrans}%)` }}>
            {''}
            {dataProjects.map((projectInfo, index) => (
              <div className="card-projects">
                <img src={projectInfo.image} alt={projectInfo[selectedLanguage].title} />
                <div className="content">
                  <h1>{projectInfo[selectedLanguage].title}</h1>
                  <h3>{projectInfo[selectedLanguage].subTitle}</h3>
                  <a class="btn btn-outline-secondary mb-2 mb-sm-0" href={projectInfo.github}>
                    link github
                  </a>
                </div>
              </div>
            ))}
            {''}
          </div>
        </div>
        <div className="map">
          {dataProjects.map((projectInfo, index) =>
            index === 1 ? (
              <button
                key={index}
                data-id={index}
                className={'active point-of-slides-project button-' + index}
              />
            ) : (
              <button
                key={index}
                data-id={index}
                className={'point-of-slides-project button-' + index}
              />
            ),
          )}
        </div>
      </div>
    </div>
    /* <div class="bg-gradient-fourth py-5 vh-100">
      <div class="row">
        {''}
        {dataProjects.map((projectInfo, index) => (
          <div class="carousel">
            <div class="carousel--wrap">
              <div class="carousel--item">
                <figure>
                  <img src={projectInfo.image} class="img-fluid" alt="" />
                </figure>
                <h2>{projectInfo[selectedLanguage].title}</h2>
              </div>
            </div>
          </div>
        ))}
        {''}
      </div>
        </div> */
  );
};
export default Slide4;
