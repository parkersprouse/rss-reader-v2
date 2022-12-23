import { Controller } from '@hotwired/stimulus';

export default class ReorderController extends Controller {
  down() {
    const order = window.Sortable.toArray();
    const index_to_move = order.indexOf(this.element.dataset.id);

    if (index_to_move >= 0 && index_to_move < order.length - 1) {
      const new_arr = this.swapElements(order, index_to_move, index_to_move + 1);
      window.Sortable.sort(new_arr, true);
      this.saveOrder(new_arr);
    }
  }

  up() {
    const order = window.Sortable.toArray();
    const index_to_move = order.indexOf(this.element.dataset.id);

    if (index_to_move > 0 && index_to_move < order.length) {
      const new_arr = this.swapElements(order, index_to_move, index_to_move - 1);
      window.Sortable.sort(new_arr, true);
      this.saveOrder(new_arr);
    }
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
    fetch('/feeds/update_sort_order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
      },
      body: JSON.stringify({
        body: arr.map((id, index) => ({ index, id })),
      }),
    }).catch(() => {});
  }
};
