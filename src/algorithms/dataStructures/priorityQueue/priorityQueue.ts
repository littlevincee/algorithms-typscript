import { Heap } from '../heap/heap';
import { Node } from '../node/node';

class PriorQueue<T> extends Heap<T> {
  constructor() {
    super();
  }

  enqueue(priority: number, value: T) {
    this.insert(priority, value);
  }

  dequeue(): Node<T> | null | undefined {
    return this.poll();
  }
}

export { PriorQueue };
