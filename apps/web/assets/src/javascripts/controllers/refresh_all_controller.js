import { Controller } from '@hotwired/stimulus';

export default class RefreshAllController extends Controller {
  action() {
    window.Sortable.toArray().forEach((feed) => {
      let selector = `#${feed} .gra-card-title.hidden-mobile span[data-controller="refresh"]`;
      if (window.matchMedia('(max-width: 767px)').matches) {
        selector = `#${feed} .gra-card-title.visible-mobile span[data-controller="refresh"]`;
      }

      const ele = document.querySelector(selector);
      const refresh_controller = this.application.getControllerForElementAndIdentifier(ele, 'refresh');
      refresh_controller.action();
    });
  }
};
