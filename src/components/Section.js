export default class Section {
  constructor({ renderer }, containerSelector) {
    // this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  addItemStart(element) {
    this._containerSelector.prepend(element);
  }

  addItemEnd(element){
    this._containerSelector.append(element);
  }

  rendererItem(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }
}
