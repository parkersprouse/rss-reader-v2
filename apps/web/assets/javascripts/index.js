import DeleteController from './controllers/delete_controller.js';

window.StimulusApplication = Stimulus.Application.start();
StimulusApplication.register('delete', DeleteController);
