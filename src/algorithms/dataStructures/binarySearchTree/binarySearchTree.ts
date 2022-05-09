import { BinaryTreeNode } from '../binaryTreeNode/binaryTreeNode';

class BinarySearchTree<T> {
  private root: null | BinaryTreeNode<T>;

  constructor() {
    this.root = null;
  }

  getRootNode(): BinaryTreeNode<T> | null {
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
    if (newNode.getValue < node.getValue) {
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

  remove(value: T): BinaryTreeNode<T> | null {
    if (this.root) {
      return this.removeNode(this.root, value);
    }

    return this.root;
  }

  private removeNode(root: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> | null {
    if (!root) {
      return root;
    }

    // dig into left subtree when the value we're looking
    // for is smaller than the current value
    if (value < root.getValue) {
      root.left = this.removeNode(root.left, value);

      // dig into right subtree when the value we're
      // looking for is larger than the current value
    } else if (value > root.getValue) {
      root.right = this.removeNode(root.right, value);
    } else {
      // deleting node that is leaf
      // by swapping it with the right child or left child
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        // deleting node that has child thus
        // we need to find its successor which
        // is the smallest value in the right subtree by
        // traversing as far left as possible in the right subtree.
        // another method is to find the largest value in the left subtree
        // by traversing as far right as possible in the left subtree

        // find the leftmost node in the right subtree
        const tmp = this.findMin(root.right);

        // swap the data
        root.setValue = tmp.getValue;

        // go into the right subtree and remove the leftmost node
        // we found and swapped data with. It is to prevent having
        // two nodes in the tree with the same value
        root.right = this.removeNode(root.right, root.getValue);
      }
    }

    return root;
  }

  private findMin(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    while (node!.left !== null) {
      node = node!.left;
    }

    return node;
  }

  height(): number {
    return this.findHeight(this.root);
  }

  private findHeight(node: BinaryTreeNode<T> | null): number {
    if (!node) {
      return 0;
    }

    return Math.max(this.findHeight(node!.left), this.findHeight(node!.right)) + 1;
  }

  findByValue(value: T): BinaryTreeNode<T> | null {
    let current = this.root;

    while (current) {
      if (value === current.getValue) {
        break;
      } else if (value < current!.getValue) {
        current = current!.left;
      } else {
        current = current!.right;
      }
    }

    return current;
  }

  inOrderTraversal(node: BinaryTreeNode<T> | null): T[] {
    const result: T[] = [];

    this.inOrder(node, result);

    return result;
  }

  private inOrder(node: BinaryTreeNode<T> | null, result: T[]): void {
    if (node) {
      const left = node!.left;
      const right = node!.right;

      if (left) {
        this.inOrder(left, result);
      }

      result.push(node!.getValue);

      if (right) {
        this.inOrder(right, result);
      }
    }
  }

  preOrderTraversal(node: BinaryTreeNode<T> | null): T[] {
    const result: T[] = [];

    this.preOrder(node, result);

    return result;
  }

  private preOrder(node: BinaryTreeNode<T> | null, result: T[]): void {
    if (node) {
      const left = node!.left;
      const right = node!.right;

      result.push(node!.getValue);

      if (left) {
        this.preOrder(left, result);
      }

      if (right) {
        this.preOrder(right, result);
      }
    }
  }

  postOrderTraversal(node: BinaryTreeNode<T> | null): T[] {
    const result: T[] = [];

    this.postOrder(node, result);

    return result;
  }

  private postOrder(node: BinaryTreeNode<T> | null, result: T[]): void {
    if (node) {
      const left = node!.left;
      const right = node!.right;

      if (left) {
        this.postOrder(left, result);
      }

      if (right) {
        this.postOrder(right, result);
      }

      result.push(node!.getValue);
    }
  }

  levelOrderTraversal(node: BinaryTreeNode<T> | null): T[] {
    const result: T[] = [];

    this.levelOrder(node, result);

    return result;
  }

  private levelOrder(node: BinaryTreeNode<T> | null, result: T[]): void {
    if (node) {
      const queue = [node];

      while (queue.length > 0) {
        let node = queue.shift();

        if (node!.left) {
          queue.push(node!.left);
        }

        if (node!.right) {
          queue.push(node!.right);
        }

        if (node) {
          result.push(node.getValue);
        }
      }
    }
  }
}

export { BinarySearchTree };
