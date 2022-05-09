import { Node } from '../node/node';

class TreeNode<T> extends Node<T> {
  parent: TreeNode<T> | null;
  children: TreeNode<T>[];

  constructor(key: number, value: T, parent: null = null) {
    super(key, value);
    this.parent = parent;
    this.children = [];
  }

  get isLeaf(): boolean {
    return this.children.length === 0;
  }

  get hasChildren(): boolean {
    return !this.isLeaf;
  }
}

export { TreeNode };
