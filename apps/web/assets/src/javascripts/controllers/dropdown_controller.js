import { Controller } from '@hotwired/stimulus';
import VanillaSelect from 'vanilla-js-dropdown';

export default class DropdownController extends Controller {
  connect() {
    this.select = new VanillaSelect({
      elem: this.element.dataset.id,
    });
  }

  open() {
    this.select.open();
  }

  close() {
    this.select.close();
  }

  toggle() {
    this.select.toggle();
  }
};
