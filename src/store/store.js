import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cakeReducer from './reducers/cakereducer';

const store = createStore(
    cakeReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
