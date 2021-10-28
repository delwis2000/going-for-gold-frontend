import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    jeopardyDarkBlue: '#0409ab',
    jeopardyBlue: '#060CE9',
    jeopardyYellow: '#ebc800'
  },
  fonts: {
    sansSerif: "'Yantramanav', sans-serif",
    serif: "'Libre Baskerville', serif",
    handwriting: "'Caveat', cursive"
  }
};

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
