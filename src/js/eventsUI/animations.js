const buttons = document.querySelectorAll('.products .showMore');

class Animations {
  constructor(buttonss, animItems) {
    this.buttons = buttonss;
    this.animItems = animItems;
  }

  makeAnimations() {
    if (this.buttons.length === '1') {
      this.buttons.addEventListener('click', () => {
        const parent = btn.closest('.product__description');
        const UIElements = parent.querySelectorAll('.class__for__animation');
        const article = UIElements[0];
        const grafic = UIElements[1];
        const text = UIElements[2];
        btn.classList.toggle('activeBtn');
        const hide = localStorage.getItem('lang') === 'en' ? 'hide' : 'скрити';
        const more = localStorage.getItem('lang') === 'en' ? 'more' : 'більше';
        btn.textContent = btn.classList.contains('activeBtn') ? hide : more;
        article.classList.toggle('hideArticleAnimation');
        grafic.classList.toggle('showDiagramAnimation');
        text.classList.toggle('showTextAnimation');
      });
      return;
    }
    this.buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const parent = btn.closest('.product__description');
        const UIElements = parent.querySelectorAll('.class__for__animation');
        const article = UIElements[0];
        const grafic = UIElements[1];
        const text = UIElements[2];
        btn.classList.toggle('activeBtn');
        const hide = localStorage.getItem('lang') === 'en' ? 'hide' : 'скрити';
        const more = localStorage.getItem('lang') === 'en' ? 'more' : 'більше';
        btn.textContent = btn.classList.contains('activeBtn') ? hide : more;
        article.classList.toggle('hideArticleAnimation');
        grafic.classList.toggle('showDiagramAnimation');
        text.classList.toggle('showTextAnimation');
      });
    });
  }
}

const animations = new Animations(buttons);

export default animations;