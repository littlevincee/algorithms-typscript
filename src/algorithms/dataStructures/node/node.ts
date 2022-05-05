/**
 * @fileoverview Generic immutable node object
 */

class Node {
  key: number;
  value: any;

  constructor(key: number, value: any) {
    this.key = key;
    this.value = value;
  }

  get getKey(): number {
    return this.key;
  }

  get getValue(): any {
    return this.value;
  }
}

export { Node };
