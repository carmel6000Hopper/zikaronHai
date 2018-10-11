import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ImageUpload from './components/ImageUpload';
import {Camera} from './takePicture/Camera.js';

ReactDOM.render([<ImageUpload/>, <Camera/>], document.getElementById('root'));

registerServiceWorker();
