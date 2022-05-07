import { expect } from 'chai';
import { spy } from 'sinon';

import { BinarySearchTree } from '../../algorithms/dataStructures/binarySearchTree/binarySearchTree';

describe('binary search tree', () => {
  it('should create a new binary search tree', () => {
    const binarySearchTree = new BinarySearchTree();

    let binarySearchTreeSpy = spy(binarySearchTree, 'insert');

    binarySearchTree.insert(1, 10);

    expect(binarySearchTreeSpy.calledOnce).to.true;
    expect(binarySearchTreeSpy.calledWith(1, 10)).to.true;
    // expect(binarySearchTree.getRootNode).not.null;
  });
});
