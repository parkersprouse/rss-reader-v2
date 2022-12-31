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

  const scroll_btn = document.querySelector('#scroll-to-top');
  if (scroll_btn) {
    scroll_btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });

    let last_position = 0;
    let processing = false;
    document.addEventListener('scroll', () => {
      last_position = window.scrollY;
      if (!processing) {
        window.requestAnimationFrame(() => {
          if (last_position > 0) scroll_btn.classList.remove('hide');
          else scroll_btn.classList.add('hide');
          processing = false;
        });
        processing = true;
      }
    });
  }
});

document.addEventListener('turbo:submit-start', (e) => {
  if (e.target.dataset?.scrollfreeze) freezeScrollOnNextRender();
});
