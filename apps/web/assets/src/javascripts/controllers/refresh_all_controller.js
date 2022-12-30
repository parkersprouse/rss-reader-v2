import { Controller } from '@hotwired/stimulus';

export default class RefreshAllController extends Controller {
  connect() {
    const refresh_interval = Number(window.RssReader?.preferences?.refresh_interval);
    if (refresh_interval && refresh_interval > 0) {
      // Refresh interval is stored in seconds, but the JS interval method uses milliseconds
      this.refresher = setInterval(() => {
        this.action();
      }, refresh_interval * 1000);
    }
  }

  disconnect() {
    if (this.refresher) clearInterval(this.refresher);
  }

  action() {
    window.Sortable.toArray().forEach((id) => {
      let selector = `#${id} .gra-card-title.hidden-mobile span[data-controller="refresh"]`;
      if (window.matchMedia('(max-width: 767px)').matches) {
        selector = `#${id} .gra-card-title.visible-mobile span[data-controller="refresh"]`;
      }

      const ele = document.querySelector(selector);
      const refresh_controller = this.application.getControllerForElementAndIdentifier(ele, 'refresh');
      refresh_controller.action();
    });
  }
};
