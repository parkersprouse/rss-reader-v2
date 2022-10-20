import Sortable from 'sortablejs/modular/sortable.core.esm.js';

function init() {
  const sortable = Sortable.create(
    document.querySelector('.feeds-list'),
    {
      animation: 150,
      draggable: '.col',
      easing: 'cubic-bezier(1, 0, 0, 1)',
      handle: '.gra-card-title',
    },
  );
}

export default init;
