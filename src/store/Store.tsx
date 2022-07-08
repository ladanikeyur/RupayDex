import reducer from './Reducers/reducer';
import rootReducer from './Reducers/RootReducer';
// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk';
// import createDebounce from "redux-debounced";
import { createStore, applyMiddleware, compose, Store } from 'redux';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
// ** init middleware
const middleware = [thunk];

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ** Create store
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export { store };

// export const store: Store<ArticleState, ArticleAction> & {
//     dispatch: DispatchType;
//   } = createStore(reducer, applyMiddleware(thunk));
