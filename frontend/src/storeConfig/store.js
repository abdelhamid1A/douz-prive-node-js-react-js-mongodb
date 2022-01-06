import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducres';
import rootSaga  from './saga';

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(...middleware)))
sagaMiddleware.run(rootSaga )
// const persistor = persistStore(store);

export { store };