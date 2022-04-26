const menuBar=document.querySelector(".menubar__container");
const menu=document.querySelector(".menu__list");
const logo=document.querySelector(".logo");
const home=document.querySelector(".home__conyainer");
const aboutPage=document.querySelector(".about__container");
const caseStudy=document.querySelector(".case-study__container");
const contact=document.querySelector(".contact__container");
const Text=document.querySelector(".text__wrapper");



menuBar.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const text=`       A FRONT-END DEVELOPER`;
var index=0;
const textPlace=document.querySelector("#home__text");

 createText = () => {
   textPlace.innerHTML=text.slice(0,index);
   index++;
   if(index > text.length){
       index=0;
   }
}
setInterval(createText,150);

const hideMenu= () => {
    menu.classList.remove("active")
}

menu.addEventListener('click', hideMenu);
logo.addEventListener('click', hideMenu);
caseStudy.addEventListener('click', hideMenu);
home.addEventListener('click', hideMenu);
aboutPage.addEventListener('click', hideMenu)
contact.addEventListener('click', hideMenu);