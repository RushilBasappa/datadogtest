import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'ba696480-c3fc-488a-a5c0-f784d4e17011',
    clientToken: 'pub151be850b7946d13663e3bc0e52bb0a2',
    site: 'datadoghq.com',
    service:'datadogtest',
    version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel: 'mask-user-input'
});
// datadogRum.startSessionReplayRecording();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
