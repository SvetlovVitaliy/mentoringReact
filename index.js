import React from 'react';
import ReactDOM from 'react-dom';

import { some } from './src/some';
import './src/styles/styles.scss';

some();

const template = <p>Hello from react</p>;

ReactDOM.render(template, document.getElementById('root'));
