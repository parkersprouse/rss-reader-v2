﻿import { Controller } from '@hotwired/stimulus';
import { freezeScrollOnNextRender } from '../lib/freeze_scroll';

export default class RefreshController extends Controller {
  action() {
    freezeScrollOnNextRender();

    const { id } = this.element.dataset;
    const feed = document.querySelector(`#feed-${id}`);

    let selector = '.gra-card-title.hidden-mobile';
    if (window.matchMedia('(max-width: 767px)').matches) {
      selector = '.gra-card-title.visible-mobile';
    }

    const title = feed.querySelector(selector);
    title.innerHTML = `
      ${title.textContent}
      <div class='gra-loading-dots' style='display: inline-flex; width: auto;'>
        <span class='gra-loading-dot dot-1'></span>
        <span class='gra-loading-dot dot-2'></span>
        <span class='gra-loading-dot dot-3'></span>
      </div>
    `;

    fetch(`/feeds/${id}`)
      .then((response) => response.text())
      .then((html) => {
        window.sessionStorage.setItem(id, JSON.stringify({ body: html, exp: Date.now() + (1000 * 60 * 5) }));
        feed.innerHTML = html;
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
