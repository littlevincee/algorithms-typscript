import { TreeNode } from '../treeNode/treeNode';

class Tree<T> {
  root: TreeNode<T>;

  constructor(key: number, value: T) {
    this.root = new TreeNode(key, value);
  }

  *preOrderTraversal(node = this.root): any {
    yield node;

    if (node.children.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  insert(parentNodeKey: number, key: number, value: T) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        node.children.push(new TreeNode(key, value, node));
      }
    }
  }
}

export { Tree, TreeNode };
