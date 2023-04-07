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

      onUpdate: (event) => {
        const { children } = event.to;
        const list = Object.keys(children)
          .map((ele) => ({ index: ele, id: children[ele].id }))
          .filter((ele) => ele.id !== 'feeds-form')
          .map((ele) => ele.id.replace('feed-', ''));

        fetch('/feeds/update_sort_order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
          },
          body: JSON.stringify({ body: list }),
        }).catch(() => { });
      },
    },
  );
};
