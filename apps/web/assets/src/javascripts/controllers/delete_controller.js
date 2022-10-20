import { Controller } from '@hotwired/stimulus';
import SnackBar from '../vendor/js-snackbar';

class DeleteController extends Controller {
  action() {
    const csrf = document.querySelector('[name=_csrf_token]').value;

    const body = new FormData();
    body.append('_csrf_token', csrf);

    fetch(`/feeds/${this.element.dataset.id}`, {
      body,
      method: 'DELETE',
    })
      .then(response => response.text())
      .then(html => this.element.innerHTML = html)
      .then(_ => {
        SnackBar({
          fixed: true,
          message: 'Feed Deleted',
          position: 'tr',
          speed: 250,
          status: 'success',
          timeout: 2500,
        });
      });
  }
};

export default DeleteController;
