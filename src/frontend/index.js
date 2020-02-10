import React from 'react';
import { hydrate } from 'react-dom';
import App from './routes/App';

hydrate(<App />, document.getElementById('app'));
