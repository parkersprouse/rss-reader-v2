import feather from 'feather-icons';
import { Application } from '@hotwired/stimulus';
import * as Turbo from '@hotwired/turbo';
import DeleteController from './controllers/delete_controller.js';
import EditController from './controllers/edit_controller.js';
import sortable from './lib/sortable';
import SnackBar from './vendor/js-snackbar';

window.Stimulus = Application.start();
Stimulus.register('delete', DeleteController);
Stimulus.register('edit', EditController);

document.addEventListener('turbo:load', () => {
  feather.replace();
  sortable();

  const success_msg = document.querySelector('meta[name="success-flash"]')?.content;
  if (success_msg) {
    SnackBar({
      fixed: true,
      message: success_msg,
      position: 'tr',
      speed: 250,
      status: 'success',
      timeout: 2500,
    });
  }

  const error_msg = document.querySelector('meta[name="error-flash"]')?.content;
  if (error_msg) {
    SnackBar({
      fixed: true,
      message: error_msg,
      position: 'tr',
      speed: 250,
      status: 'error',
      timeout: 2500,
    });
  }
});
