import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import search from './search/search';
import pagination from './pagination/pagination';
import map from './map/map';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  form,
  search,
  pagination,
  map
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
