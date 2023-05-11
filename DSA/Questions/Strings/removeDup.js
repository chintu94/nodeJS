//! my approch to solve the problem 
(function removeDuplicate(str){
  console.time('removeDuplicate')
  let res = '';
  let i = 0;
  while(i < str.length) {
    if(res.indexOf(str[i]) === -1){
      res += str[i]
    }
    i++;
  }
  console.log(res);
  console.timeEnd('removeDuplicate')
})('hello world')

//! Correct Approch
//* So to do this, we will maintain two variables (readPointer and writePointer) readPointer will be incremented in each iteration, however writePointer will be incremented only if the set object does not already have the charcter. If the set object already has the charcter then we just increment the readPointer and then move to next iteration. As stings are immutable, we will used a replace function which will replace the character at writePointer with the next/new charcter which is not in the set object. Once all the characters have been read ( readPointer is more than equal to the string's length ) then we come out of the loop and finally returning a substring of the string from 0 index to the writePointer. This will give us all the unique characters in that Array.
function removeDuplicateWithSet(str){
  console.time('removeDuplicateWithSet')
  let set = new Set([]);
  let readPointer = 0;
  let writePointer = 0;

  while (readPointer < str.length) {
    if (!set.has(str[readPointer])) {
      set.add(str[readPointer]);
      str = replace(str, str[readPointer], writePointer)
      writePointer++;
    }
    readPointer++;
  }

  console.log('result --> ', str.substr(0, writePointer));
  console.timeEnd('removeDuplicateWithSet')
  function replace(sentence, char, index){
    console.log(sentence.substr(0, index) + char + sentence.substr(index + 1));
    //? we are using this because , string cannot be mutated in JS,
    return sentence.substr(0, index) + char + sentence.substr(index + 1);
  }
};

removeDuplicateWithSet('hello world')


//! remove the duplicate charcter from the string
const removeDups = str => {
  const set = new Set([]);
  const res = [];
  let index = 0
  
  while (index < str.length) {
    const letter = str[index].toLowerCase();
    if (!set.has(letter)) {
      set.add(letter);
      res.push(letter);
    } else {
      if (res.indexOf(letter) !== -1) {
        res.splice(res.indexOf(letter), 1);
      }
    }
    index++;
  }
  return res.join('');
}

console.log(removeDups('I love Javascript'))
console.log(removeDups('hello world'))
