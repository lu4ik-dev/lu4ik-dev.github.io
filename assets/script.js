var prevScrollY = 0;
const scrollLine = document.querySelector('.scroll-line');
let stageScroll = 0;



function scrollStage() {
  const currentScrollY = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (currentScrollY / height) * 100;
  const scrollDirection = currentScrollY > prevScrollY ? `down ${scrolled}` : `up ${scrolled}`;
  console.log(`Scroll Direction: ${scrollDirection}; prev Scroll Y ${prevScrollY}`);
  prevScrollY = currentScrollY;

  let pageScrolling = 0;
/*
  if (scrolled >= 60) {
    pageScrolling = 100;
  } else if (scrolled >= 10) {
    pageScrolling = 48;
  }

  if (scrolled <= 40) {
    pageScrolling = 0;
  } else if (scrolled <= 90) {
    pageScrolling = 48;
  }
*/
  scrollLine.style.transform = `translateY(${55+scrolled}px)`;

}

document.addEventListener('scroll', scrollStage);



    // Update the previous scroll position for the next comparison




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