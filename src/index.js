import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Suresh from './class_compoment/f/class1';
import Bhagavan from "./function_component/func1";
import { Assignment3 } from './class_compoment/f/tasks/assign3';
import Assignment1 from './class_compoment/f/tasks/assign1';
import Assignment5 from './class_compoment/f/tasks/assign5';
import "./class_compoment/f/tasks/assign5.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap/Button"
import ClassComponent from './class_compoment/f/states/classmain';
import Classproperties from './class_compoment/f/props/classprops';
import Functionprops from './function_component/props/funcprops';
import ClassMain from './class_compoment/f/states/classmain';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ClassMain/>
  </div>
);