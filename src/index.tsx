import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from 'store/store';
import Logger from 'library/logger.library';

import App from './App';

import 'normalize.css';
import './index.css';

const container = document.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(container);

Logger.init();

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
