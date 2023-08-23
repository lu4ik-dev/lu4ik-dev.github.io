import React, { useEffect, useRef, useState } from 'react';
import { fetchAndParseJSON } from '../changeLanguage';
import '../../css/slide4.css';

const Slide4 = ({ languageData }) => {
  const [dataProjects, setDataProjects] = useState([]);
  const containerProjectsElement = useRef(null);
  const jsonUrl =
    'https://raw.githubusercontent.com/lu4ik-dev/lu4ik-dev.github.io/main/projects.json';

  console.log(dataProjects);
  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await fetchAndParseJSON(jsonUrl);
      setDataProjects(projectsData);
    };

    fetchData();
  }, []);
  const selectedLanguage = localStorage.getItem('LSLanguage');
  return (
    <div class="bg-gradient-fourth py-5 vh-100">
      <div class="container px-5">
        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
          <div class="carousel-inner">
            <div class="item carousel-item active">
              <div class="row">
                {''}
                {dataProjects.map((projectInfo, index) => (
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <span class="wish-icon">
                        <i class="fa fa-heart-o"></i>
                      </span>
                      <div class="img-box">
                        <img src={projectInfo.image} class="img-fluid" alt="" />
                      </div>
                      <div class="thumb-content">
                        <h4>{projectInfo[selectedLanguage].title}</h4>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>

                            <li class="list-inline-item">
                              <i class="fa fa-star-o"></i>
                            </li>
                          </ul>
                        </div>
                        <p class="item-price">
                          <b>{projectInfo[selectedLanguage].subTitle}</b>
                        </p>
                        <a href={projectInfo.github} class="btn btn-outline-secondary">
                          Link Github
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                {''}
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <i class="fa fa-angle-left"></i>
          </a>
          <a class="carousel-control-next" href="#myCarousel" data-slide="next">
            <i class="fa fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Slide4;
