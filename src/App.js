import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA-dSB46aw5EwAB3QVWgOHuh8xdgY69mTQ',
      authDomain: 'manageemployeesreactredux.firebaseapp.com',
      databaseURL: 'https://manageemployeesreactredux.firebaseio.com',
      projectId: 'manageemployeesreactredux',
      storageBucket: '',
      messagingSenderId: '575613880686'
    };
    firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
