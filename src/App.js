import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
