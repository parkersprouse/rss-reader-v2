import { Controller } from '@hotwired/stimulus';

export default class ModalController extends Controller {
  open() {
    document.querySelector(`#${this.element.dataset.id}`).classList.add('open');
  }

  close() {
    document.querySelector(`#${this.element.dataset.id}`).classList.remove('open');
  }
};
