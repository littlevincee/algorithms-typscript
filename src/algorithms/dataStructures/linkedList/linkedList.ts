import { LinkedListNode } from '../linkedListNode/linkedListNode';

class LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null
    this.size = 0;
  }

  get getSize() {
    return this.size;
  }

  add(key: number, value: T): void {
    const newNode: LinkedListNode<T> = new LinkedListNode(key, value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }
}

export { LinkedList }