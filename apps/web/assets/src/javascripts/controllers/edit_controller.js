import { Controller } from '@hotwired/stimulus';

class EditController extends Controller {
  connect() {
    this.edit_form = document.getElementById(`edit-${this.element.dataset.id}`);
    this.feed_list = document.getElementById(`show-${this.element.dataset.id}`);;
  }

  showEdit() {
    if (!this.edit_form || !this.feed_list) return;
    this.feed_list.style.display = 'none';
    this.edit_form.style.display = 'initial';
  }

  showPanel() {
    if (!this.edit_form || !this.feed_list) return;
    this.edit_form.style.display = 'none';
    this.feed_list.style.display = 'initial';
  }
};

export default EditController;
