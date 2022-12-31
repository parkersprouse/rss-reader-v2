import { Controller } from '@hotwired/stimulus';

export default class ModalController extends Controller {
  open() {
    document.querySelector(`#${this.element.dataset.id}`).classList.add('open');
    document.querySelector('body').style.overflow = 'hidden';
  }

  close() {
    document.querySelector(`#${this.element.dataset.id}`).classList.remove('open');
    document.querySelector('body').style.removeProperty('overflow');
  }
};
