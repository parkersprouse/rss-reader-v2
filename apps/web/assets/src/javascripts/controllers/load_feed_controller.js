import { Controller } from '@hotwired/stimulus';

export default class LoadFeedController extends Controller {
  async connect() {
    await this.load();

    this.titles = this.element.getElementsByClassName('feed-title');
    for (const ele of this.titles) ele.addEventListener('click', this.titleClickHandler.bind(this));
  }

  disconnect() {
    this.unload();
  }

  async load() {
    const { id } = this.element;

    const stored_feed = JSON.parse(window.sessionStorage.getItem(id));
    if (stored_feed && (stored_feed.exp - Date.now() > 0)) {
      this.element.innerHTML = stored_feed.body;
      return;
    }

    try {
      const response = await fetch(`/feeds/${id.replace('feed-', '')}`);
      const html = await response.text();
      window.sessionStorage.setItem(id, JSON.stringify({ body: html, exp: Date.now() + (1000 * 60 * 5) }));
      this.element.innerHTML = html;
    } catch {
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
    }
  }

  unload() {
    // this.title.removeEventListener('click', this.titleClickHandler);
    for (const ele of this.titles) ele.removeEventListener('click', this.titleClickHandler);
  }

  titleClickHandler() {
    console.log('clicked');
    for (const ele of this.titles) ele.classList.toggle('extended');
  }
};
