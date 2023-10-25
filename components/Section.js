export default class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._container = container;
    this._renderer = renderer;
  }

  _renderItems() {}
}
