import { Node } from '../node/node';

class BinaryTreeNode<T> extends Node<T> {
  left: BinaryTreeNode<T> | null;
  right: BinaryTreeNode<T> | null;

  constructor(
    key: number,
    value: T,
    left: BinaryTreeNode<T> | null = null,
    right: BinaryTreeNode<T> | null = null,
  ) {
    super(key, value);
    this.left = left;
    this.right = right;
  }
}

export { BinaryTreeNode };
