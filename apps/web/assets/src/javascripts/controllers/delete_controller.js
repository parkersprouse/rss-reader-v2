import { Controller } from '@hotwired/stimulus';

export default class DeleteController extends Controller {
  connect() {
    this.delete_form = document.getElementById(`delete-${this.element.dataset.id}`);
    this.feed_list = document.getElementById(`show-${this.element.dataset.id}`);;
  }

  show() {
    if (!this.delete_form || !this.feed_list || this.feed_list.style.display === 'none') return;
    this.feed_list.style.display = 'none';
    this.delete_form.style.removeProperty('display');
  }

  hide() {
    if (!this.delete_form || !this.feed_list || this.delete_form.style.display === 'none') return;
    this.delete_form.style.display = 'none';
    this.feed_list.style.removeProperty('display');
  }
};
