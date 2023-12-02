import React, { useEffect, useState } from 'react';
import { fetchAndParseJSON } from '../changeLanguage';
import '../../css/slide4.css';
import '../../scss/slide4.scss';
import Carousel from 'react-bootstrap/Carousel';
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
      };
  
      fetchData();
    }, []);

  const selectedLanguage = localStorage.getItem('LSLanguage');
  return (
    <div className="bg-gradient-fourth py-5 vh-100 filter">
      <div class="container" >
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        </div>
      </div>
    </div>
  );
};
export default Slide4;
