export default class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._container = document.querySelector(container);
    this._renderer = renderer;
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
