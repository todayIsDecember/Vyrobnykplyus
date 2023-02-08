/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
import '../scss/style.scss';
import './plugins/index';

import navbar from './eventsUI/navbar';
import language from './eventsUI/multilingualism';
import animations from './eventsUI/animations';

const animItems = document.querySelectorAll('._anim-items');
// import location from './store/form__login';

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};

document.addEventListener('DOMContentLoaded', () => {
  navbar.activeMenu();
  navbar.showAlert();
  language.changeLanguage();
  animations.makeAnimations();
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    if (animItems.length > 0) {
      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = Offset(animItem).top;
        const animStart = 2;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        // eslint-disable-next-line max-len
        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          animItem.classList.remove('_active');
        }
      }
    }
  }

  function Offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
});