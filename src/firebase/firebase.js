import * as firebase from 'firebase'; // "* as" récupère toutes les fonctions de la bibliothèqu firebase pour qu'on puisse les utiliser dans l'objet firebase

const firebaseConfig = {
  apiKey: "AIzaSyCirBZClgJH4rscFr1NR5x1ffn9rT_XYgs",
  authDomain: "expensify-cafd0.firebaseapp.com",
  databaseURL: "https://expensify-cafd0-default-rtdb.firebaseio.com",
  projectId: "expensify-cafd0",
  storageBucket: "expensify-cafd0.appspot.com",
  messagingSenderId: "443360513111",
  appId: "1:443360513111:web:acbe3e80ebc74cfdcae712"
};

firebase.default.initializeApp(firebaseConfig);

const database = firebase.default.database();

//ref pointe vers la référence d'un endroit de la base
// si on ne passe pas de pararmetre a ref, on se positionne à la racine de de bdd
// set sert a affecter une valeur a une référence
 
database.ref().set({
  name:'Maxime Delannoy',
  age:36,
  isSingle : false,
  location:{
    city:'Lille',
    country:'France'
  }
}).then(()=>{
  console.log('data is saved')
}).catch((e)=>{
  console.log('This failed.',e)
});

// set ne prends pas forcement un objet en parametre, on peut aussi lui passer un autre type de data
//database.ref().set('This is my data');

// set remplace la valeur existante et écrase donc la précédente
//database.ref().set({
//  age:37,
//});
// ici par exemple, l'intégralité de ce qui est présent sur la root de la Bd sera remplacé par l'objet { age:37}

// pour remplacer une valeur on utilisera plutot

//database.ref('age').set(37); // va remplacer l'ancienne valeur de age par 37
//database.ref('location/city').set('Templemars'); // va remplacer l'ancienne valeur de location.city par 'Templemars'

// 
// attributes
// height
// weight


database.ref('attributes').set({
  height:171,
  weight:72
}).then(()=>{
  console.log('data is saved 2')
}).catch((e)=>{
  console.log('This failed.',e)
});

