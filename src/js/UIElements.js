const elements = {
  menu__header: document.querySelectorAll('.header__menu .header__link'),
  pa__header: document.querySelectorAll('.pa__header .lang'),
  pa__2: document.querySelectorAll('.pa__2 .lang'),
  pa__4: document.querySelectorAll('.lang__alone'),
  pa__5: document.querySelectorAll('.pa__5 .lang'),
  pa__6: document.querySelectorAll('.pa__6 .lang'),
  cards: document.querySelectorAll('.lang__card'),
  footer: document.querySelectorAll('.lang__footer'),
  products__categories: document.querySelectorAll('.lang__product__page'),
  navigator__product__page: document.querySelectorAll('.lang__navigation__product__page'),
  history__page__pa: document.querySelectorAll('.lang__history__page'),
  about__page__pa: document.querySelectorAll('.lang__about__page'),
  contact_us: document.querySelectorAll('.contacts__page .lang'),
  change__form: document.querySelectorAll('.login__page .change__form'),
};

const burger = document.querySelector('.header__icons .header__burger');
const menu = document.querySelector('.header__body .header__menu');
const lan = document.querySelectorAll('.translate');
const contact__container = document.querySelector('.info__container');
const forms = document.querySelectorAll('.login__page__form');
const elInProcess = document.querySelectorAll('.inProcess');
export {
  elements, burger, menu, lan, contact__container, elInProcess, forms,
};