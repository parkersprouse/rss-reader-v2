import feather from 'feather-icons';
import { Controller } from '@hotwired/stimulus';

export default class LoadFeedController extends Controller {
  connect() {
    this.load();
  }

  load() {
    const { id } = this.element;

    if (window.sessionStorage.getItem(`feed-${id}`)) {
      this.element.innerHTML = window.sessionStorage.getItem(`feed-${id}`);
      feather.replace();
    } else {
      fetch(`/feeds/${id.replace('feed-', '')}`)
        .then(response => response.text())
        .then((html) => {
          window.sessionStorage.setItem(`feed-${id}`, html);
          this.element.innerHTML = html;
          feather.replace();
        })
        .catch(() => {
          this.element.innerHTML = `
          <div class='gra-card'>
            <div class='gra-card-content'>
              <h5 class='gra-card-title'>
                Failed To Load Feed
              </h5>
              <div class='gra-card-body' id='show-${id}'>
                There was a problem loading the feed
              </div>
            </div>
          </div>`;
        });
    }
  }
};
