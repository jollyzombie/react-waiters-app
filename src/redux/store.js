import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import tablesReducer from './tablesReducer';
import statusReducer from './statusReducer';
import thunk from 'redux-thunk';

const subreducers = {
  tables: tablesReducer,
  status: statusReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

export default store;
