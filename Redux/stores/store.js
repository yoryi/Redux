import { createStore, combineReducers } from 'redux';
import reducer1 from '../reducers/reducer1';

const rootReducer = combineReducers({
  reducer1
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;