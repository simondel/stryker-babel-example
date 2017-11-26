import assert from 'assert';
import { myFile } from '../lib/myFile';

describe('myFile', () => {
  it('should return 3', () => {
      console.log(new myFile().doIt());
    assert.equal(new myFile().doIt(), 3);
  });

  it('isItSo returns true', () => {
    assert.equal(new myFile().isItSo(55, 23), true);
  });
});