import Sortable from 'sortablejs/modular/sortable.core.esm.js';

export default function() {
  const feed_list = document.querySelector('.feeds-list');
  if (!feed_list) return;

  const sortable = Sortable.create(
    feed_list,
    {
      animation: 150,
      draggable: '.col',
      easing: 'cubic-bezier(1, 0, 0, 1)',
      handle: '.gra-card-title',
    },
  );
};
