import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import rootReducer from 'reducers';
import { createStore, applyMiddleware } from 'redux';
import routes from '../common/routes';
import './index.less';
import thunk from 'redux-thunk'
import {Provider,Observer} from 'mobx-react';
import * as astore from '../common/mobx/index.js'
// import createSagaMiddleware from 'redux-saga'
// import {rootSaga} frm './sagas'
// const store = createStore(rootReducer,applyMiddleware(rootSaga))
// const store = createStore(rootReducer,applyMiddleware(thunk))



ReactDOM.render(
  <Provider store={astore}>
  {routes}
  </Provider>,
  document.getElementById('root')
);