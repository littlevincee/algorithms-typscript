import { Node } from '../node/node';

class LinkedListNode<T> extends Node<T> {
  next: LinkedListNode<T> | null;
  previous: LinkedListNode<T> | null;

  constructor(key: number, value: T) {
    super(key, value);

    this.next = null;

    this.previous = null;
  }
}

export { LinkedListNode };
