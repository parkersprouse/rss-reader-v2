import feather from 'feather-icons';
import { Application } from '@hotwired/stimulus';
import '@hotwired/turbo';
////
import DeleteController from './controllers/delete_controller';
import DropdownController from './controllers/dropdown_controller';
import EditController from './controllers/edit_controller';
import LoadFeedController from './controllers/load_feed_controller';
import ModalController from './controllers/modal_controller';
import RefreshController from './controllers/refresh_controller';
import RefreshAllController from './controllers/refresh_all_controller';
import ReorderController from './controllers/reorder_controller';
////
import { freezeScrollOnNextRender } from './lib/freeze_scroll';
import sortable from './lib/sortable';
import SnackBar from './vendor/js-snackbar';

window.Stimulus = Application.start();
Stimulus.register('delete', DeleteController);
Stimulus.register('dropdown', DropdownController);
Stimulus.register('edit', EditController);
Stimulus.register('load-feed', LoadFeedController);
Stimulus.register('modal', ModalController);
Stimulus.register('refresh', RefreshController);
Stimulus.register('refresh-all', RefreshAllController);
Stimulus.register('reorder', ReorderController);

document.addEventListener('turbo:load', () => {
  feather.replace();
  window.Sortable = sortable();

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

document.addEventListener('turbo:submit-start', (e) => {
  if (e.target.dataset?.scrollfreeze) freezeScrollOnNextRender();
});
