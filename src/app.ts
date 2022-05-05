// import { ArrayQueue } from './algorithms/dataStructures/queue/arrayQueue';
import { LinkedList } from './algorithms/dataStructures/linkedList/linkedList';

// const queue = new ArrayQueue();
// queue.enqueue(123);
// queue.enqueue(555);
// queue.enqueue(888);
// // queue.enqueue(999);

// //const item = queue.dequeue();
// console.log(queue.peek());

const list = new LinkedList();
list.add(1, 'a');
list.add(2, 'b')
list.add(3, 'c')
list.add(4, 'd')
list.add(5, 'e')
list.insertAt(2, 10, 'tw')
list.deleteLastNode();

//console.log(list.getAt(1))
console.log(JSON.stringify(list))