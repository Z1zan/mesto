export default class Section {
  constructor({ renderer }, containerSelector) {
    // this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItemStart(element) {
    this._container.prepend(element);
  }

  addItemEnd(element){
    this._container.append(element);
  }

  rendererItem(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }
}
