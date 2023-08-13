import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/Button";
import LoginForm from './LoginForm';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './function_component/routess/RoutesApp';
import UseState from './hooks_practice/UseState';
import Suresh from './hooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suresh/>
);