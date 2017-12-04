import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import search from './search/search';
import map from './map/map';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  form,
  search,
  map
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
