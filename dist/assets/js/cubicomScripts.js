import { customCursor } from './customCursor.js';

window.addEventListener('load', ()=>{
    setTimeout(() => {
        document.querySelector('.main-nav__line').classList.add('inview')
    }, 300);
    document.querySelector('#MenuToggle').addEventListener('click', ()=>{
        document.querySelector('.content-menu__toggler').classList.toggle('open')
        document.querySelector('.content-menu__links').classList.toggle('active')
    })

    function getCurrentYear() {
        return new Date().getFullYear();
      };
    
    document.getElementById("website-date").innerHTML = `${getCurrentYear()}© `;
   
   if (window.innerWidth >= 1024){
       customCursor()
   }

})
