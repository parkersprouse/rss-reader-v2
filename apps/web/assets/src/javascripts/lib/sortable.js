import Sortable from 'sortablejs/modular/sortable.core.esm.js';

export default function() {
  const feed_list = document.querySelector('.feeds-list');
  if (!feed_list) return;

  return Sortable.create(
    feed_list,
    {
      animation: 150,
      dataIdAttr: 'id',
      draggable: 'div.col',
      easing: 'cubic-bezier(1, 0, 0, 1)',
      handle: '.gra-card-title.hidden-mobile',

      ghostClass: 'gra-card--ghost', // Class name for the drop placeholder
      chosenClass: 'gra-card--chosen', // Class name for the chosen item
      dragClass: 'gra-card--drag', // Class name for the dragging item

      onUpdate: (event) => {
        const list = Array.from(event.to.children)
          .filter((ele) => ele.id !== 'feeds-form')
          .map((ele, i) => ({ index: i, id: ele.id.replace('feed-', '') }));

        fetch('/feeds/update_sort_order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
          },
          body: JSON.stringify({ body: list }),
        }).catch(() => {
          // TODO: show error snackbar and reset sort order
        });
      },
    },
  );
};
