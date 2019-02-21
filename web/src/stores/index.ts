import thunk from 'redux-thunk';
import reducers from '../reducers';
import { applyMiddleware, createStore } from 'redux';

const middleWare = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

const store: any = createStoreWithMiddleware(reducers);

export default store;