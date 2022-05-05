import { BinaryTreeNode } from '../binaryTreeNode/binaryTreeNode';

class BinarySearchTree<T> {
  private root: null | BinaryTreeNode<T>;

  constructor() {
    this.root = null;
  }

  get getRootNode(): BinaryTreeNode<T> | null {
    return this.root;
  }

  insert(key: number, value: T) {
    const newNode = new BinaryTreeNode(key, value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: BinaryTreeNode<T>, newNode: BinaryTreeNode<T>) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // tag::traversal
  inorderTraversal(node: any): any[] {
    const result: any[] = [];

    this.inorder(node, result);

    return result;
  }

  private inorder(node: BinaryTreeNode<T> | null, result: any[]): void {
    if (this.root) {
      const left = node!.left;
      const right = node!.right;

      if (left) {
        this.inorder(left, result);
      }

      result.push(node!.value);

      if (right) {
        this.inorder(right, result);
      }
    }
  }
  // end::traversal
}

export { BinarySearchTree };
