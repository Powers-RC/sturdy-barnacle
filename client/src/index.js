import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './static/index.css';
import './static/css/general.css';
import './static/css/responsiveLayout.css';
import FrameWork from './js/FrameWork';
import {BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <FrameWork />
  </Router>,

document.getElementById('root'));

