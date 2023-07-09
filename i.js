
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
  
  
  function flatObj(obj, key = ''){
  let result = {};
      for (let o in obj){
          if (typeof obj[o] !== 'object'){
              console.log(o);
              result[`user${key ? `_${key}` : ''}_${o}`] = obj[o];
          }
          else {
              console.log('triggered');
              result = {...result, ...flatObj(obj[o], o)}
          }
      }
      return result;
  }
  
  console.log(flatObj(user));
  
  
  
  
  
  