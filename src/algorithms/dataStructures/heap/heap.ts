/**
 * @fileoverview Datastructure: Heap
 */
import { Node } from '../node/node';

class Heap<T> {
  nodes: Array<Node<T> | undefined>;

  constructor() {
    this.nodes = [];
  }

  isEmpty(): boolean {
    return this.nodes.length === 0;
  }

  getSize(): number {
    return this.nodes.length;
  }

  insert(key: number, value: T) {
    const node = new Node(key, value);

    const nodes = this.nodes;

    nodes.push(node);

    this.swim(nodes.length - 1);
  }

  peek(): any | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.nodes[0]!.getValue();
  }

  poll() {
    const nodes = this.nodes;

    const size = this.getSize();

    const rootNode = nodes[0];

    if (size <= 0) {
      return undefined;
    } else if (size === 1) {
      nodes.length = 0;
    } else {
      nodes[0] = nodes.pop();

      this.sink(0);
    }

    return rootNode!.getValue();
  }

  swim(index: number) {
    const nodes = this.nodes;
    const node = nodes[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (nodes[parentIndex]!.getKey > node!.getKey) {
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
        nodes[rightChildIndex]!.getKey < nodes[leftChildIndex]!.getKey
          ? rightChildIndex
          : leftChildIndex;

      if (nodes[smallerChildIndex]!.getKey > node!.getKey) {
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

  // removeAt(index: number) {
  //   if (this.isEmpty()) {
  //     return null;
  //   }

  //   const indexOfLastElem = this.getSize() - 1;

  //   const valueOfLastElem = this.nodes[indexOfLastElem]!.getValue();

  // }
}

export { Heap };
