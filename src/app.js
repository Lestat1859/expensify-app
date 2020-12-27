import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


let hasRendered = false;
const renderApp =()=>{
  if (!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered == true;
  }  
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.default.auth().onAuthStateChanged((user)=>{
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(()=> {
      renderApp();
      if (history.location.pathname==='/'){
        history.push('/dashboard');
      }
    });  

    console.log('log in');
  }else {
    store.dispatch(logout());
    renderApp();
    console.log('log out')
    history.push('/');
  }
});
