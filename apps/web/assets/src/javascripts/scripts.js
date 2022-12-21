import feather from 'feather-icons';
import { Application } from '@hotwired/stimulus';
import DeleteController from './controllers/delete_controller';
import EditController from './controllers/edit_controller';
import RefreshController from './controllers/refresh_controller';
import sortable from './lib/sortable';
import SnackBar from './vendor/js-snackbar';
import '@hotwired/turbo';

window.Stimulus = Application.start();
Stimulus.register('delete', DeleteController);
Stimulus.register('edit', EditController);
Stimulus.register('refresh', RefreshController);

document.addEventListener('turbo:load', () => {
  feather.replace();
  sortable();

  if (window.RssReader?.sucmsg) {
    SnackBar({
      fixed: true,
      message: window.RssReader.sucmsg,
      position: 'tr',
      speed: 250,
      status: 'success',
      timeout: 2500,
    });
  }

  if (window.RssReader?.errmsg) {
    SnackBar({
      fixed: true,
      message: window.RssReader.errmsg,
      position: 'tr',
      speed: 250,
      status: 'error',
      timeout: 2500,
    });
  }
});

document.addEventListener('turbo:frame-render', () => {
  feather.replace();
});
