const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*=============== SHOW MENU ===============*/
if(navToggle){
  navToggle.addEventListener('click' ,()=>{
    navMenu.classList.add("show-menu")
  })
}
/*============== MENU HIDDEN ===============*/
if(navClose){
  navClose.addEventListener('click' ,()=>{
    navMenu.classList.remove("show-menu")
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction(){
  const navMenu = document.getElementById("nav-menu")

  navMenu.classList.remove("show-menu")
}

navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
  const header = document.getElementById("header")

  if(this.scrollY >=80){
    header.classList.add("scroll-header")
  }
  else{
    header.classList.remove("scroll-header")
  }
}
window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/

var swiper = new Swiper(".testimonial-wrapper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable :true,
    },
  });
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/
const filterContainer = document.querySelector(".portfolio-filter-inner"),
      filterBtns = filterContainer.children,
      totalFilterBtns = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItems = portfolioItems.length;

      for(let i=0; i<totalFilterBtns; i++){

        filterBtns[i].addEventListener('click', function(){
          
          filterContainer.querySelector(".active").classList.remove(".active");
          this.classList.add(".active");  
          
          const filterValue = this.getAttribute("data-category");
          for(let k=0; k<totalPortfolioItems; k++){

            if(filterValue === portfolioItems[k].getAttribute("data-category")){
              portfolioItems[k].classList.remove("hide");
              portfolioItems[k].classList.add("show");
            }
            if(filterValue === "all"){
              portfolioItems[k].classList.remove("hide");
              portfolioItems[k].classList.add("show");
            }
            else{
              portfolioItems[k].classList.add("hide");
              portfolioItems[k].classList.remove("show");

            }
          }
        })
      }


/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModel = document.querySelector(".customize-theme")

const openThemeModel = () =>{
  themeModel.style.display ='grid';
}

const closeThemeModel = (e) =>{
  if(e.target.classList.contains("customize-theme")){
    themeModel.style.display ='none';
  }
}
theme.addEventListener('click', openThemeModel);
themeModel.addEventListener('click', closeThemeModel);

/*===== FONTS =====*/
const fontSizes = document.querySelectorAll('.choose-size span');

const removeSizeSelector = () =>{
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
}
fontSizes.forEach(size =>{
  size.addEventListener('click', ()=>{

    removeSizeSelector();

    let fontsize;

    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
      fontsize = '12px';
    }
    else if(size.classList.contains('font-size-2')){
      fontsize = '14px';
    }
    else if(size.classList.contains('font-size-3')){
      fontsize = '16px';
    }
    else if(size.classList.contains('font-size-4')){
      fontsize = '18px';
    }

    document.querySelector('html').style.fontSize = fontsize;
  })
})

/*===== PRIMARY COLORS =====*/

const colorPalette = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root')

const removeColorActiveClass = ()=>{
  colorPalette.forEach( colorPicker =>{
    colorPicker.classList.remove("active");
  })
}

colorPalette.forEach(color =>{
  color.addEventListener('click', ()=>{

    removeColorActiveClass();
    let primaryHue;

    if(color.classList.contains('color-1')){
      primaryHue = 252;
    }
    else if(color.classList.contains('color-2')){
      primaryHue = 52;
    }
    else if(color.classList.contains('color-3')){
      primaryHue = 352;
    }
    else if(color.classList.contains('color-4')){
      primaryHue = 152;
    }
    else if(color.classList.contains('color-5')){
      primaryHue = 202;
    }

    color.classList.add("active");
    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})

/*===== THEME BACKGROUNDS =====*/

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () =>{
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', ()=>{

  Bg1.classList.add('active');

  Bg3.classList.remove('active');
  Bg2.classList.remove('active');

  window.location.reload();
})

Bg2.addEventListener('click', ()=>{
  
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  Bg2.classList.add('active');

  Bg1.classList.remove('active');
  Bg3.classList.remove('active');

  changeBG();
})

Bg3.addEventListener('click', ()=>{

  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  Bg3.classList.add('active');

  Bg1.classList.remove('active');
  Bg2.classList.remove('active');

  changeBG();
})
