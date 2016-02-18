// import hello from './lib';
let hello = 'Hello world!';

class Lib {
  constructor() {
    this._name = hello;
  }
  get name() {
    return this._name;
  }
}

export default Lib;
