//import { cli } from "webpack-dev-server";
export function burger() {
   try {
      //===========================================================
      const headerBurger = document.querySelector('.header__burger'),
         headerMenu = document.querySelector('.header__menu');
      console.log(headerBurger);
      // слушатель на бургер ========================================
      headerBurger.addEventListener('click', () => {
         const target = event.target;
         if (target) {
            headerMenu.classList.toggle('menu_open');
            headerBurger.classList.toggle('menu_open');
         }
      });
   } catch (error) {
      console.warn(error)
   };
}
burger();

