import { Controller } from '@hotwired/stimulus';

export default class RefreshAllController extends Controller {
  action() {
    window.Sortable.toArray().forEach((feed) => {
      const ele = document.querySelector(`#${feed} .gra-card-title.hidden-mobile span[data-controller="refresh"]`);
      const refresh_controller = this.application.getControllerForElementAndIdentifier(ele, 'refresh');
      refresh_controller.action();
    });
  }
};
