/* eslint-disable prefer-const */
/* eslint-disable import/newline-after-import */
import { elements } from '../UIElements';

const { change__form } = elements;

class Form {
  constructor(change__form) {
    this.click__here = {
      reg: change__form[0],
      log: change__form[1],
    };
  }

  onChangeForm() {
    let formLog = this.click__here.log.closest('.login__page__form');
    let formReg = this.click__here.reg.closest('.login__page__form');
    Object.values(this.click__here).forEach((button) => {
      button.addEventListener('click', () => {
        console.log(formLog, formReg);
        formLog.classList.toggle('showForm');
        formLog.classList.toggle('hideForm');
        formReg.classList.toggle('showForm');
        formReg.classList.toggle('hideForm');
      });
    });
  }
}

const form = new Form(change__form);

export default form;
