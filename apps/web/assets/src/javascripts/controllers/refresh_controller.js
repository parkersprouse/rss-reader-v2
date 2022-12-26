import feather from 'feather-icons';
import { Controller } from '@hotwired/stimulus';
import { freezeScrollOnNextRender } from '../lib/freeze_scroll';

export default class RefreshController extends Controller {
  action() {
    freezeScrollOnNextRender();

    const { id } = this.element.dataset;
    const feed = document.getElementById(`feed-${id}`);

    feed.innerHTML = `
      <div class='gra-card'>
        <div class='gra-card-content'>
          <h5 class='gra-card-title'>
            Loading Feed...
          </h5>
          <div class='gra-card-body'>
            <div class='gra-loading-dots'>
              <span class='gra-loading-dot dot-1'></span>
              <span class='gra-loading-dot dot-2'></span>
              <span class='gra-loading-dot dot-3'></span>
            </div>
          </div>
        </div>
      </div>`;

    fetch(`/feeds/${id}`)
      .then(response => response.text())
      .then((html) => {
        window.sessionStorage.setItem(id, JSON.stringify({ body: html, exp: Date.now() + (1000 * 60 * 5) }));
        feed.innerHTML = html;
        feather.replace();
      })
      .catch(() => {
        feed.innerHTML = `
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
