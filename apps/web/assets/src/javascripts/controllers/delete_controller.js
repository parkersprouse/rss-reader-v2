import { Controller } from '@hotwired/stimulus';

export default class DeleteController extends Controller {
  connect() {
    DeleteController.processing_delete = false;
  }

  action() {
    if (DeleteController.processing_delete) return;
    DeleteController.processing_delete = true;
    document.getElementById(this.element.dataset.id).requestSubmit();
  }
};
