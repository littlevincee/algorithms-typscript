import { expect } from 'chai';
import { spy } from 'sinon';

import { BinarySearchTree } from '../../algorithms/dataStructures/binarySearchTree/binarySearchTree';

describe('binary search tree', () => {
  it('should create a new binary search tree', () => {
    const binarySearchTree = new BinarySearchTree();

    expect(binarySearchTree).not.null;
  });

  it('should call insert() to add new node', () => {
    const binarySearchTree = new BinarySearchTree();

    let binarySearchTreeSpy = spy(binarySearchTree, 'insert');

    binarySearchTree.insert(1, 10);

    expect(binarySearchTreeSpy.calledWith(1, 10)).to.true;
  });

  describe('.findByValue()', () => {
    it('should find a node on the left subtree', () => {
      const binarySearchTree = new BinarySearchTree<number>();

      let binarySearchTreeSpy = spy(binarySearchTree, 'findByValue');

      binarySearchTree.insert(1, 30);
      binarySearchTree.insert(2, 20);
      binarySearchTree.insert(3, 50);
      binarySearchTree.insert(4, 25);
      binarySearchTree.insert(5, 10);
      binarySearchTree.insert(6, 45);
      binarySearchTree.insert(7, 60);

      const valueToFind = 10;

      const foundNode = binarySearchTree.findByValue(valueToFind);

      expect(binarySearchTreeSpy.calledWith(valueToFind)).to.true;

      expect(foundNode).to.not.null;

      expect(foundNode!.getValue()).to.equal(valueToFind);
    });

    it('should find a node on the right subtree', () => {
      const binarySearchTree = new BinarySearchTree<number>();

      let binarySearchTreeSpy = spy(binarySearchTree, 'findByValue');

      binarySearchTree.insert(1, 30);
      binarySearchTree.insert(2, 20);
      binarySearchTree.insert(3, 50);
      binarySearchTree.insert(4, 25);
      binarySearchTree.insert(5, 10);
      binarySearchTree.insert(6, 45);
      binarySearchTree.insert(7, 60);

      const valueToFind = 50;

      const foundNode = binarySearchTree.findByValue(valueToFind);

      expect(binarySearchTreeSpy.calledWith(valueToFind)).to.true;

      expect(foundNode).to.not.null;

      expect(foundNode!.getValue()).to.equal(valueToFind);
    });

    it('should not find a node and return null', () => {
      const binarySearchTree = new BinarySearchTree<number>();

      let binarySearchTreeSpy = spy(binarySearchTree, 'findByValue');

      binarySearchTree.insert(1, 30);
      binarySearchTree.insert(2, 20);
      binarySearchTree.insert(3, 50);
      binarySearchTree.insert(4, 25);
      binarySearchTree.insert(5, 10);
      binarySearchTree.insert(6, 45);
      binarySearchTree.insert(7, 60);

      const foundNode = binarySearchTree.findByValue(100);

      expect(binarySearchTreeSpy.calledOnce).to.true;

      expect(foundNode).to.null;
    });
  });

  describe('.remove()', () => {
    it('should remove a node', () => {
      const binarySearchTree = new BinarySearchTree<number>();

      let binarySearchTreeSpy = spy(binarySearchTree, 'remove');

      binarySearchTree.insert(1, 7);
      binarySearchTree.insert(2, 5);
      binarySearchTree.insert(3, 20);
      binarySearchTree.insert(4, 4);
      binarySearchTree.insert(5, 18);
      binarySearchTree.insert(6, 25);
      binarySearchTree.insert(7, 2);
      binarySearchTree.insert(8, 11);
      binarySearchTree.insert(9, 19);
      binarySearchTree.insert(10, 33);
      binarySearchTree.insert(11, 1);
      binarySearchTree.insert(12, 3);
      binarySearchTree.insert(13, 14);
      binarySearchTree.insert(14, 28);
      binarySearchTree.insert(15, 12);
      binarySearchTree.insert(16, 15);
      binarySearchTree.insert(17, 31);

      const foundNode = binarySearchTree.remove(7);

      expect(binarySearchTreeSpy.calledOnce).to.true;

      expect(foundNode).to.not.null;
    });

    it('should return an empty binary search tree', () => {
      const binarySearchTree = new BinarySearchTree<number>();

      let binarySearchTreeSpy = spy(binarySearchTree, 'remove');

      const foundNode = binarySearchTree.remove(7);

      expect(binarySearchTreeSpy.calledOnce).to.true;

      expect(foundNode).to.be.null;
    });
  });

  describe('.heigh', () => {
    it('should return the binary tree heigh', () => {
      const binarySearchTree = new BinarySearchTree<number>();

      let binarySearchTreeSpy = spy(binarySearchTree, 'height');

      binarySearchTree.insert(1, 11);
      binarySearchTree.insert(2, 6);
      binarySearchTree.insert(3, 15);
      binarySearchTree.insert(4, 3);
      binarySearchTree.insert(5, 8);
      binarySearchTree.insert(6, 13);
      binarySearchTree.insert(7, 17);
      binarySearchTree.insert(8, 1);
      binarySearchTree.insert(9, 5);
      binarySearchTree.insert(10, 12);
      binarySearchTree.insert(11, 14);
      binarySearchTree.insert(12, 19);

      const height = binarySearchTree.height();

      expect(binarySearchTreeSpy.calledOnce).to.true;

      expect(height).to.equal(4);
    });
  });

  describe('traversal binary search tree', () => {
    it('should call preOrderTraversal and return values', () => {
      const binarySearchTree = new BinarySearchTree<number>();

      let binarySearchTreeSpy = spy(binarySearchTree, 'preOrderTraversal');

      binarySearchTree.insert(1, 11);
      binarySearchTree.insert(2, 6);
      binarySearchTree.insert(3, 15);
      binarySearchTree.insert(4, 3);
      binarySearchTree.insert(5, 8);
      binarySearchTree.insert(6, 13);
      binarySearchTree.insert(7, 17);
      binarySearchTree.insert(8, 1);
      binarySearchTree.insert(9, 5);
      binarySearchTree.insert(10, 12);
      binarySearchTree.insert(11, 14);
      binarySearchTree.insert(12, 19);

      const result = binarySearchTree.preOrderTraversal(binarySearchTree.getRootNode());

      console.log(result);

      expect(binarySearchTreeSpy.calledOnce).to.true;

      expect(result).to.eql([11, 6, 3, 1, 5, 8, 15, 13, 12, 14, 17, 19]);
      expect(result).to.have.ordered.members([11, 6, 3, 1, 5, 8, 15, 13, 12, 14, 17, 19]);
    });

    it('should call inOrderTraversal and return values', () => {
      const binarySearchTree = new BinarySearchTree<number>();

      let binarySearchTreeSpy = spy(binarySearchTree, 'inOrderTraversal');

      binarySearchTree.insert(1, 11);
      binarySearchTree.insert(2, 6);
      binarySearchTree.insert(3, 15);
      binarySearchTree.insert(4, 3);
      binarySearchTree.insert(5, 8);
      binarySearchTree.insert(6, 13);
      binarySearchTree.insert(7, 17);
      binarySearchTree.insert(8, 1);
      binarySearchTree.insert(9, 5);
      binarySearchTree.insert(10, 12);
      binarySearchTree.insert(11, 14);
      binarySearchTree.insert(12, 19);

      const result = binarySearchTree.inOrderTraversal(binarySearchTree.getRootNode());

      console.log(result);

      expect(binarySearchTreeSpy.calledOnce).to.true;

      expect(result).to.eql([1, 3, 5, 6, 8, 11, 12, 13, 14, 15, 17, 19]);
      expect(result).to.have.ordered.members([1, 3, 5, 6, 8, 11, 12, 13, 14, 15, 17, 19]);
    });

    it('should call postOrderTraversal and return values', () => {
      const binarySearchTree = new BinarySearchTree<number>();

      let binarySearchTreeSpy = spy(binarySearchTree, 'postOrderTraversal');

      binarySearchTree.insert(1, 11);
      binarySearchTree.insert(2, 6);
      binarySearchTree.insert(3, 15);
      binarySearchTree.insert(4, 3);
      binarySearchTree.insert(5, 8);
      binarySearchTree.insert(6, 13);
      binarySearchTree.insert(7, 17);
      binarySearchTree.insert(8, 1);
      binarySearchTree.insert(9, 5);
      binarySearchTree.insert(10, 12);
      binarySearchTree.insert(11, 14);
      binarySearchTree.insert(12, 19);

      const result = binarySearchTree.postOrderTraversal(binarySearchTree.getRootNode());

      console.log(result);

      expect(binarySearchTreeSpy.calledOnce).to.true;

      expect(result).to.eql([1, 5, 3, 8, 6, 12, 14, 13, 19, 17, 15, 11]);
      expect(result).to.have.ordered.members([1, 5, 3, 8, 6, 12, 14, 13, 19, 17, 15, 11]);
    });

    it('should call levelOrderTraversal and return values', () => {
      const binarySearchTree = new BinarySearchTree<number>();

      let binarySearchTreeSpy = spy(binarySearchTree, 'levelOrderTraversal');

      binarySearchTree.insert(1, 11);
      binarySearchTree.insert(2, 6);
      binarySearchTree.insert(3, 15);
      binarySearchTree.insert(4, 3);
      binarySearchTree.insert(5, 8);
      binarySearchTree.insert(6, 13);
      binarySearchTree.insert(7, 17);
      binarySearchTree.insert(8, 1);
      binarySearchTree.insert(9, 5);
      binarySearchTree.insert(10, 12);
      binarySearchTree.insert(11, 14);
      binarySearchTree.insert(12, 19);

      const result = binarySearchTree.levelOrderTraversal(binarySearchTree.getRootNode());

      console.log(result);

      expect(binarySearchTreeSpy.calledOnce).to.true;

      expect(result).to.eql([11, 6, 15, 3, 8, 13, 17, 1, 5, 12, 14, 19]);
      expect(result).to.have.ordered.members([11, 6, 15, 3, 8, 13, 17, 1, 5, 12, 14, 19]);
    });
  });
});
