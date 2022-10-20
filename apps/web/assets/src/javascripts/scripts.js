import feather from 'feather-icons';
import { Application } from '@hotwired/stimulus';
import * as Turbo from '@hotwired/turbo';
import DeleteController from './controllers/delete_controller.js';
import sortable from './lib/sortable';

window.Stimulus = Application.start();
Stimulus.register('delete', DeleteController);

document.addEventListener('turbo:load', function() {
  feather.replace();
  sortable();
});
