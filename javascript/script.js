// DARK MODE / LIGHT MODE

const switchBox = document.querySelector('.switch');    
const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const icone = document.querySelector('.icone');
const cvBtn = document.querySelector('.cv');
const hireBtn = document.querySelector('.hire');

switchBox.addEventListener('click', function(){

    switchBox.classList.toggle('switch-change');
    btn.classList.toggle('btn-change');
    body.classList.toggle('body-change');
    icone.classList.toggle('fa-moon-o');
    icone.classList.toggle('icone-change');
    cvBtn.classList.toggle('cv-change');
    hireBtn.classList.toggle('hire-change');
})


// SIDE BAR HEADER 

const headerBtn = document.querySelector('.header-btn');
const header = document.querySelector('header');
const headerContainer = document.querySelector('.header-container');
const arrowIcon = document.querySelector('.arrow');



headerBtn.addEventListener('click', function(){

    headerBtn.classList.toggle('header-btn-change');
    arrowIcon.classList.toggle('fa-arrow-right');
    header.classList.toggle('header-change');
    headerContainer.classList.toggle('container-change');

})


// BURGER MENU 


const burgerBtn = document.querySelector('.navbar-mobile i');
const modal = document.querySelector('.modal');

burgerBtn.addEventListener('click', function(){
    
    modal.classList.toggle('modal-change');
    burgerBtn.classList.toggle('fa-caret-right');
})


// A CHAQUE CLIQUE SUR UNE SECTION LE MENU BURGER SE FERME ET RENVOI DANS LA BONNE SECTION 


const sectionAbout = document.querySelector('.navbar-mobile-list #section1');
const sectionSkills = document.querySelector('.navbar-mobile-list #section2');
const sectionPortfolio = document.querySelector('.navbar-mobile-list #section3');
const sectionContact = document.querySelector('.navbar-mobile-list #section4');

const section = [sectionAbout, sectionSkills, sectionPortfolio, sectionContact].forEach(section => {
    section.addEventListener('click', function(){

        modal.classList.toggle('modal-change');
    })
})



// ANIMATION RESEAUX SOCIAUX PHOTO DE PROFIL : ABOUT

const pdp = document.querySelector('.container-pdp3');
const test = document.querySelector('.social-animation');

pdp.addEventListener('mouseover', function(){

    test.style.width ='100%';
    test.style.transition = 'ease .4s';
    test.style.transform = 'rotate(180deg)';
    test.style.zIndex = '5';
    pdp.style.transform = 'scale(0.9)';
    pdp.style.transition = 'ease .4s';

})

pdp.addEventListener('mouseout', function(){

    setTimeout(function() {

        test.style.width ='10%';
        test.style.transition = 'ease .4s';
        test.style.transform = 'rotate(0deg)';
        test.style.zIndex = '-1';
        pdp.style.transform = 'scale(1)';
        pdp.style.transition = 'ease .4s';

    }, 4000)

})


// SLIDER explication dans "SLIDER JS"

const items = document.querySelectorAll('.slider-para');
const nbSlide = items.length;
const next = document.querySelector('.right');
const previous = document.querySelector('.left');
let count = 0;


function slideNext(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
}

next.addEventListener('click', slideNext)


function slidePrevious(){

    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
}

previous.addEventListener('click', slidePrevious);


// MODAL SKILLS 

const frontModal = document.querySelector('.front-end-icone');
const backModal = document.querySelector('.back-end-icone');
const autreModal = document.querySelector('.autre-icone');
const frontBtn = document.querySelector('.front-end i');
const backBtn = document.querySelector('.back-end i');
const autreBtn = document.querySelector('.autre i');
const frontImage = document.querySelector('.front-end-modal');
const backImage = document.querySelector('.back-end-modal');
const autreImage = document.querySelector('.autre-modal');

frontBtn.addEventListener('click', function(){
    
    frontModal.classList.toggle('front-end-icone-change');
    frontBtn.classList.toggle('fa-arrow-circle-o-up');
    frontImage.classList.toggle('front-end-modal-change');
})

backBtn.addEventListener('click', function(){
    
    backModal.classList.toggle('back-end-icone-change');
    backBtn.classList.toggle('fa-arrow-circle-o-up');
    backImage.classList.toggle('back-end-modal-change');


})

autreBtn.addEventListener('click', function(){
    
    autreModal.classList.toggle('autre-icone-change');
    autreBtn.classList.toggle('fa-arrow-circle-o-up');
    autreImage.classList.toggle('autre-modal-change');
})


// HOVER DES ICONES HTML/CSS/JS 

const jadoo = document.querySelector('.jadoo');
const jadooImg = document.querySelector('.container-icone-jadoo');

jadoo.addEventListener('mouseover', function(){

    jadooImg.style.display = 'flex';
    jadooImg.style.bottom = '-20px';
    jadooImg.style.opacity = '1';
    jadooImg.style.transition = 'ease .5s';
})

jadoo.addEventListener('mouseout', function(){

    jadooImg.style.opacity = '0';
    jadooImg.style.transition = 'ease .5s';
})


const wecars = document.querySelector('.wecars');
const wecarsImg = document.querySelector('.container-icone-wecars');

wecars.addEventListener('mouseover', function(){

    wecarsImg.style.display = 'flex';
    wecarsImg.style.bottom = '-20px';
    wecarsImg.style.opacity = '1';
    wecarsImg.style.transition = 'ease .5s';
})

wecars.addEventListener('mouseout', function(){

    wecarsImg.style.opacity = '0';
    wecarsImg.style.transition = 'ease .5s';
})


const apple = document.querySelector('.apple');
const appleImg = document.querySelector('.container-icone-apple');

apple.addEventListener('mouseover', function(){
    
    appleImg.style.display = 'flex';
    appleImg.style.bottom = '-20px';
    appleImg.style.opacity = '1';
    appleImg.style.transition = 'ease .5s';

})

apple.addEventListener('mouseout', function(){

    appleImg.style.opacity = '0';
    appleImg.style.transition = 'ease .5s';
})

const gamestore = document.querySelector('.gamestore');
const sitecvImg = document.querySelector('.container-icone-gamestore');

gamestore.addEventListener('mouseover', function(){
    
    sitecvImg.style.display = 'flex';
    sitecvImg.style.bottom = '-20px';
    sitecvImg.style.opacity = '1';
    sitecvImg.style.transition = 'ease .5s';

})

gamestore.addEventListener('mouseout', function(){

    sitecvImg.style.opacity = '0';
    sitecvImg.style.transition = 'ease .5s';
})


const nft = document.querySelector('.nft');
const nftImg = document.querySelector('.container-icone-nft');

nft.addEventListener('mouseover', function(){
    
    nftImg.style.display = 'flex';
    nftImg.style.bottom = '-20px';
    nftImg.style.opacity = '1';
    nftImg.style.transition = 'ease .5s';

})

nft.addEventListener('mouseout', function(){

    nftImg.style.opacity = '0';
    nftImg.style.transition = 'ease .5s';
})


const todo = document.querySelector('.todo');
const todoImg = document.querySelector('.container-icone-todo');

todo.addEventListener('mouseover', function(){
    
    todoImg.style.display = 'flex';
    todoImg.style.bottom = '-20px';
    todoImg.style.opacity = '1';
    todoImg.style.transition = 'ease .5s';

})

todo.addEventListener('mouseout', function(){

    todoImg.style.opacity = '0';
    todoImg.style.transition = 'ease .5s';
})


// REVEAL ELEMENTS ON SCROLL


// ABOUT

const revealAbout = document.querySelector('.reveal-about');

window.addEventListener('scroll', revealSectionAbout)

function revealSectionAbout(){

    let hauteur = document.documentElement.scrollTop;

    if (hauteur > 595){
        revealAbout.style.opacity = '1';
    };
}


// ACTUELLEMENT

const revealActuellement = document.querySelector('.reveal-actuellement');

window.addEventListener('scroll', revealSectionActuellement)

function revealSectionActuellement(){

    let hauteur = document.documentElement.scrollTop;

    if (hauteur > 1615){
        revealActuellement.style.opacity = '1';
    };
}


// SKILLS


const revealSkills = document.querySelector('.reveal-skills');

window.addEventListener('scroll', revealSectionSkills)

function revealSectionSkills(){

    let hauteur = document.documentElement.scrollTop;

    if (hauteur > 2669){
        revealSkills.style.opacity = '1';
    };
}


const revealQuote = document.querySelector('.reveal-quote');

window.addEventListener('scroll', revealSectionQuote)

function revealSectionQuote(){

    let hauteur = document.documentElement.scrollTop;

    if (hauteur > 3859){
        revealQuote.style.opacity = '1';
    };
}


// PORTFOLIO


const revealPort = document.querySelector('.reveal-portfolio');

window.addEventListener('scroll', revealSectionPortfolio)

function revealSectionPortfolio(){

    let hauteur = document.documentElement.scrollTop;

    if (hauteur > 4862){
        revealPort.style.opacity = '1';
    };
}


// CONTACT

const revealcontact = document.querySelector('.reveal-contact');

window.addEventListener('scroll', revealSectionContact)

function revealSectionContact(){

    let hauteur = document.documentElement.scrollTop;

    if (hauteur > 5603){
        revealcontact.style.opacity = '1';
    };
}
