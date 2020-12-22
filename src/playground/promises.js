
const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    //resolve({
    //  nanme:"maxime",
    //  age:36
    //});
    reject('Something went wrong !')

  },5000)
});

console.log('before');
// la fonction then est al callback qui sera lancé une fois la promesse réussie
promise.then((data)=>{
  console.log('1',data);
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('This is my other promise');  
    },5000)
  });
}).then((str)=>{
  console.log('does this run', str);
}).catch((error)=>{
  console.log('error: ',error)
});

console.log('after');