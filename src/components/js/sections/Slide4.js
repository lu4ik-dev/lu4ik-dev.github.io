import React, { useEffect, useState } from 'react';
import { fetchAndParseJSON } from '../changeLanguage';
import '../../css/slide4.css';
import '../../scss/slide4.scss';

const Slide4 = ({ languageData }) => {
  const [dataProjects, setDataProjects] = useState([]);
  const jsonUrl =
    'https://raw.githubusercontent.com/lu4ik-dev/lu4ik-dev.github.io/main/projects.json';

  useEffect(() => {
    const buttonsWrapper = document.querySelector('.map');
    const slides = document.querySelector('.inner');

    buttonsWrapper.addEventListener('click', (e) => {
      if (e.target.nodeName === 'BUTTON') {
        Array.from(buttonsWrapper.children).forEach((item) => item.classList.remove('active'));
        if (e.target.classList.contains('first')) {
          slides.style.transform = 'translateX(-0%)';
          e.target.classList.add('active');
        } else if (e.target.classList.contains('second')) {
          slides.style.transform = 'translateX(-33.33333333333333%)';
          e.target.classList.add('active');
        } else if (e.target.classList.contains('third')) {
          slides.style.transform = 'translatex(-66.6666666667%)';
          e.target.classList.add('active');
        }
      }
    });

    const fetchData = async () => {
      const projectsData = await fetchAndParseJSON(jsonUrl);
      setDataProjects(projectsData);
    };

    fetchData();
  }, []);
  const selectedLanguage = localStorage.getItem('LSLanguage');
  return (
    <div class="bg-gradient-fourth py-5 vh-100">
      <div className="center">
        <div className="wrapper">
          <div className="inner">
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
          <button className="active first" />
          <button className="second" />
          <button className="third" />
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
