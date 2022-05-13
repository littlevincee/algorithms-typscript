class DisjointSet {
  // number of elements in union find
  size: number;

  // track the sizes of each of the components
  sz: number[];

  // id[i] points to the parent of i, if id[i] = i then i is a root node
  id: number[];

  numComponents: number;

  constructor(size: number) {
    this.size = this.numComponents = size;

    this.sz = new Array(size);
    this.id = new Array(size);

    for (let i = 0; i < size; i++) {
      this.id[i] = i;
      this.sz[i] = 1;
    }
  }

  find(p: number): number {
    let root = p;

    while (root !== this.id[root]) {
      root = this.id[root];
    }

    while (p !== root) {
      let next = this.id[p];

      this.id[p] = root;

      p = next;
    }

    return root;
  }

  connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q);
  }

  componentSize(p: number) {
    return this.sz[this.find(p)];
  }

  components(): number {
    return this.numComponents;
  }

  unify(p: number, q: number) {
    if (this.connected(p, q)) {
      return;
    }

    let root1 = this.find(p);
    let root2 = this.find(q);

    if (this.sz[root1] < this.sz[root2]) {
      this.sz[root2] += this.sz[root1];

      this.id[root1] = root2;

      this.sz[root1] = 0;
    } else {
      this.sz[root1] += this.sz[root2];

      this.id[root2] = root1;

      this.sz[root2] = 0;
    }

    this.numComponents--;
  }
}

export { DisjointSet };
