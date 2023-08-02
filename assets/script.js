async function fetchAndParseJSON(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching JSON:', error);
      return null;
    }
  }
  
const jsonUrl = 'https://raw.githubusercontent.com/lu4ik-dev/lu4ik-dev.github.io/main/languages.json';
  

  
function spanTitles(text, element){
  for (const char of text) {
    const spanElement = document.createElement('span');
    spanElement.textContent = char === ' ' ? ' ' : char;
    element.appendChild(spanElement);
    }
}


function changeLanguage(lang){
  const complectNameElement = document.getElementById('complectName');
  const skillsTitleElement = document.getElementById('skills-title');

  skillsTitleElement.textContent = '';
  complectNameElement.textContent = '';
    if (complectNameElement) {
    fetchAndParseJSON(jsonUrl)
        .then(data => {
        if (data) {
            console.log(data);
            complectNameText = data[lang]['complectName'];
            skillsTitleText = data[lang]['skills-title'];
            spanTitles(complectNameText, complectNameElement);
            spanTitles(skillsTitleText, skillsTitleElement);
            document.getElementById("modal-dialog-change-languageLabel").innerHTML = data[lang]['select-lang'];
            document.getElementById("btn-contact").innerHTML = data[lang]['btn-contact'];
        }
        });
    }
}

changeLanguage('english')


document.addEventListener('DOMContentLoaded', () => {
    const changeLangButtons = document.getElementsByName('btn-change-lang');

    if (changeLangButtons) {
      changeLangButtons.forEach(button => {
        button.addEventListener('click', () => {
          const lang = button.getAttribute('data-lang');
          changeLanguage(lang);
        });
      });
    }
  });

  const mySwiper = new Swiper('.slider', {
     direction: 'vertical',
    // freeMode: true,
    
    speed: 1500,
    parallax: true,
    spaceBetween: 18,

    mousewheel: {
      enabled: true,
      sensitivity: 2.4
    },
    on: {
      slideChange: function () {
        logSlides();
      },
    },
  })


function logSlides() {
  const currentSlide = mySwiper.activeIndex;
  console.log(`Current Slide: ${currentSlide + 1}`);
  console.log(`All Slides: ${mySwiper.slides.length}`);
  const scrollLine = document.querySelector('.scroll-line');
  scrollLine.style.transform = `translateY(${52+52*currentSlide+1}px)`;
}

logSlides();

function goToSlide(slideNumber) {
  mySwiper.slideTo(slideNumber - 1, 1500); 
  logSlides();
}

document.querySelectorAll("a[data-slide]").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const slideNumber = parseInt(link.dataset.slide);
    goToSlide(slideNumber);
  });
});




  /*

  document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    }*/


