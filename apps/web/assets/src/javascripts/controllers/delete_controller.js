import { Controller } from '@hotwired/stimulus';

class DeleteController extends Controller {
  // static targets = ['id'];
  action() {
    console.log(this.element);
  }
};

export default DeleteController;
