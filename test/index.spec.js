import chai from 'chai';
import Lib  from '../dist';

chai.expect();

const expect = chai.expect;

let lib ;

describe('Given an instance of my library', function () {
  before(function () {
    lib = new Lib();
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Hello world!');
    });
  });
});