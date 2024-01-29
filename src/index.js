import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
} from "./Components/Images/Images";
import { AddToCartProvider } from "./Components/Context/AddToCartProvider";
import { AuthContextProvider } from "./Components/Context/AuthContext";

const productNames = [
  {
    id: 1,
    name: "Lumos",
    style: "Lumos - Illuminated",
    image: Image1,
    price: 67.0,
    quantity: 1,
  },
  {
    id: 2,
    name: "Quantix",
    style: "Quantix - Quantum",
    image: Image2,
    price: 78.0,
    quantity: 1,
  },
  {
    id: 3,
    name: "Vortex",
    style: "Vortex - Dynamic",
    image: Image3,
    price: 79.0,
    quantity: 1,
  },
  {
    id: 4,
    name: "Zenith",
    style: "Zenith - Elevated",
    image: Image4,
    price: 80.0,
    quantity: 1,
  },
  {
    id: 5,
    name: "Astra",
    style: "Astra - Celestial",
    image: Image5,
    price: 129.0,
    quantity: 1,
  },
  {
    id: 6,
    name: "Onyx",
    style: "Onyx - Sleek",
    image: Image6,
    price: 142.0,
    quantity: 1,
  },
  {
    id: 7,
    name: "Nexa",
    style: "Nexa - Futuristic",
    image: Image7,
    price: 170.0,
    quantity: 1,
  },
  {
    id: 8,
    name: "Pulse",
    style: "Pulse - Energetic",
    image: Image8,
    price: 174.0,
    quantity: 1,
  },
  {
    id: 9,
    name: "Vivid",
    style: "Vivid - Vibrant",
    image: Image9,
    price: 240.0,
    quantity: 1,
  },
  {
    id: 10,
    name: "Spectra",
    style: "Spectra - Chromatic",
    image: Image10,
    price: 250.0,
    quantity: 1,
  },
  {
    id: 11,
    name: "Eclipse",
    style: "Eclipse - Mysterious",
    image: Image11,
    price: 250.0,
    quantity: 1,
  },
  {
    id: 12,
    name: "Solis",
    style: "Solis - Radiant",
    image: Image12,
    price: 674.0,
    quantity: 1,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <AddToCartProvider>
      <App productNames={productNames} />
    </AddToCartProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
