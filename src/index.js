import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './moduels';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import myLogger from './middlewares/myLogger';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
