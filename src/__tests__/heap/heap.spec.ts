import { expect } from 'chai';
import { spy } from 'sinon';

import { Heap } from '../../algorithms/dataStructures/heap/heap';

describe('heap', () => {
  describe('create heap', () => {
    it('should create an empty heap', () => {
      const heap = new Heap();

      expect(heap.getSize()).to.equal(0);
    });
  });

  describe('.poll()', () => {
    it('should remove the root of the heap', () => {
      const heap = new Heap();

      const heapSpy = spy(heap, 'poll');

      heap.insert(1, 1);
      heap.insert(5, 5);
      heap.insert(1, 1);
      heap.insert(8, 8);
      heap.insert(6, 6);
      heap.insert(2, 2);
      heap.insert(2, 2);
      heap.insert(13, 13);
      heap.insert(12, 12);
      heap.insert(11, 11);
      heap.insert(7, 7);
      heap.insert(2, 2);
      heap.insert(15, 15);
      heap.insert(3, 3);
      heap.insert(10, 10);

      const node = heap.poll();

      expect(heapSpy.callCount).to.equal(1);

      expect(node!.getValue()).to.equal(1);

      expect(heap.getSize()).to.equal(14);
    });
  });

  describe('.insert()', () => {
    it('should insert 14 nodes into the heap', () => {
      const heap = new Heap();

      const heapSpy = spy(heap, 'insert');

      heap.insert(1, 1);
      heap.insert(2, 5);
      heap.insert(3, 1);
      heap.insert(4, 8);
      heap.insert(5, 6);
      heap.insert(6, 2);
      heap.insert(7, 2);
      heap.insert(8, 13);
      heap.insert(9, 12);
      heap.insert(10, 11);
      heap.insert(11, 7);
      heap.insert(12, 2);
      heap.insert(13, 15);
      heap.insert(14, 3);
      heap.insert(15, 10);

      expect(heapSpy.callCount).to.equal(15);
    });
  });
});
