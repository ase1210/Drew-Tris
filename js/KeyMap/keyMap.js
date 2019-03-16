export default class KeyMap {
  constructor(actions) {
    this.actions = actions;
    this.eventHandler = this.eventHandler.bind(this);
    document.addEventListener("keydown", this.eventHandler);
  }
  eventHandler(e) {
    if (this.actions[e.code]) {
      this.actions[e.code]();
    }
  }
  removeEventListener() {
    document.removeEventListener("keydown", this.eventHandler);
  }
}
