import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use((request) =>{
    console.log('inside interceptors', request);
    // edit request - example add common header
    return request;
});

axios.interceptors.response.use((response) =>{
    console.log(response);
    return response;
}, (err) =>{
    console.log(err);
    return Promise.reject(err);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
