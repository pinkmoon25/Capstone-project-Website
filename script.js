// Mobile-menu Popup
const menu = document.querySelector('header.mobile');
const openMenu = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.links');
const closeMenu = document.querySelector('.close-menu');

function show() {
  menu.style.display = 'flex';
}

function close() {
  menu.style.display = 'none';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', close);
}

// dynamic html section

const techSection = document.querySelector('.technologies');
const moreBtn = document.querySelector('.more');

const techDetails = [
  {
    title: 'Html 5',
    titleDetail: 'Hyper Text Markup language',
    description: 'From Intermediate to Advance, Learn about the foundation of web and the language used to build structure of a webpage',
    imageSrc: 'images/html5-brands.svg',
    imageAlt: 'html5 language icon',
  },
  {
    title: 'Css 3',
    titleDetail: 'Cascading StyleSheet',
    description: 'From Intermediate to Advance, Learn about the language used for the layout and style of a webpage',
    imageSrc: 'images/css3-alt-brands.svg',
    imageAlt: 'css3 language icon',
  },
  {
    title: 'Javascript',
    titleDetail: 'Most widely used language on web',
    description: 'Get familiar with the most widely used langauge in web, build projects and add functionality and UI to your webpage.',
    imageSrc: 'images/js-square-brands.svg',
    imageAlt: 'javascript language icon',
  },
  {
    title: 'DBMS',
    titleDetail: 'Database management system',
    description: 'From Intermediate to Advance, Learn about the foundation of web and the language used to build structure of a webpage',
    imageSrc: 'images/database-solid.svg',
    imageAlt: 'An icon representing database',
  },
  {
    title: 'Ruby & Ruby on rails',
    titleDetail: 'Ruby is a general purpose programming language.',
    description: 'Ruby is used for web-scraping, data processing, automation and more and Ruby on rails is a web development framework that works with any programming language.',
    imageSrc: 'images/gem-regular.svg',
    imageAlt: 'An icon representing a diamond shape',
  },
  {
    title: 'Git & Github',
    titleDetail: 'Version control system',
    description: 'Learn about git the Version control system and github which provides internet hosting and many other features by using git.',
    imageSrc: 'images/github-square-brands.svg',
    imageAlt: 'An icon of octocat representing Github',
  },
];

function addTechnology() {
  for (let i = 0; i < techDetails.length; i += 1) {
    const divCard = document.createElement('div');
    divCard.classList.add('tech-cards');

    const image = document.createElement('img');
    image.setAttribute('src', `${techDetails[i].imageSrc}`);
    image.setAttribute('alt', `${techDetails[i].imageAlt}`);
    divCard.appendChild(image);

    const divDetails = document.createElement('div');
    divDetails.classList.add('tech-details');
    divCard.appendChild(divDetails);

    const headTitle = document.createElement('h3');
    headTitle.textContent = `${techDetails[i].title}`;
    divDetails.appendChild(headTitle);

    const span = document.createElement('span');
    span.textContent = `${techDetails[i].titleDetail}`;
    divDetails.appendChild(span);

    const hr = document.createElement('hr');
    divDetails.appendChild(hr);

    const para = document.createElement('p');
    para.textContent = `${techDetails[i].description}`;
    divDetails.appendChild(para);

    if (i === 0) {
      divCard.classList.add('html');
    } else if (i === 1) {
      divCard.classList.add('css');
    } else if (i === 2) {
      divCard.classList.add('js');
    } else if (i === 3) {
      divCard.classList.add('dbms');
    } else if (i === 4) {
      divCard.classList.add('ruby');
    } else if (i === 5) {
      divCard.classList.add('git');
    }
    if(techSection === null) return;
    techSection.insertBefore(divCard, moreBtn);
    let seeMore = false;
    moreBtn.addEventListener('click', ()=>{
      if(!seeMore){
        document.querySelector('.js').style.display = 'flex';
        document.querySelector('.dbms').style.display = 'flex';
        document.querySelector('.ruby').style.display = 'flex';
        document.querySelector('.git').style.display = 'flex';
        moreBtn.innerHTML = `See Less<span><i class="fa-solid fa-angle-up"></i></span>`
      }
      else{
        document.querySelector('.js').style.display = 'none';
        document.querySelector('.dbms').style.display = 'none';
        document.querySelector('.ruby').style.display = 'none';
        document.querySelector('.git').style.display = 'none';
        moreBtn.innerHTML = `See More<span><i class="fa-solid fa-angle-down"></i></span>`
      }
      seeMore = !seeMore;
    });
  }
}

addTechnology();
