/**
 * Datastructure: Heap (min-heap)
 */
import { Node } from '../node/node';

class Heap<T> {
  nodes: Array<Node<T> | undefined>;

  constructor() {
    this.nodes = [];
  }

  insert(key: number, value: T): void {
    const node = new Node(key, value);

    const nodes = this.nodes;

    nodes.push(node);

    this.swim(nodes.length - 1);
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.nodes[0]!.getValue();
  }

  poll(): Node<T> | null | undefined {
    return this.removeAt(0);
  }

  swim(index: number): void {
    const nodes = this.nodes;
    const node = nodes[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (nodes[parentIndex]!.getKey() > node!.getKey()) {
        nodes[index] = nodes[parentIndex];
        index = parentIndex;
      } else {
        break;
      }
    }

    nodes[index] = node;
  }

  sink(index: number): void {
    const nodes = this.nodes;

    const size = this.getSize();

    const node = nodes[index];

    const numberOfParentNodes = size >> 1;

    while (index < numberOfParentNodes) {
      const leftChildIndex = this.getLeftChildIndex(index);

      const rightChildIndex = this.getRightChildIndex(index);

      const smallerChildIndex =
        rightChildIndex < size &&
        nodes[rightChildIndex]!.getKey() < nodes[leftChildIndex]!.getKey()
          ? rightChildIndex
          : leftChildIndex;

      if (nodes[smallerChildIndex]!.getKey() > node!.getKey()) {
        break;
      }

      nodes[index] = nodes[smallerChildIndex];

      index = smallerChildIndex;
    }

    nodes[index] = node;
  }

  clear(): void {
    this.nodes.length = 0;
  }

  isEmpty(): boolean {
    return this.nodes.length === 0;
  }

  getSize(): number {
    return this.nodes.length;
  }

  getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  getParentIndex(index: number): number {
    return (index - 1) >> 1;
  }

  getValues(): any[] {
    const nodes = this.nodes;

    const result: any[] = [];

    for (let i = 0; i < nodes.length; i++) {
      result.push(nodes[i]?.getValue());
    }

    return result;
  }

  remove(key: number): boolean {
    if (key < 0 || key > this.getSize()) {
      return false;
    }

    for (let i = 0; i < this.getSize(); i++) {
      if (this.nodes[i]?.getKey() === key) {
        this.removeAt(i);

        return true;
      }
    }

    return false;
  }

  private removeAt(index: number) {
    if (this.isEmpty()) {
      return null;
    }

    const lastNodeIndex = this.getSize() - 1;

    const removedData = this.nodes[lastNodeIndex];

    this.swap(index, lastNodeIndex);

    this.nodes.pop();

    const currentNode = this.nodes[index];

    this.sink(index);

    if (this.nodes[index]?.getKey() === currentNode?.getKey()) {
      this.swim(index);
    }

    return removedData;
  }

  private swap(sourceNodeIndex: number, destinationNodeIndex: number) {
    [this.nodes[sourceNodeIndex], this.nodes[destinationNodeIndex]] = [
      this.nodes[destinationNodeIndex],
      this.nodes[sourceNodeIndex],
    ];
  }
}

export { Heap };
