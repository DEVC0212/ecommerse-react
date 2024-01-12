import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12} from './Components/Images/Images';

const productNames = [
  {
    name: 'Burnikk',
    style: 'Sexbomb',
    image: Image1
  },
  {
    name: 'Kibal Batal',
    style: 'Kibal Black',
    image: Image2
  },
  {
    name: 'Very Nice',
    style: 'Salt Maalat',
    image: Image3
  },
  {
    name: 'Buldit',
    style: 'Salt Maalat',
    image: Image4
  },
  {
    name: 'Balakubak',
    style: 'Betsin Maalat',
    image: Image5
  },
  {
    name: 'Tiktilaok Manok',
    style: 'Sexbomb',
    image: Image6
  },
  {
    name: 'Burnikk',
    style: 'Sexbomb',
    image: Image7
  },
  {
    name: 'Kibal Batal',
    style: 'Kibal Black',
    image: Image8
  },
  {
    name: 'Very Nice',
    style: 'Salt Maalat',
    image: Image9
  },
  {
    name: 'Kulangot',
    style: 'Salt',
    image: Image10
  },
  {
    name: 'Sipon Malapot',
    style: 'Salt',
    image: Image11
  },
  {
    name: 'Pitaklan',
    style: 'Black Kibal',
    image: Image12
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App productNames={productNames}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
