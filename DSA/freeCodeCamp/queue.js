/**

Queue data structer is a way to hold data. It is similar to Stack however a stack follows Last In First Out (LIFO) data structure type and Queue follows First In First Out (FIFO) data structure type.
*/

export class Queue {
  #collection
  constructor(){
    this.#collection = [];
  }

  print = () => console.log(this.#collection);

  enqueue = (item) => this.#collection.push(item);
  
  dequeue = () => this.#collection.shift();

  front = () => this.#collection[0];

  size = () => this.#collection.length;

  isEmpty = () => this.#collection.length === 0;
}

const queue1 = new Queue();

queue1.enqueue('item1');
queue1.enqueue('item2');
queue1.enqueue('item3');
queue1.enqueue('item4');
queue1.print();
queue1.dequeue();
console.log(queue1.isEmpty());
console.log(queue1.front());


//? another way to implement a queue is a priority queue. In a priority queue not only we pass the element to the queue we also pass the priority. Practically every method in a priority queue is the same except for "enqueue" method, as it take an array, which has the first element as the element you want to store and the second element as the priority of that element, based on the priority the order of the elements is determined.

export class PriorityQueue {
  #collection
  constructor(){
    this.#collection = [];
  }

  print = () => console.log(this.#collection);

  enqueue = (item) => {
    if (this.isEmpty()) return this.#collection.push(item);
    let added = false;
    for (let j = 0; j < this.#collection.length; j++) {
      if (item[1] < this.#collection[j][1]) {
        this.#collection.splice(j, 0, item);
        added = true;
        break;
      }
    }
    if (!added){
      this.#collection.push(item);
    }
  };
  
  dequeue = () => this.#collection.shift();

  front = () => this.#collection[0];

  size = () => this.#collection.length;

  isEmpty = () => this.#collection.length === 0;
}

const pQueue = new PriorityQueue();

pQueue.enqueue(['chintu', 3])
pQueue.enqueue(['itu', 1])
pQueue.enqueue(['neha', 2])
pQueue.enqueue(['neha', 3])
pQueue.enqueue(['neha', 7])
pQueue.enqueue(['neha', 5])
pQueue.enqueue(['neha', 10])

pQueue.print();