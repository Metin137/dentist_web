import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "src/styles/flexboxgrid.min.css";
import 'src/styles/index.css';
import 'src/styles/main.less';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
