const menuBar=document.querySelector(".menubar__container");
const menu=document.querySelector(".menu__list");
const logo=document.querySelector(".logo");
const home=document.querySelector(".home__conyainer");
const aboutPage=document.querySelector(".about__container");
const caseStudy=document.querySelector(".case-study__container");
const contact=document.querySelector(".contact__container");
const Text=document.querySelector(".text__wrapper");
const Text=document.querySelector(".text__wrapper");
// const preloader = document.querySelector(".preloader__container");
var cursor = document.querySelector(".cursor"),
// Mouse follow circle animation
   gsap.set(".cursor", {xPercent: -50, yPercent: -50});
  
   const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
   const mouse = { x: pos.x, y: pos.y };
   const speed = 0.1;
   
   const xSet = gsap.quickSetter(cursor, "x", "px");
   const ySet = gsap.quickSetter(cursor, "y", "px");
   
   window.addEventListener("mousemove", e => {    
     mouse.x = e.x;
     mouse.y = e.y;  
   });
   
   gsap.ticker.add(() => {
     // adjust speed for higher refresh monitors
     const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
     
     pos.x += (mouse.x - pos.x) * dt;
     pos.y += (mouse.y - pos.y) * dt;
     xSet(pos.x);
     ySet(pos.y);
   });
const nM=document.querySelector(".name");
const write ="WISDOM";
var indx = 0;

function writeText() {
    nM.innerHTML= write.slice(0,indx);
    indx++;
    if(indx > write.length){
        indx=0;
    }
};
setInterval(writeText,200);


// window.addEventListener("load",() => {
//     preloader.style.display="none";
// });
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
