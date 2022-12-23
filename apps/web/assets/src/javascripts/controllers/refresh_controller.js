import { Controller } from '@hotwired/stimulus';

export default class RefreshController extends Controller {
  action() {
    const { id } = this.element.dataset;
    document.getElementById(id).reload();
    document.getElementById(`show-${id}`).innerHTML = `
      <div class='gra-loading-dots'>
        <span class='gra-loading-dot dot-1'></span>
        <span class='gra-loading-dot dot-2'></span>
        <span class='gra-loading-dot dot-3'></span>
      </div>`;
  }
};
