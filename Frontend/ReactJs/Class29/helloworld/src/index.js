import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Detail = () => {
  return (
    <ul>
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
        <li>Detail 4</li>
      </ul>
  )
}

const Heading = (props) => {
  return (
    <h1>YooHoo React! - {props.name} {props.surname}</h1>
  )
}

const Home = () => {
  return (
    <div>
      <Heading name="Payal" surname="Butala"/>
      <Heading name="Gyanendra" />
      <Heading name="Pathak" />
      <p>This is detail section</p>
      <Detail />
      <button>Confirm</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
