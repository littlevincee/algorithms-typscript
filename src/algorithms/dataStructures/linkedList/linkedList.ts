import { LinkedListNode } from '../linkedListNode/linkedListNode';

class LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
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

  getSize() {
    return this.size;
  }

  getAt(index: number) {
    let counter = 0;

    let current = this.head;

    while (current) {
      if (counter === index) {
        return current;
      }

      counter++;
      current = current.next;
    }

    return null;
  }

  getFirst(): LinkedListNode<T> | null {
    return this.head;
  }

  getLast(): LinkedListNode<T> | null {
    let lastNode = this.head;

    if (lastNode) {
      while (lastNode) {
        lastNode = lastNode.next;
      }
    }

    return lastNode;
  }

  insertAt(index: number, key: number, value: T) {
    if (index > this.size) {
      return;
    } else {
      const newNode: LinkedListNode<T> = new LinkedListNode(key, value);

      if (!this.head) {
        this.head = newNode;
      } else if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let prev = this.getAt(index - 1);

        if (prev) {
          newNode.next = prev!.next;
          prev!.next = newNode;
        }
      }

      this.size++;
    }
  }

  deleteFirstNode(): void {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  deleteLastNode(): void {
    if (!this.head!.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let tail = this.head?.next;

    while (tail?.next) {
      prev = tail;
      tail = tail.next;
    }

    prev!.next = null;
  }

  deleteAt(index: number): void {
    if (index === 0 && this.head) {
      this.head = this.head?.next;
    }

    const prevNode = this.getAt(index - 1);

    prevNode!.next = prevNode!.next!.next;

    this.size--;
  }

  clear() {
    this.head = null;
  }
}

export { LinkedList };
