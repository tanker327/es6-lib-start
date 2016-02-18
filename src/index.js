import hello from './lib';

class Lib {
  constructor() {
    this._name = hello;
  }
  get name() {
    return this._name;
  }
}

export default Lib;
