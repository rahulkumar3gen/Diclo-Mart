import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter  } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css'
import store from './redux/store'
import {Provider} from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  {/* <BrowserRouter> */}
  <Auth0Provider
    domain="dev-cxy5btaxk5wc82am.us.auth0.com"
    clientId="ze1HROZyS2SLDecN5cQmj0hRbYiDaI6m"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
   {/* </BrowserRouter>  */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
