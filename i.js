
let user={
  name:'test',
  age:20,
  gender:'male',
  address:{
      home:{
          district: 'xxx',
          state: 'MH',
          pincode: 400069
      },
  office:{
          district: 'yyy',
          state: 'TN',
          pincode: 636090,
          street:{
              name:'abc'
          }
      }
  }
  }
  //op ={
  //   user_name: 'test', 
  //   user_age: 20, 
  //   user_gender: 'male', 
  //   user_address_home_district:'xxx',
  //   user_address_home_state:'MH',
  //   user_address_home_pincode:400069,
  //   user_address_office_district:'yyy',
  //   user_address_office_state:'TN',
  //   user_address_office_pincode:636090,
  // }
  
  
//   function flatObj(obj, key = ''){
//   let result = {};
//       for (let o in obj){
//           if (typeof obj[o] !== 'object'){
//               console.log(o);
//               result[`user${key ? `_${key}` : ''}_${o}`] = obj[o];
//           }
//           else {
//               console.log('triggered');
//               result = {...result, ...flatObj(obj[o], o)}
//           }
//       }
//       return result;
//   }
  
//   console.log(flatObj(user));
  
  


function sumN (a, b) {
    return a+b;
}

sumN(2, 5); // 7
sumN(2, 5); // 7

function getSumFn(){
    let cache = new Map();
    return function (a, b){
        if (cache.has(`${a}_${b}`)){
            console.log('from cache');
            return cache.get(`${a}_${b}`);
        }else {
            console.log('calculating');
            const value = a+b;
            cache.set(`${a}_${b}`, value);
            return value;
        }
    }
}

const sum = getSumFn();

console.log(sum(2, 7));
console.log(sum(2, 7));
console.log(sum(2, 8));


function isMatching(str1, str2){
    for(let i = 0;i <=str1.length-1;i++){
        if(str2.includes(str1[i])){
            console.log(true);
        }else{
            console.log(false);
        }
    }
}

isMatching('test', 'tset') // true

isMatching('test', 'tsew') // false








function func1(){
  setTimeout(()=>{
    console.log(x);
    console.log(y);
  },3000);
 
  var x = 2;
  let y = 12;
}
func1();