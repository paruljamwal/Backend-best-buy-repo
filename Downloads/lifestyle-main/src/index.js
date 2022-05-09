import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

 import {Provider} from 'react-redux'
import store  from "./components/Redux/store"
import { BrowserRouter } from 'react-router-dom';
import { Tempcontextprovider } from './context/Tempcontext';
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <Tempcontextprovider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Tempcontextprovider>
  </Provider>
 

  </React.StrictMode>,
  document.getElementById('root')
);
