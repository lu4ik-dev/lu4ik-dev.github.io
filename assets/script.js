

window.onscroll = function() {scrollStage()};

function scrollStage() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    scrolled;
  }



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
  

  

function changeLanguage(lang){
 const complectNameElement = document.getElementById('complectName');
 complectNameElement.textContent = '';
    if (complectNameElement) {
    fetchAndParseJSON(jsonUrl)
        .then(data => {
        if (data) {
            console.log(data);
            complectNameText = data[lang]['complectName'];
        }
        for (const char of complectNameText) {
            const spanElement = document.createElement('span');
            spanElement.textContent = char === ' ' ? ' ' : char;
            complectNameElement.appendChild(spanElement);
            }

            document.getElementById("modal-dialog-change-languageLabel").innerHTML = data[lang]['select-lang'];
            document.getElementById("btn-contact").innerHTML = data[lang]['btn-contact'];
        });
    }
    
  /*  const spans = document.querySelectorAll('h1 span');
    spans.forEach(span => {
      span.addEventListener('mouseover', () => {
        span.classList.add('animated');
      });
    
      span.addEventListener('animationend', () => {
        span.classList.remove('animated');
      });
    });*/
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