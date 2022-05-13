import { expect } from 'chai';
import { spy } from 'sinon';

import { DisjointSet } from '../../algorithms/dataStructures/disjointSet/disjointSet';

describe('disjoint Set', () => {
  describe('union and find', () => {
    it('should union and find', () => {
      const un = new DisjointSet(10);

      const unSpy = spy(un, 'unify');

      un.unify(1, 8);
      un.unify(2, 6);
      un.unify(3, 1);
      un.unify(5, 8);

      expect(unSpy.called).to.be.true;

      const set = un.find(6);

      expect(set).to.equal(2);

      const connected = un.connected(1, 5);

      expect(connected).to.be.true;

      const notConnected = un.connected(2, 1);

      expect(notConnected).to.be.false;
    });
  });
});
