import { Controller } from '@hotwired/stimulus';

class EditController extends Controller {
  connect() {
    this.edit_form = document.getElementById(`edit-${this.element.dataset.id}`);
    this.feed_list = document.getElementById(`show-${this.element.dataset.id}`);;
  }

  showEdit() {
    if (!this.edit_form || !this.feed_list || this.feed_list.style.display === 'none') return;
    this.feed_list.style.display = 'none';
    this.edit_form.style.removeProperty('display');
  }

  showPanel() {
    if (!this.edit_form || !this.feed_list || this.edit_form.style.display === 'none') return;
    this.edit_form.style.display = 'none';
    this.feed_list.style.removeProperty('display');
  }
};

export default EditController;
