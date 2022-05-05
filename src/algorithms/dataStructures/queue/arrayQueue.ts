class ArrayQueue {
  front: any[];
  back: any[];

  constructor() {
    this.front = [];
    this.back = [];
  }

  get getSize(): number {
    return this.back.length;
  }

  get isEmpty(): boolean {
    return this.front.length === 0 && this.back.length === 0;
  }

  peek(): any {
    this.flip();

    return this.front[this.front.length - 1];
  }

  enqueue(element: any) {
    this.back.push(element);
  }

  dequeue(): any {
    this.flip();

    return this.front.pop();
  }

  private flip(): void {
    if (this.front.length === 0) {
      this.front = this.back;
      this.front.reverse();
      this.back = [];
    }
  }
}

export { ArrayQueue };
