import { Provider } from 'react-redux';
import React, {Component} from 'react';

import configureStore from './Redux/stores/store';
const store = configureStore()

import Home from './components/vista';

//type Props = {};
export default class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Home/>
      </Provider>
    );
  }
}

