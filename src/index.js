import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
import registerServiceWorker from './registerServiceWorker';
import ImageUpload from './components/ImageUpload';

ReactDOM.render(<ImageUpload />, document.getElementById('root'));
registerServiceWorker();
>>>>>>> 69999d798f0911c7b38e81c84824fb9025a4165d
