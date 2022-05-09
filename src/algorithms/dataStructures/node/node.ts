/**
 * Generic immutable node object
 */

class Node<T> {
  private key: number;
  private value: T;

  /**
   *
   * @param {number} key - The key value of the Node
   * @param { T } value - The value of the Node
   */
  constructor(key: number, value: T) {
    this.key = key;
    this.value = value;
  }

  get getKey(): number {
    return this.key;
  }

  get getValue(): T {
    return this.value;
  }

  set setValue(value: T) {
    this.value = value;
  }
}

export { Node };
