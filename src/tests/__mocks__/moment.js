const moment = require.requireActual('moment'); // va utiliser la vrai methode de moment quand on l'appellera

export default (timestamp = 0) => { // renverra la valeur de moment a timestamp souhaité
  return moment(timestamp);
};