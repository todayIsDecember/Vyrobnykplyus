/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import { burger, menu, elInProcess } from '../UIElements';

class Navbar {
  constructor(burger, menu, elInProcess) {
    this.burger = burger;
    this.menu = menu;
  }

  showAlert() {
    return elInProcess.forEach((el) => {
      el.addEventListener('click', () => {
        const lang = localStorage.getItem('lang');
        let msg = '';
        lang === 'en' ? msg = 'PAGE IN DEVELOPMENT' : msg = 'СТОРІНКА В РОЗРОБЦІ';
        M.toast({ html: msg, classes: 'toast' });
      });
    });
  }

  activeMenu() {
    return this.burger.addEventListener('click', () => {
      this.burger.classList.toggle('active');
      this.menu.classList.toggle('active__menu');
    });
  }
}

const navbar = new Navbar(burger, menu, elInProcess);

export default navbar;