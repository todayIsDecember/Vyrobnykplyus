/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// init select

const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}

// init scrollSpy

const scroll = document.querySelector('.scrollspy');
M.ScrollSpy.init(scroll, {
  scrollOffset: 100,
});

//  init tabs

const tabs = document.querySelectorAll('.tabs');
M.Tabs.init(tabs);
