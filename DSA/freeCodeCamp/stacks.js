/**
// ? Stacks

//* A stack of book is a great example of the stack data structure, top most book in the stack will be the one that we put there,  if we remove that book from the stack's top we will expose the book that was put there before the last book.
Stacks are the Last in First out (LIFO) type of service. The last book we put on stack will be the first book we take out of stack.
functions we get with stack are :
push : used to put element into the stack
pop: used to remove top element from the stack (the last element we put on stack will be removed first)
peek: used to display the top element in the stack
length/size : number of elements

In JS we already have all th functions we need in the Array object to use it as a stack.

Lets check out its implementation by checking if a word is a palindrome

*/

const letters = [] // this is our stack

const word = 'racecar';

let rword = '';

// put the letters of the word into the stack
for(let i = 0; i < word.length; i++){
  letters.push(word[i]);
}

// pop off the stack in reverse order
for(let i = 0; i < word.length; i++){
  rword += letters.pop();
}

if (rword === word) {
  console.log(`${word} is a palindrom`)
}else{
  console.log(`${word} is not a palindrom`)
}


//! Our own implimentation of Stacks
export default class Stack {
  #count;
  #storage;
  constructor(){
    this.#count = 0;
    this.#storage = {};
  }
  push = (value) => {
    this.#storage[this.#count] = value;
    this.#count++;
  }

  pop = () => {
    if (this.#count === 0) return undefined;
    
    this.#count--;
    const lastItem = this.#storage[this.#count];
    delete this.#storage[this.#count];
    return lastItem;
  }

  peek = () => this.#storage[this.#count - 1];

  size = () => this.#count;
}

const newStack = new Stack();
newStack.
newStack.push('chintu');
console.log(newStack.peek());
newStack.push('itu');
console.log(newStack.size());
console.log(newStack.peek());
console.log(newStack.pop());
console.log(newStack.size());
