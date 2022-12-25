import { Controller } from '@hotwired/stimulus';
import { freezeScrollOnNextRender } from '../lib/freeze_scroll';

export default class ReorderController extends Controller {
  down() {
    const order = window.Sortable.toArray();
    const index_to_move = order.indexOf(`feed-${this.element.dataset.id}`);

    if (index_to_move >= 0 && index_to_move < order.length - 1) {
      const new_arr = this.swapElements(order, index_to_move, index_to_move + 1);
      window.Sortable.sort(new_arr, false);
      this.saveOrder(new_arr);
    }

    const add_form = document.getElementById('feeds-form');
    const list = document.querySelector('.feeds-list');
    list.appendChild(add_form);
  }

  up() {
    const order = window.Sortable.toArray();
    const index_to_move = order.indexOf(`feed-${this.element.dataset.id}`);

    if (index_to_move > 0 && index_to_move < order.length) {
      const new_arr = this.swapElements(order, index_to_move, index_to_move - 1);
      window.Sortable.sort(new_arr, false);
      this.saveOrder(new_arr);
    }

    const add_form = document.getElementById('feeds-form');
    const list = document.querySelector('.feeds-list');
    list.appendChild(add_form);
  }

  swapElements(arr, x, y) {
    if (arr[x] === undefined || arr[y] === undefined) return arr;
    const a = x > y ? y : x;
    const b = x > y ? x : y;
    return [
      ...arr.slice(0, a),
      arr[b],
      ...arr.slice(a + 1, b),
      arr[a],
      ...arr.slice(b + 1),
    ];
  }

  saveOrder(arr) {
    freezeScrollOnNextRender();
    fetch('/feeds/update_sort_order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
      },
      body: JSON.stringify({
        body: arr.filter((id) => id !== 'feeds-form').map((id) => id.replace('feed-', '')).map((id, index) => ({ index, id })),
      }),
    }).catch(() => {});
  }
};
