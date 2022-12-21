import { Controller } from '@hotwired/stimulus';

export default class RefreshController extends Controller {
  action() {
    document.getElementById(this.element.dataset.id).reload();
  }
};
