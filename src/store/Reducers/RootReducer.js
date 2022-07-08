// ** Redux Imports
import { combineReducers } from 'redux';

// ** Reducers Imports
import Reducer from './reducer';
import swap from './Swap';

const rootReducer = combineReducers({
  Reducer,
  swap
});

export default rootReducer;
