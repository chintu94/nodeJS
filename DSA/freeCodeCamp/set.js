/**

Set : Its sort of like an array but with no duplicate element, with no particular order.

ES6 has its own implementation of Set, but it is missing some of the original functionality of Set.

So below is an implimentation of Set
*/

export default class mySet {
  #collection;
  constructor(){
    this.#collection = [];
  }

  has = (item) => this.#collection.indexOf(item) !== -1;

  values = () => this.#collection;

  add = (item) => {
    if (!this.has(item)){
      this.#collection.push(item);
      return true;
    }
    return false;
  }

  remove = (item) => {
    if (this.has(item)){
      this.#collection.splice(this.#collection.indexOf(item), 1);
      return true;
    }
    return false;
  }

  size = () => this.#collection.length;

  // joins two set together and returns a new set
  union = (otherSet) => {
    const newPSet = new mySet();
    this.#collection.forEach(item => newPSet.add(item));
    otherSet.values().forEach(item => newPSet.add(item));
    return newPSet;
  }

  // returns a new set with only the common values 
  intersection = (otherSet) => {
    const intersectionSet = new mySet();
    this.#collection.forEach((item) => {
      if (otherSet.has(item)){
        intersectionSet.add(item);
      }
    })
    return intersectionSet;
  }
  // returns a new set with only the diffrent values 
  difference = (otherSet) => {
    const differenceSet = new mySet();
    this.#collection.forEach((item) => {
      if (!otherSet.has(item)){
        differenceSet.add(item);
      }
    })
    return differenceSet;
  }
  // returns boolean value based on if all the items of otherSet is present in the collection
  subset = (otherSet) => {
    return this.#collection.every((item) => otherSet.has(item))
  }
}

const set = new mySet();
const set2 = new mySet();

set.add('itu');
set.add('itu1');
set.add('itu2');
set2.add('chintu');
set2.add('chintu1');
set2.add('chintu2');
set2.add('itu');

console.log(set.values());
console.log(set2.values());


console.log('union -->', set.union(set2).values());

console.log('intersection -->', set.intersection(set2).values());
console.log('difference -->', set.difference(set2).values());
console.log('subset -->', set.subset(set2));

