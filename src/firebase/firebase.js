import * as firebase from 'firebase'; // "* as" récupère toutes les fonctions de la bibliothèqu firebase pour qu'on puisse les utiliser dans l'objet firebase

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.default.initializeApp(firebaseConfig);

const database = firebase.default.database();
const googleAuthProvider = new firebase.default.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};



/*
database.ref('expenses')
  .once('value')
  .then((snapshot)=>{
    const expenses = [];
    snapshot.forEach((childSnapshot)=>{
        expenses.push({
          id : childSnapshot.key,
          ...childSnapshot.val()
        })
    });
    console.log(expenses);
  });
*/
//Setup 3 expenses description note, amount, createdAt




/*
database.ref('expenses').on('value',(snapshot)=>{
  const expenses = [];
  snapshot.forEach((childSnapshot)=>{
    expenses.push({
      id : childSnapshot.key,
      ...childSnapshot.val()
    });
  })
  console.log(expenses);
});
*/

/*
database.ref('expenses').on('child_removed',(snapshot)=>{
  console.log(snapshot.key, snapshot.val());
});
*/
//child_changed
/*database.ref('expenses').on('child_changed',(snapshot)=>{
  console.log(snapshot.key, snapshot.val());
});*/

//child_added



/*
database.ref('expenses').on('child_added',(snapshot)=>{
  console.log(snapshot.key, snapshot.val());
});
*/

/*
database.ref('expenses').push({
  description:'Gaz Bill',
  note:'GRDF',
  amount:'5000',
  createdAt:'1000'
});
*/



/* database.ref('notes/-MOglSA4jTUM7X9_PZn-').update({
  test:'prout',
  body:'Angular, NodeJS'
});
 */
/*
database.ref('notes').push({
  title : 'Course Topics',
  body: 'React Native'
})
*/



// Setup data subscription -> Andrew is a Software dvp at amazon.
/*
const personSub = database.ref().on('value',(snapshot)=>{
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.location.city} `);
});

setTimeout(()=>{
  database.ref().update({
    'job/title':'Manager',
    'location/city': 'Paris'
  })
}, 10000);
*/

// Change the data and make sure it reprints


//ref pointe vers la référence d'un endroit de la base
// si on ne passe pas de pararmetre a ref, on se positionne à la racine de de bdd
// set sert a affecter une valeur a une référence
 
/*
database.ref().set({
  name:'Maxime Delannoy',
  age:36,
  stressLevel:6,
  //isSingle : false,
  job:{
    title:'Sofware Developper',
    company:'Google',
  },
  location:{
    city:'Lille',
    country:'France'
  }
}).then(()=>{
  console.log('data is saved')
}).catch((e)=>{
  console.log('This failed.',e)
});
*/
/*
database.ref().update({
  stressLevel:9,
  'job/company':'Amazon',
  'location/city':'Paris'
}).then(()=>{
  console.log('data are updated')
}).catch((e)=>{
  console.log('This failed.',e)
});

*/
/* database.ref().remove()
.then(()=>{console.log('Remove successed')})
.catch((e)=>{'An error occured during remove:',e});
 */

 /*
database.ref()
.once('value')
.then((snapshot)=>{
  const val = snapshot.val();
  console.log(val);
})
.catch((e)=>{
  console.log('error fetching data :',e)
});
*/
/*
const onValueChange = database.ref().on('value',(snapshot) =>{
  console.log(snapshot.val());
}, (e) =>{
  console.log('Error with data fetching',e)
});


setTimeout(()=>{
  database.ref('age').set(37)
}, 3500);

setTimeout(()=>{
  database.ref().off(onValueChange);
}, 7000);

setTimeout(()=>{
  database.ref('age').set(30)
}, 10500);
*/