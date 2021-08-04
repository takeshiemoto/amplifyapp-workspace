import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
