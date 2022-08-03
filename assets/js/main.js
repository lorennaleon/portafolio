/*==================== MENU SHOW Y HIDDEN ====================*/


/*===== MENU SHOW =====*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() => {
       navMenu.classList.remove('show-menu')
})
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

      function toggleSkills(){
        let itemClass = this.parentNode.className

        for(i=0; i < skillsContent.length; i++){
            skillsContent[i].className = 'skills_content skills_close'
        }
        if(itemClass === 'skills_content skills_close'){
            this.parentNode.className = 'skills_content skills_open'
        }
      }

      skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills)
      })
/*==================== QUALIFICATION TABS ====================*/
    const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab =>{
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)
       
        
           tabContent.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
           })
           target.classList.add('qualification_Active')

           tabs.forEach(tab => {
            tabs.classList.remove('qualification_active')
           })
           tabs.classList.add('qualification_active')
        })
    })


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 