import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

import {Provider} from "mobx-react";
import AuthStore from '../src/js/helpers/auth';
import ProductStore from '../src/js/helpers/product';
import UploadStore from '../src/js/helpers/upload';
import CategoryStore from '../src/js/helpers/category';
import CheckoutStore from '../src/js/helpers/checkout';








ReactDOM.render(
    <Router>
        <Provider AuthStore={AuthStore} ProductStore={ProductStore} UploadStore={UploadStore} CategoryStore={CategoryStore} CheckoutStore={CheckoutStore}>
            <App />
        </Provider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
