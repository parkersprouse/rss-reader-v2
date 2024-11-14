import { Controller } from '@hotwired/stimulus';

export default class LoadFeedController extends Controller {
  connect() {
    this.load();
  }

  load() {
    const { id } = this.element;

    const stored_feed = JSON.parse(window.sessionStorage.getItem(id));
    if (stored_feed && (stored_feed.exp - Date.now() > 0)) {
      this.element.innerHTML = stored_feed.body;
      return;
    }

    fetch(`/feeds/${id.replace('feed-', '')}`)
      .then(response => response.text())
      .then((html) => {
        window.sessionStorage.setItem(id, JSON.stringify({ body: html, exp: Date.now() + (1000 * 60 * 5) }));
        this.element.innerHTML = html;
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
};
