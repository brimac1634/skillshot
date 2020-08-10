import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import App from './App';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

import './assets/main.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
			{/* <I18nextProvider i18n={i18n}> */}
			<ScrollToTop />
			<App />
		</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
