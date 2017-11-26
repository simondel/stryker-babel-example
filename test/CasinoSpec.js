import assert from 'assert';
import Casino from '../lib/Casino';

describe('Casino', () => {
  describe('user over 18', () => {
    it('should be allowed inside', () => {
      const casino = new Casino();
      const user = { age: 24 };

      const result = casino.isOldEnough(user);

      assert.equal(result, true);
    })
  })
});