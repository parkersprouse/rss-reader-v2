import { Controller } from '@hotwired/stimulus';

class EditController extends Controller {
  // static targets = ['id'];
  action() {
    console.log(this.element);
  }
};

export default EditController;
