import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBYJgTHkTerAABkyFwtywe8pzrTEk6UEK4",
  authDomain: "blueberry-b8964.firebaseapp.com",
  projectId: "blueberry-b8964",
  storageBucket: "blueberry-b8964.appspot.com",
  messagingSenderId: "102128952318",
  appId: "1:102128952318:web:b00b09ad908f69b31dd6af"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
