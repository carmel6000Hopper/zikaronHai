import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
// import ImageUpload from './components/ImageUpload';
// import {Camera} from './takePicture/Camera.js';

// ReactDOM.render([<Camera/>, <ImageUpload/>], document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));


registerServiceWorker();
